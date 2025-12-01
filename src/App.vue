<script setup>
import {useVisitorData} from '@fingerprintjs/fingerprintjs-pro-vue-v3';
import { RouterView } from 'vue-router';

const {data, error, isLoading, getData} = useVisitorData(
  {extendedResult: true},
  {immediate: false}
); 

console.log('print here')
</script>


<template>

<!--
    <div class="hide">
    <button @click='getData({ignoreCache: true})'>Get visitor data</button>
    <div class="hideData">
      
      <p v-if="isLoading">Loading...</p>
      <p v-else>VisitorId: {{ data?.visitorId }}</p>
      <p v-if="error">{{ error.message }}</p>
      <pre v-if="data">{{ data }}</pre>
    </div>
  </div>

  <HomePage />--->

      
        <RouterView />
        
</template>

<style>

.hideData{
  color: black;
  user-select: none;
}

body{
    background-color: black;
    color: bisque;
}

</style>
