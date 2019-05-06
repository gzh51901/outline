<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" show-password></el-input>
      </el-form-item>
      <el-form-item label="7天免登陆" prop="autoLogin">
        <el-switch v-model="ruleForm.autoLogin"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="login('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Reg",
  data() {
    return {
      ruleForm: {
        password: "",
        username: "",
        autoLogin:false
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid);
        // 是否通过验证
        if (valid) {
          this.$message("登录成功");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
