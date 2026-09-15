<script setup>
defineEmits(["update:modelValue"])
</script>

<template>
  <main class="container-fluid">
    <div class="row">
      <section class="col-sm-6 col-md-4 col-lg-3 bg-design">
        <h1>Design</h1>
        <p>Test your design knowledge in our quiz.</p>
        <button @click="$emit('update:modelValue', 'design')" aria-label="Go to Design section"
          title="Go to Design section">Start &gt;</button>
      </section>
      <section class="col-sm-6 col-md-4 col-lg-3 bg-develop">
        <h1>Develop</h1>
        <p>You have been given some HTML and CSS in which there are deliberate errors. Can you find and fix them
          all?
        </p>
        <button @click="$emit('update:modelValue', 'develop')" aria-label="Go to Develop section"
          title="Go to Develop section">Start &gt;</button>
      </section>
      <section class="col-sm-6 col-md-4 col-lg-3 bg-testing">
        <h1>Testing</h1>
        <p>Time to log some issues! This time you have been asked to look at a webpage and identify
          accessibility
          issues.
          You then need to log the issues in the issue tracker.</p>
        <button @click="$emit('update:modelValue', 'testing')" aria-label="Go to Testing section"
          title="Go to Testing section">Start &gt;</button>
      </section>
      <section class="col-sm-6 col-md-4 col-lg-3 bg-feedback">
        <h1>Feedback</h1>
        <p>When you have done these activities, check here to see how well you did.</p>
        <button @click="$emit('update:modelValue', 'feedback')" aria-label="Go to Feedback section"
          title="Go to Feedback section">Start &gt;</button>
      </section>
    </div>
  </main>
</template>

<style scoped>
section {
  padding: 50px;
}
</style>