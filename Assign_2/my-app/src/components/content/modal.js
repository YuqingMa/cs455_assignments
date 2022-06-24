import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";

import { useSelector } from 'react-redux';
import { Modal } from "antd";

import { useDispatch } from 'react-redux';


export default function PopUp(props) {
    
    function handleClick(e){
        props.setModal(false);
    }
    return(
        
        <div className={ props.isModal ==true? '' : 'hidden' }>
                <p>{props.item.dishName}</p>
                <p>{props.item.disc}</p>
                <p>{props.item.instruction}</p>
                <button onClick={handleClick}>Close</button>
             </div>
             )
}