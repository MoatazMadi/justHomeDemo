<template>
    <div class="p-4">
        <component class="mx-auto" :is="getIconComponent(icon)" />
        <h2 class="text-base sm:text-lg font-semibold capitalize text-center">{{ title }}</h2>
        <p class="text-sm sm:text-base text-center">{{ subTitle }}</p>
    </div>
  </template>
  <script setup>
  const props = defineProps(["title","subTitle" ,"icon"]);
  
  import widerangeofproperties from "@/components/icons/widerangeofproperties.vue";
  import buyorrenthomes from "@/components/icons/buyorrenthomes.vue";
  import trustedbythousands from "@/components/icons/trustedbythousands.vue";
  
  const getIconComponent = (icon) => {
    switch (icon) {
      case "widerangeofproperties":
        return widerangeofproperties;
      case "buyorrenthomes":
        return buyorrenthomes;
      case "trustedbythousands":
        return trustedbythousands;
      default:
        return widerangeofproperties;
    }
  };
  </script>
  