<script setup>
import MainLogo from "../components/MainLogo.vue";
import News from "../components/News.vue";
</script>

<template>
  <div class="page">
    <!-- <MainLogo /> -->

    <!-- <section class="hero">
                <div class="hero-body">

                </div>
            </section> -->
    <br />
    <p class="block title is-size-4">Welcome to the ELM Lab!</p>
    <br />
    <div class="block">
      <div class="content has-text-left is-size-custom">
        Every day, people make new discoveries, large and small. A scientist
        discovers a new species. A student discovers a new way to solve a math
        problem. A child discovers what happens when they throw mashed potatoes
        at the wall.
      </div>
      <div class="content has-text-left is-size-custom">
        The ELM (Exploration, Learning, and Mind) Lab, led by Dr. Emily Liquin
        at the
        <a href="https://unh.edu" target="_blank">University of New Hampshire</a
        >, uses the tools of cognitive science to understand how people learn
        new things and make new discoveries. We study the human capacities that
        underlie discovery: curiosity, exploration, question asking, and
        innovation.
      </div>
    </div>

    <br />
    <News />

    <!-- <div class="columns">
                <div class="column">
                    <News />
                </div>
                <div class="column">
                   <Highlight /> 
                </div>
            </div>   -->

    <!-- <div class="block has-text-left">
                <div class="content">
                    The ELM Lab is committed to conducting research that is:
                <ul>
                    <li>theoretically motivated and rigorous</li>
                    <li>transparent and replicable</li>
                    <li>impactful for broader societal issues</li>
                    <li>meaningful and fun for our participants</li>
                </ul>
                </div>

            </div>
            <div class="block has-text-left">
                We are also committed to fostering a lab culture that is
            </div> -->
  </div>
</template>

<style scoped>
.is-size-custom {
  font-size: 1.15rem;
}

.hero {
  background-color: var(--light);
}
</style>
