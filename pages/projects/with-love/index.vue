<template>
	<main>
		<AppHeader>
			<ContentQuery :path="`/${locale}/header`" find="one">
				<template #default="{ data }">
					<a href="#contact" class="py-2 px-3 lang-link">{{ data['contact'] }}</a>
				</template>
			</ContentQuery>
		</AppHeader>
		<section class="min-h-[85vh] relative mt-12">
			<ContentQuery :path="`/${locale}/projects/with-love`" find="one">
				<template #default="{ data }">
					<div
						:style="{
							'background-image':
								'url(' + optimizeImg(data['project_image_last_v']) + ')'
						}"
						class="bg-image bg-cover bg-center absolute size-full">
						<div
							class="size-full bg-gray-500 bg-opacity-55 bg-blend-color-burn flex flex-col items-center justify-center">
							<figure class="shadow-white shadow-2xl">
								<div
									class="relative bg-project-image bg-cover size-[320px] lg:size-[480px] xl:size-[600px]"
									:style="{
										'background-image':
											'url(' + optimizeImg(data['project_image_last_v']) + ')'
									}"></div>
							</figure>
						</div>
					</div>
				</template>
			</ContentQuery>
		</section>
		<section class="my-20  mx-auto lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
			<ContentQuery :path="`/${locale}/projects/with-love`" find="one">
				<template #default="{ data }">
					<h1 class="title text-5xl text-center px-2  my-20">
						{{ data['sectionTitle'] }}
					</h1>
					<div class="mx-10 md:mx-14 lg:mx-8 relative">
						<FigureFrame class="frame hidden md:block" />
						<p class="text-base text-justify" v-html="data['description']"></p>
						<FigureFrame class="frame reversed hidden md:block" />
					</div>

				</template>
			</ContentQuery>

			<ProjectTimeline class="my-20 px-5 lg:px-0 " />
		</section>
	</main>
</template>
<script lang="ts" setup>
	import ProjectTimeline from '~/components/with-love-project/ProjectTimeline.vue'
	import FigureFrame from '~/components/icons/FigureFrame.vue'
	import { useI18n } from 'vue-i18n'
	const { locale } = useI18n()

	useSeoMeta({
		title: 'With Love - Textile art project',
		ogTitle: 'With Love - Textile art project',
		description: 'This is Ukrainian textile art project.',
		ogDescription: 'This is Ukrainian textile art project',
		ogUrl: 'https://ukrainianartproject.com/'
	})

	const img = useImage()

	const optimizeImg = (imgUrl: string) => {
		const backgroundProjectImage = computed(() => {
			const result = img(
				imgUrl,
				{
					sizes: 'xs:100vw sm:100vw lg:400px xl:600px',
					format: 'webp'
				},
				{
					densities: 'x1'
				}
			)

			return result
		})
		return backgroundProjectImage.value
	}
</script>
