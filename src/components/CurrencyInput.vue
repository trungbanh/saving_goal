<template>
    <input ref="inputRef" type="text"
        class="block w-full my-3.5 pl-10 text-input-value text-blue-gray-400 placeholder:text-blue-gray[600]"
        placeholder="0.00" />
</template>
  
<script>
import { useCurrencyInput } from "vue-currency-input";

export default {
    name: "CurrencyInput",
    props: {
        modelValue: Number,
        options: Object,
    },
    setup(props) {
        const { inputRef } = useCurrencyInput(props.options);

        return { inputRef };
    },
};
</script>
  