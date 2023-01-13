<template>
  <div class="container">
    <h1>Catalog</h1>
    <div class="catalog">
      <CardPeople
        v-for="people in users"
        :key="`people-${people.Id}`"
        :people="people"
      />
    </div>
    <div
      id="line-observer"
      class="line-observer"
    />
  </div>
</template>

<script setup>
import CardPeople from "../components/card/CardPeople";

const pageIndex = ref(0)
const getPeople = async () => await $fetch(`https://interview-api-luvkm7etwa-uc.a.run.app/people?p=${pageIndex.value}&pp=8`)
const { data } = await useAsyncData(
    'mountains',
    getPeople
)

const users = ref(data)
let observer = ref(null)
let debounce = null

onMounted(() => {
  debounce = setTimeout(() => {
    const options = {
      rootMargin: '200px',
      threshold: 0.5
    }
    observer = new IntersectionObserver(async (entries) => {
      if(entries[0].isIntersecting) {
        console.log('loading...')
        pageIndex.value++
        const data = await getPeople()
        if(data && data.length) {
          users.value.push(...data)
        } else {
          console.error('Элементов не найдено');
          observer.unobserve(document.querySelector('#line-observer'));
        }
      }
    }, options);
    observer.observe(document.querySelector('#line-observer'));
  }, 200)
})

onUnmounted(() => {
  clearTimeout(debounce)
})
</script>

<style lang="scss" scoped>
.catalog {
  padding: 50px 0;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(4,1fr);
  flex-wrap: wrap;

  @include xl-screen {
    grid-gap: 20px;
  }

  @include md-screen {
    grid-template-columns: repeat(3,1fr);
  }

  @include xs-screen {
    grid-gap: 20px;
    grid-template-columns: repeat(2,1fr);
  }
}
</style>
