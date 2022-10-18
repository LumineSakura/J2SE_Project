<template>
  <div>
    <p
        v-for="num_odd in 10" :key="num_odd"
        v-if="num_odd%2==1"
    >{{ num_odd }}</p>
    <hr>
    <p
        v-for="num_even in 10" :key="num_even"
        v-if="num_even%2==0"
    >{{ num_even }}</p>
  </div>

</template>
<script>
export default {
  data() {
   return {}
  }
}
</script>
<style long="less" scoped>

</style>
