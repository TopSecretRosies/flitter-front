<template>
  <div>
    <NavBar />
    <div class="container mt-4">
      <div class="row">
        <div class="mb-3">
          <div v-if="!isLoading" class="profileUser">
            <form @submit.prevent="savePost()">
              <div class="mb-3">
                <input @change="handleImage" class="form-control" type="file" name="image" accept="png" id="formFile"  />
                <button class="btn btn-primary btn-lg">Enviar</button>
              </div>
            </form>
            <form>
              <img :src="getUser.user.avatar" class="img-fluid mx-auto d-block" alt=""/>
              <div class="form-row">
                <div class="form-group ">
                  <label for="inputEmail4">Nombre</label>
                  <div class="shadow-none p-3 mb-5 bg-light rounded">{{ getUser.user.username }}</div>
                </div>
                <div class="form-group ">
                  <label for="inputEmail4">Email</label>
                  <div class="shadow-none p-3 mb-5 bg-light rounded">{{ getUser.user.email }}</div>
                </div>
                <div class="form-group">
                  <label for="inputPassword4">Password</label>
                  <div class="shadow-none p-3 mb-5 bg-light rounded">{{ }}</div>
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
             
              <div class="form-group text-center mb-4">
                <button type="submit" class="btn btn-primary ">Darse de baja</button>
              </div>
             
            </form>
          </div>
          <div v-else>Cargando...</div>

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

    
    let avatar = ref("")
    const token = localStorage.getItem("token");
    const handleImage = (event:any) => {
      avatar.value = event.target.files[0]
    }

    const savePost = () => {
      let data = new FormData();
      data.append('avatar', avatar.value)
      location.reload();
      if(avatar.value === "") {
        alert("Debes de poner un texto o una imagen")
      } else {
         fetch(`http://localhost:3000/api/auth/profile`, {
          method: "POST",
          body: data,
          headers: { "x-access-token": `${token}` },

         })
         .then(res => console.log(res))

      }

    }


    return {
      getUser,
      isLoading,
      fetchUser,
      savePost,
      handleImage
     
    };
  },
});
</script>
