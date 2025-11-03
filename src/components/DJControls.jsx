function DJControls({ ProcAndPlay }) {
  return (
      <>
          <div className="box">
              <h3>DJ Controls</h3>
              <div className="dj-buttons mb-4">
                    <input className="btn-check" type="radio" name="options" id="p1-on" autoComplete="off" onChange={ProcAndPlay} defaultChecked/>
                    <label className="btn btn-green" htmlFor="p1-on">ON</label>
                    <input className="btn-check" type="radio" name="options" id="p2-hush" autoComplete="off" onChange={ProcAndPlay} />
                    <label className="btn btn-green" htmlFor="p2-hush">HUSH</label>
              </div>
              <div className="input-group mb-3">
                    <span className="input-group-text" id="cpm_label">Set CPM</span>
                    <input type="text" className="form-control" id="cpm_text_input" placeholder="120"/>
              </div>
              <div className="volume-slider mb-3">
                  <label for="volume-range" className="form-label">Volume</label>
                  <input type="range" className="form-range" min="0" max="1" step="0.01" id="volume_range" />
              </div>
          </div>
      </>
  );
}

export default DJControls;