<template>
    <div class="flex flex-col justify-center h-full">
        <input ref="inputRef" type="text"
            class="block w-full pl-10 text-blue-gray-600 placeholder:text-blue-gray-400 h-100 brand-heading-small focus:ring-0"
            placeholder="0.00" />
    </div>
</template>
  
<script setup lang="ts">
import { useCurrencyInput } from "vue-currency-input";

const props = defineProps(['modelValue', 'options'])

const { inputRef } = useCurrencyInput(props.options);

</script>

<style scoped>
input:focus {
    outline: none;
}
</style>