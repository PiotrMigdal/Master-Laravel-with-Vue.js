<template>
  <div>
    <bookable-list-item title="Cheap Villa" content="A very cheap villa"></bookable-list-item>
    <bookable-list-item title="Cheap Villa2" content="A very cheap villa2"></bookable-list-item>
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