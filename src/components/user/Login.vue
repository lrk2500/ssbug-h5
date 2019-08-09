<template>
  <div>

    <div>
      <div class="ltop">



      </div>


      <div class="logo">

      </div>


      <div class="login">

        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label for="firstname" class="col-sm-2 control-label">名字</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="firstname" placeholder="请输入名字">
            </div>
          </div>
          <div class="form-group">
            <label for="lastname" class="col-sm-2 control-label">姓</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="lastname" placeholder="请输入姓">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <div class="checkbox">
                <label>
                  <input type="checkbox">请记住我
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button @click="login" class="w btn btn-default">登录</button>

              <router-link to="/">
                <button @click="register" class="w btn btn-default">注册</button>
              </router-link>
            </div>
          </div>
        </form>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {

      }
    },
    methods: {

      register() {

        alert("登录")

      },

      login() {
        alert("注册")
      }

    }
  }
</script>

<style>
  .ltop{

    width: 100%;
    height: 120px;
    border: #00FF00 1px solid;

  }

  .logo{
    margin: 20px;
    display: inline-block;
    width: 50%;
    height: 400px;
    border-right: #00FF00 1px solid;
  }

  .login {
    margin-top: 100px;
    display: inline-block;
    width: 450px;
    /* border: #000066 1px solid; */
    vertical-align: top;
  }

  .w {
    width: 128px;
  }

</style>
