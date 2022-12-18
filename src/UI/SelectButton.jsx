import React from 'react';
import styled from "styled-components";

const IMG = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`

const SelectButton = ({background}) => {
    return (
        <div >
            <img className='select-button' src={background} alt=""

            />
        </div>
    );
};

export default SelectButton;