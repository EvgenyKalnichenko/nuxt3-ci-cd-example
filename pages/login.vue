<template>
  <div class="container">
    <div class="container mt-6">
      <div class="column is-half is-offset-one-quarter">
        <AuthFirebase
          v-if="showRegisterForm"
          class="box px-5 py-5 mx-4"
          title="Register"
          :form="registerForm"
          :message="registerMessage"
          @submit="register"
        />
        <AuthFirebase
          v-if="!showRegisterForm"
          class="box px-5 py-5 mx-4"
          title="Sign in"
          :form="signinForm"
          @submit="signin"
        />
      </div>
      <div class="level">
        <div class="level-item has-text-centered">
          <button
            class="button"
            @click="showRegisterForm = !showRegisterForm"
          >
            {{ toggleButtonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const showRegisterForm = ref(false);
const registerMessage = ref();
const registerForm = ref({ email: "", password: "" });
const signinForm = ref({ email: "", password: "" });

const toggleButtonText = computed(() => {
  return showRegisterForm.value ? "Sign in" : "Register";
});

const signin = async () => {
  const result = await signInUser(signinForm.value.email, signinForm.value.password);
  console.log('result', result)
  // signinForm.value = { email: "", password: "" };
};

const register = async () => {
  console.log(registerForm.value);
  const credentials = await createUser(
      registerForm.value.email,
      registerForm.value.password
  );
  registerForm.value = { email: "", password: "" };

  if (credentials) {
    registerMessage.value = `Successfully registered: ${credentials.user.email}`;
    setTimeout(() => {
      registerMessage.value = "";
    }, 3000);
  }
};
</script>

<style scoped>

</style>
