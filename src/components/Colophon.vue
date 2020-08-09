<template>
	<div>
		<h1>Colophone</h1>
		<p>
			This website uses Gibson, is coded in Vue.js, and uses Font Awesome
			for all the icons. It's inspirations/plagiarism sources are
			<a href="https://kabirgoel.com">kabirgoel.com</a> and
			<a href="https://aesign.me">aesign.me</a>. You can visit the source
			<a href="https://github.com/vanajmoorthy/vanajmoorthy.com">here</a>
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
}
p {
	color: white;
	font-weight: 300;
	font-size: 1rem;
	line-height: 20px;
}
</style>
