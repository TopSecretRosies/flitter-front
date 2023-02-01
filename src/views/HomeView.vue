<template>
  <div class="home">
    <NavBar/>
   

    <div>
      <PubliCation>
        <template v-slot:image>
            <div class="picture">
              <img src="" class="imagen" alt="" />
            </div>
          </template>
          <template v-slot:header>
            <h2>Publicacion:{{publications.text}}</h2>
          </template>
          <template v-slot:body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reiciendis esse molestiae, iusto aliquam explicabo, voluptatem dicta ea minus repellendus,
              exercitationem suscipit tenetur eveniet vitae sit magni ab asperiores iste.</p>
          </template>
          <template v-slot:footer>
            <h2></h2>
          </template>
      </PubliCation>
      </div>
    </div>
      
  
</template>

<script lang="ts">

import NavBar from '@/components/NavBar.vue';
import PubliCation from '@/components/PubliCation.vue';
import usePublications from '@/composables/usePublications';




  

export default {
  name: 'HomeView',

  components: {
    NavBar,
    PubliCation
  },

  setup() {
    const { fetchPublications, isLoading, publications } = usePublications();
   
    fetchPublications();

    return {
      publications,
      isLoading

    }
  },

  
}
</script>

<style scoped>
  * {
    text-align: center;
  }
</style>
