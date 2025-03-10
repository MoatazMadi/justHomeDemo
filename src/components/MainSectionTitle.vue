<template>
        <main class="pt-20 text-center">
            <h1 class="text-2xl sm:text-4xl capitalize mb-2 font-semibold">{{ title || '' }}</h1>
            <p class="text-xs sm:text-sm capitalize">{{ subTitle || '' }}</p>
        </main>
</template>

<script setup>
defineProps(['title','subTitle'])
</script>