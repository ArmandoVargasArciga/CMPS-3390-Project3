<script setup>

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