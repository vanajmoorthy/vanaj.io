<template>
	<div>
		<h1>Music</h1>
		<p>My most recently played tracks on Spotify are</p>
		<ul>
			<li>{{ song1 }} - {{ artist1 }}</li>
			<li>{{ song2 }} - {{ artist2 }}</li>
			<li>{{ song3 }} - {{ artist3 }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Colophon",
	props: {
		song1: String,
		song2: String,
		song3: String,
		artist1: String,
		artist2: String,
		artist3: String,
	},
};
</script>

<style scoped>
div {
	width: 45%;
}
h1 {
	font-size: 1.8rem;
	color: white;
	font-weight: 500;
	border-bottom: 10px solid #1b405e;
	line-height: 0.4;
	width: 75px;
	margin-block-start: 0;
}
p {
	color: white;
	font-weight: 300;
	font-size: 1rem;
	line-height: 20px;
}

ul {
	color: white;
	margin-block-start: 0;
	padding-inline-start: 20px;
	list-style-type: hiragana;
	margin-block-end: 0;
}

@media screen and (max-width: 610px) {
	div {
		width: 100%;
	}
}
</style>