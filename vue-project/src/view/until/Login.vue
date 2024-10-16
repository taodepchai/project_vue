<template>
  <div class="login-container">
    <img src="https://i.pinimg.com/1200x/3a/08/07/3a0807a04653a5ac5137b598e6b20f38.jpg" class="background-image" alt="">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <div v-if="error" class="error">{{ error }}</div>
    <p>
      Don't have an account? <router-link to="/register">Sign up</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const error = ref(null);
const router = useRouter();

const handleLogin = async () => {
  error.value = null;
  try {
    const response = await axios.get("http://localhost:3000/users", {
      params: {
        email: email.value,
        password: password.value,
      },
    });

    if (response.data.length > 0) {
      localStorage.setItem("token", response.data[0].token);
      console.log("Login successful", response.data);
      router.push("/");
    } else {
      error.value = "Invalid email or password";
    }
  } catch (err) {
    error.value = "An error occurred. Please try again.";
    console.error(err);
  }
};
</script>

<style>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #36393f;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative; 
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center; 
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

.error {
  color: #f04747;
  margin-top: 10px;
}
</style>
