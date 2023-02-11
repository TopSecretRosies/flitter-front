<template>
    <div class="post container">
        <div class="row">
            <div class="user-avatar col-5" style="background-color: green;">
                <img src="../assets/mujer.jpg" />
            </div>
            <div class="post-content col-1">
                <div class="post-user-info" style="background-color: blue;">
                    <h4>{{ publication.author }}</h4>
                    <i class="fas fa-check-circle"></i>
                    <!-- <p class="publication-date"> {{ publication.publicationDate }}</p> -->
                </div>
            </div>
            <p class="post-text  col-4" style="background-color: yellow"> {{ publication.text }}</p>
            <div class="post-image">
                <!-- <img :src="publication.image"/> -->
                <img class="img-fluid" :src="publication.image" style="width: 40%;" />
            </div>
        </div>
    </div>

    <div class="post-icons col-12 " style="background-color: violet;">
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <!-- <p>{{ publication.kudos }} kudos</p> -->
        <i class="fas fa-share-alt"></i>

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

.post-user-info h4 {
    font-size: 1.6rem;
    align-items: center;
    margin-right: 0.5rem;
}

.post-user-info i {
    font-size: 1.6rem;
    color: black;
    margin-right: 0.5rem;
}

.post-text {
    font-size: 1.6rem;
    margin-bottom: 1rem;
}

#post {
    display: flex;
    padding: 1.5rem;
    border-bottom: 0.1 rem solid #eee;
}

.post-img {
    width: 48rem;
    height: 30rem;
}



.post-icons {
    margin-top: 1rem;
}

.post-icons i {
    font-size: 1.8rem;
    color: #868383;
    margin-right: 6rem;
}

@media screen and (max-width:480px) {
    .post {
        display: flex;
        flex-direction: column;
        padding-left: 6rem;
        border-bottom: 0.1 rem solid #eee;
    }


}
</style>