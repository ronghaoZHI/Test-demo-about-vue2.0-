<template>
	<div id="foot">
		<!-- <span>time:{{time}}</span> -->
		<span>footer</span>
	</div>
</template>

<script>
export default {
	name:"Footer"
	// created:{

	// },
	// data(){
		
	// },
	// computed:{

	// },
	// methods:{
	// 	updateTime:function(){
	// 		var date = new Date();
	// 		setInterval(function(){
	// 			return time = date.getDate()+date.getMonth()+date.getDay();
	// 		},1000)
	// 	}
	//}

}
</script>
<style scoped>
	#foot{
		position: absolute;
		background-color: #aaa;
		top: 100%;
		transform: translate(0,-50px);
		width: 100%;
		height: 50px;
		/*display: block;*/
		margin: 0 auto;
		text-align: center;
	}

</style>

