

export default function ContactListItem({contact, onDelete}){

       return <li >
        <p > {contact.name} : {contact.number} </p>< button className="btn-delete" type="button" onClick={()=>{onDelete(contact.id)}}>Delete</button>
        </li>
     
}