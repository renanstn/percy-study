<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <RouterLink to="/" class="nav-link active">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/about" class="nav-link">About</RouterLink>
      </li>
    </ul>
  </header>

  <body class="container">
    <RouterView />
  </body>
</template>
