import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
          <h1>Contact App</h1>
          <p>Phone number | Email</p>
        </div>
    );
};

export default Header;