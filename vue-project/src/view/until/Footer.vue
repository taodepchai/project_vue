<template>
  <footer>
    <div class="container">
      <div class="footer-links">
        <a href="#">About</a>
        <a href="#">Help</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
      <div class="footer-copyright">
        &copy; 2024 Your Company Name. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script></script>

<style scoped>
footer {
  background-color: #f0f2f5;
  padding: 10px 0;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  z-index: 1000;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-links {
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
}

.footer-links a {
  color: #1877f2;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.footer-copyright {
  color: #999;
  font-size: 12px;
}
</style>
