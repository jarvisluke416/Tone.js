import * as Tone from "tone";

document.getElementById("play")?.addEventListener("click", async () => {
	await Tone.start();
	console.log("audio is ready");
});
//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note

