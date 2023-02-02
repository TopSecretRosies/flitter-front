<template>
  <div class="logo"><img src="../../../assets/logo.png"  /></div>
  <span class="login100-form-title p-b-41"> Regístrate </span>
  <form class="login100-form validate-form p-b-33 p-t-5">
    <div
      class="wrap-input100 validate-input"
      data-validate="Introduzca su nombre" style="font-family:'FuenteTitulo'"
    >
      <input
        v-model="userForm.name"
        class="input100"
        type="text"
        placeholder="Nombre"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>

    <div
      class="wrap-input100 validate-input"
      data-validate="Introduzca su correo"
    >
      <input
        v-model="userForm.email"
        class="input100"
        type="email"
        placeholder="Correo"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe818;"></span>
    </div>

    <div
      class="wrap-input100 validate-input"
      data-validate="Introduzca contraseña"
    >
      <input
        v-model="userForm.password"
        class="input100"
        type="password"
        placeholder="Contraseña"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button type="submit" class="login100-form-btn" style="font-family:'FuenteTitulo'">Crear cuenta</button>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'login' }">¿Ya tienes una cuenta?</router-link>
    </div>
  </form>
</template>

<script lang="ts">
import { ref } from "vue";




export default {
  setup() {

   

    const userForm = ref({
      name: "",
      email: "",
      password: "",
    });

    return {
      userForm,
     
    };
  },
};
</script>

<style scoped>
   
</style>
