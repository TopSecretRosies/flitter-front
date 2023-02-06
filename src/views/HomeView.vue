<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-3">
          <NavBar />
        </div>
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-10 col-xl-9">
          <div class="header-top">
            <h4>Home</h4>
            <i class="far fa-star"></i>
          </div>
          <div class="header-post">
            <div class="header-img-wrapper">
              <img src="../assets/mujer.jpg" />
            </div>
            <input type="text" placeholder="Que está sucediendo?" />
            <i class="far fa-image"></i>
           
           
          </div>
          <div class v-if="isLoading">Cargando...</div>
     
          <div  v-else>
            <PubliCation
              v-for="publication in publications"
              :key="publication.id"
              :publication="publication"
            />
          </div>
        </div>
          
       
      </div>
    </div>
  </div>
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

  .header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.1rem solid black;
  }

  .header-top h4 {
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

  .header-img-wrapper {
    width: 4rem;
    height: 4rem;
    margin-right: 1.5rem;

  }
  .header-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .header-post input{
    width: 35rem;
    height: 3rem;
    border: 0.1rem solid #6de1e9;
    border-radius: 3rem;
    background-color: #d6e1e9;
    padding: 0.4rem 1.5rem;
  }

  .header-post i {
    font-size: 2.5rem;
    margin: 1rem;
  }

  @media only screen and (max-width:480px){

    .header-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.1rem solid black;
    margin-left: 80px;
  }
    .header-post {
    display: flex;
    flex-direction: column;
    margin-left: 5rem;
    align-items: center;
    border-bottom: 0.1rem solid #eee;
  }

  .header-post input{
    width: 15rem;
    height: 3rem;
    border: 0.1rem solid #6de1e9;
    border-radius: 3rem;
    background-color: #d6e1e9;
    
  }

 
}
</style>
