<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

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
        <h1>Log In!</h1>
        <form @submit.prevent="logIn">
            <label for="email">Email: </label>
            <input v-model="email"><br>
            <label for="password">Password: </label>
            <input v-model="password"><br>

            <button type="submit">Log in!</button>

        </form>
    </div>
        
</template>

<style scoped>
body{
    margin: 0px;
    padding: 0px;
}
.container{
    padding: 150px;
    text-align: center;
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
  margin-bottom: 20px;
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