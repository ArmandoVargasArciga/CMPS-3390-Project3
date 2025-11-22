<template> 
<div class="pageBackground">
    <div class = "container"> 
         <v-btn @click="nextPage" color="white" class="buttonGoogle"> Sign in with Google </v-btn>
               <br>               <br>
            <input class="username" placeholder="UserName"/>
            <input class="password" placeholder="Password"/>
   </div> 

   <!--Email mabey-->
   <div class="inputLogin">
    <v-text-field v-model="email" 
                  label="Email Address" 
                  placeholder="johnpork@gmail.com" 
                  type="email"/>
       <div class="buttonposition">
         <v-btn @click="login"  class="login" > Login   </v-btn>
         <v-btn @click="SignUp" class="SignUp"> Sign Up </v-btn>
       </div>
   </div>
</div>
</template>

<script>
//import mainImage from '@/src/images/content.png'
import { ref } from 'vue';



export default {
   data(){
      return {
      email: '',
      name: '',
      }
   },
   methods: {
      login(){
         console.log("I work button")
      },
      SignUp(){
         console.log("I also work button")
      },
      nextPage(){
         this.$router.push('/print')
      }
   }
}
</script>
<!--Have classes names to organize the style of the front page. -->


<style scoped> 

/*h2{
   text-align: center;
   font-family: Verdana;
   font-weight: 900;
   color: gold;
   text-shadow: 1px 1px 2px palevioletred;
   font-size: xxx-large;
}*/

.container{
   height: 5%;
   width: auto;
   margin-top: 01%;
   padding: 10%;
}
 .username{
   height: 5ch;
   width: 45%;
   float: left;
   text-align: center;
   border-radius: 10px;
 }

.password{
   height: 5ch;
   width: 45%;
   float: right;
   text-align: center;
   border-radius: 10px;
 }

.login{
   background-color: black;
   color: white;
   font-weight: bold;
   padding: 10px 24px;
   border-radius: 12px;
   float: left;
   margin-left: 25%;
   }

   .SignUp{
   background-color: black;
   color: white;
   font-weight: bold;
   padding: 10px 24px;
   border-radius: 12px;
   float: right;
   margin-right: 25%;
   }

.pageBackground{
   background-image: url('@/images/content.png');
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   height: 800px;
}

.buttonposition{
   padding: 10px;
}

</style>