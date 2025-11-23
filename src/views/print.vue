<template> 
<!--<h1> Hello </h1> -->

<div class="topContainer">

   <h2> Try your best </h2>

</div>

<!--
<div class="container">
    <v-text-field class="firstText"
                  v-model="email" 
                  label="Email Address" 
                  placeholder="" 
                  type="text"/>    
</div>
-->

<div class="container">             
   <input class="username" placeholder=""/>
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
/*
.firstText{
   border: 1px solid #ccc;
   padding: 8px 12px;
   border-radius: 4px;
   font-size: 16px;
}*/
.topContainer{

   text-align: center;
   font-family: Verdana;
   font-size: x-large;
}

.container{
   height: 50ch;
}


.username{
   padding: 0%;
   display: grid;
   height: 50%;
   width: 75%;
   text-align: start;
   border-radius: 10px;
   justify-content: left;   
   margin: auto;
   }



</style>