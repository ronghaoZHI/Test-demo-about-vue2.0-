<template>
	<div>		
		<!-- <h2>{{name}}</h2> -->
		<h2>{{name}}</h2>

		<div class="input-group">
		   <span class="input-group-addon" id="basic-addon1"></span>
  			<input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
  		  <!-- <span class="input-group-addon" id="basic-addon1"></span> -->
		  <textarea type="text" style="width:100%" name="" id="" placeholder="Text" aria-describedby="basic-addon1"></textarea>
		</div>
		
		

		<router-link to='/'>取消</router-link>
		<router-link to='lists'>创建</router-link>		
	</div>
</template>

<script>
	export default{
		name:"CreateTask",
		data(){
			return {
				name:"crtTsk"
			} 
		}
		// methods:{

		// }
	}
</script>