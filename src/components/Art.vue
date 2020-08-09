<template>
	<div>
		<a :href="project.link">
			<img :src="project.src" />
		</a>
	</div>
</template>

<script>
export default {
	name: "Art",
	props: {
		project,
	},
};
</script>

<style>
img {
	height: 300px;
}
</style>
