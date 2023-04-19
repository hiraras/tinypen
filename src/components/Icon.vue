<script setup lang="ts">
import { useRouter } from 'vue-router'

const { src, title, path, type, children = [] } = defineProps<{
    title: string;
    src: string;
    path?: string;
    params?: Record<string, any>;
    type: "soft" | "folder";
    children?: []
}>();

const emit = defineEmits(['change'])

const router = useRouter()

const linkTo = () => {
    if (type === 'folder') {
        emit('change', children, title)
        return;
    }
    if (!path) {
        return;
    }
    if (path.startsWith('http')) {
        window.open(path)
        return
    }
    router.push(path)
}
</script>

<template>
    <div class='icon' @click="linkTo">
        <img :src="src" class="img" />
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
