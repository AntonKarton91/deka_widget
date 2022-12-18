import React from 'react';
import styled from "styled-components";
import {Paper} from "@mui/material";
import ImageContainerComponent from "./ImageContainer.Component";
import TextContainerComponent from "./TextContainer.Component";


const Container = styled.div`
  width: 1000px;
  height: 300px;
  margin: 20px auto;
  background-color: antiquewhite;
`
const BodyComponent = () => {
    return (
        <Paper style={{width: '1000px', height: '500px',
                        margin: '20px auto', display: 'flex',
                        justifyContent: 'space-around', alignItems: 'center'}}>
            <ImageContainerComponent/>
            <TextContainerComponent/>
            
        </Paper>
    );
};

export default BodyComponent;