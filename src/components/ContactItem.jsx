import styles from '../styles/contactItem.module.css';

const ContactItem = ( {data: {id, name, lastName, phone, email }, deleteHandler }) => {
   
    return (
        <li className={styles.item}>
                    <p>{name} {lastName}</p>
                    <p><span>📧</span>{email}</p>
                    <p><span>📞</span>{phone}</p>
                    <button onClick={ () => deleteHandler(id)}>🗑</button>
                </li>
    );
};

export default ContactItem;