<template>
	<nav>
		<div class="name" id="name">
			<h1>Vanaj Moorthy</h1>
		</div>
		<ul>
			<a href="https://github.com/vanajmoorthy" target="_blank" rel="noopener noreferrer">
				<li><i class="fab fa-github fa-lg"></i></li>
			</a>
			<a href="mailto:vanajmoorthy@gmail.com" target="_blank" rel="noopener noreferrer">
				<li><i class="fas fa-envelope fa-lg"></i></li>
			</a>
			<a href="https://www.behance.net/vanajmoorthy" target="_blank" rel="noopener noreferrer">
				<li class="last">
					<i class="fab fa-behance-square fa-lg"></i>
				</li>
			</a>
			<div class="theme-selector-wrapper">
				<div class="theme-selector">
					<div class="theme-selector-button">
						<button @click="toggleDropdown">
							<div class="arrow">
								<svg v-if="!showDropdown" class="svg" xmlns="http://www.w3.org/2000/svg" width="24"
									height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;">
									<path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z">
									</path>
								</svg>
							</div>
							<svg v-if="showDropdown" class="svg up" xmlns="http://www.w3.org/2000/svg" width="24"
								height="24" viewBox="0 0 24 24"
								style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
								<path d="m12 6.879-7.061 7.06 2.122 2.122L12 11.121l4.939 4.94 2.122-2.122z"></path>
							</svg>
						</button>
					</div>
					<transition name="fade-slide" @before-enter="beforeEnter" @enter="enter" @leave="leave">
						<div v-if="showDropdown" class="dropdown">
							<button class="dark" @click="selectTheme('dark')"></button>
							<button class="light" @click="selectTheme('light')"></button>
							<button class="blue" @click="selectTheme('blue')"></button>
							<button class="orange" @click="selectTheme('orange')"></button>

						</div>
					</transition>

				</div>
			</div>
		</ul>

	</nav>
</template>

