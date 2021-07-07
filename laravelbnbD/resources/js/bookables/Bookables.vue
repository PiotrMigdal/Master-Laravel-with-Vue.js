<!-- You need to v-bind so you can pass it as a number -->
<template>
  <div>
    <!-- you need to add :key for this -->
    <div v-if="loading">
    This page is loading...
    </div>
    <div v-else>
      <div class="row mb-4" v-for="row in rows" :key="'row' + row">
        <div class="col"
        v-for="(bookable, column) in bookablesInRow(row)"
        :key="'row' + row + column"
        >
          <bookable-list-item
          :item-title="bookable.title"
          :item-content="bookable.content"
          :price="1000">
          </bookable-list-item>
        </div>
        <div class="col" v-for="p in placeholdersInRow(row)" :key="'placeholder' + row + p"></div>
      </div>
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
        loading: false,
        columns: 3
      }
    },
    //you can use coputed object to comput something . i.e we checking how many rowns of elements will be
    computed: {
      rows() {
        return this.bookables === null ? 0 : Math.ceil(this.bookables.length / this.columns);
      }
    },
    //You can create methods that you can use in templates(remember about "this.")
    methods: {
      bookablesInRow(row) {
        return this.bookables.slice((row - 1) * this.columns, row * this.columns);
      },
      placeholdersInRow(row) {
        return this.columns - this.bookablesInRow(row).length;
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