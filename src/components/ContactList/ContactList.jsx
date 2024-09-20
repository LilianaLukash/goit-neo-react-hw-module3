import styles from './ContactList.module.css'
import Contact from '../Contact/Contact'
export default function ContactList({ contacts, onDeleteContact }) {
    return (
        <div>
                    <ul className={styles.list}>
            {contacts.map(contact => (
                <Contact
                key={contact.id}
                contact={contact}
                onDeleteContact={onDeleteContact}
                />
            ))}
            </ul>
        </div>
    )
}