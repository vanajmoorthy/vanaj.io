<template>
	<div>
		<div class="row">
			<h1>Code</h1>
			<div>
				<button v-on:click="expandDiv">
					<i class="fas fa-chevron-down fa-lg"></i>
				</button>
			</div>
		</div>

		<div class="cards">
			<Card
				v-for="card in cards"
				:key="card.title"
				:title="card.title"
				:emoji="card.emoji"
				:link="card.link"
			></Card>
		</div>
	</div>
</template>

<script>
import Card from "./Card.vue";
export default {
	name: "Code",
	components: { Card },
	data() {
		return {
			cards: [
				{
					title: "mcow.ml",
					emoji: " 🐮",
					link: "https://www.mcow.ml",
				},
				{
					title: "Gravity",
					emoji: " 🌎",
					link: "https://vanajmoorthy.com/gravity",
				},
				{
					title: "Blog",
					emoji: " ✒️",
					link: "https://vanajmoorthy.com/blog",
				},
				{
					title: "Dogs",
					emoji: " 🐶",
					link: "https://vanajmoorthy.com/dogs",
				},
				{
					title: "Morph",
					emoji: " 💠",
					link: "https://vanajmoorthy.com/morph",
				},
				{
					title: "cshell",
					emoji: " 🐚",
					link: "https://vanajmoorthy.com/gh/cshell",
				},
				{
					title: "Speechy",
					emoji: " 🐢",
					link: "https://vanajmoorthy.com/gh/speechylang",
				},
				{
					title: "Short",
					emoji: " ✂️",
					link: "https://vanajmoorthy.com/gh/short",
				},
				{
					title: "Obstacles",
					emoji: " ▶️",
					link: "https://vanajmoorthy.com/obstacles",
				},
				{
					title: "Tic Tac Toe",
					emoji: " ❌",
					link: "https://vanajmoorthy.com/tictactoe",
				},
				{
					title: "Pi2",
					emoji: " 🥧",
					link: "https://vanajmoorthy.com/pi2",
				},
				{
					title: "Yoda",
					emoji: " 👽",
					link: "https://vanajmoorthy.com/yoda",
				},
				{
					title: "Pi",
					emoji: " 🥧",
					link: "https://vanajmoorthy.com/pi",
				},
				{
					title: "Keylogger",
					emoji: " 🕵️",
					link: "https://vanajmoorthy.com/gi/keylogger",
				},
				{
					title: "Enigma",
					emoji: " ❓",
					link: "https://vanajmoorthy.com/enigma",
				},
				{
					title: "Spam Bot",
					emoji: " 🤖",
					link: "https://vanajmoorthy.com/gh/spambot",
				},
				{
					title: "Visualise",
					emoji: " 🎤",
					link: "https://vanajmoorthy.com/link",
				},
				{
					title: "Graph",
					emoji: " 📈",
					link: "https://vanajmoorthy.com/graph",
				},
				{
					title: "Paint",
					emoji: " 🎨",
					link: "https://vanajmoorthy.com/paint",
				},
				{
					title: "JockyCipher",
					emoji: " 🔑",
					link: "https://vanajmoorthy.com/jockycipher",
				},
				{
					title: "Clock",
					emoji: " 🕒",
					link: "https://vanajmoorthy.com/clock",
				},
				{
					title: "Snake",
					emoji: " 🍎",
					link: "https://vanajmoorthy.com/snake",
				},
			],
		};
		isExpanded = false;
	},
	methods: {
		expandDiv() {
			const div = document.querySelector(".cards");
			const chevron = document.querySelector("svg");
			if (!this.isExpanded) {
				div.style.height = "100%";
				chevron.style.transform = "rotate(180deg)";
				this.isExpanded = true;
			} else {
				div.style.height = "320px";
				chevron.style.transform = "rotate(0deg)";
				this.isExpanded = false;
			}
		},
	},
};
</script>

<style scoped>
.cards {
	grid-gap: 1rem;
	margin: 0 auto;
	display: grid;
	height: 320px;
	overflow: hidden;
	transition: height ease 0.3s;
}

@media (min-width: 600px) {
	.cards {
		grid-template-columns: repeat(2, 1fr);
	}
}

h1 {
	font-size: 1.8rem;
	font-weight: 500;
	color: white;
	border-bottom: 10px solid #1b405e;
	line-height: 0.4;
	width: 70px;
}
.row {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

svg {
	color: white;
}

.row button {
	border: none;
	padding: 10px;
	border-radius: 8px;
	background-color: #1b405e;
}

.row button:hover {
	background-color: #15334b;
	transition: background-color ease 0.2s;
	cursor: pointer;
}
</style>
