import ContactItem from "./ContactItem";
import styles from '../styles/contactList.module.css';
// eslint-disable-next-line react/prop-types
const ContactsList = ({contacts, deleteHandler}) => {
    
    return ( 
        <div className={styles.container}>
            <h3>Contact List</h3>

            {contacts.length ? (<ul className={styles.contacts}>
                {contacts.map((contact) => (
                  <ContactItem 
                  key={contact.id} 
                  data={contact} 
                  deleteHandler={deleteHandler}/>
                
                ))}
            </ul>): <p className={styles.message}>No contacts Yet!</p>}
            
            
        </div>
    );
};

export default ContactsList;