<script setup lang="ts">
import { reactive, ref } from 'vue'
import Page from '@/components/Page.vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import { getDetailByType } from '@/utils/type'

const code = ref('')

const change = (c: string) => {
    code.value = c
}

const outputList = reactive<any[]>([])

const extensions = [javascript(), oneDark]

const result = ref('')

const getResult = () => {
    const strList = outputList.reduce((prev, item) => {
        return prev + getDetailByType(item) + '\n'
    }, '')
    return strList
}

const exec = () => {
    const console = {
        log: (...rest: any[]) => {
            const str = rest.reduce((prev, arg) => {
                return `${prev} ${getDetailByType(arg, 0)}`
            }, '')
            outputList.push(str)
        }
    }
    try {
        const fn = new Function('console', `${code.value}`)
        fn(console)
    } catch (error: any) {
        outputList.push('Error:' + error.message)
    }

    result.value = getResult()
}

const clear = () => {
    outputList.length = 0
    result.value = ''
}

</script>

<template>
    <Page>
        <div class="debug">
            <div class="header">
                <div @click="exec" class="function">运行</div>
                <div @click="clear" class="function">清空</div>
            </div>
            <div class='main'>
                <div class="code">
                    <codemirror v-model="code" placeholder="Code goes here..." :style="{ height: '80vh' }" :autofocus="true"
                        :indent-with-tab="true" :tab-size="2" @change="change" :extensions="extensions" />
                </div>
                <div class="result">
                    <codemirror v-model="result" :style="{ height: '80vh' }" :autofocus="true" :indent-with-tab="true"
                        :tab-size="2" @change="change" :extensions="extensions" />
                </div>
            </div>
        </div>
    </Page>
</template>

<style scoped>
.function {
    cursor: pointer;
    color: white;
    display: inline-block;
    margin-right: 12px;
}

.header {
    margin: 12px 0;
}

.debug {
    margin: 0 10%;
}

.main {
    display: flex;
    gap: 24px;
}

.code {
    flex: auto;
    width: 1px;
}

.result {
    flex: auto;
    width: 1px;
}
</style>
