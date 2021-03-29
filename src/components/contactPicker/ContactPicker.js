import React from "react";

export const ContactPicker = ({ contacts, setContact }) => {
  return (
    <select onChange={(e) => setContact(e.target.value)}>
      <option default={true}>Select</option>
      {contacts.map((contact, index) => (
        <option key={index}>{contact.name}</option>
      ))}
    </select>
  );
};
