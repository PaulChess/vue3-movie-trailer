<template>
  <the-header />
  <div class="layout-content">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
  }
})
</script>

<style lang="less">
#app {
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 56px;
  font-family: Helvertca;
  font-weight: 500;
}
.layout-content {
  min-height: calc(100vh - 56px);
  background-color: #fff;
}
</style>
