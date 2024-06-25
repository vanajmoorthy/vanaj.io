<template>
    <div class="projects-container">
        <div class="row">
            <h1>Projects</h1>
        </div>
        <div class="projects-cards">
            <ProjectCard v-for="project in projectsBig" :key="project.title" :title="project.title" :tag="project.tag"
                :image="project.image" :description="project.description" :demoLink="project.demoLink"
                :sourceLink="project.sourceLink">
            </ProjectCard>
        </div>
    </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
    name: "Projects",
    components: { ProjectCard },
    props: {
        projectsBig: Array
    }
};
</script>

<style scoped>
.row h1 {
    font-size: 1.8rem;
    color: var(--text);
    font-weight: 500;
    border-bottom: 10px solid var(--border);
    line-height: 0.4;
    width: 103px;
    margin-block-start: 0;
}

.cards.projects-cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    /* Two columns for wider screens */
    gap: 20px;
    margin: 20px auto;
    transition: all 0.5s ease-in-out;
}

@media (max-width: 768px) {
    .cards.projects-cards {
        grid-template-columns: 1fr;
        /* One column for smaller screens */
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
</style>
