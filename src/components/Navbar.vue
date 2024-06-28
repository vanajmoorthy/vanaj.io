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
					<i class="fab fa-square-behance fa-lg"></i>
				</li>
			</a>
			<div class="theme-selector-wrapper">
				<div class="theme-selector">
					<div class="theme-selector-button" v-on:click="toggleDropdown">
						<button>
							<i id="chevron" class="fas fa-chevron-down fa-lg"></i>
						</button>
					</div>
					<transition name="fade-slide" @before-enter="beforeEnter" @enter="enter" @leave="leave">
						<div v-if="showDropdown" class="dropdown">
							<button class="blue" @click="selectTheme('blue')"></button>
							<button class="light" @click="selectTheme('light')"></button>
							<button class="dark" @click="selectTheme('dark')"></button>
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
	computed: {
		chevronClass() {
			console.log(this.showDropdown);
			return this.showDropdown ? 'fa-chevron-up' : 'fa-chevron-down';
		}
	},
	methods: {
		toggleDropdown() {

			const chevron = document.getElementById("chevron");

			if (!this.showDropdown) {
				chevron.style.transform = "rotate(180deg)";
				chevron.style.position = "relative";
				chevron.style.top = "0px";
				chevron.style.width = "12px !important";

				this.showDropdown = true;
			} else {
				chevron.style.transform = "rotate(0deg)";
				chevron.style.position = "relative";
				chevron.style.top = "1px";
				chevron.style.width = "12px !important";
				this.showDropdown = false;
			}

		},
		getChevronClass() {
			return this.showDropdown ? 'fa-chevron-up' : 'fa-chevron-down';
		},
		selectTheme(theme) {
			this.$emit('themeChanged', theme);

			const chevron = document.getElementById("chevron");
			chevron.style.transform = "rotate(0deg)";
			chevron.style.position = "relative";
			chevron.style.top = "1px";
			chevron.style.width = "12px";
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

.fa-chevron-up {
	transform: rotate(180deg);
	/* Ensures the icon flips when it's in the 'up' state */
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


button svg {
	color: var(--primary);
	position: relative;
	/* top: 1px; */
	width: 13px !important;
}

/* Optional: Add rotation for visual feedback */
.theme-selector-button i.fa-chevron-up {
	transform: rotate(180deg);
}



.theme-selector-button:hover {
	background-color: var(--hover);
}

.theme-selector {
	display: flex;
	position: relative;
	/* Positioned relative to its normal position */
}

.theme-selector:hover {
	cursor: pointer;

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

.fa-square-behance {
	color: var(--square) !important;
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
	background-color: #3a70a2 !important;
}

.blue:hover {
	background-color: #193652 !important;
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
