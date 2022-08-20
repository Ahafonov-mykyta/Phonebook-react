import {useState} from "react";
import { nanoid } from 'nanoid';


export default function ContactForm ({addToContacts}) {
     const [number, setNumber] = useState('');
     const [name, setName] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const contact = { id: nanoid(), name: name, number: number }
        addToContacts(contact)

        setNumber('')
        setName('')
      };
      
      const handleChange = event => {
       const {name, value} = event.target;

       switch (name){
        case 'name':
        setName(value);
        break

        case 'number':
        setNumber(value);
        break

        default:
          return;
       }
      
      };
      
        return (
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <br />
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label >
            Number
            <br />
            <input
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <button className="btn-add" type="submit">Add contact</button>
        </form>)
    }

