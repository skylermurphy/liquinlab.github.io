<script setup>
import {reactive, onMounted} from 'vue';
import oboe from 'oboe'; // ajax support



const people = reactive({individuals: []});

oboe('/data/people.json?nocache=' + (new Date()).getTime())  // don't cache the json file
  .node('people.*', (entry) => {


    // if type is PI, set to Principal Investigator
    if (entry.type === "PI"){
      entry.type = "Principal Investigator";
    }
        // if type is grad student, set to Graduate Students
    if (entry.type === "Grad Student"){
      entry.type = "Graduate Students";
    }
    // if type is RA, set to Research Assistants
    if (entry.type === "RA"){
      entry.type = "Research Assistants";
    }

    // if this is the first entry of a particular category, set first to true
    const first = people.individuals.filter(p => p.type === entry.type).length === 0;
    entry["first"] = first;
    
    people.individuals.push(entry);
  })


</script>

<template>
  <div class="page">

      <div class = "title has-text-center">
            People
      </div>


        <div v-for="i in people.individuals" class="has-text-left is-size-custom">
          <div v-if="i.first" class = "is-size-4 is-underlined has-text-weight-bold has-text-left">
                {{ i.type }}
          </div>
          <div class="card">
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

                          <p class="title has-text-left is-5">{{ i.name }}</p>
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
            <br>
        </div>







  





    

  </div>
    


</template>

<style scoped>

.card {
  height: max-content;
  padding-bottom: 0px;
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
  font-size: 1rem
}

</style>
