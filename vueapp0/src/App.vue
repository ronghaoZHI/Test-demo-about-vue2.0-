<template>
  <div id="main">
  	  <!-- 主界面部分 -->
    <!-- <transition name="show" mode="out-in" appear='ture'> -->
      <!-- <div v-show="isShowIndex" class="index"> -->

        <!-- 侧边栏 -->
        <!-- <AsideMenu v-show="isShowAsideMenu"></AsideMenu> -->

        <!-- 头部 -->
        <VHeader></VHeader>
		
        <!-- router控制的Tab页内容 -->
	    <div id="body">
	        <router-view></router-view>
		</div>
		
        <!-- 尾部mini播放器 -->
        <VFooter></VFooter>
      <!-- </div> -->
    <!-- </transition> -->

    <!-- 播放界面 -->
    <!-- <transition name="showIndex"> -->
      <!-- <Play v-show="!isShowIndex"></Play> -->
    <!-- </transition> -->

    <!-- 隐藏的audio标签 -->
    <!-- <audio v-bind:src="audio.src || (musicData[0]&&musicData[0].src) || defaultSrc" v-bind:autoplay="isPlaying" ref="audio"></audio>
 -->
    <!-- 关于界面 -->
    <!-- <About v-if="isShowAbout"></About> -->
   
  </div>
</template>

<script>
import VHeader from './components/Header.vue'
import VFooter from './components/Footer.vue'


export default {
  name:'app',
  components:{
  	VHeader,
  	VFooter
  }
  
}
</script>

<style>
@import "./style/commom.css";

/*.show-enter-active {
  transition: all .4s ease;
}
.show-leave-active {
  transition: all 0 ease-out;
}
.show-enter, .show-leave-active {
  transform: translateX(-350px);
  opacity: 0;
}*/

#main{
  	width: 100%;
    height: 100%;
    position: absolute;
    /*background: #8E388E ;*/
    background-size: 100% 100%;
    background-attachment: fixed;
    z-index: 99;
    /*line-height: 75px;*/
}
#body{ 
  	width: 100%;
    position: absolute;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: #697;
    text-align: center;
    color: white;
}
ul{
  list-style-type:none;
}
</style>
