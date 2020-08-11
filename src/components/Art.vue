<template>
	<div>
		<a :href="project.link" target="_blank" rel="noopener noreferrer">
			<img :src="project.src" alt="behance project" />
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
img {
	height: 300px;
	margin-right: 2.5rem;
}

img:hover {
	opacity: 0.5;
	transition: opacity 0.1s ease;
}

@media screen and (max-width: 1190px) {
	img {
		height: 250px;
		margin-right: 2rem;
	}
}

@media screen and (max-width: 460px) {
	img {
		height: 200px;
		margin-right: 1rem;
	}
}
</style>
