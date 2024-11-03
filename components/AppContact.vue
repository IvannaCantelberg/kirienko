<template>
  <div id="contact" class="text-white p-10 lg:p-16 2xl:p-28 pb-40">
    <div class="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-3">
      <div>
        <h2 class="title text-6xl uppercase mb-10">Contact</h2>
        <h3 class="title text-4xl mb-4">Have a question ?</h3>
        <h3 class="title text-4xl mb-10">Want to join to the project?</h3>
        <p class="text-xl max-w-[260px] mb-4">Send me a note to get the conversation started</p>
      </div>

      <div>
        <div class="grid gap-4 my-10 py-8 px-8">
          <div class="flex gap-8 items-center">
            <i class="icon-contact"><IconEmail /></i>
            <div>
              <h3 class="title text-3xl mb-2">Email</h3>
              <a
                href="mailto:tatajanakirienko@gmail.com"
                class="text-lg"
                title="Click to write email"
                >tatajanakirienko@gmail.com
              </a>
            </div>
          </div>
          <div class="flex gap-8 items-center">
            <i class="icon-contact"><IconLocation /></i>
            <div>
              <h3 class="title text-3xl mb-2">Location</h3>

              <a
                href="https://g.co/kgs/srHZJYq"
                target="_blank"
                class="text-lg"
                title="Address of atelier"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="my-10 p-8">
        <div class="grid h-full">
          <h3 class="title text-3xl mb-4">Follow me</h3>
          <div class="flex gap-8 self-center align-middle">
            <a
              href="https://www.instagram.com/tatjana_kirienko_textile_art"
              target="_blank"
              class="icon-social hover:scale-125 transition-all"
              title="Instagram"
            >
              <IconSocialInstagram />
            </a>
            <a
              href="https://www.facebook.com/TatjanaKirienkoTextileArtist"
              target="_blank"
              class="icon-social hover:scale-125 transition-all"
              title="Facebook"
              ><IconSocialFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/tatjana-kirienko-14ab0143"
              target="_blank"
              class="icon-social hover:scale-125 transition-all"
              title="LinkedIn"
              ><IconSocialLinkedIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconSocialInstagram from '~/components/icons/IconSocialInstagram.vue'
import IconSocialFacebook from '~/components/icons/IconSocialFacebook.vue'
import IconSocialLinkedIn from '~/components/icons/IconSocialLinkedIn.vue'
import IconLocation from '~/components/icons/IconLocation.vue'
import IconEmail from '~/components/icons/IconEmail.vue'
</script>
<style>
.icon-social {
  padding: 10px;
  border-radius: 5px;
  width: 56px;
  height: 56px;
  border: 1px solid var(--color-text-accent-2);
}

.icon-contact {
  width: 32px;
  height: 32px;
  fill: var(--color-text-light);

  align-content: center;
  padding: 10px;
  border-radius: 5px;
  width: 56px;
  height: 56px;
  border: 1px solid var(--color-text-accent-2);
}
</style>
