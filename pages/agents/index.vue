<template>
	<v-skeleton-loader v-if="load" min-width="500px" type="card-avatar" />
	<div v-else>
		<div v-if="userStore.isLogin">
			<ModAgents />
		</div>
		<ModLogin v-else-if="!userStore.isLogin" />
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
const load = ref(true)

onMounted(() => {
	load.value = false
})
</script>