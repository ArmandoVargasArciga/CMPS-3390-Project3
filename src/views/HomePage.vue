<template> 
 <div class = "container"> 
    <!--- Ape typing.com--->
 <h2 class="title"> APETYPE </h2> 


 <input placeholder="test holder"/>
 
 
 <!--These below dont work, youtube video clutch
 <v-text-field label="Name" class="textBox"> </v-text-field>
 <v-text-field label="Password" class="textBox"> </v-text-field>
 -->
    
<!--Email mabey-->
 <v-text-field label="Email Address" placeholder="johnpork@gmail.com" type="email"> </v-text-field>
    <v-btn rounded="lg" size="large"> Login </v-btn>
    <v-btn rounded="lg" size="large"> Sign Up </v-btn>
 </div>

</template>

<script setup>


</script>
<!--Have classes names to organize the style of the front page. -->


<style scoped> 

.textBox{
   color: black;

}


</style>