<template>
	<div class="card">
		<a :href="link" target="_blank" rel="noopener noreferrer">
			<div>
				<h1>{{ emoji }} {{ title }}</h1>
				<div class="col">
					<i class="fas fa-external-link-alt fa-lg"></i>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	name: "Card",
	props: {
		emoji: String,
		title: String,
		link: String,
	},
};
</script>

<style scoped>
.card {
	background-color: #1b405e;
	border-radius: 8px;
	padding: 0.5rem 1rem;
}

.card:hover {
	background-color: #15334b;
	transition: background-color 0.2s ease;
	cursor: pointer;
}

.card:hover svg {
	transform: translateY(-5px);
}

svg {
	transition: all ease 0.3s;
}

.col {
	display: flex;
	/* height: 100%; */
	justify-content: center;
	align-items: center;
}

.card div {
	display: flex;
	justify-content: space-between;
}

h1,
a {
	text-decoration: none;
	color: white;
}

h1 {
	font-weight: 500;
	font-size: 1.8rem;
}
</style>
