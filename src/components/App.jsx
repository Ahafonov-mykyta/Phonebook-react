import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const LocalContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(LocalContacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    const stringifyContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifyContacts);
  }, [contacts]);

  const onDelete = id => {
    const newArray = contacts.filter(p => p.id !== id);
    setContacts([...newArray]);
  };

  const addToContacts = contact => {
    if (
      contacts.find(c => c.name.toLowerCase() === contact.name.toLowerCase())
    ) {
      return alert(`${contact.name} is already in contacts`);
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const handleChange = event => {
    setFilter(event.currentTarget.value);
  };

  const onFilter = () => {
    if (filter === '') {
      return;
    }

    return contacts.map(contact => {
      if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
        return (
          <li>
            <p key={contact.id}>
              {contact.name} : {contact.number}
            </p>
            <button
              className="btn-delete"
              type="button"
              onClick={() => {
                onDelete(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      }
      return null;
    });
  };

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm addToContacts={addToContacts} />
      <h2 className="title">Contacts</h2>
      <Filter handleChange={handleChange} value={filter} onFilter={onFilter} />

      <ContactList contacts={contacts} filter={filter} onDelete={onDelete} />
    </div>
  );
}
