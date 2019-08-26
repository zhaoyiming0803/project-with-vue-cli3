<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-switch v-model="checked"></van-switch>
  </div>
</template>

<script scoped>
  import { Switch } from 'vant';

  export default {
    data () {
      return {
        checked: false
      }
    },

    components: {
      [Switch.name]: Switch
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