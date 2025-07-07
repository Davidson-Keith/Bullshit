import { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./App.css";

const base = import.meta.env.BASE_URL;
const audioFiles = [
  `${base}audio/audio1.m4a`,
  `${base}audio/audio2.m4a`,
  `${base}audio/audio3.m4a`,
  `${base}audio/audio4.m4a`,
  `${base}audio/audio5.m4a`,
  `${base}audio/audio6.m4a`,
  `${base}audio/audio7.m4a`,
  `${base}audio/audio8.m4a`,
  `${base}audio/audio9.m4a`,
  `${base}audio/audio10.m4a`,
];

function App() {
  const lastIndexRef = useRef(null);
  const shuffledOrderRef = useRef(null);
  const boxRef = useRef();

  useEffect(() => {
    function setHeight() {
      if (boxRef.current) {
        boxRef.current.style.height = window.innerHeight + "px";
      }
    }
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  const playRandomAudio = (e) => {
    // Generate a new shuffled order if we don't have one or if we've played all files
    if (
      shuffledOrderRef.current === null ||
      lastIndexRef.current >= audioFiles.length - 1
    ) {
      // Create a shuffled array of indices using the Fisher-Yates shuffle algorithm.
      const indices = Array.from({ length: audioFiles.length }, (_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]]; // Swap the elements at indices i and j.
      }
      shuffledOrderRef.current = indices;
      lastIndexRef.current = -1; // Reset to start of new order
    }

    // Get next index in the shuffled order
    lastIndexRef.current += 1;
    const currentIndex = shuffledOrderRef.current[lastIndexRef.current];

    const audio = new Audio(audioFiles[currentIndex]);
    console.log("Audio index = ", currentIndex);
    audio.play();
    if (e && e.target) {
      e.target.blur();
    }
  };

  return (
    <Box
      ref={boxRef}
      sx={{
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
        BULLSHIT
      </Button>
    </Box>
  );
}

export default App;
