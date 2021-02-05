<template>
  <header id="header">
    <div class="logo" ref="logo">
      <i class="back"></i>
    </div>
    <ul class="tabs">
      <li class="tab-item"
        :class="currIndex === index ? 'active-tab' : ''"
        :ref="currIndex === index ? 'activeTab' : ''"
        v-for="(tab, index) in tabList"
        :key="tab.name"
        @click="chooseTab(index)">
        {{ tab.name }}
      </li>
      <div class="active-line" :style="activeTabLineStyle"></div>
    </ul>
    <div class="user">
      <i>
        <svg class="icon svg-icon">
          <use xlink:href="#icon-user"></use>
        </svg>
      </i>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, Ref, ref, watch } from 'vue'
import { useRoute, useRouter } from "vue-router";
// import $ from 'jquery'

export default defineComponent({
  setup () {
    const route = useRoute();
    const router = useRouter();
    const activeTab: Ref | null = ref(null);
    const currIndex = ref(0);
    const tabList = reactive([
      { name: '首页', link: '/home' },
      { name: '分类', link: '/category' },
      { name: '榜单', link: '/rank' },
      { name: '搜索', link: '/search' }
    ]);
    const chooseTab = (index: number) => {
      router.push({ path: tabList[index].link });
    }
    const activeTabLineStyle = computed(() => {
      let translatexVal = 0;
      if (activeTab.value) {
        translatexVal = activeTab.value.offsetLeft +  activeTab.value.clientWidth / 2 - 15;
      }
      return {
        'transform': `translateX(${translatexVal}px)`
      };
    })

    watch(route, (newRoute) => {
      for (let i = 0; i < tabList.length; i++) {
        if (tabList[i].link === newRoute.path) {
          currIndex.value = i;
        }
      }
    })

    return {
      currIndex,
      tabList,
      chooseTab,
      activeTabLineStyle,
      activeTab
    }
  }
})
</script>

<style lang="less" scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 56px;
  line-height: 56px;
  background-color: #1c2635;
  font-size: 16px;
  color: #606266;
  font-family: Helvetica;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 25%;
    height: 100%;
    box-sizing: border-box;
    padding: 15px;
    .back {
      display: block;
      height: 100%;
      background: url('~@/assets/images/logo.png') no-repeat center;
      background-size: contain;
    }
  }
  .tabs {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    .tab-item {
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .active-line {
      width: 30px;
      height: 3px;
      background-color: #fff;
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translateX(0);
      transition: all .3s ease-in-out;
    }
    .active-tab {
      color: #fff;
      font-weight: bold;
    }
  }
  .user {
    width: 15%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
</style>
