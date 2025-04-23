<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { FgLoader, FgCode } from '../components';
import { LOADER_TYPES, LOADER_SIZES } from '../types';
defineOptions({ inheritAttrs: false });
const sizes = ref<string>([
    'default',
    'xxs',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
]);
</script>

<template>
    <div id="loaders" v-bind="$attrs">
        <h3>FgLoader</h3>
        <h4 class="mt-4">Installation</h4>
        <fg-code language="javascript" languageLabel="ts">{{ `import { FgLoader } from 'fadgram-vue';` }}</fg-code>
        <h4 class="mt-4">props:</h4>
        <ul>
            <li>type: LoaderType (default | dotsBounce | dotsFade | dotsMove | dotsRotate | dotsScale) default (default)
            </li>
            <li>size: default | 'xxs' | 'xs' |'sm' | 'md' | 'lg' | 'xl'</li>
        </ul>
        <h4 class="mt-4">Basic usage:</h4>
        <fg-code language="vue" languageLabel="vue">{{ `<fg-loader />` }}</fg-code>

        <h4 class="mt-4">Type:</h4>
        <h5>Usage:</h5>
        <fg-code>{{ `<fg-loader type="dotsBounce" />` }}</fg-code>
        <fg-code>{{ `<fg-loader type="dots-bounce" />` }}</fg-code>
        <fg-code>{{ `<fg-loader dots-bounce />` }}</fg-code>
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-3 mb-4">
            <div v-for="type in LOADER_TYPES" class="col" :key="type">
                <div
                    class="flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg hover:text-primary cursor-pointer">
                    <fg-loader class="w-10 h-10 mt-6" :type="type" />
                    <div class="my-3 text-center text-xs">{{ type }}</div>
                </div>
            </div>
        </div>
        <h4 class="mt-4">Size:</h4>
        <h5 class="mt-4">Usage:</h5>
        <fg-code>{{ `<fg-loader size="md" />` }}</fg-code>
        <fg-code>{{ `<fg-loader md />` }}</fg-code>
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-3 mb-4">
            <div v-for="size in sizes" class="col" :key="size">
                <div
                    class="flex flex-col items-center bg-white dark:bg-gray-700 rounded-lg hover:text-primary cursor-pointer">
                    <fg-loader class="mt-6" :size="size" />
                    <div class="my-3 text-center text-xs">{{ size }}</div>
                </div>
            </div>
        </div>
    </div>
</template>