<template>  
  <SavedLists />
  <StartApp />
  <ListTitle />
  <List />
</template>

<script>
import ListTitle from '@/components/ListTitle.vue'
import List from '@/components/ListItems.vue'
import NewList from '@/components/NewList.vue'
import StartApp from '@/components/StartApp.vue'
import SavedLists from '@/components/SavedLists.vue'

import StoreData from '@/store-data'
import { provide } from '@vue/runtime-core'

export default {
  name: 'App',
  components: {
    ListTitle,
    List,
    NewList,
    StartApp,
    SavedLists
  },  
  setup() {
    provide('storeData', StoreData)    
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
</style>
