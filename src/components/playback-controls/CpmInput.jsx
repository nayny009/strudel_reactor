function CpmInput({ cpm, setCpm }) {
  return (
      <div className="input-group mb-3">
          <span className="input-group-text" id="cpm_label">Set CPM</span>
          <input type="text" className="form-control" id="cpm_text_input" placeholder="30" value={cpm} onChange={(e) => setCpm(e.target.value)} />
      </div>
  );
}

export default CpmInput;