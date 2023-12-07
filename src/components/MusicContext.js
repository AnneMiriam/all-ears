import { collapseClasses } from '@mui/material';
import React, { createContext, useContext, useEffect, useState } from 'react';
// import frozen from "../music/LetItGo.mp3"
// import phil from "../music/In-the-Air-Tonight.mp3";
// import untold from "../music/Untold-Stories.mp3"

const MusicContext = createContext();

const useMusicContext = () => {
  return useContext(MusicContext);
};


const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState([])
  const [currentSongIndex, setCurrentSongIndex] = useState([]);
  const API = "http://localhost:3001/songs"
  console.log(API)
  useEffect(() => { 
    fetch(API)
    
    .then(r=>r.json())
    .then(console.log())
    // .then((data) => {
    //   console.log(data[songs]) // Check if the data is logged here
    //   setSongs(data[songs])
    // })
    // console.log(songs)
  }, [])

  console.log(songs)

  const playPauseHandler = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const nextSongHandler = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const prevSongHandler = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  const value = {
    currentSongIndex,
    isPlaying,
    playPauseHandler,
    nextSongHandler,
    prevSongHandler,
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
};

export { useMusicContext, MusicProvider }