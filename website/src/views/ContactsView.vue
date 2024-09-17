<script setup>
import { contacts } from '@/stores/data';
</script>

<template>
    <h2>You can find me here:</h2>
    <div id="wrapper">
        <ul>
            <div v-for="contact in contacts" :key="contact.id" id="item" :style="{backgroundColor: contact.color}">
                <li>
                    <h3> 
                        {{ contact.type }}
                        <img v-if="contact.type === 'Email'" src="@/components/icons/email.svg" >
                        <img v-else-if="contact.type === 'Github'" src="@/components/icons/github.svg" >
                        <img v-else-if="contact.type === 'Instagram'" src="@/components/icons/ig.svg" >
                    </h3>
                    <p v-if="contact.contact !== undefined"> 
                        {{ contact.contact }}
                    </p>
                    <a v-if="contact.link !== undefined" :href="contact.link"> 
                       <p id="plink"> {{ contact.link }}</p> 
                    </a>
                </li>
            </div>
        </ul>
    </div>
</template>

<style scoped>
#wrapper {
    width: auto;
    height: 78vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    /*border: solid white;*/
}

#item {
    margin: 5px;
    width: 80vw;
    color: ligh;
}

h2 {
    color: white;
    font-size: 2em;
    text-align: center;
}

p, h3 {
    color: #ffffff;
    font-size: 1.1em;
}

p {
    font-size: 1em;
}

</style>