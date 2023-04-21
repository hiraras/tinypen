<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Icon from '@/components/Icon.vue'
import Page from '@/components/Page.vue'
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
    <Page :class-name="$style.body">
        <div class="icons">
            <Icon v-for="item of currentSofts" v-bind="item" :key="item.title" @change="changeSofts" />
        </div>
        <Footer />
        <img v-show="currentFolder" class="back-icon" @click="back" :src="backIcon" />
    </Page>
</template>

<style module>
.body {
    height: calc(100vh - 80px);
}
</style>

<style scoped>
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
