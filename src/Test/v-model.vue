<template>
  <div>
    <h1>注册</h1>
    <p>姓名:
      <input type="text" v-model="form.name"/>
    </p>
    <p>性别
      <input type="radio" value="boy" v-model="form.sex"/>男
      <input type="radio" value="girl" v-model="form.sex"/>女
    </p>
    <p>爱好：
      <input type="checkbox" v-model="form.hobby" value="song"/>唱歌
      <input type="checkbox" v-model="form.hobby" value="carton"/>追番剧
      <input type="checkbox" v-model="form.hobby" value="basketball"/>篮球
    </p>
    <p>职业
      <select v-model="form.work">
        <option>java</option>
        <option>php</option>
        <option>unity</option>
      </select>
    </p>
    <p>自我评价
      <textarea cols="30" rows="10" v-model="form.info"></textarea>
    </p>
    <button @click="submit">注册</button>
  </div>

</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        sex: "",
        hobby: [],
        work: "",
        info: ""
      }
    }
  },
  methods: {
    submit(form) {
      console.log(this.form)
    }
  }
}

</script>
<style lang="less" scoped>
div{
font-family: "楷体";
}

</style>