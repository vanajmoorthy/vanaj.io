<template>
	<div>
		<a :href="link">
			<img :src="src" />
		</a>
	</div>
</template>

<script>
export default {
	name: "Art",
	props: {
		src: String,
		link: String,
	},
};
</script>

<style>
img {
	height: 300px;
}
</style>
