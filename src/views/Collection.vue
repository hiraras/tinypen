<script setup lang="ts">
import Page from '@/components/Page.vue'
import { computed, ref } from 'vue';

type Collection = {
    title: string;
    desc?: string;
    href: string;
    tags: string[];
}

const collections: Collection[] = [
    { title: 'getColor', desc: '获取颜色名、帮助 # 和 rgb 之间的转化', tags: ['css', 'color'], href: 'https://chir.ag/projects/name-that-color/#E3A6A6' },
    { title: '时间戳转化工具', desc: '转化时间戳/日期', tags: ['time'], href: 'https://tool.lu/timestamp/' },
    { title: 'JPG to PNG', desc: '转化 jpg 文件为 png', tags: ['image', 'file', 'convert'], href: 'https://jpg2png.com/' },
    { title: '图片压缩', desc: '图片压缩，并保持图片质量', tags: ['image', 'file', 'convert'], href: 'https://tinypng.com/' },
    { title: 'MD5加解密', tags: ['md5', 'encryption', 'convert'], href: 'https://www.sojson.com/encrypt_md5.html' },
    { title: 'websocket在线', tags: ['websocket', 'test'], href: 'http://www.websocket-test.com/' },
    { title: 'caniuse', tags: ['css', 'test', 'tool'], href: 'https://caniuse.com/' },
    { title: 'npm', tags: ['npm', 'package', 'tool'], href: 'https://www.npmjs.com/' },
    { title: '将JS语句加密为颜文字且还可以执行', tags: ['fun', 'convert'], href: 'https://utf-8.jp/public/aaencode.html' },
    { title: '搜索包的Types', tags: ['typescript', 'search', 'tool'], href: 'https://www.typescriptlang.org/dt/search' },
    { title: '查询ip信息', tags: ['ip', 'search', 'tool'], href: 'https://ip.tool.chinaz.com/101.71.35.162' },
    { title: 'Carbon', desc: '好看的代码视图工具', tags: ['code', 'style', 'tool'], href: 'https://carbon.now.sh' },
    { title: '饥人谷 JS bin', desc: '代码预览', tags: ['code', 'preview'], href: 'http://js.jirengu.com/mesif/1/edit?html,css,output' },
    { title: 'HTML 事件参考手册', tags: ['dic', 'event'], href: 'https://www.w3school.com.cn/tags/html_ref_eventattributes.asp' },
    { title: 'Typing Practice', desc: '打字练习', tags: ['typing', 'practice'], href: 'https://www.keybr.com/' },
    { title: 'HTML 特殊符号大全', tags: ['dic', 'symbol'], href: 'https://www.webhek.com/post/html-enerty-code/' },
    { title: 'Bower', tags: ['package', 'tool'], href: 'https://bower.io/search/' },
    { title: 'dev docs', desc: '各种编程语言的属性字典', tags: ['dic', 'attribute'], href: 'https://devdocs.io/' },
]

const tags = [...new Set(collections.map(collection => collection.tags).flat())].sort((a, b) => a.localeCompare(b))

const activeTags = ref<string[]>([])

const tagSelectHandle = (tag: string) => {
    if (activeTags.value.includes(tag)) {
        activeTags.value = activeTags.value.filter(t => t !== tag)
    } else {
        activeTags.value = [...activeTags.value, tag]
    }
}

const filterCollections = computed(() => {
    if (!activeTags.value.length) {
        return collections
    }
    return collections.filter(collection => {
        for (let tag of collection.tags) {
            if (activeTags.value.includes(tag)) {
                return true
            }
        }
        return false
    })
})

</script>

<template>
    <Page>
        <div class="search">
            <div v-for="tag of tags" :key="tag" :class="['tag', 'search-tag', { 'active-tag': activeTags.includes(tag) }]"
                @click="tagSelectHandle(tag)">
                {{ tag }}
            </div>
        </div>
        <div class='collection'>
            <template v-for="{ title, desc, tags, href } of filterCollections" :key="title">
                <div class="link">
                    <a target="_blank" :href="href">{{ title }}{{ desc ? `- ${desc}` : '' }}</a>
                </div>
                <div class="tags">
                    <div v-for="tag of tags" :key="tag" class="tag">
                        {{ tag }}
                    </div>
                </div>
            </template>
        </div>
    </Page>
</template>

<style scoped lang="less">
.collection {
    margin: 0 10%;
    color: white;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border: 3px solid skyblue;
    max-height: 70vh;
    overflow-y: auto;
}

.link,
.tags {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    border-bottom: 3px solid skyblue;

    &:last-child {
        border-bottom: none
    }

    &:nth-last-child(2) {
        border-bottom: none
    }
}

.link {
    border-right: 3px solid skyblue;
}

.link a {
    color: skyblue !important;
}

.tag {
    padding: 4px 8px;
    background: skyblue;
    border-radius: 4px;
    margin-right: 8px;
    color: purple;
    display: inline-block;
}

.search {
    margin: 48px 10% 24px;
}

.search-tag {
    margin-bottom: 8px;
    cursor: pointer;
}

.active-tag {
    background-color: yellow;
}
</style>
