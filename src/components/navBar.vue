<template>
  <main>
    <!-- Navigation Menu -->
    <nav class="hidden lg:block lg:absolute lg:top-6 lg:left-2 lg:w-[96vw] lg:h-fit lg:translate-x-0 lg:bg-transparent">
      <section
        class="text-[#1A1A1A] w-[90%] h-full pt-8 lg:py-1 px-6 bg-white flex lg:flex-row lg:w-full lg:items-center lg:justify-between lg:rounded-full lg:shadow-lg">
        <div class="flex items-center justify-between w-full lg:w-fit">
          <RouterLink to="/" class="">
            <SiteIcon />
          </RouterLink>
        </div>

        <div class="w-full lg:flex lg:justify-center lg:w-fit">

          <ul class="flex lg:pt-0 lg:gap-4 lg:flex-row  lg:items-center lg:w-full">
            <li v-for="(item, index) in menuItems" :key="index" @mouseenter="item.isOpen = true"
              @mouseleave="item.isOpen = false"
              class="relative ">
              <div
                class="flex lg:flex-row lg:items-center p-3 hover:rounded-lg  hover:bg-blue-50 cursor-pointer group">
                <div class="flex gap-1 items-center ">
                  <span class="lg:hover:text-blue-600">{{ item.name }}</span>
                  <span v-if="item.submenu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </div>

                <!-- Submenu -->
                <div v-if="item.isOpen" class="block lg:absolute lg:top-full lg:left-0 lg:mt-0 w-full lg:w-48">
                  <div class="bg-transparent  h-2"></div>
                  <ul class="nav-list-items  rounded-xl bg-blue-50 p-1 lg:shadow-lg">

                    <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex"
                      class=" hover:bg-blue-100 transition-colors">

                      <RouterLink to="#" class="block px-4 py-2" @click="handleSubmenuClick">
                        {{ subItem }}
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="mt-4 lg:mt-0 lg:ml-4 lg:w-fit">
          <!-- <button class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Contact
          </button> -->
          <div class="flex items-center gap-2 justify-between text-sm flex-wrap  text-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <span class="text-xs">+68 685 88666</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <button class="px-2 py-1 border rounded-full cursor-pointer">Add Proberty</button>
          </div>
        </div>
      </section>
    </nav>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import SiteIcon from "./icons/SiteIcon.vue";

const menuItems = ref([
  {
    name: "Home",
    isOpen: false,
    submenu: ["Test 1", "Test 2", "Test 3"],
  },
  {
    name: "Listings",
    isOpen: false,
    submenu: ["Test 4", "Test 5", "Test 6"],
  },
  {
    name: "Members",
    isOpen: false,
    submenu: ["Test 7", "Test 8", "Test 9"],
  },
  {
    name: "Blog",
    isOpen: false,
    submenu: ["Test 10", "Test 11", "Test 12"],
  },
  {
    name: "Pages",
    isOpen: false,
    submenu: ["Test 13", "Test 14", "Test 15"],
  },
]);

</script>

<style scoped>
.nav-list-items li {
  font-size: 1.1em;
  text-transform: capitalize;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}
</style>
