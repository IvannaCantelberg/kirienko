<template>
	<article>
		<div class="gallery-container flex justify-center mx-auto">
			<div class="flex flex-col row">
				<picture class="relative">
					<!-- <img src="/img/projects/life-force/gallery/1.webp" decoding="async" loading="lazy" alt="" srcset="" height="400" width="400"> -->
					<el-image
						class="absolute top-0 left-0 bottom-0 right-0 size-full"
						width="400"
						:src="optimizeGalleryPhoto('/img/projects/life-force/gallery/1.webp')"
						:zoom-rate="1.2"
						:max-scale="7"
						:min-scale="0.2"
						:preview-src-list="imageFiles"
						:initial-index="0"
						fit="fill" />
				</picture>
				<picture>
					<!-- <img src="/img/projects/life-force/gallery/2.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
					<el-image
						decoding="async"
						width="400"
						:src="optimizeGalleryPhoto('/img/projects/life-force/gallery/2.webp')"
						:zoom-rate="1.2"
						:max-scale="7"
						:min-scale="0.2"
						:preview-src-list="imageFiles"
						:initial-index="1"
						fit="fill"
						class="absolute top-0 left-0 bottom-0 right-0 size-full" />
				</picture>
				<picture>
					<!-- <img src="/img/projects/life-force/gallery/3.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
					<el-image
						decoding="async"
						loading="lazy"
						width="400"
						:src="optimizeGalleryPhoto('/img/projects/life-force/gallery/3.webp')"
						:zoom-rate="1.2"
						:max-scale="7"
						:min-scale="0.2"
						:preview-src-list="imageFiles"
						:initial-index="2"
						fit="fill"
						class="absolute top-0 left-0 bottom-0 right-0 size-full" />
				</picture>
			</div>
			<div class="flex flex-col row">
				<picture class="relative">
					<!-- <img src="/img/projects/life-force/gallery/4.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
					<el-image
						class="absolute top-0 left-0 bottom-0 right-0 size-full"
						decoding="async"
						loading="lazy"
						width="400"
						:src="optimizeGalleryPhoto('/img/projects/life-force/gallery/4.webp')"
						:zoom-rate="1.2"
						:max-scale="7"
						:min-scale="0.2"
						:preview-src-list="imageFiles"
						:initial-index="3"
						fit="fill" />
				</picture>
				<picture>
					<!-- <img src="/img/projects/life-force/gallery/5.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
					<el-image
						decoding="async"
						loading="lazy"
						width="400"
						:src="optimizeGalleryPhoto('/img/projects/life-force/gallery/5.webp')"
						:zoom-rate="1.2"
						:max-scale="7"
						:min-scale="0.2"
						:preview-src-list="imageFiles"
						:initial-index="4"
						fit="fill"
						class="absolute top-0 left-0 bottom-0 right-0 size-full" />
				</picture>
			</div>
			<div class="flex flex-col row">
				<picture>
					<!-- <img src="/img/projects/life-force/gallery/6.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
					<el-image
						decoding="async"
						loading="lazy"
						width="400"
						:src="optimizeGalleryPhoto('/img/projects/life-force/gallery/6.webp')"
						:zoom-rate="1.2"
						:max-scale="7"
						:min-scale="0.2"
						:preview-src-list="imageFiles"
						:initial-index="5"
						fit="fill"
						class="absolute top-0 left-0 bottom-0 right-0 size-full" />
				</picture>
				<picture>
					<!-- <img src="/img/projects/life-force/gallery/7.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
					<el-image
						decoding="async"
						loading="lazy"
						width="400"
						:src="optimizeGalleryPhoto('/img/projects/life-force/gallery/7.webp')"
						:zoom-rate="1.2"
						:max-scale="7"
						:min-scale="0.2"
						:preview-src-list="imageFiles"
						:initial-index="6"
						fit="fill"
						class="absolute top-0 left-0 bottom-0 right-0 size-full" />
				</picture>
				<picture>
					<!-- <img src="/img/projects/life-force/gallery/8.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
					<el-image
						decoding="async"
						loading="lazy"
						width="400"
						:src="optimizeGalleryPhoto('/img/projects/life-force/gallery/8.webp')"
						:zoom-rate="1.2"
						:max-scale="7"
						:min-scale="0.2"
						:preview-src-list="imageFiles"
						:initial-index="7"
						fit="fill"
						class="absolute top-0 left-0 bottom-0 right-0 size-full" />
				</picture>
				<picture>
					<!-- <img src="/img/projects/life-force/gallery/9.webp" decoding="async" loading="lazy" alt="" srcset="" width="400"> -->
					<el-image
						decoding="async"
						loading="lazy"
						width="400"
						:src="optimizeGalleryPhoto('/img/projects/life-force/gallery/9.webp')"
						:zoom-rate="1.2"
						:max-scale="7"
						:min-scale="0.2"
						:preview-src-list="imageFiles"
						:initial-index="8"
						fit="fill"
						class="absolute top-0 left-0 bottom-0 right-0 size-full" />
				</picture>
			</div>
		</div>
	</article>
</template>

<script lang="ts" setup>
	const img = useImage()

	const optimizeGalleryPhoto = (imgUrl: string) => {
		const backgroundProjectImage = computed(() => {
			const result = img(
				imgUrl,
				{
					width: 500,
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

	const imageFiles = [
		'/img/projects/life-force/gallery/1.webp', 
		'/img/projects/life-force/gallery/2.webp', 
		'/img/projects/life-force/gallery/3.webp', 
		'/img/projects/life-force/gallery/4.webp',
		'/img/projects/life-force/gallery/5.webp',
		'/img/projects/life-force/gallery/6.webp',
		'/img/projects/life-force/gallery/7.webp',
		'/img/projects/life-force/gallery/8.webp',
		'/img/projects/life-force/gallery/9.webp'
	]


</script>

<style scoped lang="less">
	@color: #d41d1d;
	@width: 80%;

	.gallery-container {
		font-size: min(1.3vw, 1em);
		gap: (30 / 20) * 1em;
	}

	.gallery-container .row {
		gap: (30 / 20) * 1em;
	}

	.gallery-container .row picture {
		position: relative;
		display: block;
	}

	:deep(.el-image__preview) {
		cursor: zoom-in;
	}
</style>
