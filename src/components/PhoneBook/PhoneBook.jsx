import { useState, useEffect } from 'react';
import shortid from 'shortid';

import {ContactList} from 'components/ContactList/ContactList';
import {Form} from 'components/Form/Form';
import {Filter} from 'components/Filter/Filter';

import css from './PhoneBook.module.css';


export const PhoneBook = () => {
  const [contacts, setContacts] = useState(() => {
    return localStorage.getItem("contacts")
      ? JSON.parse(localStorage.getItem("contacts"))
      : [
    { id: "id-111", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-211", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-311", name: "Eden Clements", number: "645-17-79" },
    { id: "id-411", name: "Annie Copeland", number: "227-91-26" },
  ];
  
});
 
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts]);

  const formSubmitHandler = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (contacts.find((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts([newContact, ...contacts]);
  };
  
  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };
 
  const deleteContact = (contactId) => {
    setContacts(
      contacts.filter((contact) => contact.id !== contactId));
  };

  const getVisibleContacts = () => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };
  
  const visibleContacts = getVisibleContacts();
 
    return (
      <div className={css.wrapper}>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <Form onSubmit={formSubmitHandler} />
        <h2 className={css.title}>Contacts</h2>
        <Filter value={filter} onChangeFilter={changeFilter} />
        <ContactList
          vizibleContacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
}