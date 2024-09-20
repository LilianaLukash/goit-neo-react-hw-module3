import styles from './Contact.module.css';
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

export default function Contact({ contact, onDeleteContact }) {
    return (
        <li className={styles.item}>
            <div> <IoPersonSharp />  {contact.name}</div>
           <div> <FaPhone /> {contact.number} </div>
            <button className={styles.button} onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
    )
}