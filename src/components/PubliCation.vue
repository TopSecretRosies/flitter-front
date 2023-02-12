<template>
    <div class="post container">
        <div class="row">
            <div class="user-avatar col-2">
                <img src="../assets/mujer.jpg" />
            </div>
            <div class="post-content col-3">
                <div class="post-user-info">
                    <h4>{{ publication.author }}</h4>
                    <i class="fas fa-check-circle"></i>
                    <!-- <p class="publication-date"> {{ publication.publicationDate }}</p> -->
                </div>
            </div>
            <p class="post-text row col-12"> {{ publication.text }}</p>
            <div class="post-image col-12" >
                <!-- <img :src="publication.image"/> -->
                <img class="img-fluid" :src="publication.image" />
            </div>
            <div>
                {{formatDate(publication.createdAt)}}
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
import { Publications } from '@/models/Publications';
import { defineComponent, PropType } from 'vue';
import moment from 'moment'
export default defineComponent({
    props: {
        publication: {
            type: Object as PropType<Publications>,
            required: true,
        },
    },

   methods: {
        formatDate: function(dt:any){

            return moment(dt, "YYYYMMDD").fromNow();
        }
    },

    

    
})
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
width: 100%;
height:80%;
border-radius: 50%;
}
.post-user-info {
display: flex;
margin: 1rem 1px;
}
@font-face {
    font-family: "FuenteTitulo";
    src: url(../assets/FuenteTitulo.ttf);
}
@font-face {
    font-family: "FuenteRegular";
    src: url(../assets/FuenteRegular.ttf);
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
color:rgb(31, 197, 243);
}
.post-image{
width: 100%;
}
.post-image img{
width:40%;
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


</style>