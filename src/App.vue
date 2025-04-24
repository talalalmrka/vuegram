<script setup lang="ts">
import { ref } from 'vue'
import {
  FgInput,
  FgSelect,
  FgCheckbox,
  FgSwitch,
  FgTextarea,
  FgRadio,
  FgRichSelect,
  FgAlert,
  FgIconPicker,
  FgCode,
  FgAccordion,
  FgAccordionItem,
  FgAccordionHead,
  FgAccordionBody,
} from './';
import Navbar from './views/Navbar.vue';
import Loaders from './views/Loaders.vue';
const basicValue = ref('')
const startIconValue = ref('')
const endIconValue = ref('')
const bothIconValue = ref('')
const passswordValue = ref('')
const iconValue = ref('bi-house-fill')
const bio = ref('this is bio content')
const sizes = ref(['xs', 'sm', 'default', 'lg', 'xl', 'xxl'])
const state = ref('sanaa')
const remember = ref(false)
const agree = ref('agree')
const isAccepted = ref(false)
const alertTypes = ['success', 'info', 'warning', 'error'] as const;
const checkboxOptions = ref([
  {
    label: 'Banana',
    value: 'banana',
  },
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Orange',
    value: 'orange',
  },
]);
const checkboxValues = ref<string[]>([]);

const pageOptions = ref([
  {
    label: 'Home',
    value: 1,
  },
  {
    label: 'About us',
    value: 2,
  },
  {
    label: 'Contact',
    value: 3,
  },
]);
const pageValues = ref<string[]>([]);
</script>

