<script setup>
import { ref } from 'vue';
import axios from 'axios';

const email = ref('');
const password = ref('');

const logIn = async() => {
    try{
        const res = await axios.post("http://localhost:3000/login", {
            email: email.value,
            password: password.value
    })
    localStorage.setItem('token', res.data.token)
    alert('Login successful!')
    } catch(e){
        alert("Login failed: " + e.response.data.error)
    }
}
</script>

<template>
    <form @submit.prevent="logIn">
        <label for="email">Email: </label>
        <input v-model="email"><br>
        <label for="password">Password: </label>
        <input v-model="password"><br>

        <button type="submit">Log in!</button>

    </form>
</template>

<style>

</style>