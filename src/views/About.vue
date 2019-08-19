<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script scoped>
  import cookie from 'public/js/cookie'
  console.log(cookie);
  
  export default {
    data () {
      return {

      }
    },

    methods: {
      async fn1 () {
        const res = await this.fn2();
        console.log(res);
      },

      fn2 () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(1);
          });
        });
      }
    }
  }
</script>