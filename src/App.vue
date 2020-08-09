<template>
	<div id="app">
		<div class="home">
			<Navbar></Navbar>
			<HorizontalDivider></HorizontalDivider>
			<Hero></Hero>
			<HorizontalDivider></HorizontalDivider>
			<Art v:for="project in projects" :project="project"></Art>
		</div>
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HorizontalDivider from "./components/HorizontalDivider.vue";
import Hero from "./components/Hero.vue";
import Art from "./components/Art.vue";

export default {
	name: "App",
	components: {
		Navbar,
		HorizontalDivider,
		Hero,
		Art,
	},
	data() {
		return {
			projects: null,
		};
	},
	mounted() {
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
						src: res[i].covers.original,
						link: res[i].url,
					});
				}
				console.log(data);
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

.home {
	margin: 2rem 25rem;
}

@media screen and (max-width: 1350px) {
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
