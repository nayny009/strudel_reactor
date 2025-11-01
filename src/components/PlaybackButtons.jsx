function PlaybackButtons({ onPlay, onStop }) {
  return (
      <>
          <button id="play" className="btn btn-green" onClick={onPlay}>Play</button>
          <button id="stop" className="btn btn-green" onClick={onStop}>Stop</button>
      </>
  );
}

export default PlaybackButtons;