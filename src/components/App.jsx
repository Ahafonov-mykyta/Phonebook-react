import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export default class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      const stringifyContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifyContacts);
    }
  }

  componentDidMount() {
    const LocalContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(LocalContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  onDelete = id => {
    const newArray = this.state.contacts.filter(p => p.id !== id);
    this.setState(prevState => ({
      contacts: [...newArray],
    }));
  };

  addToContacts = contact => {
    if (
      this.state.contacts.find(
        c => c.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  onFilter = () => {
    if (this.state.filter === '') {
      return;
    }

    return this.state.contacts.map(contact => {
      if (
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      ) {
        return (
          <li>
            <p key={contact.id}>
              {contact.name} : {contact.number}
            </p>
            <button
              className="btn-delete"
              type="button"
              onClick={() => {
                this.onDelete(contact.id);
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

  render() {
    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm addToContacts={this.addToContacts} />
        <h2 className="title">Contacts</h2>
        <Filter
          handleChange={this.handleChange}
          value={this.state.filter}
          onFilter={this.onFilter}
        />

        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}
