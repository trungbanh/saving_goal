<template>
    <div class="bg-card-home card-home rounded-md shadow-lg">
        <div class="relative w-100">
            <span class="absolute text-top-card brand-subtitle text-center text-font-work_sans text-primary">
                Let's plan your
                <span class=" brand-subtitle text-font-work_sans font-bold text-primary">saving goal</span>.
            </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mx-6 md:mx-10 my-6 md:my-8">
            <div class="col-span-3 flex">
                <img class="me-4" src="@/assets/buyHouse.svg">
                <div class="padding-title-sub">
                    <p class="brand-heading-small text-blue-gray-900">Buy a house</p>
                    <p class="brand-paragraph text-blue-gray-400">Saving goal</p>
                </div>
            </div>
            <div class="col-span-3 md:col-span-2">
                <div>
                    <lable for="amount" class="brand-description text-blue-gray-900">Total amount</lable>
                    <div class="relative w-full rounded h-14 border-solid border-2 border-blue-gray-50">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span class="text-gray-500 sm:text-sm my-1"><img src="@/assets/dollar-sign.svg" /></span>
                        </div>
                        <input type="text" name="amount" id="amount"
                            class="block w-full my-3.5 pl-10 text-input-value text-blue-gray-400 placeholder:text-blue-gray[600]"
                            placeholder="0.00">
                    </div>
                </div>
            </div>
            <div class="col-span-3 md:col-span-1">
                <div>
                    <label for="" class="brand-description text-blue-gray-900">Reach goal by</label>
                    <div class="rounded border-solid border-2 border-blue-gray-50 flex justify-between h-14">
                        <img class="my-auto mx-3" src="@/assets/chevron-left.svg" alt="left-icon">
                        <div class="text-center">
                            <strong class=" text-bold brand-paragraph text-blue-gray-900">October</strong>
                            <p class="brand-paragraph text-blue-gray-400">2021</p>
                        </div>
                        <img class="my-auto mx-3" src="@/assets/chevron-right.svg" alt="right-icon">
                    </div>

                </div>
            </div>
            <div class="col-span-3 rounded border-solid border-2 border-blue-gray-50 p-0">
                <div class="">
                    <div class="flex my-6 mx-6 md:my-6 md:mx-8 justify-between">
                        <p class="brand-subtitle text-blue-gray-900">Monthly amount</p>

                        <p class="brand-heading_medium text-secondary text-bold">$520.53</p>
                    </div>
                    <div class="bg-blue-gray-50 py-6 px-6 md:py-6 md:px-8">
                        <p class="brand-caption">
                            You’re planning <strong>48 monthly deposits</strong> to reach your <strong>$25,000</strong> goal
                            by <strong>October 2020</strong>.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-span-3 flex justify-center">
                <button class="bg-primary h-14 w-80 max-w-full rounded-full">
                    <p class="text-button text-neutral-white ">Confirm</p>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.text-top-card {
    top: -50px;
    left: 0px;
    width: 100%;
}

.padding-title-sub {
    padding-top: 3px;
    padding-bottom: 3px;
}

.text-input-value {
    font-family: rubik;
    font-size: 24px;
    font-weight: 500;
    line-height: 28.8px;
}

input:focus {
    outline: none;
}

.text-button {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    font-family: work_sans;
}
</style>