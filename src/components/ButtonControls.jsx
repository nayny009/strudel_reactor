import ProcessButtons from "./ProcessButtons";
import PlaybackButtons from "./PlaybackButtons";

function ButtonControls({ onPlay, onStop }) {
  return (
      <>
          <div className="box">
              <h3>Playback Controls</h3>
              <div className="process-buttons">
                  <ProcessButtons />
              </div>
              <div className="playback-buttons">
                  <PlaybackButtons onPlay={onPlay} onStop={onStop} />
              </div>              
          </div>
      </>
  );
}

export default ButtonControls;