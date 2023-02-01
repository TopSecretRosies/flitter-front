<template>
    <div class="publication">
      <slot name="image"></slot>
      <div class="card-body">
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PubliCation',
    setup() {
        
    },
})
</script>
