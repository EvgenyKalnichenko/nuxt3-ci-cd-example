<template>
  <div>
    <h2 class="title is-4 has-text-black">
      {{ title }}
    </h2>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          v-model="form.email"
          class="input"
          type="email"
          placeholder="john@gmail.com"
          autocomplete="false"
        >
        <span class="icon is-small is-left">
          <i class="fas fa-envelope" />
        </span>
      </div>
    </div>
    <div class="field">
      <div>
        <label class="label">Password</label>
        <div class="control">
          <input
            v-model="form.password"
            class="input"
            type="password"
            placeholder="*************"
            autocomplete="false"
          >
        </div>
      </div>
    </div>

    <div
      v-if="message"
      class="has-text-success p-3"
    >
      {{ message }}
    </div>

    <button
      class="button is-success"
      @click="$emit('submit')"
    >
      Submit
    </button>
  </div>
</template>

<script setup>
defineProps({
  form: Object,
  title: String,
  message: String
});
</script>

<style scoped></style>
