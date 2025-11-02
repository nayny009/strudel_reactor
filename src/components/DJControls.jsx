function DJControls({ ProcAndPlay }) {
  return (
      <>
          <div className="box">
              <h3>DJ Controls</h3>
              <div className="dj-buttons">
              <input className="btn-check" type="radio" name="options" id="p1-on" autoComplete="off" onChange={ProcAndPlay} defaultChecked/>
              <label className="btn btn-green" htmlFor="p1-on">
                  ON
              </label>
              <input className="btn-check" type="radio" name="options" id="p2-hush" autoComplete="off" onChange={ProcAndPlay} />
              <label className="btn btn-green" htmlFor="p2-hush">
                  HUSH
              </label>
              </div>
              
          </div>
      </>
  );
}

export default DJControls;