<template>

  <!--事件绑定 -->
  <!--<标签 v-on:事件类型=“事件函数”> -->
  <!--<标签 @事件类型=“事件函数”> -->

  <div>
    <button @click="submit">

    </button>

  </div>
</template>

<script>
export default {
  data() {
    return {}

  },
  methods:{
    submit() {
      console.log(this.submit())
    }

  }
}

</script>

<style lang="less" scoped>


</style>