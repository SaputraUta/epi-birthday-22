import React, { useRef, useState } from 'react';
import { FaVolumeUp, FaVolumeMute, FaPlay } from 'react-icons/fa';
import music from '../images/music.mp3';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="absolute right-5 top-2">
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {!isPlaying && (
        <button onClick={playAudio} className="p-2 bg-gray-800 text-white rounded-full">
          <FaPlay size={25} />
        </button>
      )}
      {isPlaying && (
        <button onClick={toggleMute} className="p-2 bg-gray-800 text-white rounded-full">
          {isMuted ? <FaVolumeMute size={25} /> : <FaVolumeUp size={25} />}
        </button>
      )}
    </div>
  );
}

export default AudioPlayer;
