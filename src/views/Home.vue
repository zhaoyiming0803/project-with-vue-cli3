<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script scoped>
  const HelloWorld = () => import('@/components/HelloWorld.vue');

  export default {
    name: 'Home',

    components: {
      HelloWorld
    },

    created () {
      this.getUserInfo();
    },

    methods: {
      getUserInfo () {
        this.$Http.get('http://localhost:8091/api/user')
          .then(res => {
            console.log(res);
          })
          .catch(res => {
            console.log('error: ', res);
          })
      }
    }
  }
</script>
