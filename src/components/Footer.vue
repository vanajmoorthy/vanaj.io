<template>
	<div>
		<p>
			"In the beginning the Universe was created. This has made a lot of
			people very angry and been widely regarded as a bad move."
		</p>
		<div class="row">
			<p class="italic">
				— Douglas Adams, The Restaurant at the End of the Universe
			</p>
			<p>
				<a href="#" v-scroll-to="'#name'">Go to top</a>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Footer",
};
</script>

<style scoped>
a {
	color: white;
}

a:hover {
	opacity: 0.7;
	transition: opacity 0.2s ease;
}

div {
	color: white;
}

.row {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.italic {
	font-style: italic;
	width: 70%;
}

p {
	line-height: 1.3;
}
</style>
