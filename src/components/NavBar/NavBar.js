import Cart from '../Cart/Cart';

import styles from './NavBar.module.css';

function NavBar(){

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>FoodApp</div>
            <Cart />
        </div>
    );
}

export default NavBar;