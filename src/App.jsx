import "./App.css";

const audioFiles = [
  "/audio/audio1.m4a",
  "/audio/audio2.m4a",
  "/audio/audio3.m4a",
  "/audio/audio4.m4a",
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
