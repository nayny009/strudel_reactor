
function SaveLoadButtons({ songText, setSongText, cpm, setCpm, volume, setVolume }) {
    async function saveJson() {
        const data = { songText, cpm, volume };
        const dataString = JSON.stringify(data);

        const fileName = prompt("Enter a name for your preset:");

        if (fileName) {
            localStorage.setItem(`${fileName}_JSON`, dataString);
            alert(`Preset ${fileName} has been saved!`);
        }

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