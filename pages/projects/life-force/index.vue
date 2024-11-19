<template>
	<section class="root py-20 pt-28 lg:py-40">
		<AppHeader>
			<ContentQuery :path="`/${locale}/header`" find="one">
				<template #default="{ data }">
					<a href="#contact" class="py-2 px-3 lang-link">{{ data['contact'] }}</a>
				</template>
			</ContentQuery>
		</AppHeader>

		<div class="grid grid-cols-1 gap-5 gallery-section px-4 lg:px-0">
			<section class="pb-10 xl:pb-20">
				<LifeForceCarousel />
			</section>
			<div class="">
				<ContentQuery :path="`/${locale}/projects/life-force`" find="one">
					<template #default="{ data }">
						<h1 class="text-center text-6xl xl:text-7xl title">
							{{ data['sectionTitle'] }}
						</h1>

						<!-- <h1 class="title text-center">Life Force</h1> -->

						<section class="flex flex-col items-center my-10 lg:my-20">
							<div class="md:mx-14 text-base relative">
								<FigureFrame class="frame hidden md:block" />
								<p v-html="data['description']"></p>
								<FigureFrame class="frame reversed hidden md:block" />
								<br /> 
								<p class="text-secondary" v-html="data['register']"></p>
							</div>
						</section>
					</template>
				</ContentQuery>
			</div>
		</div>

		<section
			class="flex flex-col gap-4 px-4 xl:px-0 xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
			<ContentQuery :path="`/${locale}/projects/life-force`" find="one">
				<template #default="{ data }">
					<div :class="{ collapsed: isCollapsed }">
						<div class="grid gap-5">
							<div
								v-for="(content, index) in data['content']"
								:key="index"
								class="grid grid-cols-1">
								<div
									:class="{
										'flex-row-reverse ': index % 2 === 0,
										'justify-center': !content['img']
									}"
									class="flex gap-5 items-center justify-end h-40">
									<template v-if="content['img']">
										<h2 class="title-size title" v-html="content['title']"></h2>
										<picture class="size-40">
											<img :src="content['img']" alt="" class="h-full" />
										</picture>
									</template>
									<template v-else>
										<h2
											class="title-size title text-center mb-5"
											v-html="content['title']"></h2>
									</template>
								</div>

								<p
									class="text-justify"
									:class="{
										'description': !!content['img'],
										'justify-self-end': index % 2 === 0
									}"
									v-html="content['description']"></p>
							</div>
						</div>
					</div>

					<button
						type="button"
						@dblclick.stop
						@click="handleContentVisisbility()"
						class="text-lg text-accent-2 self-end">
						...Read {{ isCollapsed ? 'more' : 'less' }}
					</button>

					<p class="text-secondary" v-html="data['donationText']"></p>
				</template>
			</ContentQuery>

			<div class="self-center">
				<a
					href="https://gofund.me/01c944a4"
					target="_blank"
					class="bg-[#0073F1] btn-link text-white stroke-white content-center px-10 mt-5 text-lg hover:shadow-xl transition-all">
					Go Fund
					<IconArrowRight />
				</a>
			</div>
		</section>
	</section>
</template>

<script setup lang="ts">
	import LifeForceCarousel from '~/components/life-force-project/LifeForceCarousel.vue'
	import FigureFrame from '~/components/icons/FigureFrame.vue'
	import IconArrowRight from '~/components/icons/IconArrowRight.vue'
	import { useI18n } from 'vue-i18n'
	const { locale } = useI18n()

	const isCollapsed = ref<boolean>(true)

	const handleContentVisisbility = () => {
		return (isCollapsed.value = !isCollapsed.value)
	}
</script>

<style scoped lang="less">
	.root {
		background-color: var(--vt-c-white);
	}

	.gallery-section {
		margin-left: auto;
		margin-right: auto;
		max-width: (1800 / 20) * 1em;
	}

	.collapsed {
		max-height: 200px;
		overflow: hidden;
	}

	.title-size {
		font-size: min(8vw, 3em);
	}

	.description {
		max-width: min(100%, (1400 / 20) * 1em);
	}
</style>
