import { ChangeEvent, FormEvent, useState } from "react";

export const UserForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
  });

  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formState.firstName.length > 0) console.log("jest okej");
    else console.log("za krótki tekst!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        Imie:
        <input
          type="text"
          name="firstName"
          value={formState.firstName}
          onChange={handleValue}
        />
      </label>
      <label htmlFor="lastName">
        Nazwisko:
        <input
          type="text"
          name="lastName"
          value={formState.lastName}
          onChange={handleValue}
        />
      </label>
      <button type="submit">Wyślij</button>
    </form>
  );
};
