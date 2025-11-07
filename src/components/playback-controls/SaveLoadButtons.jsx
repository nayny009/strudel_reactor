import Swal from "sweetalert2";

function SaveLoadButtons({ songText, setSongText, cpm, setCpm, volume, setVolume }) {
    async function saveJson() {
        const data = { songText, cpm, volume };
        const dataString = JSON.stringify(data);

        const { value: name } = await Swal.fire({
            title: "Save Preset",
            input: "text",
            inputLabel: "Enter a name for your preset",
            confirmButtonText: "Save",
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "Please enter a preset name!";
                }
            },
            confirmButtonColor: "green",
            cancelButtonColor: "red"
        });

        if (name) {
            localStorage.setItem(`${name}_JSON`, dataString);
            Swal.fire({
                title: "Saved!",
                text: `Your preset "${name}" has been saved!`,
                icon: "success",
                confirmButtonColor: "green"
            });
        }
    }

    async function loadJson() {
        const keys = Object.keys(localStorage).filter(key => key.endsWith("_JSON"));
        const presets = keys.map(key => key.replace("_JSON", ""));

        if (presets.length === 0) {
            Swal.fire({
                title: "No Presets",
                text: "You have no saved presets yet!",
                icon: "info",
                confirmButtonColor: "green"
            });
            return;
        }

        const inputOptions = presets.reduce((obj, preset) => {
            obj[preset] = preset;
            return obj;
        }, {});

        const { value: selectedPreset } = await Swal.fire({
            title: "Load Preset",
            input: "select",
            inputOptions: inputOptions,
            inputPlaceholder: "Select a preset",
            confirmButtonText: "Load",
            confirmButtonColor: "green",
            showCancelButton: true,
            cancelButtonColor: "red"
        });

        if (selectedPreset) {
            const dataString = localStorage.getItem(`${selectedPreset}_JSON`);
            const data = JSON.parse(dataString);

            setSongText(data.songText);
            setCpm(data.cpm);
            setVolume(data.volume);

            Swal.fire({
                title: "Loaded!",
                text: `Preset "${selectedPreset}" has been loaded!`,
                icon: "success",
                confirmButtonColor: "green"
            });
        }
    }

    return (
        <>
            <button className="btn btn-green" onClick={saveJson}>Save</button>
            <button className="btn btn-green" onClick={loadJson}>Load</button>
        </>
    );
}

export default SaveLoadButtons;