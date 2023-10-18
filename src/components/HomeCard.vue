<template>
    <div class="bg-card-home card-home rounded-md shadow-lg">
        <div class="relative w-100">
            <span class="absolute text-top-card brand-subtitle text-center text-font-work_sans text-primary">
                Let's plan your
                <span class=" brand-subtitle text-font-work_sans font-bold text-primary">saving goal</span>.
            </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 mx-6 md:mx-10 my-6 md:my-8">
            <div class="col-span-5 flex">
                <img class="me-4" src="@/assets/buyHouse.svg">
                <div class="padding-title-sub flex flex-col justify-center">
                    <p class="brand-heading-small text-blue-gray-900">Buy a house</p>
                    <p class="brand-paragraph text-blue-gray-400">Saving goal</p>
                </div>
            </div>
            <div class="col-span-5 md:col-span-3">
                <div>
                    <p for="amount" class="brand-description text-blue-gray-900">Total amount</p>
                    <div class="relative w-full rounded h-14 border-solid border-2 border-blue-gray-50">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex flex-col justify-center pl-3">
                            <span class="text-gray-500 sm:text-sm my-1"><img src="@/assets/dollar-sign.svg" /></span>
                        </div>
                        <CurrencyInput type="text" name="amount" id="amount" v-model="state.amount"
                            :options="{ currency: 'EUR', currencyDisplay: 'hidden', precision: 2 }"></CurrencyInput>
                    </div>
                </div>
            </div>
            <div class="col-span-5 md:col-span-2">
                <div>
                    <p for="reachDate" class="brand-description text-blue-gray-900">Reach goal by</p>
                    <div class="rounded border-solid border-2 border-blue-gray-50 flex justify-between h-14">
                        <ReachGoal id="reachDate" v-model="state.reachDate"></ReachGoal>
                    </div>
                </div>
            </div>
            <div class="col-span-5 rounded border-solid border-2 border-blue-gray-50 p-0">
                <div class="">
                    <div class="flex my-6 mx-6 md:my-6 md:mx-8 justify-between">
                        <p class="brand-subtitle text-blue-gray-900 my-auto">Monthly amount</p>
                        <p v-if="state.isDisable" class="brand-heading_medium text-secondary text-bold text-right">$0</p>
                        <p v-else class="brand-heading_medium text-secondary text-bold text-right">
                            ${{ numberToCurrency(state.amount / state.reachDate) }}
                        </p>
                    </div>
                    <div class="bg-blue-gray-50 py-6 px-6 md:py-6 md:px-8 text-center md:text-left">
                        <p v-if="state.isDisable" class="brand-caption text-rose-500">
                            <strong>Please input total amount and date goal.</strong>
                        </p>
                        <p v-else class="brand-caption">
                            You’re planning <strong>{{ state.reachDate }} monthly deposits</strong> to reach your
                            <strong>${{ numberToCurrency(state.amount) }}</strong> goal
                            by <strong>{{ state.month }} {{ state.year }}</strong>.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-span-5 flex justify-center">
                <button
                    class="bg-primary h-14 w-full md:w-80 max-w-full rounded-full hover:bg-secondary active:bg-activate disabled:bg-blue-gray-600"
                    v-on:click="openModal" :disabled="state.isDisable">
                    <p class="text-button text-neutral-white ">Confirm</p>
                </button>
            </div>
        </div>
    </div>
    <SuccessModal v-model="state.open" :detail="state"></SuccessModal>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUpdated } from 'vue';
import CurrencyInput from "./CurrencyInput.vue";
import ReachGoal from "./ReachGoal.vue";
import SuccessModal from './SuccessModal.vue';
import { numberToCurrency } from '@/helpers/Format';
import { getDateMonthYear } from '@/helpers/DateProcess';
import type { SavingCardDto } from '@/models/SavingCardDto';


const state : SavingCardDto = reactive({
    amount: 0.0,
    reachDate: 0,
    year: '',
    month: '',
    open: false,
    isDisable: true,
})

onMounted(() => {
    updateMonthYear(0)
})

onUpdated(() => {
    updateMonthYear(state.reachDate)
    checkButtonDisable()
})

const updateMonthYear = (value: number) => {
    const [ _, month, year] = getDateMonthYear(value);
    state.month = month
    state.year = year
}

const openModal = () => {
    state.open = true
}

const checkButtonDisable = () => {
    state.isDisable = (state.amount == null || state.amount == 0 || state.reachDate == 0)
}

</script>

<style scoped>
.text-top-card {
    top: -48px;
    left: 0px;
    width: 100%;
}

.padding-title-sub {
    padding-top: 3px;
    padding-bottom: 3px;
}

.text-button {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    font-family: "Work Sans";
}
</style>