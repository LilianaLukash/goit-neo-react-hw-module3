import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'


import './App.css'

let initialContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]


function App() {  
  
    const [contacts, setContacts] = useState(() => {
      return JSON.parse(localStorage.getItem('contacts')) || initialContacts;
    });
    const [filter, setFilter] = useState('');

    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = contact => {
      if (contacts.some(c => c.name === contact.name)) {
        alert(`${contact.name} вже є у контактах`);
        return;
      }
      setContacts(prevContacts => [contact, ...prevContacts]);
    };

    const deleteContact = id => {
      setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

    return (
       <div className={"container"}>
      <h2>Phonebook</h2>
      <ContactForm onAddContact={addContact} />
      <SearchBox filter={filter} onFilterChange={setFilter} />
      <ContactList contacts={getFilteredContacts()} onDeleteContact={deleteContact} />
    </div>
    )
}

export default App
