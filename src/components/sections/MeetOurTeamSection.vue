<template>
    <main class="container pb-16 pt-6">
        <MainSectionTitle title="meet our team Of experts"
            sub-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

        <section class="my-14 flex gap-8 flex-wrap justify-center gap-y-20">
            <div v-for="member in data" :key="member.name">
                <img :src="member.img" loading="lazy" class="object-cover h-full  w-full sm:max-w-64 rounded-2xl">
                <h2 class="mt-2 text-lg font-semibold capitalize">{{ member.name }}</h2> 
                <span class="capitalize">{{ member.job }}</span>
            </div>
        </section>

        <!--  -->
        <MainSectionTitle title="popular real estate markets"
        sub-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

        <div class="markets">
            <span>The Villages, FL real estate</span>
            <span>New York, Real estate</span>
            <span>Madera, CA real estate</span>
            <span>Fontana, CA real estate</span>
            <span>Moreno Valley, CA real estate</span>
            <span>Aurora, IL real estate</span>
            <span>Perris, CA real estate</span>
            <span>Minnesota Lake, MN real estate</span>
            <span>Woodbridge, VA real estate    </span>
        </div>

    </main>
</template>

<script setup>
import { ref } from 'vue';
import MainSectionTitle from '@/components/MainSectionTitle.vue';

const data = ref([
    {
        img: "/justHomeDemo/imgs/ourTeam/johnpowell.jpg",
        name: "john powell",
        job: "service support"
    },
    {
        img: "/justHomeDemo/imgs/ourTeam/thomasdesil.jpg",
        name: "thomas desil",
        job: "marketing"
    },
    {
        img: "/justHomeDemo/imgs/ourTeam/tomwilson.jpg",
         name: "tom wilson",
        job: "designer"
    },
    {
        img: "/justHomeDemo/imgs/ourTeam/samuelpalmer.jpg",
         name: "samuel palmer",
        job: "marketing"
    },
])

</script>

<style scoped>
.markets {
    margin: 3em 0 5em 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1.2em 0.6em;
    justify-content: space-evenly;
}
.markets span {
    display: block;
    border: 1px solid black;
    border-radius: 2em;
    padding: 8px 2em;
    font-weight: 400;
    cursor: pointer;
}
.markets span:hover {
    background-color: #eee;
    transition: all;
}
</style>