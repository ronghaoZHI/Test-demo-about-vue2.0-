<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <img src="./assets/logo.png">
    <!-- <h1 >{{ msg }}</h1> -->
    <h2>Essential Links</h2>
    <input type="text" v-model='name1'>
    <h2 v-html='name1' v-once></h2>
    <h2 v-text='name1'></h2>
    <h2 >{{name1}} </h2>
    <p>{{comp}}</p>
    <button @click = "log">log</button>

    <!-- <a href=''>aaaa</a> -->
    <!-- <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a>:</li>
    </ul> -->
    <!-- <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  // name: 'app',
   data () {
    return {
      name1:'<p>hello ~~~<p>',
      msg: 'Welcome to Your Vue.js',
      log:function(){
        console.log(this.name1);
      }
    }
  },
    computed:{
        comp:function (){
        return this.name1.toUpperCase()
      }
    }
}
</script>

<style lang="css" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin: 0 auto;*/
  margin-top: 60px;
  /*width: 500px;*/
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  /*padding: 0;*/
}

li {
  /*display: inline-block;*/
  /*margin: 0 10px;*/
}

a {
  color: #42b983;
}
</style>
