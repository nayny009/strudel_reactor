import { useState } from "react";

function OnHushButtons({ toggleHush }) {
    const [instrument, setInstrument] = useState("bassline");

    const handleToggleHush = (e) => {
        const hush = e.target.id === "p2-hush";
        toggleHush(instrument, hush);
    };

    return (
        <>
            <p className="green-text">Select an instrument:</p>
            <select value={instrument} onChange={(e) => setInstrument(e.target.value)} className="form-control">
                <option value="bassline">bassline</option>
                <option value="main_arp">main_arp</option>
                <option value="drums">drums</option>
                <option value="drums2">drums2</option>
            </select> 
            <p className="green-text">Or enter an instrument:</p>
            <input type="text" value={instrument} onChange={(e) => setInstrument(e.target.value)} placeholder="Type custom instrument name ..." className="form-control mb-2" />

            <div className="dj-buttons mb-4">
                <input className="btn-check" type="radio" name="options" id="p1-on" autoComplete="off" onChange={handleToggleHush} defaultChecked />
                <label className="btn btn-green" htmlFor="p1-on">ON</label>
                <input className="btn-check" type="radio" name="options" id="p2-hush" autoComplete="off" onChange={handleToggleHush} />
                <label className="btn btn-green" htmlFor="p2-hush">HUSH</label>
            </div>
        </>
  );
}

export default OnHushButtons;