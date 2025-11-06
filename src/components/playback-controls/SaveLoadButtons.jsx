
function SaveLoadButtons({ songText, setSongText, cpm, setCpm, volume, setVolume }) {
    async function saveJson() {

    }

    async function loadJson() {

    }

    return (
        <>
            <button className="btn btn-green" onClick={saveJson}>Save</button>
            <button className="btn btn-green" onClick={loadJson}>Load</button>
        </>
    );
}

export default SaveLoadButtons;