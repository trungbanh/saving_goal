<template>
    <div class="hover:bg-blue-gray-50 flex content-center cursor-pointer">
        <img class="my-auto mx-3" src="@/assets/chevron-left.svg" alt="left-icon" v-on:click="onClickLeftBtn">
    </div>
    <div ref="reachDateInput" tabindex="0" class="text-center relative focus:outline-none focus:ring flex-1 ring-inset"
        @keydown="handleKeyPressed">
        <strong class=" text-bold brand-paragraph text-blue-gray-900">{{ state.month }}</strong>
        <p class="brand-paragraph text-blue-gray-400">{{ state.year }}</p>
        <input class="absolute input-hidden" type="number" style="" min="0" :value="modelValue" />
    </div>
    <div class="hover:bg-blue-gray-50 flex content-center cursor-pointer">
        <img class="my-auto mx-3" src="@/assets/chevron-right.svg" alt="right-icon" v-on:click="onClickRightBtn">
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue';
import { getDateMonthYear } from '@/helpers/DateProcess';

const props = defineProps({
    modelValue: {
        type: Number,
        required: true
    }
})
const emit = defineEmits(['update:modelValue'])

const state = reactive({
    month: '',
    year: '',
})

onMounted(() => {
    updateMonthYear(0)
})

const reachDateInput = ref(null)

const incrementDate = () => {
    valueCompute.value = valueCompute.value + 1
}

const decrementDate = () => {
    if (props.modelValue > 0) {
        valueCompute.value = valueCompute.value - 1
    }
}

const onClickLeftBtn = () => {
    decrementDate()
}

const onClickRightBtn = () => {
    incrementDate()
}

const updateMonthYear = (value: number) => {
    const [_, month, year] = getDateMonthYear(value)
    state.month = month
    state.year = year
}

const valueCompute = computed({
    get() {
        return props.modelValue
    },
    set(value: number) {
        updateMonthYear(value)
        emit('update:modelValue', value)
    }
})

const handleKeyPressed = (event: any) => {
    switch (event.code) {
        case 'ArrowRight':
            incrementDate()
            break;
        case 'ArrowLeft':
            decrementDate()
            break;
        default:
            break;
    }
}


</script>

<style scoped>
.input-hidden {
    visibility: hidden;
    width: 1px;
}
</style>