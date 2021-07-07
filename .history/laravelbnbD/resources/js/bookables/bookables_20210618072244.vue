<!-- You need to v-bind so you can pass it as a number -->
<template>
  <div>
    <bookable-list-item item-title="Cheap Villa" item-content="A very cheap villa" v-bind:price="1000"></bookable-list-item>
    <bookable-list-item item-title="Cheap Villa2" item-content="A very cheap villa2" v-bind:price="1500"></bookable-list-item>
  </div>
</template>

<!-- Register local component -->
<script>
import BookableListItem from './BookablesListItem';
export default {
  components: {
    //If you do name of component BookableListItem you can do <BookableListItem> or <bookable-list-item>
    BookableListItem
    }
}
</script>