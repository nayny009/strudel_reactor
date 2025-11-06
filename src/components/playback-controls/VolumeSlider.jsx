function VolumeSlider({ volume, setVolume }) {
  return (
      <div className="volume-slider mb-3">
          <label htmlFor="volume-range" className="form-label">Volume: {Math.round(volume * 100)}%</label>
          <input type="range" className="form-range" min="0" max="1" step="0.01" id="volume_range" onChange={(e) => setVolume(Number(e.target.value))} />
      </div>
  );
}

export default VolumeSlider;