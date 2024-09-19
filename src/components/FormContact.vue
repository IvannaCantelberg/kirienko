<script setup lang="ts">
import IconPhone from './icons/IconPhone.vue'
import IconLocation from './icons/IconLocation.vue'
</script>

<template>
  <section>
    <div class="grid gap-8 grid-cols-1 md:grid-cols-12 shadow-[#87d5f3d4] shadow-2xl rounded-3xl">
      <div class="bg-[#87d5f3d4] md:col-span-6 p-10 text-white rounded-s-3xl">
        <p class="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
        <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
          Get In <span class="text-indigo-600">Touch</span>
        </h3>
        <p class="mt-4 leading-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s.
        </p>

        <div class="flex items-center mt-5">
          <IconLocation></IconLocation>
          <span class="text-sm">Arnhem, The Netherlands.</span>
        </div>
        <div class="flex items-center mt-5">
          <IconPhone></IconPhone>
          <a href="tel:+123456789"><span class="text-sm">+123456789</span></a>
        </div>
      </div>
      <form class="md:col-span-6 p-10">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Name*
            </label>
            <input
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-red-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p class="text-red-400 text-xs italic">Please fill out this field.</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-email"
            >
              Email Address*
            </label>
            <input
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="********@*****.**"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-subject"
            >
              Subject*
            </label>
            <input
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-subject"
              type="text"
              placeholder="Contribute to the project.."
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Your Message*
            </label>
            <textarea
              rows="5"
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></textarea>
          </div>
          <div class="flex justify-between w-full px-3">
            <div class="md:flex md:items-center">
              <label class="block text-gray-500 font-bold">
                <input class="mr-2 leading-tight" type="checkbox" />
                <span class="text-sm"> Send me your newsletter! </span>
              </label>
            </div>
            <button
              class="shadow bg-[#87d5f3d4] hover:bg-[#87d4f3] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
