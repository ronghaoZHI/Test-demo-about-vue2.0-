<template>
<div>
		<div id="header">
			<label for=""><img src="../assets/logo.png" height="20" width="20" alt="">
			<router-link class='header-item' to='customers'>home</router-link></label>

			<label for=""><img src="../assets/logo.png" height="20" width="20" alt="">
			<router-link class='header-item' to='about'>about</router-link>	</label>
		</div>
</div>
</template>
<script>
	export default {
		name:'header',
		created:{
			function(){
				 console.log(this.location.pathname());
			}
		},
		data(){

		},
		computed(){

		},
		methods:{

		}
	}
</script>

<style lang = "css" scoped>
#header	{
	font-size:17px;
	background-color: #333366;
	padding-left: 20px;
	margin: 0;
	line-height: 75px;
}
	img{
		transform: translate(0,5px);
		display: inline-block;
	}
.header-item{
  /*font-size: 20px;*/
      color: white;
      text-decoration: none;
      /*padding-left: 30px;*/
    }
</style>