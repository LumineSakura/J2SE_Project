<template>
  <div>
    <h1>学籍管理</h1>
    <p>姓名<input type="text" v-model="form.name"></p>
    <p>年龄<input type="number" v-model="form.age"></p>
    <p>性别：
      男<input type="radio" name="sex" value="男" v-model="form.sex">
      女<input type="radio" name="sex" value="女" v-model="form.sex">
    </p>
    <p>电话<input type="tel" v-model="form.tel"></p>
    <p>
      <button @click="save">保存</button>
    </p>
    <table class="tab_student">
      <tr>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
        <th>电话</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in list" :key="item">
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.sex }}</td>
        <td>{{ item.tel }}</td>
        <td>
          <button @click="deleteRow ">删除</button>
        </td>
      </tr>

    </table>
  </div>
</template>

<script>
export default {
  name: "学籍管理",
  data() {
    return {
      form: {
        name: "",
        age: 0,
        sex: "",
        tel: 0,
      }, list: []
    }
  }
  ,
  methods: {
    save() {
      if (!this.form.name || !this.form.age ||
          !this.form.tel || !this.form.sex
      ) {
        alert("数据不能为空")
        return;
      }
      this.list.push({...this.form})
      this.form = {
        name: "",
        age: 0,
        sex: "",
        tel: 0,
      }
    }, deleteRow(i) {
      this.list.splice(i, 1)
    }

  }
}
</script>

<style>
.tab_student {
  border: solid 1px;
}

th {
  width: 150px;
}

tr, th, td {
  border: solid 1px;
}
</style>