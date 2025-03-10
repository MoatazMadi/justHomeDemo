<template>
    <main class="bg-[#1A1A1A] pb-12">
        <MainSectionTitle class="text-white" title="Best Properties"
            sub-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <section class="container grid grid-cols-1 gap-6 px-2  md:grid-cols-2  py-20 lg:py-32 ">
            <div v-if="data && data.length > 0" class="h-[500px] md:h-full">
                    <PropertiesCard :property="data[1]" class="w-full h-full" />
            </div>
            <div class="flex flex-wrap gap-6 w-full">
                <div class=" w-full flex justify-center">
                    <Carousel height="300px" navigation-true="true" />
                </div>
                <div class="col-span-4 grid grid-cols-2 gap-6 justify-between w-full">
                    <div class="w-full"><img src="/imgs/bg-video.png" loading="lazy" class="w-full h-full object-conver" /></div>
                    <div class="bg-[#E7C873] rounded-2xl p-4">
                        <h2 class="text-3xl font-bold">280+</h2>
                        <span class="mt-2 mb-5 block font-semibold">Properties</span>
                        <p >Explore our wide variety of properties
                            to fid your dream home today</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MainSectionTitle from '../MainSectionTitle.vue';
import PropertiesCard from '../cards/PropertiesCard.vue';
import Carousel from '../Carousel.vue';

const data = ref(null)
const getProperties = async () => {
    try {
        const res = await fetch("/justHomeDemo/data/Properties.json");
        return await res.json();
    } catch (err) {
        console.log("Properties data not accessible", err);
        return [];
    }
};

onMounted(async () => {
    data.value = await getProperties();
});



</script>

<style scoped></style>