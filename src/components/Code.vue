<template>
	<div>
		<div class="row">
			<h1>Code</h1>
			<div>
				<button v-on:click="expandDiv">
					<i id="chevron" class="fas fa-chevron-down fa-lg"></i>
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
					emoji: "🐮",
					link: "https://www.mcow.ml",
				},
				{
					title: "Create",
					emoji: "🛠",
					link: "https://github.com/vanajmoorthy/create",
				},
				{
					title: "Tree",
					emoji: "🌲",
					link: "https://vanaj.io/tree",
				},
				{
					title: "Bee",
					emoji: "🐝",
					link: "https://github.com/vanajmoorthy/bee",
				},
				{
					title: "Gravity",
					emoji: "🌎",
					link: "https://vanaj.io/gravity",
				},
				{
					title: "Blog",
					emoji: "✒️",
					link: "https://vanaj.io/gh/blog-api",
				},
				{
					title: "Dogs",
					emoji: "🐶",
					link: "https://vanaj.io/dogs",
				},
				{
					title: "Morph",
					emoji: "💠",
					link: "https://vanaj.io/morph",
				},
				{
					title: "cshell",
					emoji: "🐚",
					link: "https://vanaj.io/gh/cshell",
				},
				{
					title: "Speechy",
					emoji: "🐢",
					link: "https://vanaj.io/gh/speechylang",
				},
				{
					title: "Obstacles",
					emoji: "▶️",
					link: "https://vanaj.io/obstacles",
				},
				{
					title: "Tic Tac Toe",
					emoji: "❌",
					link: "https://vanaj.io/tictactoe",
				},
				{
					title: "Pi3",
					emoji: "🥧",
					link:
						"https://github.com/vanajmoorthy/bailey-borwein-plouffe",
				},
				{
					title: "Pi2",
					emoji: "🥧",
					link: "https://vanaj.io/pi2",
				},
				{
					title: "Pi",
					emoji: "🥧",
					link: "https://vanaj.io/pi",
				},
				{
					title: "Yoda",
					emoji: "👽",
					link: "https://vanaj.io/yoda",
				},
				{
					title: "Keylogger",
					emoji: "🕵️",
					link: "https://vanaj.io/gh/keylogger",
				},
				{
					title: "Enigma",
					emoji: "❓",
					link: "https://vanaj.io/enigma",
				},
				{
					title: "Spam Bot",
					emoji: "🤖",
					link: "https://vanaj.io/gh/spambot",
				},
				{
					title: "Visualise",
					emoji: "🎤",
					link: "https://vanaj.io/visualise",
				},
				{
					title: "Graph",
					emoji: "📈",
					link: "https://vanaj.io/graph",
				},
				{
					title: "Paint",
					emoji: "🎨",
					link: "https://vanaj.io/paint",
				},
				{
					title: "JockyCipher",
					emoji: "🔑",
					link: "https://vanaj.io/jockycipher",
				},
				{
					title: "Clock",
					emoji: "🕒",
					link: "https://vanaj.io/clock",
				},
				{
					title: "Snake",
					emoji: "🍎",
					link: "https://vanaj.io/snake",
				},
			],
		};
		// eslint-disable-next-line no-unreachable
		isExpanded = false;
	},
	methods: {
		expandDiv() {
			const div = document.querySelector(".cards");
			const chevron = document.getElementById("chevron");

			if (!this.isExpanded) {
				div.classList.add("expandedCards");
				chevron.style.transform = "rotate(180deg)";
				this.isExpanded = true;
			} else {
				div.classList.remove("expandedCards");
				chevron.style.transform = "rotate(0deg)";
				this.isExpanded = false;
			}
			console.log(div.classList);
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
}

@media screen and (max-width: 1015px) {
	.cards {
		height: 275px;
	}
}

.expandedCards {
	height: 100%;
}

@media (min-width: 600px) {
	.cards {
		grid-template-columns: repeat(2, 1fr);
	}
}

.rotate {
	transform: rotate(180deg);
}

.no-rotate {
	transform: rotate(0deg);
}

h1 {
	font-size: 1.8rem;
	font-weight: 500;
	color: white;
	border-bottom: 10px solid #204665;
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

.row button:focus {
	outline: none;
}
</style>
