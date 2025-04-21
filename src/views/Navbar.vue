<script setup lang="ts">
import { ref, onMounted } from 'vue';
import packageJson from '../../package.json';

const version = ref('');

onMounted(() => {
    version.value = packageJson.version;
});
</script>
<template>
    <div class="navbar sticky top-0 z-10 h-14 w-full max-w-full header">

        <a title="Fadgram Vue" href="/" class="navbar-brand">
            <img src="/src/assets/logo.png" style="height: 40px;">
        </a>
        <div class="nav navbar-nav justify-center">
            <div class="form-control-container w-[150px] hidden md:flex">
                <span class="absolute start-0 top-0 bottom-0 flex items-center px-2">
                    <i class="icon bi-search text-sm"></i>
                </span>
                <input type="search" class="form-control sm pill" style="padding-inline:30px !important;">
                <span class="absolute end-0 top-0 bottom-0 flex items-center px-2">
                    ⌘K
                </span>
            </div>
        </div>
        <div class="nav">
            <div class="dropdown">
                <button type="button" class="nav-link dropdown-toggle border rounded-lg py-1 px-2 text-xs">
                    <span>v{{ version }}</span>
                    <i class="icon bi-chevron-down w-3 h-3"></i>
                </button>
                <div class="dropdown-menu dropdown-end w-40">
                    <a href="#!" class="dropdown-link">
                        <span></span>
                    </a>
                    <a href="#!" class="dropdown-link">
                        <span></span>
                    </a>
                </div>
            </div>
            <a href="https://github.com/talalalmrka/fadgram-vue" target="_blank"
                class="nav-link dropdown-toggle border rounded-lg py-1 px-2">
                <i class="icon bi-github w-3 h-3"></i>
            </a>
            <button type="button" class="nav-link dark-mode-toggle">

            </button>
        </div>
    </div>
</template>
