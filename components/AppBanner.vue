<template>
	<article class="relative">
		<NuxtImg 
			src="/img/1.png"
			preload  		
			format="webp" 
			densities="x1"
			sizes="xs:100vw sm:100vw md:600px lg:100vw xl:100vw"
			class="bg-profile-image bg-cover size-full absolute top-0 right-0 left-0" />
		<div class="banner-container relative px-3 lg:px-[10%]">
			<div class="text-white stroke-white text-right flex flex-col items-end z-0">
				<h2 class="text-xl lg:text-3xl mb-10">
					{{ $t('banner.1') }}
					<a
						href="https://tatjana-kirienko.art"
						@click="trackLinkClick(ANALYTICS.LINK.REFERENCE_SITE)"
						target="_blank"
						title="tatjana-kirienko.art website"
						class="text-3xl lg:text-4xl xl:text-5xl underline pl-5">
						{{ $t('banner.2') }} <i> <IconArrowRight class="inline xl:size-9" /> </i
					></a>
				</h2>
				<h2 class="text-xl lg:text-2xl max-w-[550px]">
					{{ $t('banner.3') }}
				</h2>
			</div>
			<h3
				class="text-white text-xl lg:text-2xl  self-end max-w-[550px] text-justify z-0"
				v-html="$t('banner.4')"></h3>
		</div>
	</article>
</template>
<script setup lang="ts">
	import IconArrowRight from '~/components/icons/IconArrowRight.vue'
	import { ANALYTICS } from '~/utils/constants'
	const { trackLinkClick } = useAnalytics()
</script>

<style lang="less">
	.bg-image {
		background-repeat: no-repeat;
		background-position: center bottom;
	}

	@media (min-width: 1420px) {
		.bg-image {
			background-position: left bottom;
		}
	}

	.bg-profile-image {
		background-position: center left;
		background-repeat: no-repeat;
		object-fit: cover;
   		object-position: right;
	}

	.banner-container {
		    height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		background-image: linear-gradient(113deg, rgb(109 127 137 / 80%),  rgb(2 29 59 / 80%))
		
	}

	.text-accent-2 {
		color: var(--color-text-accent-2);
		stroke: var(--color-text-accent-2);
	}

	mark {
		background-color: var(--color-text-accent-2);
		color: var(--color-text-white);
		padding: 4px;
	}
</style>
