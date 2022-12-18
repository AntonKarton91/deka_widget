import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const Title = styled.h1`
  position: absolute;
  font-size: 1.5rem;
  opacity: ${props => props.show ? 1 : 0};
  left: ${props => props.show ? '10px' : '-30px'};
  transition: 1s ease all;
`
const Band = styled.div`
  width: 100%;
  height: 30px;
  background-color: #466679;
`

const HeaderComponent = () => {
    const [titleIsShown, setTitleIsShown] = useState(false)

    useEffect(() => {
        setTitleIsShown(true)
    })

    return (
        <div style={{width: '100%'}}>
            <div style={{width: '100%', height: '30px'}}>
                <Title show={titleIsShown}>Logotipe</Title>
            </div>
            <Band></Band>
        </div>
    );
};

export default HeaderComponent;