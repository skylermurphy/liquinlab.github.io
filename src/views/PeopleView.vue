<script setup>
import {reactive} from 'vue';
import oboe from 'oboe'; // ajax support



const people = reactive({individuals: []});

oboe('/data/people.json?nocache=' + (new Date()).getTime())  // don't cache the json file
  .node('people.*', (entry) => {
    people.individuals.push(entry);
  })


</script>

<template>
  <div class="page">

      <div class = "title has-text-center">
            People
      </div>

        <div v-for="i in people.individuals" class="has-text-left is-size-custom">
          <div class="card is-shadowless">
            <div class="card-content">
                    <div class="columns">
                        <div class="column is-narrow">
                          <div class="image-container">
                            <figure class="image prsnimg">
                              <img :src='"/peoplephotos/" + i.img' :alt="i.name">
                            </figure>
                          </div>
                        </div>
                        <div class="column">
                          <div class="media-left">

                          <p class="title has-text-left is-4">{{ i.name }}</p>
                          <div class="content has-text-left is-size-custom">
                              <span v-html="i.bio"></span>
                            </div>
                            <div class="linkcontainer">
                                <a v-for="link in i.links" class="tag is-size-6" :href="link.url" target="_blank">{{ link.name }}</a>
                            </div>

                            </div>
                        </div>
                    </div> 
                  </div>
            </div>
            <hr>
        </div>







  





    

  </div>
    


</template>

<style scoped>

.card {
  height: max-content;
  padding-bottom: 15px;
  width: 100%;
}

.card-content{
	padding-left: 1rem;
	padding-right: 1rem;
	
}

.image-container {
  display: flex;
}

.prsnimg {
  width: 200px;
  height: 200px;
}

.tag{
    margin-right: 10px;
    background-color: var(--light);
    margin-bottom: 5px;
}

.is-size-custom{
  font-size: 1.15rem
}

</style>
