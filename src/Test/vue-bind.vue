<template>
  <div>
    <img :src="img1" alt="">
    <button @click="change2">切换上一张图片</button>
    <button @click="change1">切换下一张图片</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      img1:require('../assets/dayaya.jpg'),
      img2:require('../assets/lumine.jpg')
    }
  },
  methods: {
    change1() {
      this.img1=require('../assets/lumine.jpg')
    },
    change2(){
      this.img1=require('../assets/dayaya.jpg')
    }
  }
}
</script>
<style lang="less" scoped>
img{
  width: 500px;
}
button{
  width: 100px;
  height: 50px;
  font-size: 10px;
}
</style>