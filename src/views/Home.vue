<template>
  <div class="home">
    <list-block
      title="正在热映">
    </list-block>
    <div class="spacing"></div>
    <list-block
      title="即将上映">
    </list-block>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListBlock from '@/components/ListBlock.vue'
import { useRequest } from '@/http/index'
import { Movie } from '@/types/movie'

interface Item {
  count: number;
  movies: Movie[];
}

interface RecommendData {
  comming: Item;
  playing: Item;
}

export default defineComponent({
  components: {
    ListBlock
  },
  setup () {
    const initialData: RecommendData = {
      comming: { count: 0, movies: [] },
      playing: { count: 0, movies: [] }
    }
    const { data, loading } = useRequest("/api/movie/hot", undefined, {
      initialData
    });
    console.log(data);
    console.log(loading);
    return {
      data,
      loading
    }
  }
})
</script>

<style lang="less" scoped>
.home {
  .spacing {
    width: 100%;
    height: 10px;
    background-color: rgb(249, 249, 249);
  }
}
</style>
