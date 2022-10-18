<template>
<div>
  <h3>Home</h3>
  <router-link to="/login">login</router-link>
  <br>
  <router-link to="/layout">layout</router-link>
<!--  <button @click="fun()">点击进入Login界面</button>-->
</div>
</template>

<script>
export default {
  name: "home",
  methods:{
    fun(){
      this.$router.push("/login")
    }
  }
}
</script>

<style >

</style>