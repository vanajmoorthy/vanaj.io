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
	background-color: var(--primary);
	border-radius: 8px;
	padding: 0.5rem 1rem;
}

.card:hover {
	background-color: var(--hover);
	transition: background-color 0.2s ease;
	cursor: pointer;
}

.card:hover svg {
	transform: translateY(-5px);
}

.card:hover h1 {
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
	transition: all ease 0.3s;
}

@media screen and (max-width: 1015px) {
	h1 {
		font-size: 1.5rem;
	}
}
</style>
