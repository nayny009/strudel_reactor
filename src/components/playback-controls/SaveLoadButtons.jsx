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

    }

    return (
        <>
            <button className="btn btn-green" onClick={saveJson}>Save</button>
            <button className="btn btn-green" onClick={loadJson}>Load</button>
        </>
    );
}

export default SaveLoadButtons;