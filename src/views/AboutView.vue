<script setup>
import {reactive, ref} from 'vue';
import oboe from 'oboe'; // ajax support

// find publications
const f1 = reactive({papers: []});
const f2 = reactive({papers: []});
const f3 = reactive({papers: []});

oboe('/data/publications.json?nocache=' + (new Date()).getTime())  // don't cache the json file
  .node('peer-reviewed.*', (entry) => {

    // add the url to the entry
    // where the url is in the links field with name paper
    entry["url"] = entry.links.find(l => l.name === "link").url;
    // get if the paper has f1 in the feature field
    if (entry.feature && entry.feature == "f1"){
        f1.papers.push(entry);
    }
    if (entry.feature && entry.feature == "f2"){
        f2.papers.push(entry);
    }
    if (entry.feature && entry.feature == "f3"){
        f3.papers.push(entry);
    }
  })



</script>

<template>
    <div class="page">

        <div class = "title has-text-center">
            Our research
        </div>
        <div class="content has-text-left is-size-custom">
            The goal of our research is to understand the cognitive, computational, and developmental mechanisms underlying learning and discovery. 
            We are especially interested in understanding how humans play an <i>active role</i> in guiding their own learning.
            For example, people pursue their curiosity. They ask questions. They try out new ideas. 
            At its core, our research asks: How do these active learning strategies help people learn new things? And why do we sometimes fail to learn?
        </div>

        <div class="content has-text-left is-size-custom">
            Here are some questions we've been asking recently:
        </div>

        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile is-parent">
                    <div class="tile is-child box">
                        <p class="is-size-5 has-text-weight-bold">How does exploration change across development?</p>
                        <div v-for="p in f2.papers" class="content listopapers has-text-left is-size-6">
                            <ul>
                                <li>
                                    {{ p.title }}. ({{ p.authors_short }}, {{ p.year }}) 
                                    <a :href="p.url" target="_blank"> [link]</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div class="tile is-parent">
                    <div class="tile is-child box">
                        <p class="is-size-5 has-text-weight-bold">How can teachers facilitate students' discovery?</p>
                        <div v-for="p in f3.papers" class="content listopapers has-text-left is-size-6">
                            <ul>
                                <li>
                                    {{ p.title }}. ({{ p.authors_short }}, {{ p.year }}) 
                                    <a :href="p.url" target="_blank"> [link]</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                

            </div>
            <div class="tile is-parent">
                    <div class="tile is-child box">
                        <p class="is-size-5 has-text-weight-bold">What triggers curiosity?</p>
                        <div v-for="p in f1.papers" class="content listopapers has-text-left is-size-6">
                            <ul>
                                <li>
                                    {{ p.title }}. ({{ p.authors_short }}, {{ p.year }}) 
                                    <a :href="p.url" target="_blank"> [link]</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

        </div>

<hr>
<div class = "title has-text-center">
            Our values
        </div>
        <div class="content has-text-left is-size-custom">
            The ELM Lab is committed to conducting research that:

                <ul>
                    <li>is theoretically motivated and rigorous</li>
                    <li>is transparent and replicable (following open science practices)</li>
                    <li>has real-world relevance</li>
                    <li>is meaningful and fun for our participants</li>
                </ul>
            


        </div>

        <div class="content has-text-left is-size-custom">
            In addition to these scientific values, the ELM Lab is committed to <b>building a supportive lab community</b>: providing feedback on each other's work, looking out for each other's mental health and well-being, and celebrating each other's successes. 
        </div>
        <div class="content has-text-left is-size-custom">
            We are committed to <b>continually learning</b>: developing the skills we need to pursue our research, seeking others' expertise when needed, and learning from our mistakes.
        </div>
        <div class="content has-text-left is-size-custom">
            We are committed to <b>diversity, equity, inclusion, and belonging</b>. We work to break down the barriers to full participation in science that disproportionately impact individuals with marginalized identities. We work to make our lab, department, and field a place where everyone feels valued and can thrive.
        </div>


    </div>
</template>

<style scoped>
.is-size-custom{
    font-size: 1.15rem;
}

.box{
    background-color: var(--light);
}

.listopapers{
    margin: 0px;
}

ul{
    margin-top: 0px;
}

</style>