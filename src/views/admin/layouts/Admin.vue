<script lang="ts" setup>
import Header from './partitions/Header.vue'
import Footer from './partitions/Footer.vue'
import Sidebar from './partitions/Sidebar.vue'
</script>

<template>
    <div id="layoutSidenav">
        <Header></Header>
        <div id="layoutSidenav_content">
            <Sidebar></Sidebar>
            <main>
                <slot name="content"></slot>
            </main>
            <Footer></Footer>
        </div>
    </div>
</template>

<style scoped>

</style>