<template>
	<div>
		<h1>Colophone</h1>
		<p>
			This website uses
			<a
				href="https://fonts.adobe.com/fonts/gibson"
				target="_blank"
				rel="noopener noreferrer"
				>Gibson</a
			>, is coded in
			<a
				href="https://vuejs.org/"
				target="_blank"
				rel="noopener noreferrer"
				>Vue.js</a
			>, and uses
			<a
				href="https://fontawesome.com/"
				target="_blank"
				rel="noopener noreferrer"
				>Font Awesome</a
			>
			for all the icons. It's inspirations/plagiarism sources are
			<a
				href="https://kabirgoel.com"
				target="_blank"
				rel="noopener noreferrer"
				>kabirgoel.com</a
			>
			and
			<a
				href="https://aesign.me"
				target="_blank"
				rel="noopener noreferrer"
				>aesign.me</a
			>. You can visit the source
			<a
				href="https://github.com/vanajmoorthy/vanajmoorthy.com"
				target="_blank"
				rel="noopener noreferrer"
				>here</a
			>
			if you see something you like!
		</p>
	</div>
</template>

<script>
export default {
	name: "Colophon",
};
</script>

<style scoped>
a {
	color: white;
}

div {
	width: 45%;
}
h1 {
	font-size: 1.8rem;
	color: white;
	font-weight: 500;
	border-bottom: 10px solid #1b405e;
	line-height: 0.4;
	width: 145px;
	margin-block-start: 0;
}
p {
	color: white;
	font-weight: 300;
	font-size: 1rem;
	line-height: 20px;
	margin-block-end: 0;
}

a:hover {
	opacity: 0.7;
	transition: opacity 0.2s ease;
}

@media screen and (max-width: 610px) {
	div {
		width: 100%;
	}
}
</style>
