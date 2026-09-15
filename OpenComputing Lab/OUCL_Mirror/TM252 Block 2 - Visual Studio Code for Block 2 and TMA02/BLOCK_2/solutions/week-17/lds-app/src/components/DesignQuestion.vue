<script setup>
const props = defineProps(["name", "question", "image", "answers", "hide-back"]);
const emit = defineEmits(["nextPage", "prevPage"]);

const model = defineModel();

function submitForm(ev) {
  ev.preventDefault();
  emit("nextPage");
}
</script>

<template>
  <section class="row">
    <div class="col">
      <img :src="image" alt="" class="d-block border border-white border-5" />
    </div>
    <form class="col d-flex flex-column" @submit="submitForm">
      <fieldset class="flex-grow-1">
        <legend>
          <h2>{{ question }}</h2>
        </legend>
        <label v-for="[value, label] in answers" :class="{ selected: model === value }">
          <input type="radio" :name="name" :value="value" v-model="model" /> {{ label }}
        </label>
      </fieldset>
      <div class="d-flex justify-content-between">
        <span v-if="hideBack"></span>
        <button type="button" @click="$emit('prevPage')" v-if="!hideBack">&lt; Back</button>
        <button type="submit">Next &gt;</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
img {
  border-radius: 10px;
  margin-bottom: 60px;
}

label {
  display: block;
  padding: 10px;
  background: #fefefe;
  border: 1px solid #af216b;
  border-radius: 5px;
  margin: .5rem 0;
}

label:focus-within,
label.selected {
  border: 3px solid #af216b;
}

input[type="radio"] {
  accent-color: #3a3381;
}
</style>