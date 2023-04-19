<script setup>
import Footer from '@/components/Footer.vue'
import Icon from '@/components/Icon.vue'
import blogLogo from '@/assets/images/logo/blog.png'
import bybLogo from '@/assets/images/logo/byb.png'
import storeLogo from '@/assets/images/logo/store.png'
import componentLogo from '@/assets/images/logo/component.png'
import chartLogo from '@/assets/images/logo/chart.png'
import iconLogo from '@/assets/images/logo/icon.png'
import utilLogo from '@/assets/images/logo/util.png'
</script>

<template>
    <div class="main">
        <div class="body">
            <div class="icons">
                <Icon title="博客" :icon="blogLogo" path="http://www.tinypen.cn/blog" />
                <Icon title="雅比亚头盔" :icon="bybLogo" path="http://www.bybhelmet.com" />
                <Icon title="组件库" :icon="componentLogo" path="http://www.tinypen.cn/ljmp-antd" />
                <Icon title="图表库" :icon="chartLogo" path="http://www.tinypen.cn/ljmp-chart" />
                <Icon title="图标库" :icon="iconLogo" path="http://www.tinypen.cn/ljmp-icons" />
                <Icon title="工具库" :icon="utilLogo" path="http://www.tinypen.cn/ljmp-utils" />
                <Icon title="npm私人服务器" :icon="storeLogo" path="http://www.tinypen.cn:4873" />
            </div>
            <Footer />
        </div>
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
</style>
