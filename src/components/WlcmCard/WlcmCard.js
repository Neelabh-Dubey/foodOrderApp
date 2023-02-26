import styles from './WlcmCard.module.css';


function WlcmCard(){
    return (
        <div className={styles.wlcmCard}>
            <h3>Welcome to FoodApp</h3>
            <p>We deliver fresh meals to your doorstep. <br/> Fast deliver and even that too
            no delivery charges. <br/>Flat 40% Off!! Order Now!!! </p>
        </div>
    );
}

export default WlcmCard;