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
					<div class="theme-selector-button" @click="toggleDropdown">
						<button>
							<svg v-if="!showDropdown" class="svg" xmlns="http://www.w3.org/2000/svg" width="24"
								height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;">
								<path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z">
								</path>
							</svg>

							<svg v-if="showDropdown" class="svg up" xmlns="http://www.w3.org/2000/svg" width="24"
								height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;">
								<path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
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
	display: flex;
	justify-content: flex-end;
	position: relative;
	/* Ensure positioning context is set for the dropdown */
}

.theme-selector-button {
	background-color: var(--primary);
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: background-color 0.2s ease;
	height: 40px;
	width: 40px;
	padding: 8px;
	position: relative;
	z-index: 1;
}

.theme-selector-button:hover {
	background-color: var(--hover);
}

.theme-selector {
	display: flex;
	position: relative;
	/* Positioned relative to its normal position */
}

ul {
	margin: 0;
	list-style-type: none;
	display: flex;
	flex-direction: row;
}

.svg {
	width: 24px;
	/* Ensure SVG icons have a fixed width */
	height: 24px;
	/* Ensure SVG icons have a fixed height */
	fill: var(--primary);
	/* Use variable for color */
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
	background-color: #080a0e !important;
}

.dark:hover {
	background-color: #07080b !important;
	transition: all 0.2s ease;
	cursor: pointer;
	transform: scale(1.2);
}

.blue {
	background-color: #17334d !important;
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
.dropdown {
	position: absolute;
	top: 100%;
	/* Positioned right below the button */
	right: 0;
	background-color: var(--primary);
	border-radius: 0 0 8px 8px;
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 5px 5px 5px;
	/* Added padding */
	width: 40px;
	/* Ensure it takes as much space as needed */
	z-index: 0;
	top: 32px;
	/* Ensure it's above other content */
	transition: opacity 0.3s ease, transform 0.3s ease;
}

.theme-selector button {
	background: none;
	border: none;
	width: 100%;
	/* Take full width to prevent squishing */
	margin: 4px 0;
	/* Adjust margin */
	/* Increase padding for better tap area */
	border-radius: 4px;
	/* Rounded corners for buttons */
	transition: background-color 0.2s ease;
	background-color: var(--background);
	border-radius: 50%;
	/* Makes the button round */
	height: 20px;
	/* Height of the button */
	width: 20px;
	/* Width of the button, same as height for a circle */
	display: flex;
	justify-content: center;
	align-items: center;
	/* Center content vertically and horizontally */
	cursor: pointer;
	transition: background-color 0.2s ease, transform 0.2s ease;
	padding: 0;

}

.theme-selector-button:hover {
	/* transform: scale(1.05); */
	/* Slight increase on hover */
	cursor: pointer;
	background-color: var(--hover);
}

.theme-selector button:hover {
	cursor: pointer;

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
	border-radius: 20px;
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


@media screen and (max-width: 1250px) {
	.theme-selector-wrapper {
		width: 100%;
		/* Full width on smaller screens */
	}

	.theme-selector-button {
		/* padding: 10px; */
		/* Larger tap area on mobile */
	}
}
</style>
