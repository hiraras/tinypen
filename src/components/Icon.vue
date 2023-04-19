<script setup lang="ts">
import { useRouter } from 'vue-router'
const { icon, title, path } = defineProps<{
    icon: string,
    title: string,
    path: string,
}>();

const router = useRouter()

const linkTo = () => {
    if (path.startsWith('http')) {
        window.open(path)
        return
    }
    router.push(path)
}
</script>

<template>
    <div class='icon' @click="linkTo">
        <img :src="icon" class="img" />
        <p class="title">{{ title }}</p>
    </div>
</template>

<style scoped>
.icon {
    margin: 0 auto;
    cursor: pointer;
    text-align: center;
}

.img {
    width: 80px;
}

.title {
    color: white;
}
</style>
