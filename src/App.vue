<template>
	<div id="app">
		<div class="home">
			<Navbar />
		</div>
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
	name: "App",
	components: {
		Navbar,
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
}

.home {
	margin: 2rem 15rem;
}
</style>
