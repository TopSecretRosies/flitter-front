<template>
  <div class="home">
    <NavBar />
    <div class="container-fluid">
      <div class="row">
        <div id="busqueda">
          <SearchPost/>
        </div>
      </div>
      <div class="col col-sm-1 col-md-10 col-lg-12">
        <div class v-if="isLoading">Cargando...</div>
        <div v-else>
          <PubliCation
            v-for="publication in publications"
            :key="publication.id"
            :publication="publication"
          />
        </div>
      </div>
      <PaginationButtons :page="page" @prev="setPage(page - 1)" @next="setPage(page + 1)"/>
    </div>

 
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import PubliCation from "@/components/PubliCation.vue";
import usePublications from "@/composables/usePublications";
import SearchPost from "@/components/SearchPost.vue";
import PaginationButtons from "@/components/PaginationButtons.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    NavBar,
    PubliCation,
    SearchPost,
    PaginationButtons
  },

  setup() {
    const { publications, isLoading, fetchPublications } = usePublications();
    
    const page = ref<number>(1)

    fetchPublications({page: page.value});

    return {
      page,
      publications,
      isLoading,
      setPage (nextPage: number) {
        page.value = nextPage
        console.log(nextPage)
        fetchPublications({page: nextPage})
      }
    };
  },
});
</script>


