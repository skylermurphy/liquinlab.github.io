<script setup>
import { reactive } from "vue";
import oboe from "oboe"; // ajax support
// comment
// import newsdata from '../data/news.json'

const news = reactive({ newsitems: [] });

oboe("/data/news.json?nocache=" + new Date().getTime()) // don't cache the json file
  .node("news.*", (entry) => {
    news.newsitems.push(entry);
  });
</script>

<template>
  <div class="title">Lab news</div>

  <div class="newsbox">
    <div v-for="i in news.newsitems" class="has-text-left is-size-custom">
      <div class="newsitem">
        <b>{{ i.date }}:</b> <span v-html="i.content"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.newsitem {
  margin-bottom: 10px;
}
.is-size-custom {
  font-size: 1rem;
}

/* make newsbox style so it scrolls */
.newsbox {
  max-height: 150px;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid var(--main-green);
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 0px 5px var(--medium);
  margin-bottom: 20px;
  margin-top: 20px;
  scrollbar-color: #cce9d9 var(--background-color);
}
</style>
