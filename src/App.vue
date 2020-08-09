<template>
	<div id="app">
		<div class="home">
			<Navbar> </Navbar>
			<HorizontalDivider></HorizontalDivider>
			<Hero> </Hero>
			<HorizontalDivider></HorizontalDivider>
		</div>
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HorizontalDivider from "./components/HorizontalDivider.vue";
import Hero from "./components/Hero.vue";
import Art from "./components/Art.vue";
import axios from "axios";

export default {
	name: "App",
	components: {
		Navbar,
		HorizontalDivider,
		Hero,
	},
	data() {
		return {
			info: null,
		};
	},
	mounted() {
		axios
			.get("https://api.coindesk.com/v1/bpi/currentprice.json")
			.then((response) => console.log(response));
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
	margin: 2rem 25rem;
}

@media screen and (max-width: 1350px) {
	.home {
		margin: 2rem 15rem;
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
