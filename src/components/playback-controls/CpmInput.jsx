function CpmInput({ cpm, setCpm }) {
    // Ensures the user can only set a value between 1-200.
    const handleChangeCpm = (e) => {
        const value = e.target.value;

        // Allows users to delete the placeholder input to "".
        if (value === "") {
            setCpm("");
            return;
        }

        const valueCheck = Number(value);

        if (valueCheck >= 1 && valueCheck <= 200) {
            setCpm(value);
        }
    };

  return (
      <div className="input-group mb-3">
          <span className="input-group-text" id="cpm_label">Set CPM</span>
          <input type="number" min="1" max="200" className="form-control" id="cpm_text_input" placeholder="30" value={cpm} onChange={handleChangeCpm} />
      </div>
  );
}

export default CpmInput;