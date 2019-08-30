<template>
  <div>
    <div>
      <slot name="header"></slot>
    </div>
    <slot name="items">
      <div v-for="(user, index) in items" :key="index">
        <span>{{user.id}}</span>
        <span>{{user.name}}</span>
      </div>
    </slot>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
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

  mounted () {
    
  }
}
</script>

<style lang="less" scoped>

</style>