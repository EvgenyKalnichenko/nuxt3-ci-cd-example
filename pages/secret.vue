<template>
  <div class="container">
    <div v-if="firebaseUser">
      <div>{{ data }}</div>
      <br>
      <pre>{{ firebaseUser }}</pre>
      <br>
      <button @click="getToken()">
        get accessToken
      </button>
    </div>
    <div v-else>
      User is signed out
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

const { data } = useFetch('/api/secret')

const firebaseUser = useFirebaseUser();

const getToken = () => {
  getIdToken()
}
</script>

<style></style>
