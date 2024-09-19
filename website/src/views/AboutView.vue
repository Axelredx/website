<script setup>
import { schools } from '@/stores/data';
</script>

<template>
  <div class="about">
    <div v-for="school in schools" :key="school.id" id="item" >
      <ul>
        <li>
          <div id="pwrapper">
            <h6 v-if="school.id === 'uni1'"> Currently doing: </h6>
            <p> {{ school.typeDegree }} degree in {{ school.degreeName }} at {{ school.schoolName }} </p>
            <a :href="school.link" target="_blank"> {{ school.link }} </a>
          </div>
          <div id="imgwrapper">
            <img v-if="school.id === 'uni1'" src="../components/icons/logoUnibo.png" >
            <img v-else-if="school.id === 'hs'" src="../components/icons/liceo.jpg" >
            <div v-if="school.id !== 'hs'" id="line"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#about {
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

h2 {
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
  font-size: 0.9em;
}

img {
  width: 50%;
  height: 50%;
  margin: 5px;
}

#imgwrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#pwrapper {
  width: 100%;
  height: 40%;
  /*border: solid white;*/
}

</style>
