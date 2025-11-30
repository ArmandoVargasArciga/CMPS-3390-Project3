<script setup>
import HomePage from './views/HomePage.vue';
import print from './views/print.vue';
import {useVisitorData} from '@fingerprintjs/fingerprintjs-pro-vue-v3';
import { RouterView } from 'vue-router';

const {data, error, isLoading, getData} = useVisitorData(
  {extendedResult: true},
  {immediate: false}
);
</script>

<template>
    <div>
    <button @click='getData({ignoreCache: true})'>Get visitor data</button>
    <p v-if="isLoading">Loading...</p>
    <p v-else>VisitorId: {{ data?.visitorId }}</p>
    <p v-if="error">{{ error.message }}</p>
    <pre v-if="data">{{ data }}</pre>
  </div>

  <!--<HomePage />--->

      
        <RouterView />
        
</template>

<style scoped></style>
