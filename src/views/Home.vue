<template>
  <div class="home">
    <list-block
      :movies="hotMovies.playing.movies"
      type="0"
      title="正在热映">
    </list-block>
    <div class="spacing"></div>
    <list-block
      :movies="hotMovies.comming.movies"
      type="1"
      title="即将上映">
    </list-block>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import ListBlock from '@/components/ListBlock.vue'
import { Movie } from '@/types/movie'
import { getHotMoves } from '@/http/apis'

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
    const hotMovies: RecommendData = reactive({
      comming: { count: 0, movies: [] },
      playing: { count: 0, movies: [] }
    });
    getHotMoves().then(res => {
      if (res.data.code === 200) {
        hotMovies.comming = res.data.data.comming;
        hotMovies.playing = res.data.data.playing;  
      }
    })

    return {
      hotMovies
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
