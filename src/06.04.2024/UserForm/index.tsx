import { ChangeEvent, FormEvent, useState } from "react";

export const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstName = (event: ChangeEvent<HTMLInputElement>) =>
    setFirstName(event.target.value);
  const handleLastName = (event: ChangeEvent<HTMLInputElement>) =>
    setLastName(event.target.value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (firstName.length > 0) console.log("jest okej");
    else console.log("za krótki tekst!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        Imie:
        <input type="text" value={firstName} onChange={handleFirstName} />
      </label>
      <label htmlFor="lastName">
        Nazwisko:
        <input type="text" value={lastName} onChange={handleLastName} />
      </label>
      <button type="submit">Wyślij</button>
    </form>
  );
};
