<template>
	<div>		
		<h3>{{name}}</h3>
		<span class="input-group-addon" id="basic-addon1">任务名称</span>
		<div class="input-group">
		    <span class="input-group-addon"  id="basic-addon1"></span>
  			<input type="text" class="form-control"  placeholder="Name" aria-describedby="basic-addon1">
  			<!-- <span class="input-group-addon" id="basic-addon1"></span>
  			<input type="text" class="form-control" placeholder="Name" aria-describedby="basic-addon1"></br> -->
		</div>
		<span class="input-group-addon" id="basic-addon1">任务内容</span>
		<div class="input-group">
			<span class="input-group-addon"  id="basic-addon1"></span>
		 	<textarea type="text" rows="5" name="" id="" placeholder="Text" class="form-control" aria-describedby="basic-addon1"></textarea>
		</div>

		<div style="margin-top:30px">
		<router-link style="float:right" class="btn btn-primary"  to='lists'>创建</router-link>
		<router-link style="float:right;margin:0 10px 0 20px" class="btn btn-info" to='/'>取消</router-link>
		</div>
			
	</div>
</template>

<script>
	export default{
		name:"CreateTask",
		data(){
			return {
				name:"创建任务"
			} 
		},
		computed:{},
		created:{},
		mounted:{},
		methods:{}
	}
</script>