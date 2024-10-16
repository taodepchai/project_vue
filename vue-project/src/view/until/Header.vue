<template>
  <header>
    <div class="container">
      <div class="header-content">
        <img
          @click="home"
          src="https://i.pinimg.com/1200x/8e/f9/4e/8ef94e11f4305d6aba4e1dccbdc2f6a0.jpg"
          alt=""
          class="logo"
        />
      </div>
      <div class="header-actions">
        <button @click="goToLogin" class="login-button">Login</button>
        <button @click="goToRegister" class="signup-button">Sign Up</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const home = () => {
  router.push("/");
};
const goToLogin = () => {
  router.push("/login");
};

const goToRegister = () => {
  router.push("/register");
};
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
}

header {
  background-color: #0099ff;
  padding: 10px 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  height: 40px;
}

.header-content {
  display: flex;
  align-items: center;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.login-button,
.signup-button {
  background-color: #42b72a;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.login-button {
  background-color: #42b72a;
}

.signup-button {
  background-color: white;
  color: #1877f2;
  border: 1px solid #1877f2;
}

.login-button:hover,
.signup-button:hover {
  opacity: 0.9;
}
</style>
