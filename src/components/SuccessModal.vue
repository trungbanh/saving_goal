<template>
    <Teleport to="body">
        <div v-if="open" class="modal">
            <p>Hello from the modal!</p>
            <button @click="open = false">Close</button>
        </div>
    </Teleport>
</template>
<script setup lang="ts">

</script>
<style scoped></style>