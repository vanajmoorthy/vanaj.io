<template>
	<div id="app">
		<div class="home">
			<Navbar></Navbar>
			<HorizontalDivider></HorizontalDivider>
			<Hero></Hero>
			<HorizontalDivider></HorizontalDivider>
			<h1 class="art">Art</h1>

			<div class="art-container">
				<Art
					v-for="project in projects"
					:project="project"
					:key="project"
				></Art>
			</div>

			<HorizontalDivider></HorizontalDivider>
			<Code></Code>
			<HorizontalDivider></HorizontalDivider>
			<ColophonMusic></ColophonMusic>
			<HorizontalDivider></HorizontalDivider>
			<Footer></Footer>
		</div>
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HorizontalDivider from "./components/HorizontalDivider.vue";
import Hero from "./components/Hero.vue";
import Art from "./components/Art.vue";
import Code from "./components/Code.vue";
import ColophonMusic from "./components/ColophonMusic.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "App",
	components: {
		Navbar,
		HorizontalDivider,
		Hero,
		Art,
		Code,
		ColophonMusic,
		Footer,
	},
	data() {
		return {
			projects: null,
		};
	},
	mounted() {
		// This will break one day
		// TODO: Use own API key
		const url =
			"https://www.behance.net/v2/users/vanajmoorthy/projects?client_id=ZLBxK9rEfHwJf9K0rmseNr2fS2gS2HJW";
		$.ajax({
			url: url,
			type: "get",
			data: { projects: {} },
			dataType: "jsonp",
		})
			.done((response) => {
				let data = [];
				let res = response.projects;
				console.log(res);
				for (let i = 0; i < res.length; i++) {
					data.push({
						src: res[i].covers.max_808,
						link: res[i].url,
					});
				}
				this.projects = data;
			})
			.fail((error) => {
				console.error(error);
			});
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

#app {
	/* display: flex; */
	/* justify-content: center; */
}

::-webkit-scrollbar {
	width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
	background: #2c3649;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #20496b;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #122b3f;
}

.home {
	max-width: 870px;
	margin: 2rem auto;
}

.art-container {
	display: flex;
	overflow-x: scroll;
	/* -ms-overflow-style: none;  */
	/* scrollbar-width: none; */
	padding: 10px 0;
}

.art {
	font-weight: 500;
	color: white;
	font-size: 1.8rem;
	border-bottom: 10px solid #204665;
	line-height: 0.4;
	width: 40px;
}

@media screen and (max-width: 1500px) {
	.home {
		margin: 2rem 20rem;
	}
}

@media screen and (max-width: 1380px) {
	.home {
		margin: 2rem 15rem;
	}
}

@media screen and (max-width: 936px) {
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
