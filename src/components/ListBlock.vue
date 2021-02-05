<template>
  <div class="list-block">
    <list-header>
      <template v-slot:title> {{ title }} (5) </template>
    </list-header>

    <ul class="movie-list" v-if="movies.length">
      <li class="movie-item" v-for="item in movies" :key="item.id">
        <div class="img-block">
          <img :src="item.poster" alt="">
        </div>
        <div class="movie-title">
          {{item.title}}
        </div>
      </li>
    </ul>

    <div v-else>
      <img width="100" height="100" src="@/assets/images/noresult.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListHeader from "@/components/ListHeader.vue";

export default defineComponent({
  name: "ListBlock",
  components: {
    ListHeader,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    movies: {
      type: Array,
      required: true,
      default: () => [],
    },
    type: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.list-block {
  box-sizing: border-box;
  padding: 15px;
  background-color: #fff;
  .movie-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    .movie-item {
      width: 30%;
      .img-block{ 
        width: 100%;
        height: 80%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .movie-title {
        padding: 10px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        color: #323232;
        letter-spacing: 1px;
        text-align: center;
      }
    }
  }
}
</style>
