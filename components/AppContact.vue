<template>
    <div id="contact" class="text-white p-10 lg:p-16 2xl:p-40 pb-40 ">
       
        <div class=" grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-2">
            <div class="flex gap-10 md:gap-0 flex-col justify-evenly">
                <div>
                    <h2 class="title text-6xl uppercase mb-10">Contact</h2>    
                    <p class="text-lg max-w-[260px] mb-4">Send me a note to get the conversation started</p>
                    <p class="text-sm">* mandatory fields</p>
                </div>

                <div>
                    <div class="my-10 border-y py-8 px-8 max-w-[300px]">
                    <div class="mb-6">
                        <h3 class="title text-3xl mb-4">Email</h3>
                        <a href="mailto:tatajana.kirienko@gmail.com" class="ml-5">tatajana.kirienko@gmail.com</a>
                    </div>
                    <div>
                        <h3 class="title text-3xl mb-4">Location</h3>
                        <a href="https://g.co/kgs/srHZJYq" target="_blank" class="ml-5">Open Google Maps</a>
                    </div>        
                    </div>

                    <div class="flex gap-4">
                        <a href="https://www.instagram.com/tatjana_kirienko_textile_art" target="_blank" class="social-link hover:scale-125 transition-all"><IconSocialInstagram /> </a>
                        <a href="https://www.facebook.com/TatjanaKirienkoTextileArtist" target="_blank" class="social-link hover:scale-125 transition-all"><IconSocialFacebook /> </a>
                        <a href="https://www.linkedin.com/in/tatjana-kirienko-14ab0143" target="_blank" class="social-link hover:scale-125 transition-all"><IconSocialLinkedIn /> </a>
                    </div>
                </div>

            </div>         
            <div>
                <h3 class="title text-4xl mb-4">Have a question ?</h3>
                <h3 class="title text-4xl mb-4">Want to join to the project?</h3>

                <div class="bg-white bg-opacity-10 p-10 sm:p-5 lg:py-16 lg:px-14 my-5 lg:m-14">
                    <form class="flex flex-col">
                        <div class="grid gap-6 mb-10">
                            <div>
                                <label for="name" class="block mb-2 text-md font-medium">Name *</label>
                                <input type="text" id="name" class="border text-sm rounded-sm block w-full p-2.5 bg-white bg-opacity-10 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label for="fiemailrst_name" class="block mb-2 text-md font-medium">Email *</label>
                                <input type="email" id="email" class="border text-sm rounded-sm block w-full p-2.5 bg-white bg-opacity-10 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="" required />
                            </div>
                            <div>
                                <label for="message" class="block mb-2 text-md font-medium">Message *</label>
                                <textarea rows="5" id="message" class="border text-sm rounded-sm block w-full p-2.5 bg-white bg-opacity-10 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Type your message here.." required />
                            </div>
                            <div class="flex items-start mb-6">
                                <label class="block text-gray-500">
                                <input class="mr-2 leading-tight " type="checkbox">
                                <span class="ms-2 text-md font-medium text-gray-300">
                                    Subscribe for newsletters
                                </span>
                            </label>
                            </div>

                            

                        </div>
                        <button type="button" class="bg-white text-black font-bold py-3 px-16 rounded-md self-end">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import IconSocialInstagram from '~/components/icons/IconSocialInstagram.vue';
import IconSocialFacebook from '~/components/icons/IconSocialFacebook.vue';
import IconSocialLinkedIn from '~/components/icons/IconSocialLinkedIn.vue';
</script>
<style>
.social-link {
    width: 54px;
    height: 54px;
    fill: var(--color-text-light);
}
</style>