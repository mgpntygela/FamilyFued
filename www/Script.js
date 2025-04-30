// Initialize Capacitor SplashScreen if available
document.addEventListener(
	"deviceready",
	function () {
		if (typeof Capacitor !== "undefined" && Capacitor.Plugins.SplashScreen) {
			Capacitor.Plugins.SplashScreen.hide();
		}
	},
	false
);

const questions = [
	{
		question: "Name a popular pizza topping.",
		answers: [
			{ answer: "Pepperoni", points: 40 },
			{ answer: "Cheese", points: 25 },
			{ answer: "Mushrooms", points: 15 },
			{ answer: "Sausage", points: 10 },
			{ answer: "Onions", points: 10 },
		],
	},
	{
		question: "Name something you do before going to bed.",
		answers: [
			{ answer: "Brush teeth", points: 35 },
			{ answer: "Shower", points: 25 },
			{ answer: "Watch TV", points: 15 },
			{ answer: "Read", points: 15 },
			{ answer: "Set alarm", points: 10 },
		],
	},
	{
		question: "Name something people buy before a big storm.",
		answers: [
			{ answer: "Water", points: 30 },
			{ answer: "Bread", points: 25 },
			{ answer: "Batteries", points: 20 },
			{ answer: "Canned food", points: 15 },
			{ answer: "Flashlight", points: 10 },
		],
	},
	{
		question: "Name a fruit you might put in a smoothie.",
		answers: [
			{ answer: "Banana", points: 35 },
			{ answer: "Strawberry", points: 30 },
			{ answer: "Blueberry", points: 15 },
			{ answer: "Mango", points: 10 },
			{ answer: "Pineapple", points: 10 },
		],
	},
	{
		question: "Name something you associate with pirates.",
		answers: [
			{ answer: "Treasure", points: 35 },
			{ answer: "Ship", points: 25 },
			{ answer: "Parrot", points: 15 },
			{ answer: "Sword", points: 15 },
			{ answer: "Eye patch", points: 10 },
		],
	},
];

let currentQuestionIndex = 0;
let currentAnswerIndex = 0;
let score = 0;

window.onload = function () {
	createBoard();
};

function createBoard() {
	const board = document.getElementById("board");
	const questionEl = document.getElementById("question");
	board.innerHTML = "";
	questionEl.textContent = questions[currentQuestionIndex].question;
	for (let i = 0; i < 5; i++) {
		const box = document.createElement("div");
		box.classList.add("answer-box");
		box.id = `box-${i}`;
		board.appendChild(box);
	}
}

function revealAnswer() {
	const current = questions[currentQuestionIndex];
	if (currentAnswerIndex < current.answers.length) {
		const box = document.getElementById(`box-${currentAnswerIndex}`);
		const answer = current.answers[currentAnswerIndex];
		box.textContent = `${currentAnswerIndex + 1}. ${answer.answer} - ${
			answer.points
		} pts`;
		box.style.visibility = "visible";
		score += answer.points;
		document.getElementById("score").textContent = `Score: ${score}`;
		currentAnswerIndex++;
	}
}

function submitAnswer() {
	const input = document.getElementById("user-answer");
	const userText = input.value.trim().toLowerCase();
	const current = questions[currentQuestionIndex];
	for (let i = 0; i < current.answers.length; i++) {
		if (userText === current.answers[i].answer.toLowerCase()) {
			const box = document.getElementById(`box-${i}`);
			if (box.style.visibility !== "visible") {
				box.textContent = `${i + 1}. ${current.answers[i].answer} - ${
					current.answers[i].points
				} pts`;
				box.style.visibility = "visible";
				score += current.answers[i].points;
				document.getElementById("score").textContent = `Score: ${score}`;
			}
			input.value = "";
			return;
		}
	}
	alert("Wrong answer or already revealed!");
	input.value = "";
}

function nextQuestion() {
	if (currentQuestionIndex < questions.length - 1) {
		currentQuestionIndex++;
		currentAnswerIndex = 0;
		createBoard();
		document.getElementById("user-answer").value = "";
	} else {
		alert("You've finished all questions! Final Score: " + score);
	}
}

function resetGame() {
	currentQuestionIndex = 0;
	currentAnswerIndex = 0;
	score = 0;
	document.getElementById("score").textContent = `Score: ${score}`;
	createBoard();
	document.getElementById("user-answer").value = "";
}
