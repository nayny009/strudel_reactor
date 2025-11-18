function ProcessInput({ defaultValue, onChange }) {
  return (
      <>
          <div className="box">
              <h3>Text to Preprocess</h3>
              <div className="box-scroll">
                  <textarea className="form-control" rows="10" id="proc" defaultValue={defaultValue} onChange={onChange}></textarea>
              </div>
          </div>
      </>
  );
}

export default ProcessInput;