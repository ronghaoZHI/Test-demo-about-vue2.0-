<template>
	<div class="lists">
	<img class="loadding" src="" alt="loaddingImg" v-if='isGetData'>
		<div class="panel panel-default" v-for ='li in listData'>
		  		<div class="panel-heading" >{{ listData.name}}</div>
				  <div class="panel-body">
				    <!-- Panel content -->
				    <!-- <h1>任务追踪</h1> -->
				    <p>
				    	<p >{{listData.text}}</p>
				      <span>
				        <!-- <router-link to="createTask">查看任务</router-link> -->
						{{listData.datatime}}
				      </span>
				    </p>
				  </div>
			</div>
		
	</div>
</template>

<script>
export default {
	name:"lists",
	data(){
       return {}
	},
	computed:{
		listData(){
			return this.$store.state.Data;
		},
		isGetData(){
			return this.$store.states.isGetData;
		}
	},
	// methods:{

	// }
}

</script>

<style scoped>
	
</style>
