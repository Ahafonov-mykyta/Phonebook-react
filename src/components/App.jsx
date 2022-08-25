import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { deleteContact } from '../store/Reducer';

export default function App() {
  const contacts = useSelector(state => state.reducer);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(deleteContact(id));
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
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter handleChange={handleChange} value={filter} onFilter={onFilter} />

      <ContactList filter={filter} onDelete={onDelete} />
    </div>
  );
}
