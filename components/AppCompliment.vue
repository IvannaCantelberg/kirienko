<template>
	<article id="compliment" class="w-full py-20 lg:py-40">
		<ContentQuery :path="`/${locale}/case`" find="one">
			<template #default="{ data }">
				<div class="flex flex-col mb-10">
					<h1 class="title text-4xl lg:text-6xl xl:text-7xl mb-10 uppercase">
						{{ data['sectionTitle'] }}
					</h1>

					<h3
						class="text-secondary text-base lg:text-xl 2xl:text-2xl text-right max-w-[900px] 2xl:max-w-[70%] self-end">
						{{ data['description'] }}
					</h3>
				</div>
				<blockquote
					class="bg-white p-5 lg:p-20 min-w-[350px] max-w-[1200px] 2xl:max-w-[80%] mx-auto my-20 border">
					<UserCompliment :data="data['dialog']" />
				</blockquote>
			</template>
			<template #not-found>
				<p>No data found.</p>
			</template>
		</ContentQuery>
	</article>
</template>
<script setup lang="ts">
	import UserCompliment from '~/components/UserCompliment.vue'
	import { useI18n } from 'vue-i18n'
	const { locale } = useI18n()
</script>
<style></style>
