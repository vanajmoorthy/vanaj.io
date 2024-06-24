<template>
	<div>
		<a :href="project.link" target="_blank" rel="noopener noreferrer">
			<img :src="project.src" alt="behance project" />
			<h1 class="title">{{ project.name }}</h1>
		</a>
	</div>
</template>

<script>
export default {
	name: "Art",
	props: ["project"],
};
</script>

<style scoped>
div {
	margin-right: 1rem;
	transition: 0.2s ease all;
}

img {
	height: 300px;
	transition: all 0.1s ease;
}

.title {
	color: var(--text);
	font-weight: 500;
	text-align: center;
	max-width: 300px;
	text-decoration: none;
	margin: 1rem auto;
	font-size: 1.2rem;
	opacity: 1;
	transition: 0.2s ease all;
	line-height: 1;
}

a {
	text-decoration: underline;
	color: var(--text);
}

div:hover {
	opacity: 0.5;
	transform: translateY(-10px);
	transition: all 0.2s ease;
}

@media screen and (max-width: 800px) {
	img {
		height: 240px;
	}
}
</style>
