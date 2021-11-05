<template>
  <div class="app">
    <div @click="handleClick">我是 Vue 通过 .vue 文件创建出来的 {{ msg }}</div>
    <hello-world />
  </div>
</template>

<script>
  import HelloWorld from './HelloWorld.vue'

  export default {
    components: {
      HelloWorld
    },
    data() {
      return {
        msg: 'hello'
      }
    },
    setup() {
      const handleClick = () => {
        console.log('handleClick')
      }

      return {
        handleClick
      }
    }
  }
</script>    


<style scoped>
  .app {
    color: red;
  }
</style>