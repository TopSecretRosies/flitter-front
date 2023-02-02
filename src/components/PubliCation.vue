<template>
        <div class="item-image"> 
            <img :src="publication.image">
        </div>
        <div class="item-info"> 
            <div class="publication-author">{{ publication.author }} dijo: </div>
            <div class="publication-text"> {{ publication.text }}</div>
            <div class="publication-kudos"> {{ publication.kudos }} kudos</div>
            <div class="publication-date"> {{ publication.publicationDate }}</div>
        </div>
</template>

<script lang="ts">
import { Publications } from '@/models/Publications';
import { defineComponent,PropType } from 'vue'

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

</style>