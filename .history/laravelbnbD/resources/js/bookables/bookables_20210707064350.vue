<!-- You need to v-bind so you can pass it as a number -->
<template>
  <div>
    <!-- you need to add :key for this -->
    <div v-if="loading">
    This page is loading...
    </div>
    <div v-else>
      <bookable-list-item
      :item-title="bookable.title"
      :item-content="bookable.content"
      :price="1000"
      v-for="(bookable, index) in bookables"
      :key="index">
      </bookable-list-item>
    </div>

  </div>
</template>

<!-- Register local component -->
<script>
import BookableListItem from './BookablesListItem';
export default {
  components: {
    //If you do name of component BookableListItem you can do <BookableListItem> or <bookable-list-item>
    BookableListItem
    },
    data() {
      //data is null at the beginning and then will display
      return {
        bookables: null,
        loading: false
      }
    },
    created() {
      this.loading = true;
      //datas is reactive and will display after 2 secs
      setTimeout(() => {
        this.bookables = [
          {
          title: "Cheap Villa",
          content: "A Very cheap villa"
          },
          {
            title: "Cheap Villa2",
            content: "A Very cheap villa2"
          },
          {
            title: "Cheap Villa2",
            content: "A Very cheap villa2"
          },
          {
            title: "Cheap Villa2",
            content: "A Very cheap villa2"
          },
          {
            title: "Cheap Villa2",
            content: "A Very cheap villa2"
          },
          {
            title: "Cheap Villa2",
            content: "A Very cheap villa2"
          },
          {
            title: "Cheap Villa2",
            content: "A Very cheap villa2"
          }
        ];
        this.loading = false;
      }, 2000);
    },
    mounted() {
      console.log('mounted');
    }
}
</script>