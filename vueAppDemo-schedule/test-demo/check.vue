<!-- Vue 表单校验插件使用demo (vue-validator)-->
<template>
	<validator name ='validation'>
		<form novalidate>
			<!-- username  -->
			<div class="username-feild">
				<label for="username">username:</label>
				<input type="text" id="username" v-validate:username="{required:ture,minlength:3,maxlength:12}">
				<div>
					<span v-if= "$validation.username.required">username is required</span>
					<span v-if="$validation.username.minlength">your name is too short</span>
					<span v-if="$validation.username.maxlength">you name is too long</span>
				</div>
			</div>
			<!-- password -->
			<div class="password">
				<label for="">password:</label>
				<input type="password" id="password" v-model="pwd" v-validate:password="{required:ture,pattern:'/^\w{6,13}$/'}">
				<div>
					<span v-if="$validation.password.required">password is required </span>
					<span v-if="$validation.password.pattern">****</span>
				</div>
			</div>
			<!-- password check again -->
			<div class="passwordAgain">
				<label for="passwordAgain">passwordAgain:</label>
				<input type="password" id="passwordAgain" v-model="pwds">
				<div>
					<span v-if="{{pwd}}!={{pwds}}">error</span>
				</div>
			</div>
		</form>
	</validator>


</template>

<script>
    /****************在APP.vue 中添加 （加载 检验插件）*****************／
	// import VueValidator from "vue-validator";
	// Vue.ues(VueValidator)
	／************************************************* ***********/

	export default {
		name:'',
		data(){
			return{
				pwd:"",
				pwds:"",
			}
		},



	}


</script>