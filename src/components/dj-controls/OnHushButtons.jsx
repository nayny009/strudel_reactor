function OnHushButtons({ ProcAndPlay }) {
  return (
      <div className="dj-buttons mb-4">
          <input className="btn-check" type="radio" name="options" id="p1-on" autoComplete="off" onChange={ProcAndPlay} defaultChecked />
          <label className="btn btn-green" htmlFor="p1-on">ON</label>
          <input className="btn-check" type="radio" name="options" id="p2-hush" autoComplete="off" onChange={ProcAndPlay} />
          <label className="btn btn-green" htmlFor="p2-hush">HUSH</label>
      </div>
  );
}

export default OnHushButtons;