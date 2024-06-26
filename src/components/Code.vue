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

		<div class="cards" ref="cardsContainer">
			<Card v-for="card in cards" :key="card.title" :title="card.title" :emoji="card.emoji" :link="card.link">
			</Card>
		</div>
		<p class="expand">...</p>
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
					title: "Enigma",
					emoji: "❓",
					link: "https://vanaj.io/enigma",
				},
				{
					title: "Visualise",
					emoji: "🎤",
					link: "https://vanaj.io/visualise",
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
					title: "cshell",
					emoji: "🐚",
					link: "https://vanaj.io/gh/cshell",
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
					title: "Spam Bot",
					emoji: "🤖",
					link: "https://vanaj.io/gh/spambot",
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
			isExpanded: false
		};
	},
	methods: {
		expandDiv() {
			const div = document.querySelector(".cards");
			const chevron = document.getElementById("chevron");
			const fullHeight = Array.from(div.children).reduce((total, child) => total + child.offsetHeight + parseInt(window.getComputedStyle(child).marginBottom, 10), 0);

			// Get current viewport width
			const viewportWidth = window.innerWidth;

			// Set max height based on viewport width
			const maxHeight = viewportWidth < 1015 ? '275px' : '320px';
			const expandedMaxHeight = viewportWidth < 1015 ? '4000px' : '1400px';

			if (!this.isExpanded) {
				div.style.maxHeight = fullHeight < parseInt(expandedMaxHeight) ? expandedMaxHeight : fullHeight + 'px'; // Use the smaller of calculated fullHeight or expandedMaxHeight
				chevron.style.transform = "rotate(180deg)";
				this.isExpanded = true;
			} else {
				div.style.maxHeight = maxHeight; // Use different max heights based on the screen width
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
	max-height: 320px;
	overflow: hidden;
	transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
}

.expand {
	text-align: center;
	font-weight: 700;
	font-size: 1.2rem;
	color: var(--primary);
}

.expandedCards {
	max-height: 1400px;
	/* Increase max-height when expanded */
	padding-bottom: 1rem;
	/* Add some padding if needed */
}

@media screen and (max-width: 1015px) {
	.cards {
		max-height: 275px;
	}
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
	color: var(--text);
	border-bottom: 10px solid var(--border);
	line-height: 0.4;
	width: 70px;
}

.row {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}


svg {
	color: var(--background);

}

#chevron {
	color: var(--background);
}

.row button {
	background-color: var(--primary);
	border: none;
	padding: 10px;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 0.2s ease;
	/* Smooth background color transition */
}

.row button:hover {
	background-color: var(--hover);
}

.row button:focus {
	outline: none;
}
</style>
