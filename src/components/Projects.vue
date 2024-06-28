<template>
    <div class="projects-container">
        <div class="row">
            <h1>Projects</h1>
            <div>
                <button v-on:click="expandDiv">
                    <div>
                        <i id="projects-chevron" class="fas fa-chevron-down fa-lg"></i>
                    </div>
                </button>
            </div>
        </div>
        <div class="projects-cards" ref="projectsContainer">
            <ProjectCard v-for="project in projectsBig" :key="project.title" :title="project.title" :tag="project.tag"
                :image="project.image" :description="project.description" :demoLink="project.demoLink"
                :sourceLink="project.sourceLink">
            </ProjectCard>

        </div>
        <p class="expand">...</p>

    </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
    name: "Projects",
    components: { ProjectCard },
    props: {
        projectsBig: Array
    },
    data() {
        return {
            isExpanded: false,
            initialMaxHeight: '0px'
        };
    },
    mounted() {
        this.calculateInitialMaxHeight();
    },
    methods: {
        expandDiv() {
            const div = this.$refs.projectsContainer;
            const chevron = document.getElementById("projects-chevron");

            if (!this.isExpanded) {
                div.style.maxHeight = '4000px'; // A very large max-height to accommodate all items
                chevron.style.transform = "rotate(180deg)";
                this.isExpanded = true;
            } else {
                div.style.maxHeight = this.initialMaxHeight; // Collapse back to the initial calculated max-height
                chevron.style.transform = "rotate(0deg)";
                this.isExpanded = false;
            }
        },
        calculateInitialMaxHeight() {
            this.$nextTick(() => {
                const div = this.$refs.projectsContainer;
                const children = Array.from(div.children);
                if (children.length > 1) {
                    const totalHeight = children.slice(0, 1).reduce((sum, child) => {
                        return (sum + child.offsetHeight + parseInt(window.getComputedStyle(child).marginBottom, 11) - 20);
                    }, 0);
                    this.initialMaxHeight = `${totalHeight}px`;
                    div.style.maxHeight = this.initialMaxHeight;
                }
            });
        }
    },
};
</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.expand {
    text-align: center;
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--primary);
}

#projects-chevron {
    color: var(--background);
}

.row h1 {
    font-size: 1.8rem;
    color: var(--text);
    font-weight: 500;
    border-bottom: 10px solid var(--border);
    line-height: 0.4;
    width: 103px;
    margin-block-start: 0;
}

button div {
    width: 20px;
}

.row button {
    background-color: var(--primary);
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.row button:hover {
    background-color: var(--hover);
}

.row button:focus {
    outline: none;
}

.projects-cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin: 20px auto;
    transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
    overflow: hidden;
    max-height: 740px;
}

@media (max-width: 768px) {
    .projects-cards {
        grid-template-columns: 1fr;
        max-height: 340px;
    }
}

.project-card {
    background: var(--primary);
    padding: 0 20px 0 0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    min-height: 340px;
    margin-bottom: 2rem;

}

.project-image {
    /* width: 100%; */
    /* Adjust based on your design */
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
}

.project-card .content h2,
.project-card .content p,
.project-card a {
    color: var(--text);
    text-decoration: none;
    margin: 5px;
}

@media screen and (max-width: 875px) {
    .project-image {
        /* height: 20px !important; */
    }

    .project-card {
        /* min-height: 320px; */
    }
}


@media screen and (max-width: 756px) {
    .project-card {
        flex-direction: column;
        padding: 2rem 2rem;
    }
}

@media screen and (max-width: 500px) {
    .project-card {
        padding: 2rem 1rem 1rem 1rem;
    }
}

@media screen and (max-width: 430px) {
    .project-card {
        padding: 0rem;
    }
}

/* Rest of your existing styles... */
</style>
