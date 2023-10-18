<template>
    <div class="hover:bg-blue-gray-50 flex content-center cursor-pointer">
        <img class="my-auto mx-2" src="@/assets/chevron-left.svg" alt="left-icon" v-on:click="onClickLeftBtn">
    </div>
    <div ref="reachDateInput" tabindex="0" class="text-center relative focus:outline-none focus:ring"
        @keydown="handleKeyPressed">
        <strong class=" text-bold brand-paragraph text-blue-gray-900">{{ state.month }}</strong>
        <p class="brand-paragraph text-blue-gray-400">{{ state.year }}</p>
        <input class="absolute input-hidden" type="number" style="" min="0" :value="modelValue" />
    </div>
    <div class="hover:bg-blue-gray-50 flex content-center cursor-pointer">
        <img class="my-auto mx-2" src="@/assets/chevron-right.svg" alt="right-icon" v-on:click="onClickRightBtn">
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue';

const props = defineProps(['modelValue'])
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
    value.value = value.value + 1
}

const decrementDate = () => {
    if (props.modelValue > 0) {
        value.value = value.value - 1
    }
}

const onClickLeftBtn = () => {
    decrementDate()
}

const onClickRightBtn = () => {
    incrementDate()
}

const updateMonthYear = (value: number) => {
    let today = new Date()
    let newDate = new Date(today.setMonth(today.getMonth() + value));
    const [date, time] = newDate.toLocaleString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).split(', ')
    const [day, month, year] = date.split(' ')
    state.month = month
    state.year = year
}

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
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