<template>
  <!--  4使用组件-->
  <div>
    <!--循环字符串-->
    <p v-for="solar in str" :key="solar">{{solar}}</p>
    <!--循环数字-->
    <hr>
    <p v-for="num in 10" :key="num">{{num}}</p>

  </div>
</template>
<script>
//注册组件
export default {
  data(){
    return{
      str:"今天天气不错"
    }

  }
}
</script>
<style long="less" scoped>

</style>
