<template>
  <div class="reg">
    <h1>用户注册</h1>
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
      <el-form-item label="确认密码" prop="confirmpassword">
        <el-input v-model="ruleForm.confirmpassword" type="password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="reg('ruleForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Reg",
  data() {
    var confirmpassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checkUsername = (rule, value, callback) => {
        console.log(1234)
      this.$axios.get('/api/reg/check',{
          params:{
              username:value
          }
      }).then(({data})=>{
          if(data.status===200){
              callback();
          }else if(data.status==400){
              callback(new Error("用户名已存在"));
          }
      })
    };
    return {
      ruleForm: {
        password: "",
        confirmpassword: "",
        username: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" },
          {
            validator: checkUsername,
            // message: "两次输入密码不一致",
            trigger: "blur"
          }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        confirmpassword: [
          { required: true, message: "请确认密码", trigger: "blur" },
          {
            validator: confirmpassword,
            // message: "两次输入密码不一致",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    reg(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid);
        // 是否通过验证
        if (valid) {
          this.$message("注册成功");
          // 发起请求，写入数据成功后跳转登录页面
          let {username,password} = this.ruleForm
          this.$axios
            .post("/api/reg", { username, password})
            .then(({ data }) => {
              console.log(data);
            //   this.$router.replace("/login");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
