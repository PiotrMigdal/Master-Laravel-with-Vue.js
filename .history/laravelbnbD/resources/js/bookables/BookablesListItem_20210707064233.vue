<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ itemTitle }}</h5>
      <p class="card-text">{{ itemContent }}</p>
    </div>
  </div>
</template>
<script>
export default {
  //You can set up props then give them value (see bookables.vue - if you use camel case here you need to use kebab case in HTML "item-content"). You need to add them in double curly braces
  props: {'itemTitle': String, 'itemContent': String, 'price': Number}
}
</script>