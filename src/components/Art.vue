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
	props: ["src", "link"],
};
</script>

<style></style>
