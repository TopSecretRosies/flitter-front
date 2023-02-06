<template>
    <nav class="navbar navbar-expand-lg color-nav">
      <div class="container-fluid">
        <img class="logo" src="../assets/logo.png" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'home' }"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'profile' }"
                >Perfil</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link d-none"
                :to="{ }"
                >Opciones</router-link
              >
            </li>
          </ul>
          <ul lass="navbar-nav">
            <li class="nav-item">
              <router-link @click="logout" class="nav-link float-right" :to="{}"
                ><i
                  class="fa-solid fa-right-from-bracket"
                  title="Log Out"
                  style="font-size: 40px; color: grey"
                ></i
              ></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>


<script lang="ts">
import useAuth from "@/modules/auth/composables/useAuth";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "NavBar",

  setup() {
    // Borramos el token para salir de la página y que nos vuelva al login
    const { deleteToken } = useAuth();

    const logout = () => {
      deleteToken();
    };

    return {
      logout,
    };
  },
});

</script>

<style scoped>

@font-face {
  font-family: "FuenteTitulo";
  src: url(../modules/auth/css/fonts/FuenteTitulo.ttf);}

.navbar{
margin-top: 10px;
height: 80px;
border-radius: 3rem;
}
.color-nav {
  background-image: url("../assets/fondoLogIn.jpg");
  background-size: 50%;
  color: white;
}

.logo {
  margin-left: 50px;
  width: 8%;
  height: 6%;
}

li {
  list-style: none;
}

a {
    font-family: "FuenteTitulo";
    font-size: 20px;
    color: white;
}

a:hover {
    color:#00c6eb;
    font-size:22px;
}

.fa-solid {
margin-top: 15px;
margin-right: 50px;
}
    
</style>
