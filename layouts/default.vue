<template>
	<v-app>
		<ModHeader />
		<ModCompanyCard />
		<div class="container">
			<slot />
		</div>
		<ModFooter />
	</v-app>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()
userStore.initAuth()
</script>

<style lang="scss" scoped>
	.container {
		margin: 0 auto;
	}
</style>