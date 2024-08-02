<template>
	<div class="company__container">
		<img :src="company.logo" :alt="company.name" class="company__avatar">
		<h2 class="company__name">{{ company.name }}</h2>
		<div class="company__rating-container">
			<IconVerifycation />
			<div class="company__reviews">Документы проверены</div>
			<span class="company__dot">•</span>
			<IconStar />
			<div class="company__reviews">{{ company.rating }}</div>
			<span class="company__dot">•</span>
			<div class="company__reviews">{{ company.reviews }} отзывов</div>
		</div>
		<div class="company__phone-container">
			<button class="company__phone-button">
				Показать номер телефона
			</button>
		</div>
		<div class="company__link-container">
			<a href="/bord" class="company__link" :class="{ 'company__link--active': route.path == '/bord' }">Товары и
				услуги</a>
			<a href="/agents" class="company__link" :class="{ 'company__link--active': route.path == '/agents' }">
				Агенты
				<pre class="company__link-agents"> {{ company.agentsCount }}</pre>
			</a>
			<a href="/" class="company__link" :class="{ 'company__link--active': route.path == '/' }">О компании</a>
		</div>
	</div>
	<v-divider/>
</template>

<script setup>
import { getCompany } from '~/api'

const route = useRoute()

const company = await getCompany()
</script>

<style scoped lang="scss">
.company {
	&__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto 32px;

	}

	&__avatar {
		width: 120px;
		height: 120px;
		border-radius: 20px;
	}

	&__rating-container {
		display: flex;
		align-items: center;
		gap: 4px;
		margin-bottom: 24px;
	}

	&__rating {
		display: flex;
		align-items: center;
	}

	&__phone-container {
		position: relative;
		margin-bottom: 20px;
	}

	&__phone-wrapper {
		position: relative;
	}

	&__phone-close-button {
		position: absolute;
		top: 0px;
		right: -40px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #e0e0e0;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16px;
		line-height: 1;
	}

	&__verified {
		display: flex;
		align-items: center;
		font-size: 14px;
	}

	&__dot {
		font-weight: 400;
		font-size: 15px;
		line-height: 133%;
		color: #0f0f0f;
	}

	&__name {
		font-size: 24px;
		font-weight: 600;
		line-height: 28px;
		text-align: left;
		margin: 24px 0px 12px 0px;
	}

	&__phone-button {
		cursor: pointer;
		padding: 16px 20px;
		border-radius: 12px;
		border: 0px;
		background: #337566;
		color: #f5f5f5;
		font-size: 15px;
		font-weight: 500;
		line-height: 24px;
		text-align: center;
	}

	&__phone {
		margin: 0px;
		padding: 16px 0px;
		font-size: 17px;
		font-weight: 500;
		line-height: 24px;
		text-align: center;
		color: black;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}

	&__link-container {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	&__link {
		display: flex;
		align-items: center;
		padding: 8px 12px;
		border-radius: 12px;
		text-decoration: none;
		color: black;
		margin: 0px 4px;
		background: #e8e8e8;
		font-size: 15px;
		font-weight: 500;
		line-height: 24px;
		text-align: center;
		cursor: pointer;
		transition: background-color 0.3s;

		&:hover {
			background-color: #e0e0e0;
		}

		&--active {
			border: 1px solid #0f0f0f;
		}
	}

	&__link-agents {
		font-weight: 500;
		font-size: 15px;
		line-height: 160%;
		text-align: center;
		color: #6b6b6b;
		font-family: 'Inter';
	}

	&__reviews {
		font-size: 15px;
		font-weight: 400;
		line-height: 20px;
		text-align: left;
	}

	@media (max-width: 400px) {
		&__rating-container {
			flex-direction: column;
			align-items: center;
		}

		&__verified {
			margin-bottom: 8px;
		}

		&__rating {
			display: flex;
			align-items: center;
		}

		&__reviews {
			display: inline;
		}

		&__dot {
			display: none;
		}
	}
}
</style>