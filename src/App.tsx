import { ChangeEvent, Component, useEffect, useState } from "react";
import "./App.scss";

import { Post } from "./revision/PostList/PostList";
import { ElementList } from "./hooks/useCallback/ElementList/ElementList";
import { Form } from "./hooks/useCallback/Form/Form";
import { SearchForm } from "./hooks/customHooks/SearchForm/SearchForm";

const getItem = (text: string) => {};

getItem("text");

type AppState = {
  appWelcomeText: string;
  isCounterVisible: boolean;
  isLoginFormVisible: boolean;
};

const App = () => {
  // updateWelcomeText('nowy tekst welcome')
  const [postList, setPostList] = useState<Post[]>([]);

  const fetchPost = async () => {
    try {
      const res = await fetch("https://dummyjson.com/posts");

      if (!res.ok) throw new Error("Cannot fetch post data");

      const { posts } = await res.json();
      setPostList(posts);
    } catch (e) {
      console.log(e);
    }
  };

  const addPost = (post: Post) => setPostList((prev) => [...prev, post]);

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="App">
      {/* Zadania hooki */}
      <SearchForm />
      <Form />
      <ElementList />
      {/* <Parent /> */}
      {/* <FilteredList /> */}
      {/* <MathOperation /> */}
      {/* <InputRef /> */}
      {/* <TimerRef /> */}
      {/* <Modal /> */}
      {/* <Timer /> */}
      {/* <ColorSection /> */}
      {/* <PostList /> */}
      {/* Potwórzenie - zadania */}
      {/* <PostForm addPost={addPost} /> */}
      {/* -- koniec powtórzenia */}
      {/* <h2>Input Form komponent</h2>
        <InputForm /> */}
      {/* <h1>Jakiś tekst</h1>
        <Header textHeader="duży header">Jakiś tekst</Header> */}
      {/* Wrzucenie do box elementów JSX dzieki propsowi Children - zapis Header.tsx > linia 6 */}
      {/* <Box>
          <span>123</span>
        </Box>
        <Box>
          <h1>123</h1>
        </Box>
        <Box>
          <div>
            <div>

            </div>
          </div>
        </Box> */}
      {/* <Parent /> */}
      {/* App.append(Block) */}
      {/* Komponent Block wymaga propsów określonych w Block.tsx > Props l:12 */}
      {/* I sposób przekazania propsów - pojedynczo przez nazwe właściwowści */}
      {/* <Block
          welcomeText={this.state.appWelcomeText}
          updateText={this.updateWelcomeText}
        /> */}
      {/* II sposób, przekazanie propsów wszystkich na raz przez spread operator */}
      {/* <Block {...blockProps} /> */}
      {/* ZADANIA Z DNIA 06.04.24 */}
      {/* <button onClick={this.toggleCounter}>
          {this.state.isCounterVisible ? "Ukryj" : "Pokaż"} Counter komponent
        </button> */}
      {/* {this.state.isCounterVisible && <Counter />} */}
      {/* <Timer />
        <Headline /> */}
      {/* <Paragraph /> */}
      {/* <FunctionCounter /> */}
      {/* <FunctionTimer initSeconds={0} /> */}

      {/* <h2>Login Form</h2>
        <button onClick={this.toggleLoginForm}>
          {this.state.isLoginFormVisible
            ? "Ukryj formularz"
            : "Pokaż formularz"}
        </button>
        {this.state.isLoginFormVisible && (
          <LoginForm initLogin="typical login" initPass="<PASSWORD>" />
        )} */}
      {/* <Fruits /> */}
      {/* <ProfileForm /> */}
      {/* <ElementList initTab={["element 1", "element 2", "element 3"]} /> */}
      {/* <ProfileList /> */}
    </div>
  );
};

export default App;
