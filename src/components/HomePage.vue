<template>
  <div>

    <div class="homePage">


      <nav class="navbar navbar-default navbar-fixed-top  c">
        <div class="container-fluid">

          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Brand</a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>

            </ul>

            <ul class="nav navbar-nav navbar-right">



              <li>
                <router-link to="/release">
                  <a href="#">发帖</a>
                </router-link>
              </li>

              <li v-if="!login">
                <router-link to="/login">
                  <a href="#">登录</a>
                </router-link>
              </li>
              <li v-if="!login">
                <router-link to="/register">
                  <a href="#">注册</a>
                </router-link>
              </li>


              <li class="dropdown" v-if="login">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                  aria-expanded="false">蒲一凡 <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li role="presentation">
                    <a role="menuitem" tabindex="-1" href="#">发帖</a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabindex="-1" href="#">消息</a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabindex="-1" href="#">历史足迹</a>
                  </li>
                  <li role="presentation" class="divider"></li>
                  <li role="presentation">
                    <a role="menuitem" tabindex="-1" href="#">登出</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <router-view></router-view>
      <div class="userSelection">


      </div>

    </div>

  </div>
</template>


<script>
  export default {
    name: 'HomePage',
    data() {
      return {
        login: false
      }
    },

    methods: {
      write() {
        this.$router.push({
          path: '/release'
        })
      }

    }
  }
</script>

<style>
  .userSelection {
    position: fixed;
  }

  .c {
    background-color: #f6fcff;
  }

  .homePage {
    margin: 51px;

    height: 2000px;
    margin-left: 10%;
    margin-right: 10%;

  }
</style>
