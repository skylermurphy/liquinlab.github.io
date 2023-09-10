<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Contact from "./components/Contact.vue";
import MainLogo from "./components/MainLogo.vue";
import { useRouter, useRoute  } from 'vue-router'

const router = useRouter();
const route = useRoute();

</script>

<template>
  <NavBar />
  <section v-if="route.path == '/'" class="hero">
    <img class="image" src="./assets/pattern_banner_superthin.png" alt="banner" />
  </section>

  <MainLogo v-if="route.path == '/'" />
  <section v-if="route.path == '/'" class="hero">
    <img class="image" src="./assets/pattern_banner_superthin.png" alt="banner" />
  </section>

  
  <RouterView />
  <!-- <footer class="footer">
  <div class="content has-text-centered">

  </div>
</footer> -->


<!-- <section class="hero">
  <img class="image" src="src/assets/pattern_banner_superthin.png" alt="banner" />
</section> -->


<div class="footer">
  <div class="footer-content"> 
    <Contact />

  </div>
</div>

</template>

<style>

:root {
    --background-color:whitesmoke;
    --link-color: #E03616;
    --main-green: #009245;
    /* --light: #F4F4ED; */
    --light: #faf2ee;
    --black: #1B2021;
    --medium: #816E94;
}


hr{
        background-color: var(--main-green);
        opacity: 0.5;
        height: 2px;
        border: none;
        
    }

.router {
  height: 100vh;
  background-color: var(--background-color);
}


#app {
  text-align: center;
}

body {
  font-family: "Nunito", sans-serif;
}


a:link {
  text-decoration: none;
  color: var(--link-color);
}

a:visited {
  text-decoration: none;
  color: var(--link-color);
}

a:hover {
  text-decoration: underline;
  color: var(--link-color);
}

a:active {
  text-decoration: underline;
  color: var(--link-color);
}

.page{
    padding: 20px;
    margin-left: 10%;
    margin-right: 10%;
    padding-bottom: 50px;
}



.footer-content{
    margin-left: 10%;
    margin-right: 10%;
}

.footer{
    background-color: var(--background-color);
    padding-top: 10px;
    padding-bottom: 20px;
    margin-top: 0px;
}



</style>
