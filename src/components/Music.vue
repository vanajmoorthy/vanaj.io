<template>
	<div>
		<h1>Recently Listened</h1>
		<div class="music">
			<ul>
				<li v-for="(song, index) in songs" :key="index">
					<span class="numbers">
						<img :src="song.image" alt="">
					</span>
					<span class="song-data" :ref="`songData-${index}`">
						<span :class="{ 'scrollable': song.scrollable }" v-if="song.scrollable">
							<span class="inner-text">
								{{ song.name }} — <span class="italics">{{ song.artist }}</span>
							</span>
							<span class="divider">|</span>
							<span class="inner-text">
								{{ song.name }} — <span class="italics">{{ song.artist }}</span>
							</span>
						</span>
						<span v-else>
							{{ song.name }} — <span class="italics">{{ song.artist }}</span>
						</span>
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "Colophon",
	props: {
		songs: {
			type: Array,
			required: true
		},
	},
	data() {
		return {
			observer: null
		};
	},
	mounted() {
		this.$nextTick(() => {
			this.setupResizeObserver();
			this.checkOverflow();
		});
	},
	beforeDestroy() {
		if (this.observer) {
			this.observer.disconnect();
		}
	},
	methods: {
		setupResizeObserver() {
			this.observer = new ResizeObserver(() => {
				this.checkOverflow();
			});
			this.$el.querySelectorAll('.song-data').forEach(el => {
				this.observer.observe(el);
			});
		},
		checkOverflow() {
			this.songs.forEach((song, index) => {
				const el = this.$refs[`songData-${index}`][0];
				if (el) {
					const isOverflowing = el.scrollWidth > el.clientWidth;
					this.$set(song, 'scrollable', isOverflowing);
				}
			});
		}
	},
	watch: {
		songs: {
			handler() {
				this.$nextTick(() => {
					this.checkOverflow();
					this.setupResizeObserver();
				});
			},
			deep: true
		}
	}
};
</script>


<style scoped>
div {
	width: 49%;
}

.divider {
	margin: 0 0.5rem;
	font-weight: 600;
}

.music {
	width: 100%;
	height: 210px;
	/* background-color: var(--primary); */
	padding: 0rem;
	border-radius: 8px;

}

h1 {
	font-size: 1.8rem;
	color: var(--text);
	font-weight: 500;
	border-bottom: 10px solid var(--border);
	line-height: 0.4;
	width: 225px;
	margin-block-start: 0;
}

p {
	color: var(--text);
	font-weight: 300;
	font-size: 1rem;
	line-height: 20px;
	margin: 0;
	margin-bottom: 1rem;
}

ul {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: var(--text);
	margin-block-start: 0;
	padding-inline-start: 0px;
	list-style-type: none;
	margin-block-end: 0;
}

li {
	line-height: 1.3;
	padding-bottom: 4px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: var(--border);
	padding: 0.5rem 0.5rem;
	/* margin-bottom: 0.5rem;200px */
	border-radius: 8px;
}

.numbers>img {
	width: 42px;
	border-radius: 8px;
	margin-right: 0.7rem;
}

.song-data {
	overflow: hidden;
	position: relative;
	display: block;
	width: 100%;
	white-space: nowrap;
}

.song-data span {
	display: inline-block;
}

.song-data span.scrollable {
	display: inline-flex;
	animation: scroll-left 15s linear infinite;
}


@keyframes scroll-left {
	0% {
		transform: translateX(0);
	}

	100% {
		transform: translateX(-50%);
	}
}

@media screen and (max-width: 610px) {
	div {
		width: 100%;
	}
}

.italics {
	font-style: italic;
}
</style>;
