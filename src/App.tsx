import { Component, useEffect, useState } from "react";
import "./App.scss";

import Block from "./components/Block/Block";
import Parent from "./components/Parent/Parent";
import { Counter } from "./06.04.2024/Counter";
import { Timer } from "./06.04.2024/Timer";
import { Headline } from "./06.04.2024/Headline";
import { FunctionCounter } from "./06.04.2024/FunctionCounter";
import { Paragraph } from "./06.04.2024/Paragraph";
import { FunctionTimer } from "./06.04.2024/FunctionTimer";
import { LoginForm } from "./06.04.2024/LoginForm";
import { ElementList } from "./06.04.2024/ElementList";
import { Fruits } from "./06.04.2024/Fruits";
import { ProfileForm } from "./06.04.2024/ProfileForm";
import { ProfileList } from "./06.04.2024/ProfileList";
import { Header } from "./20.04.2024/Header/Header";
import { InputForm } from "./20.04.2024/InputForm/InputForm";
import { Post, PostList } from "./revision/PostList/PostList";
import { PostForm } from "./revision/PostForm/PostForm";

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
      {/* Potwórzenie - zadania */}
      <PostList list={postList} />
      <PostForm addPost={addPost} />
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
