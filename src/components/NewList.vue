<template>   
  <div v-if="showButton == true" class="new-list">
      <div class="new-list__container">
          <button class="primary">+</button>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        showButton: {
            default: true,
            type: Boolean
        }
        
    }
}
</script>

<style lang="scss">
    .new-list {
        position: fixed;
        top: 20px;
        right: 20px;
    }
</style>