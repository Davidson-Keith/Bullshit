import "./App.css";

const base = import.meta.env.BASE_URL;
const audioFiles = [
  `${base}audio/audio1.m4a`,
  `${base}audio/audio2.m4a`,
  `${base}audio/audio3.m4a`,
  `${base}audio/audio4.m4a`,
];

function App() {
  const playRandomAudio = () => {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const audio = new Audio(audioFiles[randomIndex]);
    audio.play();
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
