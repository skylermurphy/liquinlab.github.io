<script setup>
import { reactive, ref } from "vue";
</script>

<template>
  <div class="page">
    <div class="title has-text-center">For parents</div>
    <div class="content has-text-left is-size-custom">
      We conduct studies with 3- to 10-year-old children, and we are very
      grateful to the participating families who make our research possible! Our
      goal is to better understand how children's ability to learn from their
      environment develops. We hope that this research can be used to inform
      educational practices and improve children's learning in their day-to-day
      lives.
    </div>
    <hr />

    <div class="columns">
      <div class="column is-two-thirds">
        <div class="is-size-4 is-underlined has-text-weight-bold has-text-left">
          Online studies
        </div>

        <div class="content has-text-left is-size-custom">
          If you're interested in having your child participate in one of our
          online studies, you can find us on
          <a href="https://childrenhelpingscience.com/" target="_blank"
            >Children Helping Science</a
          >, a platform that connects developmental psychology researchers with
          families all over the world. Our online studies, are short, fun
          computer games that you can do from your own home computer.
          <br />
          <br />
          <span style="font-size: 1.3rem"
            ><b
              >Online studies can be found here:
              <a
                href="https://childrenhelpingscience.com/studies/elm-lab-unh/"
                target="_blank"
                rel="noopener noreferrer"
                >ELM Lab @ Children Helping Science</a
              >
            </b>
          </span>
        </div>

        <div class="content has-text-left is-size-custom">
          If we don't have any studies available at the moment, we encourage you
          to check back often. We update our studies regularly! You can also
          register for a profile on Children Helping Science and check out the
          studies from other research labs.
        </div>
      </div>
      <div class="column">
        <br />
        <figure class="image">
          <img src="../assets/child_on_computer_adobestock.jpeg" />
        </figure>
      </div>
    </div>

    <hr />

    <div class="columns">
      <div class="column is-one-third">
        <br />
        <figure class="image">
          <img src="../assets/child_play_adobestock.jpeg" />
        </figure>
      </div>
      <div class="column">
        <div class="is-size-4 is-underlined has-text-weight-bold has-text-left">
          In-person studies
        </div>

        <div class="content has-text-left is-size-custom">
          We are not currently recruiting participants for in-person studies.
          Check back later for updates!
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.is-size-custom {
  font-size: 1.15rem;
}

.box {
  background-color: var(--light);
}

.listopapers {
  margin: 0px;
}

ul {
  margin-top: 0px;
}
</style>
