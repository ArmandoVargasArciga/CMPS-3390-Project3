<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import '@/styles/signup.css';


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
        <h1>Sign Up!</h1>
        <form @submit.prevent="signUp">
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
    </div>
</template>
