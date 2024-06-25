<template>
	<div id="app">
		<div class="home">
			<Navbar @themeChanged="changeTheme"></Navbar>
			<HorizontalDivider></HorizontalDivider>
			<Hero></Hero>
			<HorizontalDivider></HorizontalDivider>

			<Projects :projectsBig="projectsBig"></Projects>
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
import Projects from "./components/Projects.vue";
import ColophonMusic from "./components/ColophonMusic.vue";
import Footer from "./components/Footer.vue";
import polyTabImage from '@/assets/polytab.png';
import puzzleflixImage from '@/assets/puzzleflix.png';
import mcowImage from '@/assets/mcow.png';
import aeloImage from '@/assets/aelo.png';


export default {
	name: "App",
	components: {
		Navbar,
		HorizontalDivider,
		Hero,
		Projects,
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
					background: '#080a0e',
					text: '#fff',
					texttwo: '#fff',
					primary: '#323b4e',
					border: "#507b9e",
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
					texttwo: '#fff',

					primary: '#78b5e6',
					border: "#78b5e6",
					selector: "#fff",
					github: "#c4ffec",
					envelope: "#fa877e",
					square: "#004579",
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
					texttwo: '#fff',
					primary: '#20496b',
					border: "#204665",
					selector: "#5286b0",
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
					texttwo: '#fff2f0',

					primary: '#f0905b',
					border: "#fba99e",
					selector: "#FE654F",
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
			projects: null,
			projectsBig: [
				{
					title: "PolyTab",
					image: polyTabImage,
					tag: "Machine Learning",
					description: ["A machine-learning model to automatically transcribe audio recordings of solo acoustic guitars to readable guitar tablature built using TensorFlow. This model builds on academic work in the nascent field of using machine learning for Music Information Retrieval (MIR) and utilises a convolutional neural network to learn features from spectograms of guitar audio recordings to automatically produce usable guitar tablature."],
					demoLink: "https://github.com/vanajmoorthy/CS4099-PolyTab/blob/main/Automatic%20Polyphonic%20Guitar%20Transcription.pdf",
					sourceLink: "https://github.com/vanajmoorthy/CS4099-PolyTab",
				},
				{
					title: "Aelo",
					image: aeloImage,
					tag: "UI/UX",
					description: ["Winning second place at AngelHack Delhi 2019, Aelo is a travel assistant app for which I designed the user interface.", "Designed in Sketch and written for iOS using UIKit, Aelo included many features to make planning travel easier, such as a flight-delay prediction machine learning model."],
					demoLink: "https://www.behance.net/gallery/80367169/Aelo-UI-Demo-and-Pitch-Video",
					sourceLink: "",
				},
				{
					title: "PuzzleFlix",
					image: puzzleflixImage,
					tag: "Full Stack",
					description: [
						"A puzzle playing website where you can play sudoku, multiple eights puzzles, and the eight queens puzzle.",

						"This was my sub-honours year long software engineering final project completed for my 3rd year at the University of St Andrews. Developed by a team of 5 in a simulated software engineer environment using Agile and SCRUM management techniques.",

						"Awarded a grade of a first."
					],
					demoLink: "https://puzzleflix.vanaj.io",
					sourceLink: "https://github.com/vanajmoorthy/puzzleflix",
				},
				{
					title: "mcow.ml",
					image: mcowImage,
					tag: "Full Stack",
					description: [
						"A self-hostable URL shortener built using ExpressJS and MongoDB, complete with authentication, custom short links and the ability to save shortened links to your profile.",

						"While the site was active it retained ~1000 monthly active users."
					],
					demoLink: "https://m.vanaj.io",
					sourceLink: "https://github.com/vanajmoorthy/mcow.ml",
				}
			]
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
	--texttwo: #fff;

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
	max-width: 1000px;
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
		margin: 2rem 16rem;
	}
}


@media screen and (max-width: 1305px) {
	.home {
		margin: 2rem 14rem;
	}
}


@media screen and (max-width: 1200px) {
	.home {
		margin: 2rem 10rem;
	}
}

@media screen and (max-width: 1130px) {
	.home {
		margin: 2rem 10rem;
	}
}


@media screen and (max-width: 1050px) {
	.home {
		margin: 2rem 8rem;
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
