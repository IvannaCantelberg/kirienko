<template>
	<div id="contact" class="text-white p-4 lg:p-16 2xl:p-28 pb-20 lg:pb-40">
		<div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 md:gap-0">
			<ContentQuery :path="`/${locale}/contact`" find="one">
				<template #default="{ data }">
					<div>
						<h2 class="title text-4xl lg:text-6xl uppercase mb-10">{{ data.sectionTitle }}</h2>
						<h3 class="title text-2xl lg:text-4xl mb-4">{{ data['title_1'] }}</h3>
						<h3 class="title text-2xl lg:text-4xl mb-10">{{ data['title_2'] }}</h3>
						<p class="text-base lg:text-xl max-w-[400px] mb-4">{{ data['note'] }}</p>
					</div>

					<div class="grid gap-4 2xl:my-10 md:p-8">
						<div class="flex gap-4 md:gap-8 items-center">
							<i class="icon-contact  size-6 lg:size-9"><IconEmail /></i>
							<div>
								<h3 class="title text-2xl lg:text-3xl mb-2">{{ data['email'] }}</h3>
								<a
									href="mailto:tatajanakirienko@gmail.com"
									@click="trackLinkClick(ANALYTICS.LINK.CONTACT_EMAIL)"
									class="text-base md:text-lg"
									title="Click to write email"
									>tatajanakirienko@gmail.com
								</a>
							</div>
						</div>
						<div class="flex gap-4 md:gap-8 items-center">
							<i class="icon-contact size-6 lg:size-9"><IconLocation /></i>
							<div>
								<h3 class="title text-2xl lg:text-3xl mb-2">{{ data['location'] }}</h3>

								<a
									href="https://maps.app.goo.gl/Saq2y9S6ZWQowNHE7"
									@click="trackLinkClick(ANALYTICS.LINK.ADDRESS_MAPS)"
									target="_blank"
									class="text-base md:text-lg"
									title="Address of atelier">
									Open Google Maps
								</a>
							</div>
						</div>
					</div>

					<div class="2xl:my-10 md:p-8 lg:col-start-2 2xl:col-start-3">
						<div class="grid h-full">
							<h3 class="title text-2xl lg:text-3xl mb-4">{{ data['follow'] }}</h3>
							<div class="flex gap-8 self-center align-middle">
								<a
									href="https://www.instagram.com/tatjana_kirienko_textile_art"
									@click="trackLinkClick(ANALYTICS.LINK.SOCIAL_INSTAGRAM)"
									target="_blank"
									class="icon-social hover:scale-125 transition-all"
									title="Instagram">
									<IconSocialInstagram />
								</a>
								<a
									href="https://www.facebook.com/TatjanaKirienkoTextileArtist"
									@click="trackLinkClick(ANALYTICS.LINK.SOCIAL_FACEBOOK)"
									target="_blank"
									class="icon-social hover:scale-125 transition-all"
									title="Facebook"
									><IconSocialFacebook />
								</a>
								<a
									href="https://www.linkedin.com/in/tatjana-kirienko-14ab0143"
									@click="trackLinkClick(ANALYTICS.LINK.SOCIAL_LINKEDIN)"
									target="_blank"
									class="icon-social hover:scale-125 transition-all"
									title="LinkedIn"
									><IconSocialLinkedIn />
								</a>
							</div>
						</div>
					</div>
				</template>
			</ContentQuery>
		</div>
	</div>
</template>

<script setup lang="ts">
	import IconSocialInstagram from '~/components/icons/IconSocialInstagram.vue'
	import IconSocialFacebook from '~/components/icons/IconSocialFacebook.vue'
	import IconSocialLinkedIn from '~/components/icons/IconSocialLinkedIn.vue'
	import IconLocation from '~/components/icons/IconLocation.vue'
	import IconEmail from '~/components/icons/IconEmail.vue'
	import { ANALYTICS } from '~/utils/constants'
	import { useI18n } from 'vue-i18n'
	const { locale } = useI18n()
	const { trackLinkClick } = useAnalytics()
</script>
<style>
	.icon-social {
		padding: 10px;
		border-radius: 5px;
		width: 56px;
		height: 56px;
		border: 1px solid var(--color-text-accent-1);
	}

	.icon-contact {
		/* width: 32px;
		height: 32px; */
		/* fill: var(--color-text-light); */

		align-content: center;
		/* padding: 10px; */
		border-radius: 5px;
		/* width: 56px;
		height: 56px; */
		/* border: 1px solid var(--color-text-accent-1); */
	}
</style>
