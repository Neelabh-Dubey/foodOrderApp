import styles from './Button.module.css';

function Button(props){
    return (
        <button className={styles.btn} onClick={props.onClickHandler}>
            {props.children}
        </button>
    );
}

export default Button;