import InstrumentSounds from "./InstrumentSounds";
import OnHushButtons from "./OnHushButtons";

function DJControls({ ProcAndPlay }) {
  return (
      <>
          <div className="box">
              <h3>DJ Controls</h3>
              <OnHushButtons ProcAndPlay={ProcAndPlay} />
              <InstrumentSounds />
          </div>
      </>
  );
}

export default DJControls;