import OnHushButtons from "./OnHushButtons";

function DJControls({ toggleHush }) {
  return (
      <>
          <div className="box">
              <h3>DJ Controls</h3>
              <OnHushButtons toggleHush={toggleHush} />
          </div>
      </>
  );
}

export default DJControls;