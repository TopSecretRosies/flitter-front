<template>
    <div class="card">
      <slot name="image"></slot>
      <div class="card-body">
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "@vue/runtime-core";
  
  export default defineComponent({
    name: "ProfileCard",
  });
  </script>
  
  <style scoped>
  .card {
    width: 30rem;
    min-height: 200px;
    border: 1px solid rgb(243, 239, 239);
    border-radius: 1rem;
    box-shadow: 0px 10px 10px rgba(110, 108, 108, 0.2);
  }
  </style>