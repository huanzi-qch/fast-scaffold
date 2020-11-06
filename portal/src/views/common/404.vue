<template>
    <div class="app-ccontent">
        <h1>404啊老哥，找不到这个资源</h1>
    </div>
</template>

<script lang="ts">
    import { Component,Vue } from 'vue-property-decorator';

    @Component
    export default class NotFound extends Vue {

    }
</script>

<style scoped>
    .app-ccontent{
        padding: 20px;
    }
</style>