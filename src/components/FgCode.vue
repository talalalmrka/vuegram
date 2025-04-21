<script setup lang="ts">
// types/prismjs.d.ts
declare module 'prismjs';
import { ref, onMounted, watch, nextTick } from 'vue'
import Prism from 'prismjs';

import { FgIcon } from '@/components';
import 'prismjs/themes/prism-okaidia.css'

interface Props {
    language?: string;
    languageLabel?: string;
}

withDefaults(defineProps<Props>(), {
    language: 'html'
})

const prismRef = ref<HTMLElement | null>(null)
const isCopied = ref(false)

const getRawCode = () => {
    return prismRef.value?.querySelector('code')?.textContent || ''
}

const copyCode = async () => {
    try {
        await navigator.clipboard.writeText(getRawCode())
        isCopied.value = true
        setTimeout(() => isCopied.value = false, 2000)
    } catch (err) {
        console.error('Failed to copy:', err)
    }
}

watch(() => getRawCode(), () => {
    nextTick(() => {
        Prism.highlightAll()
    })
})

onMounted(() => {
    Prism.highlightAll()
})
</script>

<template>
    <div class="code-container" style="direction: ltr;">
        <div class="code-toolbar">
            <span class="code-file-name">{{ languageLabel ?? language }}</span>
            <button @click="copyCode" class="hover:text-white">
                <fg-icon :icon="isCopied ? 'bi-clipboard-check-fill' : 'bi-clipboard'" />
            </button>
        </div>
        <pre ref="prismRef"><code :class="'language-' + language"><slot/></code></pre>
    </div>
</template>