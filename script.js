const button = window.document.getElementById("button-id");
const input = window.document.getElementById("input-id");

button.addEventListener("click", () => {
	button.disabled = true;
	input.disabled = true;
	alert("Done!");
});

input.addEventListener("input", event => {
	const correctAnswer = "electric mucus";
	const userInput = event.target.value.toLowerCase();

	button.style.backgroundColor = userInput === correctAnswer ? "green" : userInput;
	button.disabled = userInput !== correctAnswer;
});
