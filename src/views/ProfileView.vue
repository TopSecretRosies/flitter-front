<template>
  <NavBar />
  <div class="container text-center mt-8">
    <div class="row">
      <div class="mb-3">
        <div class="posts">
          <div class="post">
            <div class="user-avatar">
              <img src="../assets/mujer.jpg" />
            </div>
            <div class="post-content">
              <div class="post-user-info">
                <h2 class="card-title">{{ getUser.username }}</h2>
                <i class="fas fa-check-circle"></i>
                <!-- <p class="publication-date"> {{ publication.publicationDate }}</p> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <form>
        <div class="mb-3">
          <input class="form-control" type="file" id="formFile" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >¿Qué está pasando?</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="button" class="btn btn-primary btn-lg">Enviar</button>
      </form>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import useAuth from "@/modules/auth/composables/useAuth";

export default defineComponent({
  name: "ProfileView",

  components: {
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

<style scoped>
.user-avatar {
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.post-user-info {
  display: flex;
  margin: 1rem 14px;
}

.post {
  display: flex;
  padding: 1.5rem;
  border-bottom: 0.1 rem solid #eee;
}

.post-img {
  width: 48rem;
  height: 30rem;
}
</style>
