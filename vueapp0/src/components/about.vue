<template>
  <div> 
    <h1>{{msg}}</h1>
    <ul>
          <li v-for = 'key in days'>{{key}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg:'I am about page',
      days: [ // 星期几中文映射
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ]
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
ul{

}
li{
  /*display: inline-block;*/
  /*list-style: none;*/
  /*margin: 0;*/
  /*font-size: 15px;*/
}
</style>