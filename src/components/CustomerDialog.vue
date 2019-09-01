<template>
  <div class="customer-dialot-container">
    <div>
      <slot></slot>
    </div>

    <div>
      <slot name="header"></slot>
    </div>

    <div v-for="(item, index) in items" :key="index">
      <slot name="items" :item="item">
        <span>{{item.id}}</span>
        <span>{{item.name}}</span>
      </slot>
    </div>

    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script scoped>
  export default {
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },

    data () {
      return {
        
      }
    },

    created () {
      console.log(this.$slots);
    }
  }
</script>

<style lang="less" scoped>

</style>