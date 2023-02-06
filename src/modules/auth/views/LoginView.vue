
<template>
  <div class="logo"><img src="../../../assets/logo.png" /></div>
  <span class="login100-form-title p-b-41" style="font-family: 'FuenteTitulo'">
    Inicia sesión</span
  >
  <form @submit.prevent="token" class="login100-form validate-form p-b-33 p-t-5">
    <div
      class="wrap-input100 validate-input"
      data-validate="Introduzca su correo"
    >
      <input  
        v-model.lazy="email" 
        class="input100" 
        type="email" 
        placeholder="Correo" 
        pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}"
        required />
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>

    <div
      class="wrap-input100 validate-input"
      data-validate="Introduzca contraseña"
    >
      <input
        v-model.lazy="password"
        class="input100"
        type="password"
        placeholder="Contraseña"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button type="submit" class="login100-form-btn" style="font-family: 'FuenteTitulo'">
        Login
      </button>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'register' }">¿No tienes cuenta?</router-link>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useAuth from "../composables/useAuth";

export default defineComponent({
  name: "LoginView",

  setup() {
    const { fetchToken} = useAuth();

    let email = ref("");
    let password = ref("");

    const token = () => {
      fetchToken({email: email.value, password: password.value})
    };

    return {
      email,
      password,
      token,
    };
  },
});
</script>

<style scoped></style>
