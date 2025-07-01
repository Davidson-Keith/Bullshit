import { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./App.css";

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
    <Box
      sx={{
        height: "100dvh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "black",
      }}
    >
      <Button
        variant="contained"
        color="error"
        onClick={playRandomAudio}
        sx={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          fontSize: "3rem",
          boxShadow: 3,
          textTransform: "none",
        }}
      >
        Bullshit
      </Button>
    </Box>
  );
}

export default App;
