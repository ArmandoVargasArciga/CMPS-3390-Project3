<template> 
<!--
   <div class="background">
      <h1> {{data5}} </h1>
   </div>
-->
<div class="pageBackground">
    <div class = "container"> 
               <!--- Ape typing.com--->
            <h2 class="title"> APE TYPE </h2> 
            
            
            <input class="username" placeholder="UserName"/>
            <input class="password" placeholder="Password"/>
            
            
            <!--These below dont work, youtube video clutch
            <v-text-field label="Name" class="textBox"> </v-text-field>
            <v-text-field label="Password" class="textBox"> </v-text-field>
            -->
   </div> 
   <!--Email mabey-->
   <div class="inputLogin">
    <v-text-field v-model="email" 
                  label="Email Address" 
                  placeholder="johnpork@gmail.com" 
                  type="email"/>
       <v-btn @click="login"  class="login" > Login   </v-btn>
       <v-btn @click="SignUp" class="SignUp"> Sign Up </v-btn>
   </div>

</div>
</template>

<script>
//import mainImage from '@/src/images/content.png'
import { ref } from 'vue';

var data5 = ref('@/src/images/content.png')

export default {
   data(){
      return {
      email: ''
      }
   },
   methods: {
      login(){
         console.log("I work button")
      },
      SignUp(){
         console.log("I also work button")
      },
   }
}




</script>
<!--Have classes names to organize the style of the front page. -->


<style scoped> 
h2{
   text-align: center;
   font-family: Verdana;
   font-weight: 900;
   color: gold;
   text-shadow: 1px 1px 2px palevioletred;
   font-size: xxx-large;
}

.container{
   height: 100%;
   width: auto;
   margin-top: 35%;
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
   background-color: #1976d2;
   color: white;
   font-weight: bold;
   padding: 10px 24px;
   border-radius: 12px;
   float: left;
   }

   .SignUp{
   background-color: #1976d2;
   color: white;
   font-weight: bold;
   padding: 10px 24px;
   border-radius: 12px;
   float: right;
   }

.pageBackground{
   background-image: url('@/src/images/content.png');
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
}


</style>