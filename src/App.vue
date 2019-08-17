<template>
  <div id="app">
    <div id="nav">
      <button @click="toHome">Home</button>
      <button @click="toAbout">About</button>
    </div>
    <router-view/>
  </div>
</template>

<script scoped>
  export default {
    data () {
      return {}
    },

    methods: {
      toHome () {
        this.$router.push({
          path: '/'
        });
      },

      toAbout () {
        this.$router.push({
          path: '/about',
          query: {
            a: 1,
            b: 2
          }
        });
      }
    }
  }
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 20px;
  }
</style>
