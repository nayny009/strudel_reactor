import '../App.css';
import { useEffect, useRef, useState } from "react";
import { StrudelMirror } from '@strudel/codemirror';
import { evalScope } from '@strudel/core';
import { drawPianoroll } from '@strudel/draw';
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import { stranger_tune } from '../tunes';
import console_monkey_patch, { getD3Data } from '../console-monkey-patch';
import ProcessInput from "./ProcessInput";
import ProcessOutput from "./ProcessOutput";
import ButtonControls from "./playback-controls/ButtonControls";
import DJControls from "./dj-controls/DJControls";
import PageTitle from "./PageTitle";
import { Preprocess } from "../util/Preprocess";
import D3Graph from "./D3Graph";

let globalEditor = null;

const handleD3Data = (event) => {
    console.log(event.detail);
};

export default function StrudelDemo() {

    const hasRun = useRef(false);

    const handlePlay = () => {
        globalEditor.evaluate()
    }

    const handleStop = () => {
        globalEditor.stop()
    }

    const toggleHush = (instrumentName, hush) => {
        setMusicText(prev => {
            const lines = prev.split("\n");

            // Iterates through all the music text.
            for (let i = 0; i < lines.length; i++) {
                const trimmed = lines[i].trim();

                // Finds the line with the instrument name; considers with/without "_".
                if (trimmed.startsWith(instrumentName + ":") || trimmed.startsWith("_" + instrumentName + ":")) {
                    if (hush) {
                        // Adds "_".
                        if (!lines[i].startsWith("_")) lines[i] = "_" + lines[i];
                    } else {
                        // Removes "_".
                        if (lines[i].startsWith("_")) lines[i] = lines[i].slice(1);
                    }
                    break;
                }
            }
            return lines.join("\n");
        });
    };

    const [musicText, setMusicText] = useState(stranger_tune)

    const [state, setState] = useState("stop");

    const [cpm, setCpm] = useState(30);

    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        if (globalEditor && cpm && !isNaN(cpm)) {
            const updateCpm = `setcpm(${cpm})\n`;
            let updateVolume = Preprocess({ inputText: musicText, volume: volume })
            const updatedMusicText = "" + updateCpm + updateVolume;
            globalEditor.setCode(updatedMusicText);

            if (state === "play") {
                handlePlay();
            }
        }
    }, [state, musicText, cpm, volume]);

    useEffect(() => {

        if (!hasRun.current) {
            document.addEventListener("d3Data", handleD3Data);
            console_monkey_patch();
            hasRun.current = true;
            //Code copied from example: https://codeberg.org/uzu/strudel/src/branch/main/examples/codemirror-repl
            //init canvas
            const canvas = document.getElementById('roll');
            canvas.width = canvas.width * 2;
            canvas.height = canvas.height * 2;
            const drawContext = canvas.getContext('2d');
            const drawTime = [-2, 2]; // time window of drawn haps
            globalEditor = new StrudelMirror({
                defaultOutput: webaudioOutput,
                getTime: () => getAudioContext().currentTime,
                transpiler,
                root: document.getElementById('editor'),
                drawTime,
                onDraw: (haps, time) => {
                    drawPianoroll({ haps, time, ctx: drawContext, drawTime, fold: 0 });
                    if (haps && haps.length > 0) {
                        // Creates array of gain values
                        const gains = haps.map(h => h.value?.gain ?? 0);
                        // Send gain values to listeners
                        document.dispatchEvent(new CustomEvent("d3Data", { detail: gains }));
                    }
                },
                prebake: async () => {
                    initAudioOnFirstClick(); // needed to make the browser happy (don't await this here..)
                    const loadModules = evalScope(
                        import('@strudel/core'),
                        import('@strudel/draw'),
                        import('@strudel/mini'),
                        import('@strudel/tonal'),
                        import('@strudel/webaudio'),
                    );
                    await Promise.all([loadModules, registerSynthSounds(), registerSoundfonts()]);
                },
            });
            document.getElementById('proc').value = stranger_tune
        }
        const updatedMusicText = `setcpm(${cpm})\n${musicText}`;
        globalEditor.setCode(updatedMusicText);
    }, [musicText, cpm]);

    return (
        <div className="main-wrapper">
            <PageTitle />
            <main>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7">
                            <ProcessInput defaultValue={musicText} onChange={(e) => setMusicText(e.target.value)} />
                        </div>
                        <div className="col-md-5">
                            <ButtonControls onPlay={() => { setState("play"); handlePlay() }} onStop={() => { setState("stop"); handleStop() }}
                                cpm={cpm} setCpm={setCpm} volume={volume} setVolume={setVolume}
                                musicText={musicText} setMusicText={setMusicText}
                            />
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-7">
                            <ProcessOutput />
                        </div>
                        <div className="col-md-5">
                            <DJControls toggleHush={toggleHush} />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-12 ">
                            <D3Graph />
                        </div>
                    </div>
                    <br />
                </div>
                <canvas id="roll" hidden></canvas>
            </main>
        </div>
    );
}