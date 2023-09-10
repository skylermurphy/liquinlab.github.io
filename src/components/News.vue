<script setup>
import {reactive} from 'vue';
import oboe from 'oboe'; // ajax support

// import newsdata from '../data/news.json'

const news = reactive({newsitems: []});

oboe('/data/news.json?nocache=' + (new Date()).getTime())  // don't cache the json file
  .node('news.*', (entry) => {
    news.newsitems.push(entry);
  })



</script>

<template>
    <div class = "title">
        Lab News
    </div>
    
    <div v-for="i in news.newsitems" class="has-text-left is-size-custom">
      <div class = "newsitem">
        <b>{{ i.date }}:</b> <span v-html="i.content"></span>
      </div>
    </div>


</template>

<style scoped>

.newsitem {
  margin-bottom: 10px;
}
.is-size-custom{
    font-size: 1.15rem;
}


</style>