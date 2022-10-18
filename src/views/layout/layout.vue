<template>
  <div class="div_main">
    <el-row class="tac">
      <el-col>
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"

            background-color="#545c64"
            text-color="#fff"
        ><!--            @open="handleOpen"
            @close="handleClose"-->
          <el-menu-item index="1">
            <i class="el-icon-s-order"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-cooperation"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-s-shop"></i>
            <span slot="title">店铺管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>


    <div class="div_r">
      <div class="div_r_top">
        <div>
          <el-breadcrumb separator-class="el-icon-arrow-right"
                         style="font-size: 18px;line-height: 4;padding-left: 30px;">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="div_r_top_r">
          <div class="div_r_top_r_l">
            <el-dropdown style="font-size: 18px">
            <span class="el-dropdown-link">
            你好，李斯<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>推出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="div_r_top_r_r">
            <el-image
                style="width: 50px; height: 50px ; border-radius: 50%;"
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                fit="fill"></el-image>
          </div>
        </div>


      </div>
      <div class="div_r_bto">
        <div class="div_r_bto_card">
          <Card :items="Card_items"></Card>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Card from "@/views/layout/Card";

export default {
  name: "layout",
  components: {Card},
  data() {
    return {
      Card_items: [
        {id: 1, icon: '', num: 10250, total: 456},
        {id: 2, icon: '', num: 10250, total: 456},
        {id: 3, icon: '', num: 10250, total: 456},
        {id: 4, icon: '', num: 10250, total: 456},
      ]
    }
  }
}
</script>

<style scoped>


.div_main {
  display: flex;
}

.tac {
  flex: 1;
  background-color: #545C64;
  height: 100vh;
}

.div_r {
  flex: 4;
  display: flex;
  flex-direction: column;
  background-color: coral;
  height: 100vh;

}

.div_r_top {
  flex: 1;
  display: flex;
  flex-direction: row;
  background-color: #b0b0b0;
  text-align: center;
  align-items: center;
  justify-content: space-between;
}

.div_r_top_r {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.div_r_top_r {
  align-items: center;
}

.div_r_bto {
  flex: 9;

}

.div_r_bto_card {
  display: flex;
  flex-direction: row;
  width: max-content;
  justify-content: space-around;
  margin: 20px;
}

</style>