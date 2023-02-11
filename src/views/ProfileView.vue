<template>
  <NavBar />
  <div class="container text-center mt-8">
    <div class="row">
      <div class="mb-3">
        <div class="posts">
          <div class="post">
            <div class="user-avatar">
              <img :src="getUser.user.avatar" />
            </div>
            <div class="post-content">
              <div class="post-user-info">
                <h2 class="card-title">{{ getUser.user.username }}</h2>
                <i class="fas fa-check-circle"></i>
                <!-- <p class="publication-date"> {{ publication.publicationDate }}</p> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <form @submit.prevent="savePost()">
        <div class="mb-3">
          <input @change="handleImage" class="form-control" type="file" name="image" accept="png" id="formFile"  />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >¿Qué está pasando?</label
          >
          <textarea v-model.lazy="text"
            class="form-control"
            id="text"
            rows="6"
            maxlength="256"
            placeholder="Introduce un texto máximo 256 caracteres"
          ></textarea>
        </div>
        <button class="btn btn-primary btn-lg">Enviar</button>
      </form>
      <div class="post-content" v-for="post in getUser.postList" :key="post.id" :post="post">
        <div class="post-user-info">
            <h4>{{ post.author }}</h4>
            <i class="fas fa-check-circle"></i>
            <!-- <p class="publication-date"> {{ publication.publicationDate }}</p> -->
        </div>
            <p class="post-text"> {{ post.text }}</p>
            <div class="post-image">
                <!-- <img :src="publication.image"/> -->
                <img class="img-fluid" :src="post.image"/>
            </div>
            <div class="post-icons">
                <i class="far fa-comment"></i>
                <i class="fas fa-retweet"></i>
                <i class="far fa-heart"></i>
                <!-- <p>{{ publication.kudos }} kudos</p> -->
                <i class="fas fa-share-alt"></i>
                    
            </div>
                    
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
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


    let text = ref("");
    let image = ref("")

    const handleImage = (event:any) => {
      image.value = event.target.files[0]
    }


    const savePost = () => {
      let data = new FormData();
      data.append('image', image.value)
      data.append('text', text.value)
      console.log(image)
      if(text.value === "" || image.value === "") {
        alert("Debes de poner un texto o una imagen")
      } else {
         fetch("http://localhost:3000/api/posts/", {
          method: "POST",
          body: data,

         })
         .then(res => console.log(res))

      }

    }

    return {
      image,
      text,
      getUser,
      isLoading,
      fetchUser,
      savePost,
      handleImage

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
