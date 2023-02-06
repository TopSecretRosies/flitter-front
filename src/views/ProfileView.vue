<template>
    <div>
        <NavBar/>
        <div v-if="!isLoading" class="profileUser">
      <ProfileCard>
        <template v-slot:image>
          <div class="picture">
            <img :src="getUser.avatar" class="card-img-top" alt="" />
          </div>
        </template>
        <template v-slot:header>
          <h2 class="card-title">{{ getUser.username }}</h2>
        </template>
        <template v-slot:body>
          <p class="card-text">{{ getUser.email }}</p>
        </template>
        <template v-slot:footer>
          <h2>Role: {{ getUser.password }}</h2>
        </template>
      </ProfileCard>
    </div>
    <div v-else>Cargando...</div>
  </div>
   
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProfileCard from "@/components/ProfileCard.vue";
import NavBar from "@/components/NavBar.vue";
import useAuth from '@/modules/auth/composables/useAuth';


export default defineComponent({
    name: "ProfileView",

    components: {
    ProfileCard,
    NavBar,
  },
    setup() {
        const {fetchUser, auth, isLoading, getUser} = useAuth()
        fetchUser(auth.value)
        
        return {
            getUser,
            isLoading,
            fetchUser,
    };
    },
})
</script>
