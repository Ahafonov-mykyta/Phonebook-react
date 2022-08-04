import ContactListItem from "./Contact";

export default function ContactList ({contacts, filter, onDelete}){

    if(filter !== ''){
        return;
    }

    return (
        
        <ul className="contacts-list">
            {contacts.map(contact =>   <ContactListItem key={contact.id} contact={contact} onDelete={onDelete}/> )}
        </ul>
       
    )    
}