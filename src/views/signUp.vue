<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const firstName = ref('');
const lastName = ref('');
const username = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

const signUp = async() => {
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
</template>

<style>

</style>