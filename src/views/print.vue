<template> 
<!--<h1> Hello </h1> -->

<div class="topContainer">

   <h2> Try your best </h2>

</div>

<div class="container">             
  <!--API pull into the label or placeholder mabey-->
   <v-textarea 
               v-model="typing"
               class="MainTextArea"  
               placeholder="Type here..." 
               rows="10"
               cols="40"
   />

   <p> {{ typing }}</p>
   
   <!--<input class="username" placeholder=""/>-->
</div> 

<!--Have a label under the main text box to provide the text -->
    <!--- In the Placeholder you have have the input of the quote  --->

</template>

<script>
import { ref } from 'vue';

export default {
   data(){
      return {
      typing: ''
      }
   },
   methods: {
     //have api function here probably 
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
   height: 500px;
   margin: 20px auto;
   font-family: Verdana;
}

v-textarea.MainTextArea {
   display: flex;
   justify-content: center;
   width: 78%;
   margin: auto;
   min-height: 120px;
   padding: 2%;
   border: 12%;
   font-size: 16px;
   border-radius: 10px;
   
   border-color: black;
   }

   
</style>