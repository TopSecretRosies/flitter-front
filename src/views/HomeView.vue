<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <NavBar />
        </div>


        </div>
        <div id="barraFT">
          <a href="https://twitter.com/home">Para ti</a>
          <a href="https://twitter.com/home">Siguiendo</a>
        </div>
        <div class="header-post">
          <div class="header-img-wrapper">
            <img id="profilePic" src="../assets/mujer.jpg" />
          </div>
          <input id="post" type="text" placeholder="¿Qué está pasando?" />

          <div class="image-upload">
            <label for="file-input">
              <img src="../assets/img.png" />
            </label>
            <input id="file-input" accept="image/png,image/jpeg" type="file" />
            <input id="flittear" type="submit">
          </div>
        </div>

        <div id="busqueda">
          <input type="search" placeholder="Buscar en Flitter">
          <img src="../assets/lupa.svg" alt="lupa">
        </div>

        <div class="follow">
          <h3 class="follow_heading">A quién seguir</h3>
          <div class="follow_user">
            <div class="follow_user_img">
              <img src="../assets/shakira.jpeg">
            </div>
            <div class="follow_user_info">
              <h4>Shakira</h4>
              <p>@Shakira</p>
            </div>
            <button type="button" class="follow_btn">Seguir</button>
          </div>
          <div class="follow_user">
            <div class="follow_user_img">
              <img src="../assets/monica.jpeg">
            </div>
            <div class="follow_user_info">
              <h4>Mónica Naranjo</h4>
              <p>@MonicaNaranjo</p>
            </div>
            <button type="button" class="follow_btn">Seguir</button>
          </div>
          <div class="follow_link">
            <a href="#">Mostrar más</a>
          </div>
          <footer class="follow_footer">
            <ul>
              <li><a href="#">Condiciones</a></li>
              <li><a href="#">Politica de Privacidad</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Acerca de</a></li>
              <li><a href="#">Más</a></li>
            </ul>
          </footer>
        </div>
      </div>

      <div class v-if="isLoading">Cargando...</div>
      <div v-else>
        <PubliCation v-for="publication in publications" :key="publication.id" :publication="publication" />
      </div>
    </div>

    <div class="col"></div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import PubliCation from "@/components/PubliCation.vue";
import usePublications from "@/composables/usePublications";

export default defineComponent({
  name: "HomeView",

  components: {
    NavBar,
    PubliCation,
  },

  setup() {
    const { publications, isLoading, fetchPublications } = usePublications();

    fetchPublications();

    return {
      publications,
      isLoading,
    };
  },
});
</script>

<style scoped>
@font-face {
  font-family: "FuenteTitulo";
  src: url(../modules/auth/css/fonts/FuenteTitulo.ttf);
}

@font-face {
  font-family: "FuenteRegular";
  src: url("../modules/auth/css/fonts/FuenteRegular.ttf");
}

.header-top {
  background-color: #fff;
  top: 0%;
  left: 300px;
  width: 445px;
  display: flex;
  position: fixed;
  align-items: center;
  font-family: "FuenteTitulo";
  justify-content: space-between;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.433);
}

.header-top h4 {
  margin: 20px 0px 0px 30px;
  font-size: 2.4rem;
}

.header-top i {
  font-size: 2.2rem;
  color: #868383;
}

.header-post {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 0.1rem solid #eee;
}

#barraFT {
  margin-top: 5%;
  margin-left: 6.3%;
  display: flex;
  justify-content: center;
  width: 845px;
  height: 10px;
  background-color: #fff;
}

#barraFT a {
  margin-top: 10px;
  margin-left: 20px;
  color: black;
  text-decoration: none;
  font-family: "FuenteTitulo";
  font-size: large;
}

.image-upload {
  margin-top: 10px;
  margin-left: 180px;
  width: 35rem;
  height: 3rem;
  display: flex;
}

.image-upload>input {
  display: none;
}

.image-upload img {
  width: 5%;
}


.header-img-wrapper {
  width: 5rem;
  height: 5rem;
  
  margin-left: 60px;
}
.header-img-wrapper img {
  width: 100%;
  height: 100%;
  margin-top: 60px;
  object-fit: cover;
  border-radius: 50%;
}

.header-post {
  display: block;
  justify-content: center;
  margin-left: 40px;
  width: 845px;
  height: 50px;
    border-bottom: 0.1rem solid #eee;

}

.header-post #post {
  font-family: "FuenteRegular";
  margin-left: 150px;
  width: 570px;
  height: 3rem;
  border: 0.1rem solid #00c6eb;
  border-radius: 3rem;
  background-color: #d6e1e9;
  padding: 0.4rem 1.5rem;
}

.header-post i {
  font-size: 2.5rem;
  margin: 1rem;
}

#flittear {
  font-family: "FuenteTitulo";
  margin-top: 5px;
  display: inline-block;
  text-align: center;
  color: #fff;
  background-color: #00c6eb;
  border: 0.1rem solid #00c6eb;
  border-radius: 3rem;
  display: inline;
  width: 90px;
  height: 40px;
}

#busqueda input {
  position: fixed;
  width: 20rem;
  height: 45px;
  top: 5rem;
  left: 70%;
  background-color: #f0f3f4;
  border-radius: 3%;
  text-align: right;
  border-radius: 3rem;
  border: #f0f3f4;
  background-color: #f0f3f4;
}

#busqueda img {
  position: fixed;
  top: 5.7rem;
  left: 71%;
  text-align: right;
  border-radius: 3rem;
  width: 20px;
  height: 25px;
  border: #f0f3f4;
  background-color: #f0f3f4;
}

.follow {
  position: fixed;
  width: 30rem;
  top: 9rem;
  left: 65%;
  background-color: #f0f3f4;
  border-radius: 3%;
}

.follow_heading {
  font-family: "FuenteTitulo";
  padding: 1rem;
  font-size: 1.5rem;
  border-bottom: 0.1rem solid #fff;
}

.follow_user {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 0.1rem solid #fff;
}

.follow_user_img {
  width: 6rem;
  height: 6rem;
  margin-right: 2rem;
}

.follow_user_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.follow_user_info h4 {
  font-family: "FuenteTitulo";
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.follow_user_info p {
  font-family: "FuenteRegular";
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.follow_btn {
  font-family: "FuenteTitulo";
  margin-left: auto;
  width: 5rem;
  height: 2rem;
  color: #fff;
  background-color: black;
  border: 0.1rem solid black;
  border-radius: 3rem;
  cursor: pointer;
}

.follow_link {
  margin: 2rem 1rem;
}

.follow_link a {
  font-family: "FuenteRegular";
  font-size: large;
  text-decoration: none;
}

.follow_footer ul {
  list-style: none;
  display: flex;
  padding: 0.2rem 0;
}

.follow_footer a {
  text-decoration: none;
  font-size: 1rem;
  color: #868383;
  margin: 0.3rem;
}
</style>

