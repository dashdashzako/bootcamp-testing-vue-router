<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink :to="{ name: 'dummy-page-route-name' }">I lead to a dummy page!</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
