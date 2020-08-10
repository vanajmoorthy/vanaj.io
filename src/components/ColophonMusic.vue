<template>
	<div class="row">
		<Colophon></Colophon>
		<div class="divider"></div>
		<Music
			:song1="song1"
			:song2="song2"
			:song3="song3"
			:artist1="artist1"
			:artist2="artist2"
			:artist3="artist3"
		></Music>
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
			song1: null,
			artist1: null,
			song2: null,
			artist2: null,
			song3: null,
			artist3: null,
		};
	},
	mounted() {
		const url = "https://vanajmoorthy.com/.netlify/functions/get";
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				let res = data.items.sort((a, b) => {
					return a.played_at < b.played_at
						? 1
						: a.played_at > b.played_at
						? -1
						: 0;
				});
				let firstThree = res.slice(0, 3);
				console.log(firstThree);

				this.song1 = firstThree[0].track.name;
				this.song2 = firstThree[1].track.name;
				this.song3 = firstThree[2].track.name;

				this.artist1 = firstThree[0].track.artists[0].name;
				this.artist2 = firstThree[1].track.artists[0].name;
				this.artist3 = firstThree[2].track.artists[0].name;
			});
	},
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
	background-color: #1b405e;
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
