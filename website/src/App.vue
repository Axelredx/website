<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
        <RouterLink to="/" class="item"> 
          <p><img src="@/components/icons/home.svg"> Home </p> 
        </RouterLink>
        <RouterLink to="/about" class="item"> 
          <p><img src="@/components/icons/about.svg"> About/CV </p> 
        </RouterLink>
        <RouterLink to="/projects" class="item"> 
          <p><img src="@/components/icons/alchemy.svg"> Projects </p>
        </RouterLink>
        <RouterLink to="/contacts" class="item">
          <p><img src="@/components/icons/contact.svg"> Contacts </p>
        </RouterLink>
    </nav>
  </header>
  <RouterView />    
</template>

<style scoped>
  header {
    height: 10vh;
    width: 100%;
    border-bottom: solid 1px white;
    margin-bottom: 5px;
  }

  nav {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .item{
    margin: 1px;
    height: 40%;
    /*background-color: red;
    border: solid 1px black;*/
  }

  p{
    font-size: 1em;
    color: white;
  }

</style>
