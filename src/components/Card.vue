<template>
	<div>
		<h1>{{ emoji }} {{ name }}</h1>
	</div>
</template>

<script>
export default {
	name: "Card",
	props: {
		emoji: String,
		name: String,
	},
};
</script>

<style scoped></style>
