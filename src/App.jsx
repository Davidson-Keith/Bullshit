import "./App.css";
import { useRef } from "react";

const base = import.meta.env.BASE_URL;
const audioFiles = [
  `${base}audio/audio1.m4a`,
  `${base}audio/audio2.m4a`,
  `${base}audio/audio3.m4a`,
  `${base}audio/audio4.m4a`,
];

function App() {
  const lastIndexRef = useRef(null);

  const playRandomAudio = (e) => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * audioFiles.length);
    } while (randomIndex === lastIndexRef.current && audioFiles.length > 1);
    lastIndexRef.current = randomIndex;
    const audio = new Audio(audioFiles[randomIndex]);
    audio.play();
    // Remove focus from the button after click/tap
    if (e && e.target) {
      e.target.blur();
    }
  };

  return (
    <div className="bullshit-container">
      <button className="bullshit-button" onClick={playRandomAudio}>
        Bullshit
      </button>
    </div>
  );
}

export default App;
