<template> 
<!--<h1> Hello </h1> -->

<div class="topContainer">

   <h2> Try Your Best </h2>

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
   
   

   <div class="correctOrIncorrect">
      <span 
         v-for="(item, i) in colorLetter"
         :key="i"
         :class="item.status"
      >
      {{ item.char }}
   </span>
   </div>


  <!--API pull into the label or placeholder mabey-->
      <textarea v-model="typingUser" class="typingUser" placeholder="" rows="10" ></textarea>
</div> 

<!--Have a label under the main text box to provide the text -->
    <!--- In the Placeholder you have have the input of the quote 
     
    You Dont need this, but we will need to have 
    at least a one word to be registered in the
    web domain
    
    <div class="backGround"> 
      {{ background }}
   </div>
    --->

</template>

<script>
 
export default {
   data(){
      return {
      typingUser: '',
      background: '',

      time: 10,   // will be used for time
      timer: null,
      timeElapsed: 0,
      
      wordCounter: 0,
      ended: false,

      colorLetter: [],
      }
   },
   watch: {
      typingUser(NValue){
         if(NValue.length === 0){
            this.BeginTimer();
         };
         this.CheckingTyping(NValue);

         this.WordsPerMinuteCalculation(NValue);
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
         this.timeElapsed++;
         } else {
            clearInterval(this.timer);
            this.WordsPerMinuteCalculation();
            this.ended = true;
         }
      }, 1000); //every thousand is the speed it decreases
             // You can have the speed at 2000 and it will 
             // decrease at the speed of .5x
      
   },

   WordsPerMinuteCalculation(){
      const words = this.typingUser.trim().split(/\s+/) //condensed to counting words by spaces
        //this.wordCounter = words.length;

         this.wordCounter = (words.length / this.timeElapsed) * 60; // actual accurate Current WPM
         }, 

   CheckingTyping(NValue){
            //make an array of colored letters that are false or true
            this.colorLetter = [];
            for(let i = 0; i<NValue.length; i++) {
              const Correct = this.background[i]; 
              const Typed = NValue[i];
                     
              let status;
            
               if(Typed != Correct){
                  status = "incorrect";
               } else {
                  status = "correct"
               }
            
               this.colorLetter.push({
                  char: Typed,
                  status: status
               });
              }
              //starts from where the user left off
              for(let i = NValue.length; i<this.background.length; i++){
                  this.colorLetter.push({
                     char: this.background[i],
                     status: "textLeftOver"
                  })
              }

            }, // you need to see how to change the color of your words that are 
            //incorrect and correct by character. 
   AdaptiveString(){
      //needs to be implemented
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
  color: transparent;
  outline: none;
  font-family: Verdana;
  caret-color: rgb(15, 104, 131);
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
   text-align: start;
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

.correctOrIncorrect {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  white-space: pre-wrap;
  font-size: 20px;
  font-family: Verdana;
  padding: 10px;
}

.incorrect{
   color: red;
   font-family: Verdana;
   font-size: 20px;   
}

.textLeftOver{
   color: grey;
}

.correct {
   color: black;
} 


/*
add 

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