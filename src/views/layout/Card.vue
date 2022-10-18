<template>
  <div class="home">
    <div class="card">
      <div class="iconfont"><!-- :class="item.icon"-->
        <div class="title" v-for="item in items" :key="item">
          <div class="card_l">

          </div>
          <div class="card_r">
            <div class="card_r_t">{{ item.total }}</div>
            <div class="card_r_b">{{ item.num }}</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {items: ''/*: Array*/}
}
</script>

<style lang="less">
.home {


  .card {
    width: 80vw;
    height: max-content;
    /*border: solid 1px;*/

    .iconfont {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .title {
      width: 290px;
      height: 100px;
      display: flex;
      flex-direction: row;
      text-align: center;
      background-color: #7bf876;
      .card_l{
        flex: 1;
        width: 100px;
        height: max-content;
        background-color: #398605;
      }
      .card_l{
        background-color: bisque;
      }
      .card_r{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .card_r_t,.card_r_b{
          line-height: 50px;
          flex: 1;
        }
      }
    }
  }
}
</style>