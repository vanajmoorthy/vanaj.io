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
			song1: "Nobody Home",
			artist1: "Pink Floyd",
			song2: "Themata",
			artist2: "Karnivool",
			song3: "1612",
			artist3: "Vulfpeck",
		};
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
