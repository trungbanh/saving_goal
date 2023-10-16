<template>
    <div class="card-home rounded-md shadow-lg" style="min-height: 511px;">
        <div class="relative w-100">
            <span class="absolute text-top-card text-center text-font-work_sans text-xl text-brand-color">
                Let's plan your
                <span class="text-font-work_sans font-bold text-xl text-brand-color">saving goal</span>.
            </span>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div class="...">01</div>
            <div class="...">02</div>
            <div class="...">03</div>
            <div class="col-span-2 ...">04</div>
            <div class="...">05</div>
            <div class="...">06</div>
            <div class="col-span-2 ...">07</div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.card-home {
    background-color: #ffffff;
    width: 560px;
    height: 511px;
}

.text-top-card {
    top: -50px;
    left: 0px;
    width: 100%;
}
</style>