<template>
	<div>		
		<h2>about me</h2>
		<span @click = 'showAbout'><img src="" alt="">关闭</span>
	</div>
</template>

<script>
	export default{
		name:"About",
		data(){
			return {

			} 
		},
		computed:{
			
		},
		methods:{
			showAbout(){
				this.$store.commit('showAbout',false);
			}
		}
	}

</script>