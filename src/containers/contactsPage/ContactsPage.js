import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const reset = () => {
    setName("");
    setPhoneNumber("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      addContact(name, phoneNumber, email);
      reset();
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  const isDuplicate =
    contacts.filter((contact) => contact.name === name).length !== 0;

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phoneNumber}
          setPhone={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={contacts} />
      </section>
    </div>
  );
};
