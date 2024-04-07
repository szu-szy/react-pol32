import { ChangeEvent, FormEvent, useEffect, useState } from "react";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
};

// Omit - na bazie typu User kopiuje nam dane z pominięciem wlasciwosci "id"
type UserForm = Omit<User, "id">;

export const ProfileList = () => {
  const [formState, setFormState] = useState<UserForm>({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    phone: "",
  });
  const [users, setUsers] = useState<User[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const { users } = await res.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  const postData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const user = await res.json();
      alert(`pomyslnie utworzono uzytkownika ${user.firstName}`);
      setUsers((prev) => [...prev, user]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postData();
  };

  useEffect(() => {
    // funkcja fetchData pobiera nam dane na początku przy pierwszym renderze komponentu
    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista uzytkowników</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          Imie:{" "}
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formState.firstName}
            onChange={handleValue}
          />
        </label>
        <button type="submit">Dodaj</button>
      </form>
      {users.length > 0 && (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.firstName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
