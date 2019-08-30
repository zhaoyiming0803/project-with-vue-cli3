<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-switch v-model="checked"></van-switch>
    <customer-dialog :items="items">
      <template v-slot:header>
        <div>header</div>
      </template>
      <template v-slot:items="slotProps">
        <div>123</div>
      </template>
      <template v-slot:footer>
        <div>footer</div>
      </template>
    </customer-dialog>
  </div>
</template>

<script scoped>
  import { Switch } from 'vant';
  import CustomerDialog from '@/components/CustomerDialog.vue';

  export default {
    data () {
      return {
        checked: false,
        items: [
          {id: 1, name: 'zhangsan'},
          {id: 2, name: 'lisi'},
          {id: 3, name: 'wangwu'},
          {id: 4, name: 'zhaoliu'}
        ]
      }
    },

    components: {
      [Switch.name]: Switch,
      CustomerDialog
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