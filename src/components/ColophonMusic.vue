<template>
	<div class="row">
		<Colophon></Colophon>
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
</style>
