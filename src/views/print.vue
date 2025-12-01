<template> 
<!--<h1> Hello </h1> -->
<div class="backgroundColor">



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
<!--
<div class="WordsPERMiniute">
   <h1> Current (WPM):  </h1> 
      <div class="formatWordCounter">
       <h1>  {{ timeElapsed }} </h1>
      </div>
</div>

<div class="WordsPERMiniute">
   <h1> Time Elapsed:  </h1> 
      <div class="formatWordCounter">
       <h1>  {{ timeElapsed }} </h1>
      </div>
</div>
-->




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

    BeginTimer() {
      if (this.timer) return

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
