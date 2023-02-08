<template>
  <div>
    <NavBar />
    <div class="container  mt-4">
      <div class="row">
        <div class="mb-3">
          <div v-if="!isLoading" class="profileUser">
            <form>
              <img src="../assets/mujer.jpg" class="rounded mx-auto d-block" alt=""/>
              <div class="form-row">
                <div class="form-group ">
                  <label for="inputEmail4">Nombre</label>
                  <div class="shadow-none p-3 mb-5 bg-light rounded">{{ getUser.username }}</div>
                </div>
                <div class="form-group ">
                  <label for="inputEmail4">Email</label>
                  <div class="shadow-none p-3 mb-5 bg-light rounded">{{ getUser.email }}</div>
                </div>
                <div class="form-group">
                  <label for="inputPassword4">Password</label>
                  <div class="shadow-none p-3 mb-5 bg-light rounded">{{ getUser.password }}</div>
                </div>
                <div class="form-group">
                  <label for="inputPassword4">Repite password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                    disabled
                  />
                </div>
              </div>
             
              <div class="form-group text-center">
                <div class="form-check">
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-primary ">Sign in</button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
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
import { defineComponent } from "vue";
import ProfileCard from "@/components/ProfileCard.vue";
import NavBar from "@/components/NavBar.vue";
import useAuth from "@/modules/auth/composables/useAuth";

export default defineComponent({
  name: "ProfileView",

  components: {
    ProfileCard,
    NavBar,
  },
  setup() {
    const { fetchUser, auth, isLoading, getUser } = useAuth();
    fetchUser(auth.value);

    return {
      getUser,
      isLoading,
      fetchUser,
    };
  },
});
</script>
