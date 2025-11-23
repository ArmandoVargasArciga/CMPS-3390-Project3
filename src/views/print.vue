<template> 
<!--<h1> Hello </h1> -->

<div class="topContainer">

   <h2> Try your best </h2>

</div>

<div class="container"> 
   
   <div class="backGround"> 
      {{ background }}
   </div> 
  <!--API pull into the label or placeholder mabey-->
      <textarea v-model="typingUser" class="typingUser" placeholder="" rows="10" ></textarea>
</div> 

<!--Have a label under the main text box to provide the text -->
    <!--- In the Placeholder you have have the input of the quote  --->

</template>

<script>

export default {
   data(){
      return {
      typingUser: '',
      background: '',
      }
   },
   async mounted(){
      await this.loadtext();
   },
   methods: {
      async loadtext() {
         try {
            const responce = await fetch("https://baconipsum.com/api/?type=all-meat&paras=2&format=text")
            const currentText = await responce.text();
            this.background = currentText;
         } catch (error){
            console.log("Error Something is wrong", error);
      }
   }
   }
};



</script>

<style scoped>

.container {
   position: relative;
   width: 80%;
   margin: 15% auto;
}

.backGround {
   pointer-events: none;
   white-space: pre-wrap;
   position: absolute;
   top: 0;
   left: 0;
   color: grey;
   padding: 10px;
}

.typingUser {
  position: relative;
  background: transparent;
  width: 100%;
  min-height: 120px;
  font-size: 16px;
  border-radius: 10px;
  border: 2px solid black;
  padding: 10px;
  resize: none;
  color: black;
  outline: none;
}

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

/*
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
 TEMP: overlay-buster 
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