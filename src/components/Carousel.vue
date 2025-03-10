<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps(['height', "navigationTrue"])
const { height, navigationTrue } = props

const properties = ref([]);
const data = ref(null);

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
    if (data.value && data.value.length > 0) {
        if (navigationTrue){
            properties.value = data.value
            properties.value = [data.value[0]]
        }
        else
            properties.value = data.value
    } else {
        properties.value = [];
    }
});
</script>

<template>
    <div class="carousel__wrapper flex justify-evenly gap-6 h-fit flex-wrap  ">
        <section class="h-full" v-for="image in properties" :key="image.title">

            <div class="relative  rounded-lg h-full overflow-hidden">
                <img :src="image.image" alt="image" class="carousel-img w-56 h-96" loading="lazy" />
                <div class="absolute top-0 left-0 w-full h-full bg-black/20"></div>
                <div class="absolute top-4 left-2 text-white text-lg font-semibold">
                    <h4>{{ image.title }}</h4>
                    <span>{{ image.number }}</span>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
.carousel-img {
    border-radius: 8px;
    object-fit: cover;
}

/* carousel */
.carousel__pagination-button {
    height: 5px;
    width: 5px;
    padding: 5px;
    border-radius: 100%;
    background-color: gainsboro;
}

.carousel__pagination-button--active {
    background-color: black;
}

.carousel__wrapper {
    /* resize: horizontal; */
    /* border: 2px dashed gray; */
    overflow: visible;
    /* max-width: 688px; */
    min-height: 100%;
    padding: 2px;
}
</style>