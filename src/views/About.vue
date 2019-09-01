<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div style="margin-bottom: 10px; font-size: 16px;">
      <span>是否自定义插槽内容</span>
      <van-switch v-model="customerSlotContent"></van-switch>
    </div>

    <customer-dialog :items="items">
      <template v-slot:default>
        <div>默认插槽</div>
      </template>
      
      <template v-slot:header>
        <div>具名插槽: header</div>
      </template>
      
      <template v-if="customerSlotContent" v-slot:items="props">
        <div>
          <span>id:{{props.item.id}} </span>
          <span>name: {{props.item.name}} </span>
        </div>
      </template>

      <template v-else v-slot:items></template>

      <template v-slot:footer>
        <div>具名插槽: footer</div>
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
        customerSlotContent: false,
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