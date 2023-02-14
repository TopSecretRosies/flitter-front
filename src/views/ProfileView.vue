<template>
  <NavBar />
  <div class="container-fluid text-center mt-8">
    <div class="row">
      <h1>Tus publicaciones</h1>
      <div class="mb-3">
        <div class="posts">
          <div class="post">
            <div class="user-avatar">
              <img :src="getUser.user?.avatar" />
            </div>
            <div class="post-content">
              <div class="post-user-info">
                <h2 class="card-title">{{ getUser.user?.username }}</h2>
                <i class="fas fa-check-circle"></i>
                <!-- <p class="publication-date"> {{ publication.publicationDate }}</p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <form @submit.prevent="savePost()">
        <div class="col-12">
          <div class="mb-3">
            <input
              @change="handleImage"
              class="form-control shadow-none p-3 mb-5 bg-light rounded w-100 "
              type="file"
              name="image"
              accept="png"
              id="formFile"
            />
          </div>
          <div>
            <textarea
              v-model.lazy="text"
              class="form-control shadow-none bg-light rounded w-100 "
              id="text"
              rows="6"
              maxlength="256"
              placeholder="Introduce un texto máximo 256 caracteres"
            ></textarea>
          </div>
          <button class="btn btn-primary btn-lg">Enviar</button>
        </div>
      </form>
    </div>
  </div>
  <div class="container-fluid text-center">
    <div
      class="row"
      v-for="post in getUser.postList"
      :key="post.id"
      :post="post"
    >
      <div class="user-avatar col-2">
        <img :src="getUser.user?.avatar" />
      </div>
      <div class="post-content col-3">
        <div class="post-user-info">
          <a href="">{{ post.author[0].username }}</a>
          <i class="fas fa-check-circle"></i>
          <!-- <p class="publication-date"> {{ publication.publicationDate }}</p> -->
        </div>
      </div>
      <p class="post-text row col-12">{{ post.text }}</p>
      <div class="post-image col-12">
        <!-- <img :src="publication.image"/> -->
        <img class="img-fluid" :src="post.image" />
      </div>
      <div>
        {{ formatDate(post.createdAt) }}
      </div>
      <div class="post-icons col-12">
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <!-- <p>{{ publication.kudos }} kudos</p> -->
        <i class="fas fa-share-alt"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import useAuth from "@/modules/auth/composables/useAuth";
import moment from "moment";
export default defineComponent({
  name: "ProfileView",
  components: {
    NavBar,
  },
  methods: {
    formatDate: function (dt: any) {
      return moment(dt, "YYYYMMDD").fromNow();
    },
  },
  setup() {
    const { fetchUser, auth, isLoading, getUser } = useAuth();
    fetchUser(auth.value);
    let text = ref("");
    let image = ref("");
    const handleImage = (event: any) => {
      image.value = event.target.files[0];
    };
    const token = localStorage.getItem("token");
    const savePost = () => {
      let data = new FormData();
      data.append("image", image.value);
      data.append("text", text.value);
      location.reload();
      console.log(image);
      if (text.value === "") {
        alert("Debes de poner un texto o una imagen");
      } else {
        fetch("http://localhost:3000/api/posts/", {
          method: "POST",
          body: data,
          headers: { "x-access-token": `${token}` },
        }).then((res) => console.log(res));
      }
    };
    return {
      image,
      text,
      getUser,
      isLoading,
      fetchUser,
      savePost,
      handleImage,
    };
  },
});
</script>

<style scoped>
* {
  max-width: 100%;
}
.user-avatar {
  width: 6rem;
  height: 6rem;
}
.user-avatar img {
  object-fit: cover;
  margin-top: 16%;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}
.post-user-info {
  display: flex;
  margin: 4rem 5px;
}

.post-user-info h4 {
  font-family: "FuenteTitulo";
  color: black;
  font-size: 1.3rem;
  align-items: center;
  margin-right: 0.5rem;
}
.post-user-info i {
  font-size: 1rem;
  color: rgb(31, 197, 243);
}
.post-image {
  width: 100%;
}
.post-image img {
  width: 40%;
  border: 0.1rem solid rgba(0, 0, 0, 0.438);
  border-radius: 2%;
}
.post-text {
  font-family: "FuenteRegular";
  font-size: 1rem;
  margin-bottom: 0.5rem;
  margin-top: -3rem;
  margin-left: 8.3%;
}
.post {
  display: flex;
  padding: 0.5rem;
  border-bottom: 0.1 rem solid #eee;
}
.post-icons {
  margin-top: 0.2rem;
}
.post-icons i {
  font-size: 1rem;
  color: #868383;
  margin-right: 2rem;
}

@font-face {
  font-family: "FuenteTitulo";
  src: url(../modules/auth/css/fonts/FuenteTitulo.ttf);
}

@font-face {
  font-family: "FuenteRegular";
  src: url("../modules/auth/css/fonts/FuenteRegular.ttf");
}

.header-top {
  background-color: #fff;
  top: 0%;
  left: 300px;
  width: 445px;
  display: flex;
  position: fixed;
  align-items: center;
  font-family: "FuenteTitulo";
  justify-content: space-between;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.433);
}

.header-top h4 {
  margin: 20px 0px 0px 30px;
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

.image-upload {
  margin-top: 10px;
  margin-left: 180px;
  width: 35rem;
  height: 3rem;
  display: flex;
}

.image-upload > input {
  display: none;
}

.image-upload img {
  width: 5%;
}

.header-img-wrapper {
  width: 5rem;
  height: 5rem;

  margin-left: 60px;
}
.header-img-wrapper img {
  width: 100%;
  height: 100%;
  margin-top: 60px;
  object-fit: cover;
  border-radius: 50%;
}

.header-post {
  display: block;
  justify-content: center;
  margin-left: 40px;
  width: 845px;
  height: 50px;
  border-bottom: 0.1rem solid #eee;
}

.header-post #post {
  font-family: "FuenteRegular";
  margin-left: 150px;
  width: 570px;
  height: 3rem;
  border: 0.1rem solid #00c6eb;
  border-radius: 3rem;
  background-color: #d6e1e9;
  padding: 0.4rem 1.5rem;
}

.header-post i {
  font-size: 2.5rem;
  margin: 1rem;
}




.follow {
  position: fixed;
  width: 30rem;
  top: 9rem;
  left: 65%;
  background-color: #f0f3f4;
  border-radius: 3%;
}

.follow_heading {
  font-family: "FuenteTitulo";
  padding: 1rem;
  font-size: 1.5rem;
  border-bottom: 0.1rem solid #fff;
}

.follow_user {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 0.1rem solid #fff;
}

.follow_user_img {
  width: 6rem;
  height: 6rem;
  margin-right: 2rem;
}

.follow_user_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.follow_user_info h4 {
  font-family: "FuenteTitulo";
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.follow_user_info p {
  font-family: "FuenteRegular";
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.follow_btn {
  font-family: "FuenteTitulo";
  margin-left: auto;
  width: 5rem;
  height: 2rem;
  color: #fff;
  background-color: black;
  border: 0.1rem solid black;
  border-radius: 3rem;
  cursor: pointer;
}

.follow_link {
  margin: 2rem 1rem;
}

.follow_link a {
  font-family: "FuenteRegular";
  font-size: large;
  text-decoration: none;
}

.follow_footer ul {
  list-style: none;
  display: flex;
  padding: 0.2rem 0;
}

.follow_footer a {
  text-decoration: none;
  font-size: 1rem;
  color: #868383;
  margin: 0.3rem;
}
</style>
