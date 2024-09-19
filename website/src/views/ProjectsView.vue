<script setup>
import { projects, contacts } from '@/stores/data';
import Navbar from '../components/navbar.vue';
import { ref } from 'vue';

const gh = ref(contacts.value[1].link);
</script>

<template>
    <Navbar />
    <div id="projects">
        <h4> Here's some of my projects: </h4>
        <div v-for="project in projects" :key="project.id" id="item">
            <ul>
                <li>
                    <div id="pwrapper">
                        <h6> {{ project.projectName }}
                            <img v-if="project.language === 'c'" src="../components/icons/c.svg">
                            <img v-else-if="project.language === 'java'" src="../components/icons/java.svg">
                            <img v-else-if="project.language === 'py'" src="../components/icons/python.svg">
                            <img v-if="project.language === 'asm'" src="../components/icons/asm.svg">
                        </h6>
                        <p> {{ project.projectDescription }} </p>
                        <a :href="project.link" target="_blank"> {{ project.link }} </a>
                    </div>
                    <div v-if="project.language !== 'asm'" id="line"></div>
                </li>
            </ul>
        </div>
        <h6> You can find much more
            <a :href="gh" target="_blank"> here </a>!
        </h6>
    </div>
</template>

<style scoped>

#projects {
    width: auto;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    /*border: solid white;*/
}

#line {
    margin: 5px;
    width: 90%;
    border-bottom: solid rgba(255, 255, 255, 0.373);
}

#item {
    margin: 1px;
    width: 98%;
}


h4 {
    margin: 5px;
    color: white;
    font-size: 2em;
    text-align: center;
}

p, h6 {
    margin: 2px;
    color: white;
    font-size: 1.1em;
}

p {
    margin: 5px;
    font-size: 1em;
}

a {
    font-size: 0.77em;
}

img {
    margin: 5px;
    fill: white;
}

#pwrapper {
    width: 100%;
    height: 80%;
    /*border: solid white;*/
}

</style>