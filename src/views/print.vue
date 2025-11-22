<template> 
<h1> Hello </h1>
<div class="container">
    <v-text-field v-model="email" 
                  label="Email Address" 
                  placeholder="" 
                  type="text"/>    
</div>

<!--Have a label under the main text box to provide the text -->


    <!--- In the Placeholder you have have the input of the quote  --->

</template>

<script>
import { ref } from 'vue';

export default {
   data(){
      return {
      name: 'Print'
      }
   },
   methods: {
     
   }
}



</script>

<style scoped>



</style>