
import React from "react";
import MusicPlayer from "./MusicPlayer";
// import NavBar from "./NavBar";
import { useMusicContext } from "./MusicContext";

function Explore() {
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
        Explore
      </h1>
      <MusicPlayer useMusicContext={useMusicContext} />
    </div>

  );
}
export default Explore;

