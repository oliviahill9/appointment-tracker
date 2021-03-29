import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  title,
  setTitle,
  contacts,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="text"
        value={date}
        min={getTodayString()}
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <input
        type="text"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      ></input>
      <ContactPicker setContact={setContact} contacts={contacts} />
      <button type="submit">Submit</button>
    </form>
  );
};
