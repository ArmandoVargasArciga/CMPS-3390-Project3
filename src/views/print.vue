<template> 
<!--<h1> Hello </h1> -->
<div class="backgroundColor">
   <div class="topContainer">
   <h2> Try Your Best </h2>
   </div>
    <!-- 
   <div class="hide">
    <button @click='getData({ignoreCache: true})'>Click Me Before You Start Typing</button>
    
     
      <p v-if="isLoading">Loading...</p>
      

      <p v-else>VisitorId: {{ data?.visitorId }}</p>
      <p v-if="error">{{ error.message }}</p>
      <pre v-if="data">{{ data }}</pre>
   
    
  </div> -->

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
      <textarea v-model="typingUser" class="typingUser" placeholder="" rows="10" :disabled="time === 0" ></textarea>
</div> 

<!--Have a label under the main text box to provide the text -->
    <!-- In the Placeholder you have have the input of the quote 
     
    You Dont need this, but we will need to have 
    at least a one word to be registered in the
    web domain
    
    <div class="backGround"> 
      {{ background }}
   </div>
    -->
     <v-btn @click="leader" class="LeaderBoard"> LeaderBoard </v-btn>
</div>
</template>

<script>
import '../styles/printvue.css'
import { useFingerprintStore } from '../stores/fingerprint'
import {
  fetchBackgroundText,
  calculateWPM,
  buildColorLetter,
  postTypingResult,
} from '../controllers/typingController'

export default {
  data() {
    return {
      typingUser: '',
      background: '',

      time: 60, // will be used for time
      timer: null,
      timeElapsed: 0,

      wordCounter: 0,
      ended: false,

      colorLetter: [],
<<<<<<< HEAD

      stateOfButton: false,
=======
    }
  },

  computed: {
    fpStore() {
      return useFingerprintStore()
    },
    visitorId() {
      return this.fpStore.visitorId
    },
    requestId() {
      return this.fpStore.requestId
    },
  },

  watch: {
    typingUser(NValue) {
      if (NValue.length != 0) {
        this.BeginTimer()
>>>>>>> 3d1e2edde05ee77e3817ac25021bcee7f35967fd
      }
      this.CheckingTyping(NValue)
      this.WordsPerMinuteCalculation()
    },
  },

  async mounted() {
    await this.loadtext()
  },

  methods: {
    async loadtext() {
      try {
        const currentText = await fetchBackgroundText()
        this.background = currentText
      } catch (error) {
        console.log('Error Something is wrong', error)
      }
    },

<<<<<<< HEAD
         this.WordsPerMinuteCalculation(NValue);

         //this.timerFromText(NValue);
      },
        
   },
   
   async mounted(){
      await this.loadtext();
   },
=======
    BeginTimer() {
      if (this.timer) return
>>>>>>> 3d1e2edde05ee77e3817ac25021bcee7f35967fd

      this.timer = setInterval(() => {
        if (this.time > 0) {
          this.time--
          this.timeElapsed++
        } else {
          clearInterval(this.timer)
          this.ended = true
          this.WordsPerMinuteCalculation()
          this.sendResultToServer() //this sends the score to fingerprint
        }
      }, 1000)
    },

    WordsPerMinuteCalculation() {
      this.wordCounter = calculateWPM(this.typingUser, this.timeElapsed)
    },

    CheckingTyping(NValue) {
      this.colorLetter = buildColorLetter(NValue, this.background)
    },

    CurrentWordsPerMeat() {
      if (this.timeElapsed / 0 == NaN || this.timeElapsed / 0 == Infinity) {
        this.timeElapsed = 0
      } else {
        this.timeElapsed = 30 - time--
      }
    },

    leader() {
      this.$router.push('/leader')
    },

<<<<<<< HEAD
      }, // you need to see how to change the color of your words that are 
         //incorrect and correct by character. 

      CurrentWordsPerMeat(){
         if (this.timeElapsed/0===NaN || this.timeElapsed/0===Infinity){
            this.timeElapsed = 0;
         } else {
            this.timeElapsed++;
         }
      },      

      leader(){
         this.$router.push('/leader')
      },

      //this should send wmp to backend and to judge if cheat or not
      async sendResultToServer() {
         try {
            await axios.post('http://localhost:3000/typing-result', {
               wpm: this.wordCounter,
               visitorId: this.visitorId,
               requestId: this.requestId,
            })
            console.log('Result sent to server')
         } catch (e) {
            console.error('Failed to send result:', e)
         }
      },

      timerFromText(){
         if(this.time === 0){
            alert("You are cannot type in here any more")
            //const typedText = Typed
         }
      },

      musicTempo(){

      }

   },
      
}
// end of export default
</script>


<style scoped>
/*
.container {
   position: relative;
   width: 80%;
   margin: 15% auto;
}
*/

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
  font-size: 20px;
  border-radius: 10px;
  border: 2px solid bisque;
  padding: 8px;
  resize: none;
  color: transparent;
  outline: none;
  font-family: Verdana;
  caret-color: rgb(15, 104, 131);
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
   border-radius: 12px;
   margin: auto;
   width: 35%;
   
}


   </style>
=======
    async sendResultToServer() {
      try {
        await postTypingResult({
          wpm: this.wordCounter,
          visitorId: this.visitorId,
          requestId: this.requestId,
        })
        console.log('Result sent to server')
      } catch (e) {
        console.error('Failed to send result:', e)
      }
    },
  },
}
</script>
>>>>>>> 3d1e2edde05ee77e3817ac25021bcee7f35967fd
