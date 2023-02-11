<template>
    <div class="post container">
        <div class="row">
            <div class="user-avatar col-6 " style="background-color: green; ">
                <img src="../assets/mujer.jpg" />
            </div>
            <div class="post-content col-6">
                <div class="post-user-info" style="background-color: blue;">
                    <h4>{{ publication.author }}</h4>
                    <i class="fas fa-check-circle"></i>
                    <!-- <p class="publication-date"> {{ publication.publicationDate }}</p> -->
                </div>
            </div>
            <p class="post-text row col-12" style="background-color: yellow;"> {{ publication.text }}</p>
            <div class="post-image">
                <!-- <img :src="publication.image"/> -->
                <img class="img-fluid" :src="publication.image" style="width: 40%;" />
            </div>
            <div class="post-icons col-12 " style="background-color: violet;">
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
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        publication: {
            type: Object as PropType<Publications>,
            required: true,
        },
    },
})
</script>

<style scoped>
* {
max-width: 100%;
}

.user-avatar img {
max-width: 40% ;
object-fit: cover;
border-radius: 50%;
}
</style>