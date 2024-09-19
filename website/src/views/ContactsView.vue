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
                    <a v-if="contact.link !== undefined" :href="contact.link" target="_blank"> 
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
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    /*border: solid white;*/
}

#item {
    margin: 1px;
    width: 98%;
    /*border: solid white;*/
}

h2 {
    color: white;
    font-size: 2em;
    text-align: center;
}

h3 {
    margin: 2px;
    color: white;
    font-size: 1.1em;
}

p {
    margin: 5px;
    font-size: 1em;
    
}

</style>