<template>
  <div id="app">
    <div id="nav">
      <van-button type="info" @click="toHome">Home</van-button>
      <van-button type="info" @click="toAbout">About</van-button>
    </div>
    <router-view/>
  </div>
</template>

<script scoped>
  import { Button } from 'vant';

  export default {
    data () {
      return {}
    },

    components: {
      [Button.name]: Button
    },

    created () {
      console.log(this.$Event);
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
