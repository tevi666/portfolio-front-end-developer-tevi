import React from 'react';
import './Button.css';
import {AiOutlineSend} from 'react-icons/ai';
export const Button = (props) => {
    return (<button className={'btn__getInTouch'}>{props.title} <AiOutlineSend className={'send'}/></button>);
};