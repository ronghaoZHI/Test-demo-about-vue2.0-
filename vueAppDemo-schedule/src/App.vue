<template>
<div>
	<!-- view 框架搭建  -->
	<div class="progress">
	  <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 10%">
	    <!-- <span class="sr-only">60% Complete</span> -->
	  </div>
	</div>
	<!-- header 部分-->
	<VHeader></VHeader>
	
	<!-- container部分 -->
	<div class="container">
      <div class="col-sm-3">
        <VAside></VAside>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
       
      </div>
    </div>

	<!-- Footer部分 -->
	<VFooter></VFooter>

</div>
</template>

<script>

import VHeader from "@/components/Header.vue"; 
import VFooter from "@/components/Footer.vue";
import VAside from "@/components/aside.vue";

export default {
	name:"App",
	// data(){},
	beforeCreated:{
		
	};
	computed:{

	},
	mounted:{},
	components:{
		VHeader,
		VFooter,
		VAside
	}
}

</script>

<style scoped>
	.progress{
		margin: 0;
		height: 2px;
	}
</style>

