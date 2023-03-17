import "./PlayButton.css";
import { useState } from "react";

function PlayButton({ children, onPlay, onPause }) {
  console.log("PlayButton");
  //   let state = false; // don't use this approach
  const [Playing, setPlaying] = useState(false);
  function handleClick(e) {
    e.stopPropagation();
    if (Playing) onPause();
    else onPlay();
    setPlaying(!Playing);
  }
  return (
    <button onClick={handleClick}>
      {children} : {Playing ? "⏸️" : "⏯️"}
    </button>
  );
}

export default PlayButton;
