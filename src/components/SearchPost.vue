<template>
    <form class="d-flex" role="search">
      <input
        v-model.lazy="search"
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        minlength="3"
      />
      <button
        type="button"
        @click="validateSearch"
        class="btn btn-outline-success"
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
      const postAll = publications.value;
      console.log(postAll)
      // Comprobamos que el buscador no acepte menos de tres letras para hacer su búsqueda
      const validateSearch = () => {
        if (search.value.length < 3) {
          alert("Por favor, ingresa mínimo tres letras");
          console.log(search)
        } else {
          const filterPost =
            search.value.charAt(0).toUpperCase() + search.value.slice(1);
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