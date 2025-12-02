<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
//import '@/styles/signup.css';


const firstName = ref('');
const lastName = ref('');
const username = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

const validateForm = () => {
    if(!firstName.value || !lastName.value || !username.value){
        alert("Name and username is needed")
        return false
    }
    if(!/\S+@\S+\.\S+/.test(email.value)){
        alert("Invalid email")
        return false
    }
    if(password.value.length < 8){
        alert("Invalid password, Your password must be at least 8 characters long")
        return false
    }
    return true
}

const signUp = async() => {
    if(!validateForm()){
        return;
    }
    try{
        await axios.post("http://localhost:3000/User", {
            firstName: firstName.value,
            lastName: lastName.value,
            userName: username.value,
            email: email.value,
            password: password.value
        })
        alert('Signup successful!')
        router.push('/login')
    }catch(e){
        alert("Signup failed: " + e.response.data.error)
    }
}
</script>

<template>
    <div class="container">
        
        <form @submit.prevent="signUp">
            
            <h1>Sign Up!</h1>
            <label for="firstName">First Name: </label>
            <input v-model="firstName"><br>
            <label for="lastName">Last Nmae: </label>
            <input v-model="lastName"><br>
            <label for="username">Username: </label>
            <input v-model="username"><br>
            <label for="email">Email: </label>
            <input v-model="email"><br>
            <label for="password">Password: </label>
            <input v-model="password"><br>

            <button type="submit">Sign Up!</button>
         </form>

         <div class="button">
            <p>Don't have an account?</p>
            <v-btn @click="$router.push('/login')" class="SignUp"> Log In </v-btn>
        </div>
    </div>
</template>

<style scoped>
body{
    margin: 0px;
    padding: 0px;
}
.container{
    display: flex;
    justify-content: center;
    padding: 25% auto;
    text-align: center;
    max-height: fit-content;
}

form{
    background-color: #222222d7;
    border-radius: 6px;
    box-shadow: 0px 1px 10px rgba(255, 228, 196, 0.856);
    width: 30%;
    height: 40%;
    padding: 30px 40px;
    margin: 0 auto;
}

h1 {
  margin-top: -80px;
  text-align: center;
}

label{
    display: block;
    margin: 0px 0px 5px 0px;
    font-weight: bold;
}

input{
    border:  2px solid bisque;
    border-radius: 4px;
    width: 80%;
    margin: 0px 0px 15px 0px;
    padding: 10px;
    color: bisque;
    background-color: #222222d7;
}

button{
    background: bisque;
    color: black;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    width: 80%;
    padding: 10px;
    cursor: pointer;
}

button:hover{
    background: #d3b792;
}

</style>