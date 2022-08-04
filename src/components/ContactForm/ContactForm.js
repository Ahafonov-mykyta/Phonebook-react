import React from "react";
import { nanoid } from 'nanoid';


export default class ContactForm extends React.Component {
      
   
      state = {
        number: '',
        name: '',
        };
    
        handleChange = event => {
            this.setState({
              [event.currentTarget.name]: event.currentTarget.value,
            });
          
          };

    handleSubmit = event => {
        event.preventDefault();
        const contact = { id: nanoid(), name: this.state.name, number: this.state.number }
        this.props.addToContacts (contact)

        this.setState({
            name: '',
            number: '',
        });


      };

      

    render(){
        return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
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
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <button className="btn-add" type="submit">Add contact</button>
        </form>)
    }

}