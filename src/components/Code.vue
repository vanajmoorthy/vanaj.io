<template>
	<div>
		<div class="row">
			<h1>Code</h1>
			<div>
				<button v-on:click="expandDiv">
					<svg id="chevron" :class="{ 'rotated': isExpanded, }" xmlns="http://www.w3.org/2000/svg" height="20"
						width="20" viewBox="0 0 512 512">
						<path
							d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
					</svg>

				</button>
			</div>
		</div>

		<div class="cards" ref="cardsContainer">
			<Card v-for="card in cards" :key="card.title" :title="card.title" :emoji="card.emoji" :link="card.link">
			</Card>
		</div>
		<p v-if="!isExpanded" v-on:click="expandDiv" class="expand">Show More</p>
		<p v-if="isExpanded" v-on:click="expandDiv" class="expand">Show Less</p>
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
			isExpanded: false,
			initialMaxHeight: '0px'
		};
	},
	mounted() {
		this.calculateInitialMaxHeight();
	},
	methods: {
		expandDiv() {
			const div = this.$refs.cardsContainer;
			if (!this.isExpanded) {
				div.style.maxHeight = '4000px';
				this.isExpanded = true;
			} else {
				div.style.maxHeight = this.initialMaxHeight;
				this.isExpanded = false;
			}
		},
		calculateInitialMaxHeight() {
			this.$nextTick(() => {
				const div = this.$refs.cardsContainer;
				const children = Array.from(div.children);
				if (children.length > 1) {
					const totalHeight = children.slice(0, 3).reduce((sum, child) => {
						return (sum + child.offsetHeight + parseInt(window.getComputedStyle(child).marginBottom, 11) + 15);
					}, 0);
					this.initialMaxHeight = `${totalHeight}px`;
					div.style.maxHeight = this.initialMaxHeight;
				}
			});

		}
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
	margin-bottom: 1.5rem;
}


#chevron {
	fill: var(--background) !important;
	font-size: 1.33333em;
	line-height: 0.75em;
	transition: transform 0.3s ease;
	width: 17px;
	height: 17px;

}

#chevron.rotated {
	transform: rotate(180deg);
}

.expand {
	color: var(--background);
	font-weight: 500;
	background-color: var(--primary);
	border-radius: 8px;
	padding: 0.4rem 0.6rem;
	margin: auto;
	margin-top: 0.5rem;
	width: max-content;
}

.expand:hover {
	filter: brightness(0.9);
	cursor: pointer;
	transition: 0.2s ease all;
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
	display: flex;
	align-items: center;
	justify-content: center;
}

.row button:hover {
	background-color: var(--hover);
}

.row button:focus {
	outline: none;
}
</style>
