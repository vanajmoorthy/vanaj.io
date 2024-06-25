<template>
	<div class="hero">
		<div class="image-holder">
			<img src="../assets/me-new.jpg" alt="Image of Vanaj Moorthy" />
		</div>
		<div class="text">
			<div class="top-text">
				<h1>
					Hi, I'm Vanaj. I'm a developer and artist from New Delhi, currently based in London 📍
				</h1>
			</div>
			<div class="bottom-text">
				<p class="b-margin">
					I'm an alumnus of the University of St. Andrews and an ex-student of The Shri Ram School. I'm an
					avid full-stack web developer with a focus on front-end development. You can find my resume <a
						href="resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.
				</p>
				<p class="b-margin">
					I also love digital art and animation. I make 3D art in
					Blender, motion graphics in After Effects, and illustration
					in Illustrator. I also play the guitar, bass, drums and
					piano and I have an advanced + deep diving scuba diving
					certification from PADI.
				</p>
				<p>
					My favourite musicians include Mdou Moctar, Vulfpeck and
					Andrew Bird; my favourite author is Terry Pratchett; and my favourite colour
					is <span class="color">#1da7ea</span>.
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
.color {
	/* border-bottom: 4px solid #1da7ea; */
	color: #1da7ea;
}

.orange {
	color: #ff9c4a;
}

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

a {
	color: var(--text);
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
	color: var(--text);
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
		height: 160px;
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
