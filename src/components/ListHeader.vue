<template>
  <div class="list-header">
    <h2 class="left-title">
      <slot name="title"></slot>
    </h2>
    <div class="jump-arrow">
      <i>
        <svg class="icon svg-icon icon-jiantou">
          <use xlink:href="#icon-jiantou"></use>
        </svg>
      </i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>

<style lang="less" scoped>
.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-title {
    font-size: 16px;
  }
  .icon-jiantou {
    font-size: 12px;
  }
}
</style>