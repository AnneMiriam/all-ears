import React from "react";
// import NavBar from "./NavBar";
import { useMusicContext } from "./MusicContext";
import MusicPlayer from "./MusicPlayer";

function YourLibrary() {
  // const {
  //   currentSongIndex,
  //   isPlaying,
  //   playPauseHandler,
  //   nextSongHandler,
  //   prevSongHandler,
  // } = useMusicContext();

  return (

    <div>
      <h1>
        Your Library
      </h1>
      <MusicPlayer useMusicContext={useMusicContext} />
    </div>

  );
}

export default YourLibrary;

