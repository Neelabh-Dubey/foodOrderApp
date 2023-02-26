import {createPortal} from "react-dom";

import styles from "./ModalOverlay.module.css";


function Backdrop(props){
    return (
        <div className={styles.backdrop} onClick={props.onClick}></div>
    ); 
}

function Overlay(props){
    return (
        <div className={styles.overlay}>{props.children}</div>
    );
}



function ModalOverlay(props){
    return (
        <>
            {createPortal(<Backdrop onClick={props.onClick}/>, document.getElementById('backdrop'))}
            {createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlay'))}
        </>

    );
}

export default ModalOverlay;