<template>
  <div>
    <h1>{{ itemTitle }}</h1>
    <p>{{ itemContent }}</p>
  </div>
</template>
<script>
export default {
  //You can set up props then give them value (see bookables.vue - if you use camel case here you need to use kebab case in HTML [item-conent]). You need to add them in double curly braces
  props: ['itemTitle', 'itemContent']
}
</script>