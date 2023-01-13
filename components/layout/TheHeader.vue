<template>
  <header class="header">
    <div class="header__container container">
      <nav>
        <NuxtLink to="/">
          Home
        </NuxtLink>
        <NuxtLink to="/secret">
          Profile
        </NuxtLink>
        <NuxtLink to="/login">
          Login
        </NuxtLink>
      </nav>
      <div
        v-if="firebaseUser"
        class="header__right"
      >
        <div class="header__user">
          {{ firebaseUser.email }}
        </div>
        <button
          v-if="firebaseUser"
          class="button"
          @click="signOut"
        >
          Sign out
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
const firebaseUser = useFirebaseUser();


const signOut = async () => {
  await signOutUser();
};
</script>

<style lang="scss" scoped>
.header {
  background: #fff;
  padding: 20px;

  &__right {
    display: flex;
    align-items: center;
    gap: 20px;
    @include sm-screen {
      flex-direction: column;
      justify-content: center;
    }
  }

  &__container {
    display: flex;
    min-height: 40px;
    align-items: center;
    justify-content: space-between;

  }
}
nav {
  display: flex;
  gap: 15px;
  @include sm-screen {
    flex-direction: column;
    justify-content: center;
  }
}
</style>
