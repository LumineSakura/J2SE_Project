<template>

  <div class="login_account_div">
    <el-form :model="ruleForm" status-icon :rules="rules"
             ref="ruleForm" label-width="100px"
             class="login_demo-ruleForm">
      <div class="data2">
        <h1 class="title">系统登录</h1>
      </div>
      <el-form-item prop="user" label-width="0">
        <el-input v-model="ruleForm.user"
                  placeholder="请输入用户名"
                  maxlength="11" show-word-limit
                  prefix-icon="el-icon-user-solid"
                  class="input_user"
        ></el-input>
      </el-form-item>
      <el-form-item prop="psd" label-width="0">
        <el-input :type="type" v-model="ruleForm.psd"
                  prefix-icon="el-icon-lock"
                  autocomplete="off"
                  maxlength="15" class="input_psd"
                  placeholder="请输入密码">
          <i slot="suffix" :class="this.flag?'el-icon-minus':'el-icon-view'"  @click="flag =!flag"></i>
<!--          <i slot="suffix"-->
<!--             :class="[this.flag?'el-icon-view':'el-icon-view']"-->
<!--                       style="margin-top:8px;font-size:18px;"-->
<!--          @click="flag =!flag"/>-->
        </el-input>
      </el-form-item>
        <el-button type="primary" class="el_btn" style="width: 100%"
                   @click="submitForm('ruleForm')">登录
        </el-button>

    </el-form>
  </div>
</template>

<script>

export default {
  name: "accountLogin",
  data() {
    return {
      ruleForm: {
        user: '',
        psd: ''
      },
      rules: {
        user: [
          {min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur'},
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        psd: [{min:3,max:15,message: '请输入密码',trigger: 'blur'},
          {required: true, message: '请输入3-15位的密码', trigger: 'blur'}]
      },
      flag: false,
      flagType: 'password'
    }
  },
  methods: {
    getFlag() {
      this.flag = !this.flag
      this.flagType = this.flag ? 'text' : 'password'
    }, submitForm() {
    }
  },
  computed:{
    type(){
      return this.flag ? "text" : "password"
    }
  }
}
</script>

<style lang='less'>

.input_user {
  //width: 30%;
}

.input_psd {
  //width: 30%;
}

.el_btn {
  //width: 30%;
}

.data2 {
  .title {
    font-size: 20px;
    color: #eee;
    margin: 0 auto 40px auto;
    text-align: center;
    font-weight: 700;
  }
}

.login_demo-ruleForm /deep/ .el-form-item__error {
  color: #7bf876;
}

/*/deep/el-form-item__error {
  color: #89ffff;
}*/
.el-form-item__content {
  margin-left: 0px;
}
.login_account_div{
  min-height: 100%;
  overflow: hidden;
  width: 100%;
}
.el-form{
  margin: 0 auto;
  /* padding-right: 60px; */
  width: 356px;
  max-width: 100%;
  padding: 117px 35px 0;
}
</style>

