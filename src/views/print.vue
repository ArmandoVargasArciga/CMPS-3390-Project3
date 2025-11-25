<template> 
<!--<h1> Hello </h1> -->

<div class="topContainer">

   <h2> Try your best </h2>

</div>

<div class="timerShown">
   Time Left {{ time }}'s
</div>

<div class="WordsPERMiniute">
   <h1> Words Per Meat (WPM):  </h1> 
      <div class="formatWordCounter">
       <h1>  {{ wordCounter }} </h1>
      </div>
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
      time: 30,   // will be used for time
      timer: null,
      wordCounter: 0,
      ended: false,
   }
   },
   watch: {
      typingUser(NValue, OValue){
         if(NValue.length === 1){
            this.BeginTimer();
            NValue
         }
      },
      CheckingTyping(NValue, OValue){
         for(let i = 0; i<this.typingUser.length; i++) {
           const CorrectLetter = background.value[i]; 
           const UserLetter = typingUser.value[i];
                     
            if(UserLetter[i] != background.value[i]){
               setColorRed(UserLetter[i]);
            } else if (UserLetter[i] === background.value[i]) {   
               setColorGreen(UserLetter[i]);
            }
         } // you need to see how to change the color of your words that are 
         //incorrect and correct by character. 
      },
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
   },
   
   BeginTimer(){
      if (this.timer) return;

      this.timer = setInterval(() => {
        if (this.time > 0) {
         this.time--;
         } else {
            clearInterval(this.timer);
            this.WordsPerMinuteCalculation();
            this.ended = true;
         }
      }, 1000 //every thousand is the speed it decreases
             // You can have the speed at 2000 and it will 
             // decrease at the speed of .5x
      );
   },

   WordsPerMinuteCalculation(){
      const words = this.typingUser.trim().split(/\s+/) //condensed to counting words by spaces
        
         this.wordCounter = words.length;
         this.wordCounter = this.wordCounter * 2;
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
   font-size: 20px;
   font-family: Verdana;
   text-align: start;
}

.typingUser {
  position: relative;
  background: transparent;
  width: 100%;
  min-height: 120px;
  font-size: 20px;
  border-radius: 10px;
  border: 2px solid black;
  padding: 8px;
  resize: none;
  color: black;
  outline: none;
  font-family: Verdana;
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

.timerShown{
   display: flex;
   justify-content: center;
   text-align: center;
   font-size: 88px;
   font-weight: bold;
   color: bisque;
   font-family: cursive;
}

.WordsPERMiniute{
   display: flex;
   justify-content: center;
   font-family: cursive;

}



/*
.formatWordCounter{
   font-size: 88px;
   font-weight: bold;
   color: bisque;
   font-family: cursive;
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