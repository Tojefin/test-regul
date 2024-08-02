<template>
	<div class="agents__container">
		<div v-for="agent in agents" :key="agent.id" class="agents__card">
			<img :src="agent.photo" :alt="agent.firstName + ' ' + agent.lastName" class="agents__photo">
			<div class="agents__info">
				<h2 class="agents__name">{{ agent.firstName }} {{ agent.lastName }}</h2>
				<div class="agents__rating-container">
					<div v-if="agent.verified" class="agents__verified">
						<IconVerifycation />
						<div class="agents__reviews">Документы проверены</div>
						<div class="agents__dot">•</div>
					</div>
					<div v-if="agent.rating > 0" class="agents__rating">
						<IconStar />
						<div class="agents__reviews">{{ agent.rating }}</div>
						<div class="agents__dot">•</div>
					</div>
					<div v-if="agent.reviews > 0" class="agents__reviews">
						{{ agent.reviews }} отзывов
					</div>
					<div v-else class="agents__reviews">Нет отзывов</div>
				</div>
				<div class="agents__description">
					{{ agent.description }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { getAgents } from '~/api'

const agents = await getAgents()
</script>

<style scoped lang="scss">
.agents {
	&__container {
		max-width: 560px;
		margin: 0 auto;
		padding: 32px 0px 64px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	&__card {
		display: flex;
		background-color: #f5f5f5;
		border-radius: 20px;
		padding: 20px;
	}

	&__photo {
		width: 140px;
		height: 140px;
		object-fit: cover;
		border-radius: 20px;
		margin-right: 20px;
		cursor: pointer;
	}

	&__info {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	&__name {
		text-align: left;
		margin: 0 0 4px 0;
		font-size: 24px;
		font-weight: 600;
		line-height: 28px;
	}

	&__rating-container {
		display: flex;
		align-items: center;
		margin-bottom: 12px;
	}

	&__rating {
		display: flex;
		align-items: center;
	}

	&__verified {
		display: flex;
		align-items: center;
	}

	&__dot {
		font-weight: 400;
		font-size: 15px;
		line-height: 133%;
		color: #0f0f0f;
	}

	&__reviews {
		font-size: 15px;
		font-weight: 400;
		line-height: 20px;
		margin: 0 4px;
	}

	&__description {
		font-size: 15px;
		font-weight: 400;
		line-height: 24px;
		text-align: left;
		margin: 0;
		color: #0f0f0f;
		line-height: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	&__modal {
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba(0, 0, 0, 0.4);
	}

	&__modal-content {
		background-color: #fefefe;
		margin: 15% auto;
		padding: 20px;
		border: 1px solid #888;
		width: 80%;
		max-width: 600px;
		border-radius: 20px;
	}

	&__modal-close {
		color: #aaa;
		float: right;
		font-size: 28px;
		font-weight: bold;
		cursor: pointer;

		&:hover,
		&:focus {
			color: black;
			text-decoration: none;
			cursor: pointer;
		}
	}

	&__modal-header {
		display: flex;
		margin-bottom: 20px;
	}

	&__modal-photo {
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 20px;
		margin-right: 20px;
	}

	&__modal-info {
		flex: 1;
	}

	&__modal-name {
		margin: 0 0 10px 0;
		font-size: 24px;
		font-weight: 600;
	}

	&__modal-description {
		font-size: 15px;
		line-height: 24px;
		text-align: left;
		margin: 0;
		color: #0f0f0f;
	}

	@media (max-width: 600px) {
		&__dot-modal {
			display: none;
		}

		&__card {
			display: grid;
			grid-template-columns: 48px 1fr;
			grid-template-rows: auto auto auto;
			gap: 8px;
			padding: 16px;
		}

		&__photo {
			width: 48px;
			height: 48px;
			margin-right: 0;
			grid-row: 1 / 2;
			grid-column: 1 / 2;
		}

		&__info {
			grid-row: 1 / 4;
			grid-column: 2 / 3;
			display: flex;
			flex-direction: column;
		}

		&__name {
			font-size: 20px;
			line-height: 24px;
			margin: 0;
		}

		&__rating-container {
			flex-wrap: wrap;
			margin-bottom: 8px;
		}

		&__description {
			grid-row: 3 / 4;
			grid-column: 1 / 3;
			width: 100%;
		}
	}
}
</style>