import {useState,useEffect} from 'react'
import List from './List'
import Form from './Form'
import './style.css';
function Contacts() {
    const [contacts,setContacts] = useState([
        {
            fullName: 'Mehmet',
            phone_number : "123123"
        },
        {
            fullName: 'Ayşe',
            phone_number : "654656"
        },
        {
            fullName: 'Nazlı',
            phone_number : "546536"
        },
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id ="container">
            <h1>Contacts</h1>
            <List contacts= {contacts}/>
            <Form addContact ={setContacts} contacts = {contacts}/>
        </div>
    );
}

export default Contacts;
