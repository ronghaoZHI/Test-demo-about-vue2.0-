<template>
	<div id="foot">
		<label id="logo" for=""><img src="../assets/logo.png" height="20" width="20" alt="">footer<img src="../assets/logo.png" height="20" width="20" alt=""></label>
	</div>
</template>
<script>
	export default {
		name:'footer',
		date(){

		},
		created:{

		},
		computed:{

		},
		methods:{

		}
	}

</script>
<style lang="css" scoped>
label,img{
	/*display:block;*/
	margin: 0;padding: 0;
}
	#foot{
		position: absolute;
		margin: 0 auto;
		width: 100%;
		min-height: 50px;
		background-color: #333366;
		line-height: 70px;
		color: white;
		top:100%;
		transform: translate(0,-50px);
	}
	 #logo{
		position: absolute;
		transform: translate(-50%,-50%);
		left:50%;top: 50%;
		/*float: left;*/
		/*width: 100px*/
	}

</style>