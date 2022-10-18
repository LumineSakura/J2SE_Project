<template>
<div class="card">
  <img style="width: 300px;" src="https://learn.91tangzhuan.com/imgsrv/pic/aMYecntRfp.jpg">
  <p class="price" style="color: red;font-weight: bolder">￥95</p>
  <p>三星手机</p>

</div>
</template>
<template>
  <div class="good">
    <goodcard v-for="item in 10":key="item ">

    </goodcard>
  </div>
</template>
<script>
export default {
  name: "v-for-img"
}
</script>

<style scoped>

</style>