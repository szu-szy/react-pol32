import { ChangeEvent, useState } from "react";

export const Paragraph = () => {
  const [text, setText] = useState("Tekst powitalny");

  const updateText = () => setText("nowy powitalny tekst");

  const handleText = (event: ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  return (
    <div>
      <h2>Paragraph</h2>
      <p>{text}</p>
      <button onClick={updateText}>Aktualizacja tekstu</button>
      <input type="text" value={text} onChange={handleText} />
    </div>
  );
};
