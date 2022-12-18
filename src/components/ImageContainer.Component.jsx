import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {frameMaterialList, coverMaterialList} from "../data";
import SelectButton from "../UI/SelectButton";

const ImageRoom = styled.img`
  border-radius: 5px;
  width: 500px;
`
const Image = styled.img`
  width: 500px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  transition: 0.5s ease all;
  opacity: ${props => props.show ? 1 : 0};
`
const LeftSelectCol = styled.div`
  width: 30px;
  height: 30px;
  z-index: 200;
  position: absolute;
  top: ${props => props.show ? '80px' : '20px'};
  left: 30px;
  transition: 0.5s ease all;
  opacity: ${props => props.show ? 1 : 0};
`
const RightSelectCol = styled.div`
  width: 30px;
  height: 30px;
  z-index: 200;
  position: absolute;
  top: ${props => props.show ? '80px' : '20px'};
  right: 30px;
  transition: 0.5s ease all;
  opacity: ${props => props.show ? 1 : 0};
`

function getDefaultObject (frame, cover) {
    const f = frame[0]
    const c = cover[0]
    return {frame: f, cover: c}
}

const ImageContainerComponent = () => {
    const [selectedObject, setSelectedObject] = useState(getDefaultObject(frameMaterialList, coverMaterialList))
    const [frameImage, setFrameImage] = useState('')
    const [showFrame, setShowFrame] = useState(true)
    const [showCover, setShowCover] = useState(true)
    const [showSelectButtons, setShowSelectButtons] = useState(false)

    function setObj (type, name, list) {
        const fr = list.find(el => el.name === name)
        if (type === 'left'){
        setShowFrame(false)

        new Promise(resolve => {
            setTimeout(()=>resolve(), 300)
        }).then(()=>{
            setSelectedObject(prevState => {
                prevState = {...prevState, frame: fr}
                return prevState})
                }
            ).then(()=>{
            setShowFrame(true)
        })} else {
            setShowCover(false)
            new Promise(resolve => {
                setTimeout(()=>resolve(), 300)
            }).then(()=>{
                    setSelectedObject(prevState => {
                        prevState = {...prevState, cover: fr}
                        return prevState})
                }
            ).then(()=>{
                setShowCover(true)
        })
    }}


    useEffect(() => {
        setTimeout(() => {
            setShowSelectButtons(true)
        }, 300)
    })

    return (
        <div style={{position: 'relative'}}>
            <ImageRoom src={'/images/room.png'}/>
            <Image show={showFrame} src={selectedObject.frame.imageURL}/>
            <Image show={showCover} src={selectedObject.cover.imageURL}/>
            <LeftSelectCol show={showSelectButtons}>
                {
                    frameMaterialList.map((el) => {
                        return (
                            <div  onClick={() => setObj('left', el.name, frameMaterialList)}>
                                <SelectButton key={el.name} background={el.texture}/>
                            </div>
                        )
                    })
                }
            </LeftSelectCol>
            <RightSelectCol show={showSelectButtons}>
                {
                    coverMaterialList.map((el) => {
                        return (
                            <div onClick={() => setObj('right', el.name, coverMaterialList)}>
                                <SelectButton key={el.name} background={el.texture}/>
                            </div>
                        )
                    })
                }
            </RightSelectCol>
        </div>
    );
};

export default ImageContainerComponent;