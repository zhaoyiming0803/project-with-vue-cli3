<template>
  <div class="list-container">
    <div v-for="(product, index) in productList" :key="index">
      {{product.name}}
    </div>
  </div>
</template>

<script scoped>
  export default {
    props: {
      productList: {
        type: Array,
        default: () => []
      }
    },

    data () {
      return {
        
      }
    },

    methods: {
      async getTestInfo () {
        const info = await this.test();
      },

      test () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(true);
          });
        });
      }
    }
  }
</script>

<style lang="less" scoped>

</style>