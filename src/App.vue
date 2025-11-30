<script setup>
import {useVisitorData} from '@fingerprintjs/fingerprintjs-pro-vue-v3';
import { useFingerprintStore } from './stores/fingerprint'  
import { RouterView } from 'vue-router';
import { watch } from 'vue'

const fpStore = useFingerprintStore() //this creates store to make the backend work when we call 

const {data, error, isLoading, getData} = useVisitorData(
  {extendedResult: true},
  {immediate: true}
);

watch(
  () => data.value,
  (newVal) => {
    if (newVal) {
      fpStore.setFingerprintData(newVal)
    }
  }
)
</script>


<template>
  <!--
    <div>
    <button @click='getData({ignoreCache: true})'>Get visitor data</button>
    <div class="hideData">
      
      <p v-if="isLoading">Loading...</p>
      <p v-else>VisitorId: {{ data?.visitorId }}</p>
      <p v-if="error">{{ error.message }}</p>
      <pre v-if="data">{{ data }}</pre>
    </div>
  </div>
-->
  <!--<HomePage />--->

      
        <RouterView />
        
</template>

<style scoped>

.hideData{
  color: black;
  user-select: none;
}

</style>
