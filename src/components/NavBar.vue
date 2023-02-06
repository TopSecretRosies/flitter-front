<template>
    <nav>
        <ul>
            <li>
                <a href="#" class="logo">
                <img src="../assets/logo_flipper.png"  />
                <span class="nav-item"><img src="../assets/logo_flipper_solo_letra.png" style="width: 150px; height: 50px"/></span>
            </a></li>
            <li><a href="#">
                <i class="fas fa-house"></i>
                <span class="nav-item">Home</span>
            </a></li>
            <li><a href="#">
                <i class="fas fa-user"></i>
                <span class="nav-item">Profile</span>
            </a></li>
            <li><a href="#">
                <i class="fas fa-wallet"></i>
                <span class="nav-item">Wallet</span>
            </a></li>
            <li><a href="#">
                <i class="fas fa-chart-bar"></i>
                <span class="nav-item">Analytics</span>
            </a></li>
            <li><a href="#">
                <i class="fas fa-tasks"></i>
                <span class="nav-item">Task</span>
            </a></li>
            <li><a href="#">
                <i class="fas fa-cog"></i>
                <span class="nav-item">Setting</span>
            </a></li>
            <li><a href="#">
                <i class="fas fa-question"></i>
                <span class="nav-item">Help</span>
            </a></li>
            <li> <router-link @click="logout" :to="{}">
                <i class="fas fa-sign-out"></i>
                <span class="nav-item">Log Out</span>
            </router-link></li>
        </ul>
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
    * {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        text-decoration: none;
        box-sizing: border-box;
    
    }

    nav {
        position: fixed;
        top: 0;
        bottom: 0;
        max-height: 100%;
        left: 0;
        background: black;
        width: 90px;
        overflow: hidden;
        transition: width 0.2s linear;
        box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
        color: white;

    }

    .logo {
        text-align: center;
        display: flex;
        transition: all 0.5s ease;
        margin: 10px 0 0 px;
    }

    img {
        width: 79px;
        height: 86px;
        
    }

    .logo span {
        font-weight: bold;
        padding-left: 15px;
        font-size: 18px;
        text-transform: uppercase;
    }
    a {
        position: relative;
        color: white;
        font-size: 14px;
        display: table;
        width: 300px;
        padding: 10px;
    }

    .fas {
        position: relative;
        width: 70px;
        height: 40px;
        top: 14px;
        font-size: 20px;
        text-align: center;
        
    }

    .nav-item {
        position: relative;
        top: 12px;
        margin-left: 10px;
    }

    a:hover {
        background: rgb(130, 126, 126);
    }
    nav:hover {
        width: 280px;
        transition: all 0.5s ease;
    }

    .logout {
        position: absolute;
        bottom: 0;
    }
    
</style>
