<template>
  <div>

    <div class="navigation ">
      <nav class="navbar navbar-default navbar-fixed-top  c">
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

        <ul class="nav navbar-nav navbar-right">

          <li>
            <a href="javascript:0"><span id="postS" @click="upRelease">发帖</span></a>
          </li>
        </ul>

      </nav>
    </div>

    <vue-neditor-wrap v-model="articleDTO.html" :config="myConfig" :destroy="false" @ready="ready"></vue-neditor-wrap>

  </div>
</template>

<script>
  import VueNeditorWrap from 'vue-neditor-wrap'

  export default {
    name: 'release',
    data() {
      return {
        articleDTO: {

          html: "",
          collectUrl: "",
          dependencies: [

          ],
          runEnvironment: "",
          storageUrl: "",
          technologyTypes: [

          ],
          title: "",
          type: 0,
          versions: [

          ],

        },


        myConfig: {
          // 如果需要上传功能,找后端小伙伴要服务器接口地址
          //serverUrl: '/api/web/upload/ueditor',
          // 你的UEditor资源存放的路径,相对于打包后的index.html
          UEDITOR_HOME_URL: '/static/NEditor/',

          // 编辑器不自动被内容撑高
          autoHeightEnabled: true,
          // 初始容器高度
          initialFrameHeight: '700',
          // 初始容器宽度
          initialFrameWidth: '100%',
          // 关闭自动保存
          enableAutoSave: false
        },
        editor: ''
      }
    },
    components: {
      VueNeditorWrap
    },
    mounted() {
      setTimeout(() => {
        this.editor.setContent(
          '<div><h1 style ="border-bottom-color:#cccccc;border-bottom-width:2px;border-bottom-style:solid;padding:0px 4px 0px 0px;margin:0px 0px 20px;">' +
          '<span style = "color:#777;" >[键入文档标题]</span>' +
          '</h1></div>' +

          '<br/><div style="border:0px #000000 solid;text-align:right;">' +
          '<h4><b class="a">java</b>    : <b style = "color:#795548;">技术类型</b></h4>' +
          '<h4><b class="a">windows</b>    : <b style = "color:#0a76cc;">运行环境</b></h4>' +
          '<h4><b class="a">springboot + mybatis + mysql</b>    : <b style = "color:#70b124;">依赖技术</b></h4><hr/>' +

          '</div><p style = "color:#56bef3;">编写你的内容吧！</p>');

      }, 850)
    },
    methods: {
      ready(editor) {

        this.editor = editor;

      },
      upRelease() {

        /* console.log(this.articleDTO.html); */

        var strong = document.getElementById('ueditor_0').contentWindow.document.getElementsByClassName('a');

        var a1 = strong[0].innerText.split("+");
        for (var i = 0; a1.length > i; i++) {
          this.articleDTO.dependencies.push(a1[i]);
        }


        this.articleDTO.runEnvironment = strong[1].innerText;

        var a2 = strong[2].innerText.split("+");
       for (var j = 0; a2.length > j; j++) {
          this.articleDTO.technologyTypes.push(a2[j]);
        }



        console.log(this.articleDTO);


        /*      this.$http.post("/article/addArticle" ,this.articleDTO).then(res => {

                  console.log("成功")
                }).catch(err => {

                   console.log("错误")
                }) */



      }
    }
  }
</script>

<style>
  .e {}

  #postS {
    font-size: 15px;
    color: #FFFFFF;
    border: 0px #000000 solid;
    padding: 15px 42px 15px 42px;
    background-color: #ff9800a8;
  }

  .c {
    background-color: #f6fcff;
  }

  .navigation {
    margin: 51px;
    margin-left: 10%;
    margin-right: 10%;

  }
</style>
