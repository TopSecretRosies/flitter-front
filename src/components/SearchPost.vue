<template>
    <form class="d-flex container" role="search">
      <div class="row"></div>
      <div class="col-sm-3"></div>
      <input
        v-model.lazy="search"
        class="form-control col-sm-6"
        type="search"
        placeholder="Search"
        aria-label="Search"
        minlength="3"
      />
      <button
        type="button"
        @click="validateSearch"
        class="btn btn-outline-success col-sm-3"
      >
        Search
      </button>
    </form>
  </template>
  
  <script lang="ts">
 import usePublications from "@/composables/usePublications";
  import { defineComponent } from "@vue/runtime-core";
  import { ref } from "vue";
  export default defineComponent({
    name: "SearchPost",
    setup() {
      const { searchPublications, publications } = usePublications();
      const search = ref("");
      console.log(search)
      const postAll = publications.value;
      // Comprobamos que el buscador no acepte menos de tres letras para hacer su búsqueda
      const validateSearch = () => {
        if (search.value.length < 3) {
          alert("Por favor, ingresa mínimo tres letras");
          
        } else {
          const filterPost =
            search.value.charAt(0).toUpperCase() + search.value.slice(1);
           console.log(search)
          for (let i = 0; i < postAll.length; i++) {
            if (postAll[i].text.includes(filterPost)) {
              const textPost = postAll[i].text.split(" ");
              for (let j = 0; j < textPost.length; j++) {
                if (textPost[j].includes(filterPost)) {
                  searchPublications(textPost[j]);
                }
              }
            }
          }
        }
      };

      return {
        search,
        validateSearch,
      };
    },
  });
  </script>

<style>

form {
margin-top: 10px;
}

@font-face {
  font-family: "FuenteRegular";
  src: url(../assets/FuenteRegular.ttf);
}
.form-control {
color: black;
text-align: center;
margin-right: 15px;
width: 40%;
font-family: "FuenteRegular";
border-radius: 21px;
border: #40aac5 solid 1px;
}

.d-flex button{
    font-family: "FuenteTitulo";
    font-size: 16px;
    color: #fff;
    width: 120px;
    height: 42px;
    border-radius: 21px;
    background: #40aac5;
}
</style>