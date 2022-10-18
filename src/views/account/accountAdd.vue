<template>
  <div class="add_account_div">
    <el-form :model="ruleForm" status-icon :rules="rules"
             ref="ruleForm" label-width="100px"
             class="add_demo-ruleForm">
      <el-form-item label="用户名" prop="user">
        <el-input v-model.number="ruleForm.user"
                  placeholder="请输入用户名"
                  maxlength="11" show-word-limit
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="psd">
        <el-input type="password" v-model="ruleForm.psd"
                  maxlength="15"
                  placeholder="请输入密码" show-password></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPsd">
        <el-input type="password" v-model="ruleForm.checkPsd"
                  maxlength="15"
                  placeholder="请再次输入密码" show-password></el-input>
      </el-form-item>

      <el-form-item class="btn">
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "accountAdd",
  data() {
    return {
      ruleForm: {
        user: '',
        psd: '',
        checkPsd: ''
      },
      rules: {
        user: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur'}
        ],
        psd:[
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
        ],
        checkPsd: {required: true, message: '请再次输入相同的密码', trigger: 'blur'}
      }
    }
  }, methods: {
    submitForm() {
    }, resetForm() {
    }
  }
}
</script>

<style lang='less' scoped>
.add_account_div {
  background-color: #aeb251;
}

.add_demo-ruleForm {
  width: 50%;
  margin: 10px auto;
}

/*/deep/el-form-item__error {
  color: aqua;
}*/
</style>
