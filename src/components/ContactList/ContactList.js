import ContactListItem from "./Contact";
import { useSelector } from "react-redux";

export default function ContactList ( {filter, onDelete}){

    const contacts = useSelector(state => state.reducer);
    
    if(filter !== ''){
        return;
    }

    return (
        
        <ul className="contacts-list">
            {contacts.map(contact =>   <ContactListItem key={contact.id} contact={contact} onDelete={onDelete}/> )}
        </ul>
       
    )    
}