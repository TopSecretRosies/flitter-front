<template>
  <nav class="navbar navbar-expand-lg color-nav ">
    <div class="container-fluid">
      <img class="logo" src="../assets/logo.png"/>
    <button
      class="navbar-toggler"
      style="background-color: #00c6eb;"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"
      style="font-size: 12px; text-align: center;"><i id="menu" class="fa-solid fa-bars"></i></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav mx-auto" >
          <li class="nav-item" >
            <router-link class="nav-link" :to="{ name: 'home'}"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'profile'}"
              >Perfil</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'config' }"
              >Configuración</router-link
            >
          </li>
          
        </ul>
        <ul class="navbar-nav float-right d-flex align-items-md-center">
          <li class="nav-item">

           <p>Bienvenido/a {{ getUser.user?.username }} </p>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'login'}"
              ><i class="fa-solid fa-user"></i></router-link>
          </li>
        </ul>
        <ul lass="navbar-nav">

          <li class="nav-item">

            <router-link @click="logout" class="nav-link " :to="{name: 'home'}"


              ><i
                class="fa-solid fa-right-from-bracket"
                title="Log Out"
                style="font-size: 30px; color: white"
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
  const { deleteToken, getUser } = useAuth();
  const logout = () => {
    deleteToken();
  };
  return {
    getUser,
    logout,
  };
},
});
</script>

<style scoped>
@font-face {
font-family: "FuenteTitulo";
src: url(../modules/auth/css/fonts/FuenteTitulo.ttf);}
.color-nav {
background-image: url("../assets/fondoLogIn.jpg");

}
#menu{
  color: black;
    margin-top:3px;
    width: 1.5em;
    height: 1.5em;
    background: no-repeat center center;
    background-size: 100% 100%;
}
.logo {
width: 10%;
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
p {
color: white;
margin: 0 32px;
font-family: "FuenteTitulo";
font-size: 20px;
font-weight: bold;
}
.fa-solid {
margin-top: 15px;
margin-right: 10px;
}
  
</style>