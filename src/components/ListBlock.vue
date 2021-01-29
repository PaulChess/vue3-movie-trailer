<template>
  <div class="list-block">
    <list-header>
      <template v-slot:title>
        {{title}} (5)
      </template>
    </list-header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListHeader from '@/components/ListHeader.vue'

export default defineComponent({
  name: 'ListBlock',
  components: {
    ListHeader
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    return {}
  }
})
</script>

<style lang="less" scoped>
.list-block {
  box-sizing: border-box;
  padding: 15px;
  background-color: #fff;
}
</style>
