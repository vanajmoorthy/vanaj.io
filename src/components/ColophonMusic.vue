<template>
	<div class="row">
		<Colophon></Colophon>
		<div class="divider"></div>
		<Music :songs="songs"></Music>
	</div>
</template>


<script>
import Colophon from "./Colophon.vue";
import Music from "./Music.vue";
export default {
	name: "ColophonMusic",
	components: { Colophon, Music },
	data() {
		return {
			songs: [],  // Array to hold song details
		};
	},
	mounted() {
		const url = "https://vanaj.io/.netlify/functions/get";
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				const songs = data.recenttracks.track.map((track) => ({
					name: track.name,
					artist: track.artist["#text"],
					image: track.image[1]["#text"],
				}));
				this.songs = this.removeDuplicates(songs).slice(0, 3);
			});
	},
	methods: {
		removeDuplicates(songs) {
			// Implement logic to remove duplicate songs if necessary
			return songs.reduce((unique, o) => {
				if (!unique.some(obj => obj.song === o.song && obj.artist === o.artist)) {
					unique.push(o);
				}
				return unique;
			}, []);
		}
	}
};
</script>

<style scoped>
.row {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.divider {
	display: none;
	width: 100%;
	height: 3px;
	background-color: var(--primary);
	margin: 2rem 0;
}

@media screen and (max-width: 610px) {
	.divider {
		display: block;
	}

	.row {
		flex-direction: column;
	}
}
</style>
