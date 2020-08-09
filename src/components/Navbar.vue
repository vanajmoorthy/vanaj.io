<template>
	<nav>
		<div class="name">
			<h1>Vanaj Moorthy</h1>
		</div>
		<ul>
			<li><i class="fab fa-twitter fa-lg"></i></li>
			<li><i class="fab fa-instagram fa-lg"></i></li>
			<li><i class="fab fa-github fa-lg"></i></li>
			<li><i class="fas fa-envelope fa-lg"></i></li>
			<li><i class="fab fa-behance-square fa-lg"></i></li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
	font-family: "canada-type-gibson";
	color: white;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.name {
	display: flex;
	align-items: flex-end;
}

.name h1 {
	margin: 0 0 1.3rem 0;
	font-size: 1.8rem;
	font-weight: 600;
	border-bottom: 6px solid #1b405e;
	line-height: 0.4;
}

ul {
	list-style-type: none;
	display: flex;
	flex-direction: row;
}

li {
	margin-left: 2rem;
	padding: 10px;
	display: flex;
	border-radius: 8px;
	justify-content: center;
	align-items: center;
	background-color: #1b405e;
}

.fa-twitter {
	color: #2bf1ff;
}

.fa-instagram {
	color: #c457ff;
}

.fa-github {
	color: #3ed3a1;
}

.fa-envelope {
	color: #e3655b;
}

.fa-behance-square {
	color: #228cdb;
}
@media screen and (max-width: 1130px) {
	nav {
		flex-direction: column;
		margin-top: 3rem;
	}

	li {
		margin-left: 0;
		margin-right: 2rem;
	}

	ul {
		justify-content: flex-start;
		align-items: flex-start;
	}
}
</style>
