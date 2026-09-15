<script setup>
import { computed, ref } from "vue";

import q1Image from "../assets/q1.png";
import q2Image from "../assets/q2.png";
import q3Image from "../assets/q3.png";
import q4Image from "../assets/q4.png";
import q5Image from "../assets/q5.png";
import DesignQuestion from "./DesignQuestion.vue";

const page = ref("q1");
const q1Answer = ref("");
const q2Answer = ref("");
const q3Answer = ref("");
const q4Answer = ref("");
const q5Answer = ref("");

const score = computed(() => {
  let tmpScore = 0;
  if (q1Answer.value === "a3") {
    tmpScore = tmpScore + 1;
  }
  if (q2Answer.value === "a2") {
    tmpScore = tmpScore + 1;
  }
  if (q3Answer.value === "a3") {
    tmpScore = tmpScore + 1;
  }
  if (q4Answer.value === "a1") {
    tmpScore = tmpScore + 1;
  }
  if (q5Answer.value === "a3") {
    tmpScore = tmpScore + 1;
  }
  return tmpScore;
});

function nextPage() {
  if (page.value === "q1") {
    page.value = "q2";
  } else if (page.value === "q2") {
    page.value = "q3";
  } else if (page.value === "q3") {
    page.value = "q4";
  } else if (page.value === "q4") {
    page.value = "q5";
  } else if (page.value === "q5") {
    page.value = "result";
  }
}

function prevPage() {
  if (page.value === "q5") {
    page.value = "q4";
  } else if (page.value === "q4") {
    page.value = "q3";
  } else if (page.value === "q3") {
    page.value = "q2";
  } else if (page.value === "q2") {
    page.value = "q1";
  }
}
</script>

<template>
  <main class="bg-design-light">
    <h1>Design</h1>
    <DesignQuestion v-if="page === 'q1'" name="q1" question="Q1 What is the main purpose of wireframing?"
      :image="q1Image"
      :answers="[['a1', 'To finalise the graphic design of the website'], ['a2', 'To write the code for the website'], ['a3', 'To create a blueprint of the website\'s structure and layout'], ['a4', 'To choose the colour scheme for the website']]"
      v-model="q1Answer" @next-page="nextPage" :hide-back="true">
    </DesignQuestion>
    <DesignQuestion v-if="page === 'q2'" name="q2"
      question="Q2 Which of the following elements is typically NOT included in a wireframe?" :image="q2Image"
      :answers="[['a1', 'Placeholder text and images'], ['a2', 'Detailed colour schemes, typography and images'], ['a3', 'Navigation menus and buttons structure and layout'], ['a4', ' Content layout and structure']]"
      v-model="q2Answer" @next-page="nextPage" @prev-page="prevPage">
    </DesignQuestion>
    <DesignQuestion v-if="page === 'q3'" name="q3"
      question="Q3 Which of the following is NOT a component/principle of web usability?" :image="q3Image"
      :answers="[['a1', 'Learnability'], ['a2', 'Efficiency'], ['a3', 'Complex navigation'], ['a4', 'Memorability'], ['a5', 'Errors']]"
      v-model="q3Answer" @next-page="nextPage" @prev-page="prevPage">
    </DesignQuestion>
    <DesignQuestion v-if="page === 'q4'" name="q4"
      question="Q4 Usability can be defined as 'a quality attribute that assesses how easy user interfaces are to use'."
      :image="q4Image" :answers="[['a1', 'True'], ['a2', 'False']]" v-model="q4Answer" @next-page="nextPage"
      @prev-page="prevPage">
    </DesignQuestion>
    <DesignQuestion v-if="page === 'q5'" name="q5"
      question="Q5 How important is keyboard operability to web accessibility?" :image="q5Image"
      :answers="[['a1', 'It is only necessary for people with limited mobility'], ['a2', 'Keyboard operability is irrelevant to web accessibility'], ['a3', 'Websites and apps need to be operable by keyboard for all users'], ['a4', ' It is only essential fo users with a broken mouse']]"
      v-model="q5Answer" @next-page="nextPage" @prev-page="prevPage">
    </DesignQuestion>
    <section v-if="page === 'result'">
      <p class="text-center text-white result">You scored {{ score }}/5</p>
      <p>You have completed the quiz.</p>
      <p><button>Retry the quiz</button></p>
    </section>
  </main>
</template>


<style scoped>
main {
  padding: 1px 5%;
}

section {
  padding-bottom: 10px;
}

.result {
  background: #24285c;
  padding: 10px;
  font-size: 24px;
}
</style>