<template>
	<div>
		<Card :emoji="hello" :name="mcow.ml"></Card>
		<h1>hello</h1>
	</div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
	name: "Code",
	components: { Card },
};
</script>

<style scoped></style>
