<script setup lang="ts">
import Bg from '@/components/Bg.vue'
import { useRoute, useRouter } from 'vue-router';

const { className = '' } = defineProps<{ className?: string }>()

const router = useRouter()
const route = useRoute()
const toHome = () => router.push('/')
</script>

<template>
    <div :class="['body', className]">
        <slot></slot>
        <img v-if="route.path !== '/'" class="home" src="@/assets/images/icons/home.png" @click="toHome" />
    </div>
    <Bg />
</template>

<style scoped>
.body {
    position: relative;
    z-index: 1;
    overflow-y: auto;
}

.home {
    position: absolute;
    left: 32px;
    top: 48px;
    width: 36px;
    cursor: pointer;
}
</style>
