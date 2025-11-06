import ProcessButtons from "./ProcessButtons";
import PlaybackButtons from "./PlaybackButtons";
import SaveLoadButtons from "./SaveLoadButtons";

function ButtonControls({ onPlay, onStop, cpm, setCpm, volume, setVolume }) {
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
              <div>
                  <div className="input-group mb-3">
                      <span className="input-group-text" id="cpm_label">Set CPM</span>
                      <input type="text" className="form-control" id="cpm_text_input" placeholder="30" onChange={(e) => setCpm(e.target.value)} />
                  </div>
                  <div className="volume-slider mb-3">
                      <label htmlFor="volume-range" className="form-label">Volume: {Math.round(volume * 100)}%</label>
                      <input type="range" className="form-range" min="0" max="1" step="0.01" id="volume_range" onChange={(e) => setVolume(Number(e.target.value))} />
                  </div>
              </div>
              <div className="saveload-buttons">
                  <SaveLoadButtons />
              </div>
          </div>
      </>
  );
}

export default ButtonControls;