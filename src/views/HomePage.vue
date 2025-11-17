<template> 
 <div class = "container"> 
    <!--- Ape typing.com--->
 <h2 class="title"> APETYPE </h2> 


 <input placeholder="UserName"/>
 <input placeholder="Password"/>
 
 
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
    <v-btn rounded="lg" size="large" class="login"> Login </v-btn>
    <v-btn rounded="lg" size="large" class="SignUp"> Sign Up </v-btn>
</div>


<img src="'@/src/images/content.png" alt="logo">
</template>

<script>
//import mainImage from '@/src/images/content.png'
//import { ref } from 'vue';


export default {
   data(){
      return {
      email: ''
      }
   }
},




</script>
<!--Have classes names to organize the style of the front page. -->


<style scoped> 

.textBox{
   color: black;

}


</style>