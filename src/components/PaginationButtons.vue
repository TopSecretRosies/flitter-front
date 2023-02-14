<template>
    <nav>
      <ul class="pagination pagination-lg">
        <li class="page-item">
          <a @click.prevent="goToPrevious()" class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;Anterior</span>
          </a>
        </li>
        <li class="page-item">
          <a @click.prevent="goToNext()" class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">Siguiente&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    props: {
      page: {type: Number, required: true}
    },
    setup(props, context) {
      const goToNext = () => {
        context.emit('next')
      }
      const goToPrevious = () => {
        if (props.page > 1) {
          context.emit('prev')
        }
      }
   
      return {
        goToNext,
        goToPrevious
      }
    },
  })
  </script>
  
  
  <style scoped>
  .pagination {
    justify-content: center;
    margin: 50px 0 50px 0;
  }
  .page-link {
    color: #35495e;
    background-color: #bed8cd;
  }
  .page-link:hover, .page-link:focus {
    color: #35495e;
    background-color: #8ed4b5
  }
  </style>