<script>
export default {
	name: "Navbar",
	data() {
		return {
			showDropdown: false
		};
	},
	methods: {
		toggleDropdown() {
			this.showDropdown = !this.showDropdown;
		},
		selectTheme(theme) {
			this.$emit('themeChanged', theme);
			this.showDropdown = false;
		},
		beforeEnter(el) {
			el.style.opacity = 0;
			el.style.transform = "translateY(-20px)";
		},
		enter(el, done) {
			el.offsetHeight; // Trigger reflow to make transition happen
			el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
			el.style.opacity = 1;
			el.style.transform = "translateY(0)";
			done();
		},
		leave(el, done) {
			el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
			el.style.opacity = 0;
			el.style.transform = "translateY(-20px)";
			setTimeout(done, 300); // Matches the transition duration
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
	color: white;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.name {
	display: flex;
	align-items: flex-end;
}

.name h1 {
	margin: 0 0 0 0;
	font-size: 1.8rem;
	font-weight: 600;
	border-bottom: 6px solid var(--border);
	line-height: 0.4;
	color: var(--text);
}

.theme-selector-wrapper {
	width: 100%;
	display: flex;
	justify-content: flex-end;
}

.theme-selector-button {
	background-color: var(--primary);
	border-radius: 8px;
	height: 2.5rem;
	width: 2.5rem;
	display: flex;
	justify-content: center;
	position: relative;
	z-index: 2;
}

.theme-selector-button:hover {
	background-color: var(--hover);
	transition: background-color 0.2s ease;
	cursor: pointer;
}

ul {
	margin: 0;
	list-style-type: none;
	display: flex;
	flex-direction: row;
}

.svg {
	height: 20px;
	position: relative;
	left: -8px;
	top: 0px;
	fill: var(--primary) !important;
}



li {
	margin-left: 2rem;
	padding: 10px;
	display: flex;
	border-radius: 8px;
	justify-content: center;
	align-items: center;
	background-color: var(--primary);
	transition: all ease 0.2s;
	height: 2.5rem;
	width: 2.5rem;
}

li:hover {
	background-color: var(--hover);
	transform: translateY(-5px);
	transition: all ease 0.2s;
}

.fa-twitter {
	color: #2bf1ff;
}

.fa-instagram {
	color: #c457ff;
}

.fa-github {
	color: var(--github);
}

.fa-envelope {
	color: var(--envelope);
}

.fa-behance-square {
	color: var(--square);
}

@media screen and (min-width: 1250px) {
	.theme-selector-wrapper {
		display: block;
	}

	theme-selector-wrapper {
		position: relative;
		/* Add this */
	}

	.theme-selector {
		position: static;
		/* Change from relative to static */
	}

	.theme-selector .dropdown {
		right: 0;
		/* Align to the right edge of the wrapper */
		left: auto;
		/* Reset any left positioning */
	}
}

@media screen and (max-width: 1250px) {
	nav {
		flex-direction: column;
		margin-top: 3rem;
	}

	.theme-selector {
		margin-left: 0rem !important;
	}

	li {
		margin-left: 0;
		margin-right: 2rem;
	}

	ul {
		justify-content: flex-start;
		align-items: flex-start;
		padding-inline-start: 0;
		margin-top: 2rem;
	}
}

.theme-selector {
	border-radius: 8px;
	transition: all ease 0.2s;
	height: 2.5rem;
	width: 2.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	margin-left: 2rem;
	position: relative;
	/* Change from absolute to relative */
}


.dark {
	background-color: #1a202c !important;
}

.dark:hover {
	background-color: #07080b !important;
	transition: all 0.2s ease;
	cursor: pointer;
	transform: scale(1.2);
}

.blue {
	background-color: #0c1d2c !important;
}

.blue:hover {
	background-color: #000000 !important;
	transition: all 0.2s ease;
	cursor: pointer;
	transform: scale(1.2);
}

.light {
	background-color: #f8f8f8 !important;
}

.light:hover {
	background-color: #beb3b3 !important;
	transition: all 0.2s ease;
	cursor: pointer;
	transform: scale(1.2);
}

.orange {
	background-color: #FE654F !important;
}

.orange:hover {
	background-color: #c54835 !important;
	transition: all 0.2s ease;
	cursor: pointer;
	transform: scale(1.2);
}

/* Add CSS for dropdown menu */
.theme-selector .dropdown {
	position: absolute;
	/* Change from relative to absolute */
	top: 100%;
	/* Position it below the theme selector button */
	right: 0;
	/* Align it to the right of the theme selector */
	background-color: var(--primary);
	border-radius: 0 0 8px 8px;
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	z-index: 1;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	padding: 0.5rem 0.7rem;
	margin-top: -0.39rem;
	max-width: 40px;
	z-index: 0;
	/* Add some space between the button and dropdown */
}

.theme-selector button {
	border: none;
	background: none;
	color: inherit;
	cursor: pointer;
	background-color: var(--background);
	width: 20px;
	height: 20px;
	border-radius: 30px;
	margin: 0.61rem 0.2rem;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
	transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter,
.fade-slide-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}


.dropdown button {
	display: block;
	width: 20px;
	margin: 0.5rem 0;
	height: 20px;
}

@media screen and (max-width: 530px) {
	ul {
		width: 100%;
		/* justify-content: space-between; */
	}

	.first {
		margin-right: 2rem;
		margin-left: 0;
	}

	.last {
		margin: 0;
	}

	.theme-selector {
		margin-left: 2rem !important;
	}
}

@media screen and (max-width: 410px) {
	li {
		margin-right: 1rem;
	}

	.first {
		margin-right: 1rem;
		margin-left: 0;
	}

	.last {
		margin: 0;
	}

	i {
		height: 80%;
	}

	.theme-selector {
		margin-left: 1rem !important;
	}
}
</style>