<template>
  <Navbar />
  <div class="container py-8">
    <h3>Quick start</h3>
    <p>
      Fadgram Vue is a comprehensive Vue 3 components package designed to streamline your development process.
      It offers a wide range of customizable and accessible UI components, including inputs, selects, checkboxes,
      switches, textareas, alerts, and more. With built-in support for icons, sizes, and various styles,
      Fadgram Vue empowers developers to create modern and responsive user interfaces effortlessly.
    </p>

    <h3 class="mt-5">Requirements</h3>
    <ul>
      <li>Vue 3.x</li>
      <li>Node.js (LTS version recommended)</li>
      <li>npm or yarn (for package management)</li>
      <li>Basic knowledge of Vue.js and TypeScript</li>
    </ul>
    <h3 class="mt-5">Installation</h3>
    <fg-code language="bash">npm i fadgram-vue</fg-code>

    <h3 class="mt-5">Components</h3>

    <h2>Input</h2>

    <h4>Basic usage</h4>
    <fg-input v-model="basicValue" name="basic" label="Basic input" icon="bi-star" placeholder="Basic input"
      :info="basicValue" />
    <fg-code language="vue">&lt;fg-input v-model=&quot;basicValue&quot; name=&quot;basic&quot; label=&quot;Basic
      input&quot;
      icon=&quot;bi-star&quot; placeholder=&quot;Basic input&quot; :info=&quot;basicValue&quot; /&gt;</fg-code>
    <h4 class="mt-6">Icons</h4>

    <h6 class="mt-6">Start icon</h6>
    <fg-input v-model="startIconValue" name="startIcon" label="Start icon input" placeholder="Start icon input"
      :info="startIconValue" startIcon="bi-person-fill" />
    <fg-code language="vue">&lt;fg-input v-model=&quot;startIconValue&quot; name=&quot;startIcon&quot;
      label=&quot;Start
      icon input&quot; placeholder=&quot;Start icon input&quot; :info=&quot;startIconValue&quot;
      startIcon=&quot;bi-person-fill&quot; /&gt;</fg-code>

    <h6 class="mt-6">End icon</h6>
    <fg-input v-model="endIconValue" name="endIcon" label="End icon input" placeholder="End icon input"
      :info="endIconValue" endIcon="bi-clipboard" />
    <fg-code language="vue">&lt;fg-input v-model=&quot;endIconValue&quot; name=&quot;endIcon&quot; label=&quot;End
      icon input&quot; placeholder=&quot;End icon input&quot; :info=&quot;endIconValue&quot;
      endIcon=&quot;bi-clipboard&quot; /&gt;</fg-code>

    <h6 class="mt-6">Start and end icon</h6>
    <fg-input v-model="bothIconValue" name="bothIcon" label="Start and end icon" placeholder="Start and end icon"
      :info="bothIconValue" startIcon="bi-globe" endIcon="bi-clipboard" />
    <fg-code language="vue">&lt;fg-input v-model=&quot;bothIconValue&quot; name=&quot;bothIcon&quot;
      label=&quot;Start and end icon&quot; placeholder=&quot;Start and end icon&quot; :info=&quot;bothIconValue&quot;
      startIcon=&quot;bi-globe&quot; endIcon=&quot;bi-clipboard&quot; /&gt;</fg-code>

    <h6 class="mt-6">Password toggle</h6>
    <fg-input type="password" v-model="passswordValue" name="password" label="Password" placeholder="Insert password"
      :info="passswordValue" startIcon="bi-key-fill" />
    <fg-code language="vue">&lt;fg-input type=&quot;password&quot; v-model=&quot;passswordValue&quot;
      name=&quot;password&quot; label=&quot;Password&quot; placeholder=&quot;Insert password&quot;
      :info=&quot;passswordValue&quot; startIcon=&quot;bi-key-fill&quot; /&gt;</fg-code>

    <h4 class="mt-6">Sizes</h4>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div v-for="size in sizes" class="col">
        <fg-input :class="size" :label="size" />
      </div>
    </div>
    <fg-code language="vue">&lt;fg-input :class=&quot;size&quot; :label=&quot;size&quot; /&gt;</fg-code>

    <h4 class="mt-6">Select</h4>
    <fg-select name="jop" label="Jop" icon="bi-star" placeholder="Select jop" info="this is select" :options="[
      {
        label: 'Web developer',
        value: 'web_developer',
      },
      {
        label: 'Seo manager',
        value: 'seo_manager',
      }
    ]" />
    <fg-code language="vue">&lt;fg-select name=&quot;jop&quot; label=&quot;Jop&quot; icon=&quot;bi-star&quot;
      placeholder=&quot;Select jop&quot; info=&quot;this is select&quot; :options=&quot;[
      {
      label: &#39;Web developer&#39;,
      value: &#39;web_developer&#39;,
      },
      {
      label: &#39;Seo manager&#39;,
      value: &#39;seo_manager&#39;,
      }
      ]&quot; /&gt;</fg-code>

    <h4 class="mt-6">RichSelect</h4>
    <fg-rich-select v-model="state" name="state" label="State" icon="bi-list" searchable info="this is state" :options="[
      {
        label: 'Sanaa',
        value: 'sanaa',
      },
      {
        label: 'Aden',
        value: 'aden',
      },
      {
        label: 'Mareb',
        value: 'mareb',
      },
      {
        label: 'Alhodaidah',
        value: 'alhodaidah',
      }
    ]" />
    <fg-code language="vue">&lt;fg-rich-select v-model=&quot;state&quot; name=&quot;state&quot;
      label=&quot;State&quot; icon=&quot;bi-list&quot; searchable info=&quot;this is state&quot; :options=&quot;[
      {
      label: &#39;Sanaa&#39;,
      value: &#39;sanaa&#39;,
      },
      {
      label: &#39;Aden&#39;,
      value: &#39;aden&#39;,
      },
      {
      label: &#39;Mareb&#39;,
      value: &#39;mareb&#39;,
      },
      {
      label: &#39;Alhodaidah&#39;,
      value: &#39;alhodaidah&#39;,
      }
      ]&quot; /&gt;</fg-code>

    <h4 class="mt-6">Checkbox</h4>
    <h6 class="mt-4">Basic usage</h6>
    <fg-code language="vue">&lt;fg-checkbox name=&quot;agree&quot; label=&quot;Agree policy&quot; /&gt;</fg-code>
    <h6 class="mt-4">String value</h6>
    <fg-checkbox name="agree" value="agree" v-model="agree" label="Agree policy" />
    <span>agree: {{ agree }}</span>

    <h6 class="mt-4">Boolean value</h6>
    <fg-checkbox name="accepted" v-model="isAccepted" label="Accept terms" />
    <span>isAccepted: {{ isAccepted }}</span>

    <h6 class="mt-4">Checkbox group</h6>
    <fg-checkbox v-for="option in checkboxOptions" :key="option.value" v-model="checkboxValues" :label="option.label"
      name="checkboxValues[]" :value="option.value" />
    <span>checkboxValues:</span>
    <pre class="text-xs"><code>{{ checkboxValues }}</code></pre>

    <h6 class="mt-4">Checkbox group (numbers)</h6>
    <fg-checkbox v-for="option in pageOptions" :key="option.value" v-model="pageValues" :label="option.label"
      name="pageValues[]" :value="option.value" />
    <span>pageValues:</span>
    <pre class="text-xs"><code>{{ pageValues }}</code></pre>

    <h4 class="mt-4">Switch</h4>
    <FgSwitch v-model="remember" name="remember" label="Remember me" :info="remember ? 'true' : 'false'" />
    <fg-code language="vue">&lt;fg-switch v-model=&quot;remember&quot; label=&quot;Remember Me&quot; /&gt;</fg-code>

    <h4 class="mt-4">Radio</h4>
    <fg-radio name="country" label="Country" icon="bi-flag" info="this is country" :options="[
      {
        label: 'United states',
        value: 'us',
      },
      {
        label: 'United kingdom',
        value: 'uk',
      },
      {
        label: 'Germany',
        value: 'germany',
      }
    ]" />
    <fg-code language="vue">&lt;fg-radio name=&quot;country&quot; label=&quot;Country&quot; icon=&quot;bi-flag&quot;
      info=&quot;this is country&quot; :options=&quot;[
      {
      label: &#39;United states&#39;,
      value: &#39;us&#39;,
      },
      {
      label: &#39;United kingdom&#39;,
      value: &#39;uk&#39;,
      },
      {
      label: &#39;Germany&#39;,
      value: &#39;germany&#39;,
      }
      ]&quot; /&gt;</fg-code>

    <h4 class="mt-6">Textarea</h4>
    <fg-textarea name="bio" label="Bio" icon="bi-info-circle" placeholder="this is bio" info="this is bio"
      v-model="bio" />
    <fg-code language="vue">&lt;fg-textarea name=&quot;bio&quot; label=&quot;Bio&quot;
      icon=&quot;bi-info-circle&quot; placeholder=&quot;this is bio&quot; info=&quot;this is bio&quot;
      v-model=&quot;bio&quot; /&gt;</fg-code>

    <h4 class="mt-6">Icon Picker</h4>
    <fg-icon-picker v-model="iconValue" :error="'an error'" />
    <fg-code language="vue">&lt;fg-icon-picker v-model=&quot;iconValue&quot; /&gt;</fg-code>


    <h4 class="mt-6">Alert</h4>
    <h6 class="mt-6">Basic usage</h6>
    <fg-alert success soft class="mt-2" :content="'This is alert sucess'" />
    <fg-code language="vue">&lt;fg-alert success soft class=&quot;mt-2&quot; :content=&quot;&#39;This is alert
      sucess&#39;&quot; /&gt;</fg-code>

    <h6 class="mt-6">Sizes</h6>
    <fg-alert v-for="size in sizes" :key="size" :size="size" soft class="mt-2">This is alert {{ size }}</fg-alert>
    <fg-code language="vue">&lt;fg-alert :size=&quot;size&quot; soft class=&quot;mt-2&quot;&gt;This is alert { size
      }&lt;/fg-alert&gt;
    </fg-code>

    <h6 class="mt-6">Types and variants</h6>
    <section v-for="type in alertTypes" :key="type">
      <h3 class="text-xl font-semibold capitalize mb-2">{{ type }} Alerts</h3>
      <div class="flex flex-wrap items-start gap-4">
        <!-- Default -->
        <div class="flex flex-col gap-2">
          <span class="font-medium">Default</span>
          <FgAlert :type="type">{{ type }} alert</FgAlert>
        </div>

        <!-- Soft -->
        <div class="flex flex-col gap-2">
          <span class="font-medium">Soft</span>
          <FgAlert :type="type" soft>{{ type }} soft alert</FgAlert>
        </div>

        <!-- Outline -->
        <div class="flex flex-col gap-2">
          <span class="font-medium">Outline</span>
          <FgAlert :type="type" outline>{{ type }} outline alert</FgAlert>
        </div>
      </div>
    </section>

    <h3 class="mt-5">Accordion</h3>

    <h6 class="mt-5">Default (single)</h6>
    <fg-accordion storageKey="faq-single" persist>
      <fg-accordion-item>
        <fg-accordion-head>What is Vue?</fg-accordion-head>
        <fg-accordion-body>Vue is a progressive JavaScript framework...</fg-accordion-body>
      </fg-accordion-item>
      <fg-accordion-item>
        <fg-accordion-head>Why use TypeScript?</fg-accordion-head>
        <fg-accordion-body>TypeScript adds type safety...</fg-accordion-body>
      </fg-accordion-item>
    </fg-accordion>

    <fg-code language="vue">
      {{ `<fg-accordion storageKey="faq-single" persist>
        <fg-accordion-item>
          <fg-accordion-head>What is Vue?</fg-accordion-head>
          <fg-accordion-body>Vue is a progressive JavaScript framework...</fg-accordion-body>
        </fg-accordion-item>
        <fg-accordion-item>
          <fg-accordion-head>Why use TypeScript?</fg-accordion-head>
          <fg-accordion-body>TypeScript adds type safety...</fg-accordion-body>
        </fg-accordion-item>
      </fg-accordion>`}}
    </fg-code>

    <h6 class="mt-5">Multiple</h6>
    <fg-accordion multiple storageKey="faq-multiple" persist>
      <fg-accordion-item>
        <fg-accordion-head>What is Vue?</fg-accordion-head>
        <fg-accordion-body>Vue is a progressive JavaScript framework...</fg-accordion-body>
      </fg-accordion-item>
      <fg-accordion-item>
        <fg-accordion-head>Why use TypeScript?</fg-accordion-head>
        <fg-accordion-body>TypeScript adds type safety...</fg-accordion-body>
      </fg-accordion-item>
    </fg-accordion>
    <fg-code language="vue">
      {{ `<fg-accordion multiple storageKey="faq-multiple" persist>
        <fg-accordion-item>
          <fg-accordion-head>What is Vue?</fg-accordion-head>
          <fg-accordion-body>Vue is a progressive JavaScript framework...</fg-accordion-body>
        </fg-accordion-item>
        <fg-accordion-item>
          <fg-accordion-head>Why use TypeScript?</fg-accordion-head>
          <fg-accordion-body>TypeScript adds type safety...</fg-accordion-body>
        </fg-accordion-item>
      </fg-accordion>` }}
    </fg-code>


    <h6 class="mt-5">Item with title emit</h6>
    <fg-accordion storage-key="accordion-emit-title">
      <fg-accordion-item icon="bi-broadcast" title="Broadcast">
        <fg-accordion-body>
          <p>Broadcasting allows you to share live updates with your audience in real-time.</p>
          <p>Engage with your viewers through interactive and dynamic content delivery.</p>
        </fg-accordion-body>
      </fg-accordion-item>
      <fg-accordion-item icon="bi-code" title="Coding">
        <fg-accordion-body>
          <p>Coding is the process of creating instructions for computers using programming languages. It enables the
            development of software, websites, and applications that power modern technology.</p>
          <p>Explore the world of coding to unlock endless possibilities and bring your ideas to life.</p>
        </fg-accordion-body>
      </fg-accordion-item>
      <fg-accordion-item icon="bi-camera-video-fill" title="Livestream">
        <fg-accordion-body>
          <p>Livestreaming is a powerful way to connect with your audience in real-time, enabling interactive and
            engaging experiences.</p>
          <p>Share your moments, events, or tutorials live and build a stronger connection with your viewers.</p>
        </fg-accordion-body>
      </fg-accordion-item>
    </fg-accordion>
    <fg-code language="vue">
      {{ `<fg-accordion storage-key="accordion-emit-title">
        <fg-accordion-item icon="bi-broadcast" title="Broadcast">
          <fg-accordion-body>
            <p>Broadcasting allows you to share live updates with your audience in real-time.</p>
            <p>Engage with your viewers through interactive and dynamic content delivery.</p>
          </fg-accordion-body>
        </fg-accordion-item>
        <fg-accordion-item icon="bi-code" title="Coding">
          <fg-accordion-body>
            <p>Coding is the process of creating instructions for computers using programming languages. It enables the
              development of software, websites, and applications that power modern technology.</p>
            <p>Explore the world of coding to unlock endless possibilities and bring your ideas to life.</p>
          </fg-accordion-body>
        </fg-accordion-item>
        <fg-accordion-item icon="bi-camera-video-fill" title="Livestream">
          <fg-accordion-body>
            <p>Livestreaming is a powerful way to connect with your audience in real-time, enabling interactive and
              engaging experiences.</p>
            <p>Share your moments, events, or tutorials live and build a stronger connection with your viewers.</p>
          </fg-accordion-body>
        </fg-accordion-item>
      </fg-accordion>` }}
    </fg-code>
    <Loaders class="mt-10" />
  </div>

</template>