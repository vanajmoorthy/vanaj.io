<template>
    <div class="project-card">
        <img :src="image" alt="Project Image" class="project-image">
        <div class="content">
            <h2>{{ title }}</h2>
            <p v-for="(desc, index) in description" :key="index">{{ desc }}</p>
            <div class="links">
                <a :href="demoLink" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        style="transform: ;msFilter:;">
                        <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                        <path
                            d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z">
                        </path>
                    </svg>
                </a>
                <a :href="sourceLink" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z">
                        </path>
                    </svg></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectCard",
    props: {
        title: String,
        image: String,
        description: Array,
        demoLink: String,
        sourceLink: String
    }
};
</script>

<style scoped>
.project-card {
    background: var(--primary);
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.project-image {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    object-fit: cover;
}

.content {
    padding: 1rem 1rem 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--texttwo);
}

h2 {
    margin: 0 0 1rem 0;
    color: var(--texttwo);
    font-weight: 600;
}

p {
    text-align: left;
    margin: 0 0 1rem 0;
}

.links {
    display: flex;
    margin-top: auto;
}

.links>a {
    color: var(--texttwo);
    margin-right: 1rem;
}

.links>a>svg {
    fill: var(--texttwo);
}

.links>a>svg:hover {
    filter: brightness(0.5);
    transition: 0.2s ease filter;
}

@media (min-width: 855px) {
    .project-image {
        width: 280px;
        height: 310px;
        margin: 1rem 1rem 1rem 2rem;
        border-radius: 8px;

    }
}

@media (min-width: 768px) {
    .project-card {
        flex-direction: row;
    }

    .project-image {
        width: 280px;
        height: 340px;
        margin: 0;

    }

    .content {
        /* width: 50%; */
    }
}

@media (max-width: 768px) {
    .project-card {
        flex-direction: row;
    }

    .project-image {
        width: 280px;
        height: 340px;
        margin: 0;

    }
}

@media screen and (max-width: 756px) {
    .project-image {
        width: 280px;

        height: 280px;
        margin-bottom: 2rem;

    }

    .content {
        padding: 0;
    }
}

@media screen and (max-width: 430px) {
    .project-image {
        width: 350px;

        height: 350px;
    }

    .content {
        padding: 0 1rem 1rem 1rem;

    }
}
</style>