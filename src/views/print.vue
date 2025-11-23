<template> 
<!--<h1> Hello </h1> -->

<div class="topContainer">

   <h2> Try your best </h2>

</div>

<div class="container">             
  <!--API pull into the label or placeholder mabey-->
<textarea v-model="typing" class="MainTextArea" placeholder="Type here..." rows="10" cols="40"></textarea>

   <p> {{ typing }}</p>
   
   <!--<input class="username" placeholder=""/>-->
</div> 

<!--Have a label under the main text box to provide the text -->
    <!--- In the Placeholder you have have the input of the quote  --->

</template>

<script>

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
   text-align: center;
   pointer-events: auto;
}

.MainTextArea {
  width: 80%;
  min-height: 120px;
  margin: 0 auto;
  display: block;
  font-size: 16px;
  border-radius: 10px;
  border: 2px solid black;
  padding: 10px;
  resize: none;
  outline: none;
  background: white;
}
/* TEMP: overlay-buster 
.debug-top {
  position: fixed !important;
  top: 100px; left: 50%; transform: translateX(-50%);
  width: 80%;
  z-index: 999999 !important;
  pointer-events: auto !important;
  background: #fff;
}
*/
   
</style>