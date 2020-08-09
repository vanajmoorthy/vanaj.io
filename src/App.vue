<template>
	<div id="app">
		<div class="home">
			<Navbar> </Navbar>
			<HorizontalDivider></HorizontalDivider>
			<Hero> </Hero>
		</div>
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HorizontalDivider from "./components/HorizontalDivider.vue";
import Hero from "./components/Hero.vue";

export default {
	name: "App",
	components: {
		Navbar,
		HorizontalDivider,
		Hero,
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	padding: 0;
	margin: 0;
}

body {
	background-color: #1a202c;
	font-family: "canada-type-gibson";
}

.home {
	margin: 2rem 15rem;
}

@media screen and (max-width: 960px) {
	.home {
		margin: 2rem 8rem;
	}
}

@media screen and (max-width: 780px) {
	.home {
		margin: 2rem;
	}
}

@media screen and (max-width: 320px) {
	.home {
		margin: 2rem 1rem;
	}
}
</style>
