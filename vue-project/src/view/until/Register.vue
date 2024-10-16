<template>
  <div class="register-container">
    <div class="background-image"></div>
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <div v-if="successMessage" class="success">{{ successMessage }}</div>
    <div v-if="error" class="error">{{ error }}</div>
    <p>Already have an account? <router-link to="/login">Sign in</router-link></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const name = ref("");
const email = ref("");
const password = ref("");
const successMessage = ref(null);
const error = ref(null);

const handleRegister = async () => {
  error.value = null;
  successMessage.value = null;
  try {
    const newUser = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    await axios.post("http://localhost:3000/users", newUser);

    successMessage.value = "Registration successful! You can now log in.";
    name.value = "";
    email.value = "";
    password.value = "";
  } catch (err) {
    error.value = "An error occurred. Please try again.";
    console.error(err);
  }
};
</script>

<style>
.register-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #36393f;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://i.pinimg.com/1200x/3a/08/07/3a0807a04653a5ac5137b598e6b20f38.jpg");
  background-size: cover;
  opacity: 0.5; 
  z-index: -1; 
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #4f545c;
  border-radius: 4px;
  background-color: #2f3136;
  color: #fff;
}

button {
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #5865f2;
  color: #fff;
  cursor: pointer;
}

.success {
  color: #43b581;
  margin-top: 10px;
}

.error {
  color: #f04747;
  margin-top: 10px;
}
</style>
