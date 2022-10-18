<template>
  <div>
    <div>
      <p>
        姓名<input type="text" placeholder="用户名">
      </p>
      <p>
        年龄<input type="text">
      </p>
      <p>
        性别<input type="text">
      </p>
      <p>
        手机<input type="text">
      </p>
      <p><input type="submit" value="保存"></p>
    </div>
    <div>
      <good-card v-for="item in 5" key="item" class="goodcard"></good-card>
    </div>
  </div>
</template>

<script>
import GoodCard from "../components/GoodCard";

export default {
  components: {GoodCard}
}
</script>

<style scoped>
div {
  border: solid 1px;
}

.goodcard {
  display: flex;
  flex-wrap: wrap;
}
</style>