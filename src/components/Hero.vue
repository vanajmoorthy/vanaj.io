<template>
	<div class="hero">
		<div class="image-holder">
			<img src="../assets/me550.jpg" alt="Image of Vanaj Moorthy" />
		</div>
		<div class="text">
			<div class="top-text">
				<h1>
					Hi, I'm Vanaj. I'm a developer and artist from New Delhi.
				</h1>
			</div>
			<div class="bottom-text">
				<p class="b-margin">
					I'm an incoming freshman at the University of St. Andrews
					and an outgoing senior from The Shri Ram School. I'm an avid
					web developer with a focus on front-end and back-end in
					Node.js.
				</p>
				<p class="b-margin">
					I also love digital art and animation. I do 3D art in
					Blender, motion graphics in After Effects, and illustration
					in Illustrator. I also play the guitar, bass, drums and
					piano and I have an advanced + deep diving scuba diving
					certification from PADI.
				</p>
				<p>
					My favourite musicians include John Mayer, Vulfpeck and
					Andrew Bird; my favourite book is The Hitchhiker's Guide to
					the Galaxy by Douglas Adams; my favourite poem is
					"Ozymandias by Percy Bysshe Shelly"; and my favourite colour
					is #1da7ea.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Hero",
};
</script>

<style scoped>
img {
	height: 400px;
	border-radius: 8px;
}

.b-margin {
	margin-bottom: 1rem;
}

.image-holder {
	height: 125px;
}

.hero {
	display: flex;
}
.text {
	height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: white;
	margin-left: 2rem;
}

h1,
p {
	margin: 0;
}

h1 {
	font-weight: 500;
	font-size: 1.8rem;
}

p {
	font-weight: 300;
	font-size: 1rem;
	line-height: 1.3;
	/* text-align: justify; */
}

@media screen and (max-width: 1258px) {
	.hero {
		flex-direction: column;
	}

	img {
		height: 150px;
		width: auto;
		clip-path: circle(60px at center);
		position: relative;
		top: -20px;
		margin: 0;
	}

	.text {
		margin-left: 0;
		height: auto;
	}

	h1 {
		margin-bottom: 1rem;
		margin-top: 1rem;
	}
}
</style>
