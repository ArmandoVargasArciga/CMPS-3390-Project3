<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import '@/styles/login.css';

const email = ref('');
const password = ref('');
const router = useRouter();

const validateForm = () => {
    if(!/\S+@\S+\.\S+/.test(email.value)){
        alert("Invalid email")
        return false
    }
    if(password.value.length < 8){
        alert("Invalid password")
        return false
    }
    return true
}

const logIn = async() => {
    if(!validateForm()){
        return;
    }
    try{
        const res = await axios.post("http://localhost:3000/login", {
            email: email.value,
            password: password.value
    })
    localStorage.setItem('token', res.data.token)
    router.push('/print')
    } catch(e){
        alert("Login failed: " + e.response.data.error)
    }
}
</script>

<template>
    <div class="container">
    
        <form @submit.prevent="logIn">
            <h1>Log In!</h1>
            <label for="email">Email: </label>
            <input v-model="email"><br>
            <label for="password">Password: </label>
            <input v-model="password"><br>

            <button type="submit">Log in!</button>
            <br> 
            <br>    
            <h2>Don't have an account?</h2>
                <br> 
                <v-btn @click="$router.push('/signUp')" class="SignUp"> Sign Up </v-btn>
        </form>

        
    </div>
        
</template>
