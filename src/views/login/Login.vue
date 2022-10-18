<template>
  <div class="d_main">
    <!--    <h2>Login</h2>-->
<!--    <table class="table">
&lt;!&ndash;      <tr>
        <td>
          <router-link to="/accountLogin">
            <div class="children">我是account登录</div>
          </router-link>
        </td>
        &lt;!&ndash;        <td>
                  <router-link to="/accountAdd">
                    <div class="children">我是account注册</div>
                  </router-link>
                </td>&ndash;&gt;
      </tr>&ndash;&gt;
      <tr>
        <td colspan="2">
          <router-view class="rw"></router-view>
        </td>
      </tr>
    </table>-->
    <router-view class="rw"></router-view>

  </div>
</template>


<script>
export default {
  name: "Login"

  // ,
  // methods:{
  //   fun(){
  //     this.$router.push("/home")
  //   }}

}
</script>

<style>
.d_main{
  background-color: #2d3a4b;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;

}
.table{
  text-align: center;
}
/*
.table {
  width: 100%;
}

.children {
  border: solid 1px;
  background-color: aquamarine;
  text-align: center;
}*/


</style>