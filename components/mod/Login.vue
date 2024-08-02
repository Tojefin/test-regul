<template>
	<div class="login">
		<h1>Авторизация</h1>
		<v-sheet class="mx-auto" width="300">
			<v-form @submit.prevent="login">
				<v-text-field v-model="form.login" label="Login" />
				<v-text-field v-model="form.password" label="Password" />
				<v-btn class="mt-2" type="submit" block>Войти</v-btn>
			</v-form>
		</v-sheet>
	</div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()

const form = ref({login: '', password: ''} )

function login(){
	userStore.login(form.value.login, form.value.password)
}
</script>

<style lang="scss">
.login {
	margin: 0 auto;
	padding: 32px 0
}
</style>