<template>
    <main class="container">
        <!-- secound section-->
    <MainSectionTitle title="Featured Properties"
        sub-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    <section>
        <div class="flex justify-center items-center  gap-6 md:gap-12 my-12 text-lg">
            <button :class="['text-sm ', filter == null ? 'button-filter' : 'de-b']" @click="all">All
                Properties</button>
            <button :class="['text-sm ', filter == 'forSale' ? 'button-filter' : 'de-b']" @click="forsale">For
                Sale</button>
            <button :class="['text-sm ', filter == 'forRent' ? 'button-filter' : 'de-b']" @click="forRent">For
                Rent</button>
        </div>
        <div v-if="properties.length > 0"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center md:justify-items-normal">
            <TransitionGroup name="list">
                <div v-for="prop in properties" :key="prop.id">
                    <PropertiesCard :property="prop" />
                </div>
            </TransitionGroup>

        </div>
        <button
            class="button my-8 text-xl  text-slate-950 border-none cursor-pointer bg-[#E7C873] flex items-center gap-3 justify-center mx-auto"
            @click="showAll">
            <span>See All Listing</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>

        </button>
    </section>
    </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MainSectionTitle from "@/components/MainSectionTitle.vue";

import PropertiesCard from "@/components/cards/PropertiesCard.vue";

const show = ref(false)
const data = ref(null);
const properties = ref([]);

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
        all();
    } else {
        properties.value = [];
    }
});

const filter = ref(null);

const forRent = () => {
    filter.value = "forRent";
    properties.value = data.value.filter((prop) => prop.forRent).slice(0, 6);

};

const forsale = () => {
    filter.value = "forSale";
    properties.value = data.value.filter((prop) => prop.forSale).slice(0, 6);
};

const all = () => {
    filter.value = null;
    properties.value = data.value.slice(0, 6);
};

const showAll = () => {
    filter.value = null;
    properties.value = data.value;
};
</script>

<style scoped>
@reference "tailwindcss";

.de-b {
    @apply rounded-full py-1 px-3 sm:px-5 hover:bg-slate-300 cursor-pointer transition-all
}

.button-filter {
    @apply rounded-full border uppercase py-1 px-3 sm:px-5 hover:bg-slate-300 cursor-pointer transition-all
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);

}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>
