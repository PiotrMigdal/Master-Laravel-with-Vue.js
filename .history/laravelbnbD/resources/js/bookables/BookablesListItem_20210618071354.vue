<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>
<script>
export default {
  //You can set up props then give them value (see bookables.vue). You need to add them in double curly braces
  props: ['title', 'content']
}
</script>