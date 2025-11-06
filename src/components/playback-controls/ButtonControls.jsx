import ProcessButtons from "./ProcessButtons";
import PlaybackButtons from "./PlaybackButtons";
import SaveLoadButtons from "./SaveLoadButtons";
import VolumeSlider from "./VolumeSlider";
import CpmInput from "./CpmInput";

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
                  <CpmInput cpm={cpm} setCpm={setCpm} />
              </div>
              <div>
                  <VolumeSlider volume={volume} setVolume={setVolume} />
              </div>
              <div className="saveload-buttons">
                  <SaveLoadButtons />
              </div>
          </div>
      </>
  );
}

export default ButtonControls;