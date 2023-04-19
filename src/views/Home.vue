<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Icon from '@/components/Icon.vue'
import { SOFTS } from '@/constant/home'
import { ref } from 'vue'
import type { Soft } from '@/constant/home'
import backIcon from '@/assets/images/icons/back.png'

let currentSofts = ref<Soft[]>(SOFTS)

let currentFolder = ref('')

const changeSofts = (list: Soft[], title: string) => {
    currentSofts.value = [...list]
    currentFolder.value = title
}

const back = () => {
    currentFolder.value = ''
    currentSofts.value = SOFTS
}

</script>

<template>
    <div class="main">
        <div class="body">
            <div class="icons">
                <Icon v-bind="item" v-for="item of currentSofts" :key="item.title" @change="changeSofts" />
            </div>
            <Footer />
        </div>
        <img v-show="currentFolder" class="back-icon" @click="back" :src="backIcon" />
        <img class="bg" src="@/assets/images/bg.jpeg" />
    </div>
</template>

<style scoped>
.bg {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
}

.body {
    position: relative;
    z-index: 1;
    height: calc(100vh - 80px);
}

.icons {
    display: grid;
    margin: 0 10%;
    padding-top: 48px;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 24px;
    ;
}

.back-icon {
    position: fixed;
    left: 70px;
    top: 70px;
    z-index: 2;
    width: 48px;
    cursor: pointer;
}
</style>
