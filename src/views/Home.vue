<template>
  <div v-if="isShowPage" class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <product-list :productList="productList"></product-list>
    <van-slider v-model="value" @change="onChange" />
  </div>
  <skeleton v-else></skeleton>
</template>

<script scoped>
  import { Slider } from 'vant'
  import HelloWorld from '@/components/HelloWorld.vue';
  import Skeleton from '@/components/Skeleton.vue';
  const ProductList = () => import('@/components/List.vue');

  export default {
    name: 'Home',

    data () {
      return {
        isShowPage: false,
        productList: [],
        value: 10
      }
    },

    components: {
      [Slider.name]: Slider,
      HelloWorld,
      Skeleton,
      ProductList
    },

    created () {
      this.getBaseInfo();
      this.getProductList();
      // this.getUserInfo();
    },

    methods: {
      getBaseInfo () {
        setTimeout(() => {
          this.isShowPage = true;
        }, 3000);
      },

      getProductList () {
        this.productList = [
          { name: 'A', price: 100 },
          { name: 'B', price: 200 },
          { name: 'C', price: 300 },
          { name: 'D', price: 400 },
          { name: 'E', price: 500 }
        ];
      },

      getUserInfo () {
        this.$Http.get('http://localhost:8091/api/user')
          .then(res => {
            console.log(res);
          })
          .catch(res => {
            console.log('error: ', res);
          })
      },

      onChange (value) {
        console.log(value);
      }
    }
  }
</script>
