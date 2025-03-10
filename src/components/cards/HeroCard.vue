<template>
  <a
    href="#"
    class="flex items-center justify-between gap-1 bg-white/15 backdrop-blur-sm rounded-full px-1 w-32 sm:w-36 py-1"
  >
    <div class="p-1 sm:p-2 bg-white rounded-full">
      <component :is="getIconComponent(icon)" />
    </div>
    <p class="text-center flex-1 capitalize text-sm sm:text-base">
      {{ title }}
    </p>
  </a>
</template>
<script setup>
const props = defineProps(["title", "icon"]);

import modernvilla from "@/components/icons/modernvilla.vue";
import apartment from "@/components/icons/apartment.vue";
import townhouse from "@/components/icons/townhouse.vue";

const getIconComponent = (icon) => {
  switch (icon) {
    case "modernvilla":
      return modernvilla;
    case "apartment":
      return apartment;
    case "townhouse":
      return townhouse;
    default:
      return modernvilla;
  }
};
</script>
