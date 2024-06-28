<template>
	<div class="wrapper">
		<h1>Colophone</h1>
		<div>
			<p>
				This website is set in
				<a href="https://fonts.adobe.com/fonts/gibson" target="_blank" rel="noopener noreferrer">Gibson</a>, and
				uses
				<a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a>
				for all the icons. It's coded in
				<a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a>
				and uses Netlify functions along with the
				<a href="https://www.behance.dev" target="_blank" rel="noopener noreferrer">Behance</a>
				and
				<a href="https://www.last.fm/api/" target="_blank" rel="noopener noreferrer">Last.fm</a>
				APIs. You can visit the
				source
				<a href="https://github.com/vanajmoorthy/vanaj.io" target="_blank" rel="noopener noreferrer">here</a>
				if you see something you like!
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Colophon",
};
</script>

<style scoped>
a {
	color: var(--text);
}

.wrapper {
	width: 49%;

}

h1 {
	font-size: 1.8rem;
	color: var(--text);
	font-weight: 500;
	border-bottom: 10px solid var(--border);
	line-height: 0.4;
	width: 145px;
	margin-block-start: 0;
}

p {
	color: var(--text);
	font-weight: 300;
	font-size: 1rem;
	line-height: 1.3;
	margin-block-end: 0;
	color: var(--text);
	font-weight: 300;
	font-size: 1rem;
	line-height: 1.3;
	margin-block-end: 0;
	margin-top: 0;

}

.wrapper div {
	background-color: var(--primary);
	display: flex;
	align-items: center;
	padding: 1.2rem 1.2rem;
	border-radius: 8px;
	height: 210px;
}

a:hover {
	opacity: 0.7;
	transition: opacity 0.2s ease;
}

@media screen and (max-width: 610px) {
	.wrapper {
		width: 100%;
	}

	.wrapper div {
		height: auto;
	}
}
</style>
