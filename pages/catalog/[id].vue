<template>
  <div class="container">
    <h1>
      {{ data.Title }}
    </h1>
    <br><br>
    <pre>
      {{ data }}
    </pre>
    <br><br>
    <button @click="testPostReq">
      testPostReq
    </button>
  </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id

const { data } = await useAsyncData(
    `mountains-${id}`,
    () => $fetch(`https://interview-api-luvkm7etwa-uc.a.run.app/people/${id}`)
)

const firebaseUser = useFirebaseUser();

const testPostReq = () => {
  $fetch('https://interview-api-luvkm7etwa-uc.a.run.app/people/FpqbSZIGpHly', {
    method: "post",
    headers: {
      'X-Auth-Token': `${firebaseUser.value.accessToken}`,
    }
  })
}
</script>

<style scoped>

</style>
