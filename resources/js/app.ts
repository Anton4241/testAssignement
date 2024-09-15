import { createApp, h } from 'vue';
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import './bootstrap';
import PrimeVue from 'primevue/config';
import FloatingVue from 'floating-vue'
import ContextMenu from 'primevue/contextmenu'
import userTable from './components/userTable.vue'
import addShipForm from './components/addShipForm.vue'
import addDepForm from './components/addDepForm.vue'
import addBranchForm from './components/addBranchForm.vue'
import structureList from './components/structureList.vue'
import changeShipForm from './components/changeShipForm.vue'
import changeDepForm from './components/changeDepForm.vue'
import changeCompanyForm from './components/changeCompanyForm.vue'
import changeBranchForm from './components/changeBranchForm.vue'
import addUserForm from './components/addUserForm.vue'
import changeUserForm from './components/changeUserForm.vue'

import tagList from './components/tagList.vue'
import addTagForm from './components/addTagForm.vue'
import addDocForm from './components/addDocForm.vue'
import changeTagForm from './components/changeTagForm.vue'
import changeDocForm from './components/changeDocForm.vue'
import docList from './components/docList.vue'
import 'floating-vue/dist/style.css'
import MultiSelect from 'primevue/multiselect';

createInertiaApp({
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
        .use(plugin)
        .use(FloatingVue)
        .use(PrimeVue)
        .component('ContextMenu', ContextMenu)
        .component('MultiSelect', MultiSelect)
        .component('userTable', userTable)
        .component('addUserForm', addUserForm)
        .component('changeUserForm', changeUserForm)
        .component('addShipForm', addShipForm)
        .component('addDepForm', addDepForm)
        .component('structureList', structureList)
        .component('changeShipForm', changeShipForm)
        .component('changeDepForm', changeDepForm)
        .component('changeCompanyForm', changeCompanyForm)
        .component('addBranchForm', addBranchForm)
        .component('changeBranchForm', changeBranchForm)
        .component("tagList",tagList)
        .component('docList', docList)
        .component("addTagForm",addTagForm)
        .component("addDocForm",addDocForm)
        .component("changeTagForm",changeTagForm)
        .component("changeDocForm",changeDocForm)
        .component("Link",Link)
        .mount(el)
  },
});