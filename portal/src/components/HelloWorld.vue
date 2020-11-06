<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {

  //props 组件数据传递
  @Prop({ type: String,default: 'default value' }) private msg!: string;
}
</script>

<style scoped lang="less">

</style>
