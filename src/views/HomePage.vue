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
 <v-text-field label="Email Address" placeholder="johnpork@gmail.com" type="email"/>
    <v-btn rounded="lg" size="large" class="login"> Login </v-btn>
    <v-btn rounded="lg" size="large" class="SignUp"> Sign Up </v-btn>
 </div>


<img :src="mainImage"/>
</template>

<script setup>
import mainImage from '@/src/images/content.png'

</script>
<!--Have classes names to organize the style of the front page. -->


<style scoped> 

.textBox{
   color: black;

}


</style>