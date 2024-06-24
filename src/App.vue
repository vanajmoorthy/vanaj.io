<template>
	<div id="app">
		<div class="home">
			<Navbar @themeChanged="changeTheme"></Navbar>
			<HorizontalDivider></HorizontalDivider>
			<Hero></Hero>
			<HorizontalDivider></HorizontalDivider>
			<h1 class="art">Art</h1>

			<div class="art-container">
				<Art v-for="project in projects" :project="project" :key="project"></Art>
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
			currentTheme: 'dark',
			themes: {
				dark: {
					background: '#1a202c',
					text: '#fff',
					primary: '#1b405e',
					border: "#204665",
					selector: "#7eaacd",
					github: "#3ed3a1",
					envelope: "#e3655b",
					square: "#228cdb",
					hover: "#15334b",
					"scrollbar-bg": "#2c3649",
					/* scrollbar background */
					"scrollbar-thumb": "#20496b",
					/* scrollbar thumb */
					"scrollbar-thumb-hover": "#122b3f"
				},
				light: {
					background: '#f8f8f8',
					text: '#3b3c46',
					primary: '#8cccff',
					border: "6996bb",
					selector: "#fff",
					github: "#3b4b46",
					envelope: "#fa877e",
					square: "#0a82db",
					hover: "#5195cb",
					"scrollbar-bg": "#8cccff",
					/* scrollbar background */
					"scrollbar-thumb": "#3d8bc9",
					/* scrollbar thumb */
					"scrollbar-thumb-hover": "#225f8f"
				},
				blue: {
					background: '#122b3f',
					text: '#fff',
					primary: '#20496b',
					border: "#204665",
					selector: "#fff",
					github: "#3ed3a1",
					envelope: "#e3655b",
					square: "#228cdb",
					hover: "#15334b",
					"scrollbar-bg": "#2c3649",
					/* scrollbar background */
					"scrollbar-thumb": "#20496b",
					/* scrollbar thumb */
					"scrollbar-thumb-hover": "#122b3f"
				},
				orange: {
					background: "#FE654F",
					text: '#fff2f0',
					primary: '#fba99e',
					border: "#fba99e",
					selector: "#fff",
					github: "#7745c2",
					envelope: "#3b4b46",
					square: "#0a82db",
					hover: "#fba99e",
					"scrollbar-bg": "#fba99e",
					/* scrollbar background */
					"scrollbar-thumb": "#e98779",
					/* scrollbar thumb */
					"scrollbar-thumb-hover": "#ac564a"
				}
			},
			projects: null
		};
	},
	methods: {
		changeTheme(theme) {
			this.currentTheme = theme;
			localStorage.setItem('currentTheme', theme);  // Save theme to local storage
			const themeData = this.themes[theme];
			for (const key in themeData) {
				document.documentElement.style.setProperty(`--${key}`, themeData[key]);
			}
		}
	},

	mounted() {
		const savedTheme = localStorage.getItem('currentTheme') || 'dark';  // Default to 'dark' if no theme stored
		this.changeTheme(savedTheme);

		const url = "https://www.behance.net/v2/users/vanajmoorthy/projects?client_id=ZLBxK9rEfHwJf9K0rmseNr2fS2gS2HJW";
		$.ajax({
			url: url,
			type: "get",
			data: { projects: {} },
			dataType: "jsonp",
		})
			.done((response) => {
				let data = [];
				let res = response.projects;
				console.log(response);
				for (let i = 0; i < res.length; i++) {
					data.push({
						src: res[i].covers.max_808,
						link: res[i].url,
						name: res[i].name,
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

:root {
	--background: #1a202c;
	--primary: #1b405e;
	--border: #204665;
	/* default dark theme background */
	--text: #fff;
	/* default text color */
	--primary-color: #20496b;
	/* default primary color */
	--scrollbar-bg: #2c3649;
	/* scrollbar background */
	--scrollbar-thumb: #20496b;
	/* scrollbar thumb */
	--scrollbar-thumb-hover: #122b3f;
	/* scrollbar thumb hover */
	--selector: #fff;
	--github: #3ed3a1;
	--envelope: #e3655b;
	--square: #228cdb;
	--hover: #15334b;
	/* color for dividers like under headings */
}


body {
	background-color: var(--background);
	color: var(--text);
	font-family: "canada-type-gibson";
}




::-webkit-scrollbar {
	width: 5px;
}

::-webkit-scrollbar-track {
	background: var(--scrollbar-bg);
}

::-webkit-scrollbar-thumb {
	background: var(--scrollbar-thumb);
}

::-webkit-scrollbar-thumb:hover {
	background: var(--scrollbar-thumb-hover);
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
	height: min-content;
}

.art {
	font-weight: 500;
	color: var(--text-color);
	font-size: 1.8rem;
	border-bottom: 10px solid var(--border);
	line-height: 0.4;
	width: 40px;
}

@media screen and (max-width: 1500px) {
	.home {
		margin: 2rem 18rem;
	}
}

@media screen and (max-width: 1380px) {
	.home {
		margin: 2rem 12rem;
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
