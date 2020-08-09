<template>
	<div class="hero">
		<img src="../assets/me.jpg" alt="Image of Vanaj Moorthy" />
		<div class="text">
			<div class="top-text"><h1>Hi, I'm Vanaj 👋</h1></div>
			<div class="bottom-text">
				<p>
					I'm an 18 year old developer and artist from New Delhi. I
					like JavaScript, playing instruments, scuba diving, and Lila
					Dhar.
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
	height: 300px;
}

.hero {
	display: flex;
}
.text {
	height: 300px;
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
}

@media screen and (max-width: 530px) {
	.hero {
		flex-direction: column;
	}
}
</style>
