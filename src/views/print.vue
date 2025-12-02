<template> 
<!--<h1> Hello </h1> -->
<div class="backgroundColor">
   <div class="topContainer">
   <h2> Try Your Best </h2>
   </div>
    
   <div class="buttonforMusic">
      <button @click="enableMusic" class="startButton"> Enable Music  
       Click to enable music 
       </button>
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
   <div class="scroll">         
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
</div>

     <v-btn @click="leader" class="LeaderBoard"> LeaderBoard </v-btn>
     <br> <br>
     <v-btn @click="logout" class="logoutButton"> logout </v-btn>
</div>
</template>

<script>
import { useTransitionState } from 'vue';
import { fpjsPlugin } from '@fingerprintjs/fingerprintjs-pro-vue-v3'
//import slowS from '@/music'//const { initialize, switchMusic, stopAll } = backGround();

import { musicManager } from '@/controllers/backgroundMusic'

//import { initialize, switchMusic, stopAll  } from '@/controllers/backgroundMusic'
import '@/styles/printvue.css'
import axios from 'axios'
export default {
   data(){
      return {
      typingUser: '',
      background: '',

      time: 60,   // will be used for time
      timer: null,
      timeElapsed: 0,
      
      wordCounter: 0,
      ended: false,

      colorLetter: [],
      stateOfButton: false,
      authMessage: ''
      }
   },
   watch: {
         typingUser(NValue){
            if(NValue.length != 0){
               this.BeginTimer();
            };
            this.CheckingTyping(NValue);

            this.WordsPerMinuteCalculation(NValue);

            this.timerFromText(NValue);
         },
      },
         async mounted(){
            try{
               const token = localStorage.getItem('token')
               console.log(token)
               const res = await axios.get("http://localhost:3000/print", {
                  headers: {Authorization: 'Bearer ' + token}
               })
               this.authMessage = res.data.message
            }catch(e){
               this.authMessage = "Access denied"
               this.$router.push('/login')
            }
            await this.loadtext();
            console.log("Background Music loaded before ");
            musicManager.initialize(); //initailize music manager model 
            console.log("Background Music loaded after ");
            //initializeMusic();
   },
      methods: {
      logout(){
            localStorage.removeItem('token')
            this.$router.push('/login')
         },
      async loadtext() {
         try {
            const responce = await fetch("https://baconipsum.com/api/?type=all-meat&paras=2&format=text")
            const currentText = await responce.text();
            this.background = currentText;
         } catch (error){
            console.log("Error Something is wrong", error);
      }
   },
      async sendResultToServer(){
         try{
            const token = localStorage.getItem('token')
            console.log("Sending WPM to server:", this.wordCounter)
            const res = await axios.post("http://localhost:3000/print", {
               wpm: this.wordCounter
            }, {
               headers: {Authorization: 'Bearer ' + token}
            })
            console.log("Server response:", res.data)
         } catch (error){
            console.log("Error sending WPM to server:", error)
         }
      },


   /*   
   enableMusic() {
        initialize()
        switchMusic(this.wordCounter)
         },

         stopMusic(){
         stopAll()
      },
*/

   BeginTimer(){
      if (this.timer) return;

      this.timer = setInterval(() => {
        if (this.time > 0) {
         this.time--;
         this.timeElapsed++;
         console.log("Switching music for", this.wordCounter);
         musicManager.switchMusic(this.wordCounter);
         } else {
            clearInterval(this.timer);
            this.WordsPerMinuteCalculation();
            this.ended = true;
            console.log("Music should stop about now!");   
            musicManager.stopAll();
            this.sendResultToServer();
         }
      }, 1000); //every thousand is the speed it decreases
             // You can have the speed at 2000 and it will 
             // decrease at the speed of .5x
      
   },

   WordsPerMinuteCalculation(){
      const words = this.typingUser.trim().split(/\s+/) //condensed to counting words by spaces
        //this.wordCounter = words.length;

         this.wordCounter = Math.round((words.length / this.timeElapsed) * 60); // actual accurate Current WPM
            // switchMusic(this.wordCounter)
  
         //Math.round(this.workCounter);   
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
   CurrentWordsPerMeat(){
         if (this.timeElapsed/0==NaN || this.timeElapsed/0==Infinity){
            this.timeElapsed = 0;
         } else {
            this.timeElapsed = 30 - time--;
         }
   },      

   leader(){
         //console.log("I work before")
         this.$router.push('/leader')
         //console.log("I work after")
      },

      checkAntiCheat(){
         //if add the anti cheat thing here or in the backend to automatically run when the user
         // goes on this website 
      },

      timerFromText(){
         if(this.timeElapsed == 60){
            alert("You are cannot type in here any more")
         }
      },

      enavleMusic(){
         musicManager.slowMusic.play()
            .then(() => {
               musicManager.slowMusic.pause();
               console.log("Music started successfully");
            })


   
      },
   }
};


   </script>



<style>
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

html, body {
   margin: 0;
   padding: 0;
   height: 100%;
   width: 100%;
}
</style>




<style scoped>
/*
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
   border-radius: 10px;
   border: 2px solid black;
   padding: 8px;
   resize: none;
   color: black;
   outline: none;
   font-family: Verdana;
   }

.typingUser {
  position: relative;
  background: transparent;
  width: 100%;
  min-height: 120px;
  max-height: 200px;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  padding: 8px;
  resize: none;
  color: transparent;
  outline: none;
  font-family: Verdana;
  caret-color: rgb(15, 104, 131);
  overflow: visible;
  box-sizing: border-box;
}

.topContainer{
   text-align: center;
   font-family: cursive;
   font-size: x-large;
   color: bisque;

}

.container{
   position: relative;
   width: 80%;
   height: 150%;
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
   color: bisque;
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
   color: beige;
} 

.backgroundColor{
   min-height: 100vh;
   background-color: #000000;
   background-size: auto;
   background-position: center;
   height: fit-content;
   background-repeat: no-repeat ;
}

.LeaderBoard{
   display: flex;
   justify-content: center;
   background-color: rgb(143, 138, 138);
   color: black;
   font-weight: bold;
   padding: 10px 24px;
   border-radius: 50px;
   margin: auto;
   width: 35%;
   
}

.logoutButton{
   display: flex;
   justify-content: center;
   background-color: rgb(143, 138, 138);
   color: black;
   font-weight: bold;
   padding: 10px 24px;
   border-radius: 50px;
   margin: auto;
   width: 35%;
}

   .scroll{
      position: relative;
      width: 100%;
      height: 250px;
      overflow-y: auto;
      border: 2px solid bisque;
      border-radius: 10px;
   }
      */
   </style>