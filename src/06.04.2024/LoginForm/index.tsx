import { ChangeEvent, useEffect, useState } from "react";

// utworzenie typu propsów dla komponentu
type Props = {
  initPass: string;
  initLogin: string;
};

// odczytanie propsów przekazanych do komponentu
export const LoginForm = ({ initPass, initLogin }: Props) => {
  // utworzenie stanu dla komponentu składającego się z login i hasła
  const [login, setLogin] = useState(initLogin);
  const [password, setPassword] = useState(initPass);

  const handleLogin = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // useEffect powitalny - odpala się tylko raz (odpowiednik componentDidMount)
  // posiada pustą tablice zależności jako drugi parametr
  useEffect(() => {
    console.log("zamontowanie komponentu LoginForm");

    // useEffect uruchamiany kiedy komponent zostanie odmontowany (odpowiednik componentWillUnmount)
    return () => {
      console.log("odmontowanie komponentu LoginForm");
    };
  }, []);

  // useEffect uruchamiany kiedy login sie zmieni (odpowiednik componentDidUpdate)
  useEffect(() => {
    console.log(`stan login został zmieniony na: ${login}`);
  }, [login]);

  // useEffect uruchamiany kiedy password sie zmieni (odpowiednik componentDidUpdate)
  useEffect(() => {
    console.log(`stan password został zmieniony na: ${password}`);
  }, [password]);

  return (
    <form>
      <label htmlFor="login">
        Login:{" "}
        <input type="text" id="login" value={login} onChange={handleLogin} />
      </label>
      <label htmlFor="password">
        Hasło:{" "}
        <input
          type="text"
          id="password"
          value={password}
          onChange={handlePassword}
        />
      </label>
      <button type="submit">Wyślij</button>
    </form>
  );
};
