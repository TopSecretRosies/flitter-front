<template>
  <div class="home">
    <NavBar/>
    <div v-if="isLoading">Cargando...</div>

    <div class="publication-list" v-else>
      <PubliCation v-for="publication in publications" :key="publication.id" :publication="publication"/>
    </div>
    </div>
      
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import PubliCation from '@/components/PubliCation.vue';
import usePublications from '@/composables/usePublications';


export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar,
    PubliCation
  },

  setup() {
    const { publications, isLoading, fetchPublications } = usePublications();
   
    fetchPublications();

    return {
      publications,
      isLoading

    }
  },

  
})
</script>

<style scoped>
  * {
    text-align: center;
  }

</style>
