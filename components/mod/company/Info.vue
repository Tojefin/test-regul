<template>
	<div class="about">
		<div class="about__description">
			<h2 class="about__title">О компании</h2>
			<p class="about__text">{{ company.description }}</p>
		</div>

		<div class="about__working-hours">
			<div class="about__hours-header">
				<div class="about__hours-header-container">
					<h2 class="about__hours-title">Режим работы</h2>
					<span class="about__arrow" />
				</div>
				<p class="about__first-day">Сегодня {{ company.workingHours }}</p>
			</div>
		</div>

		<div class="about__address">
			<div class="about__address-content">
				<h2 class="about__title">Местоположение</h2>
				<p class="about__address-text">{{ company.address }}</p>
			</div>
			<img src="/map.png" alt="Карта местоположения" class="about__map-image">
		</div>
	</div>
</template>

<script setup>
import { getCompany } from '~/api'

const company = await getCompany()
</script>

<style scoped lang="scss">
.about {
	max-width: 560px;
	margin: 0 auto;
	padding: 32px 0px 64px;
	display: flex;
	flex-direction: column;
	gap: 12px;

	&__description,
	&__working-hours,
	&__address {
		max-width: 560px;
	}

	&__description {
		padding: 20px;
	}

	&__address {
		padding: 0 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 560px;

		&-content {
			display: flex;
			flex-direction: column;
			padding: 20px 20px 20px 0px;
		}
	}

	&__hours-title {
		font-size: 24px;
		font-weight: 600;
		line-height: 28px;
		text-align: left;
		color: #b1b1b1;
		margin: 0px;
	}

	&__title {
		font-size: 24px;
		font-weight: 600;
		line-height: 28px;
		text-align: left;
		margin: 0px 0px 8px;
	}

	&__text {
		font-size: 17px;
		font-weight: 400;
		line-height: 28px;
		text-align: left;
		margin: 0px;
	}

	&__address-text {
		font-size: 17px;
		font-weight: 400;
		line-height: 28px;
		text-align: left;
		margin: 0px;
		color: #337566;
	}

	&__working-hours {
		border-radius: 16px;
		background: #f5f5f5;
		overflow: hidden;
	}

	&__hours-header {
		display: flex;
		flex-direction: column;
		cursor: pointer;
		padding: 20px;

		&-container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 8px;
		}
	}

	&__first-day {
		font-size: 17px;
		font-weight: 400;
		line-height: 28px;
		color: #b1b1b1;
		margin: 0px;
	}

	&__arrow {
		width: 10px;
		height: 10px;
		border-right: 2px solid #b1b1b1;
		border-bottom: 2px solid #b1b1b1;
		transform: rotate(45deg);
		transition: transform 0.5s ease;

		&--open {
			transform: rotate(-135deg);
		}
	}

	&__hours-content {
		overflow: hidden;
		max-height: 0;
		transition: max-height 0.5s ease-in-out;

		&--open {
			max-height: 500px;
		}
	}

	&__hours-list {
		list-style-type: none;
		padding: 0 20px 20px;
		margin: 0;
	}

	&__hours-item {
		display: flex;
		justify-content: space-between;
		margin-bottom: 5px;
		font-size: 17px;
		font-weight: 400;
		line-height: 28px;
		color: #666;
	}

	&__day,
	&__time {
		color: #b1b1b1;
		font-size: 17px;
		font-weight: 400;
		line-height: 28px;
		text-align: left;
	}

	&__map-image {
		width: 200px;
		height: 132px;
		border-radius: 8px 8px 8px 0;
	}

	@media (max-width: 500px) {
		&__address {
			flex-direction: column;
			align-items: flex-start;
			padding: 20px;

			&-content {
				width: 100%;
				padding: 20px 0 0 0;
			}
		}

		&__map-image {
			width: 100%;
			height: 90px;
			order: -1;
			margin-bottom: 20px;
		}
	}
}
</style>