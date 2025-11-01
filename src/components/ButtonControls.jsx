import ProcessButtons from "./ProcessButtons";
import PlaybackButtons from "./PlaybackButtons";

function ButtonControls({ onPlay, onStop }) {
  return (
      <>
          <div className="box">
              <h3>Playback Controls</h3>
              <nav>
                  <ProcessButtons />
                  <br />
                  <PlaybackButtons onPlay={onPlay} onStop={onStop} />
              </nav>
          </div>
      </>
  );
}

export default ButtonControls;