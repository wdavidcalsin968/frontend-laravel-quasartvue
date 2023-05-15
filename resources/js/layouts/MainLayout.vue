<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated class="bg-grey-9 q-pa-sm">
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    icon="menu"
                    aria-label="Menu"
                    @click="toggleLeftDrawer"
                />

                <q-toolbar-title>DashBoard Vue + Quasar</q-toolbar-title>

                <div>Version Actual {{ $q.version }}</div>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-blue-grey-9">
            <q-list>
                <q-item-label header> <strong class="text-grey-2 text-lg">SiderBar</strong> </q-item-label>

                <EssentialLink
                    v-for="link in essentialLinks"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
        </q-drawer>

        <q-page-container>
            <slot />
        </q-page-container>
    </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "../components/EssentialLink.vue";

const linksList = [
    {
        title: "Inicio",
        // caption: "github.com/mohamad-supangat",
        icon: "home",
        link: "#",
    },
    {
        title: "Clientes",
        // caption: "quasar.dev",
        icon: "school",
        link: "#",
    },
    {
        title: "Articulos",
        // caption: "laravel.com/docs",
        icon: "format_size",
        link: "#",
    },
    {
        title: "Estimaciones",
        // caption: "laravel.com/docs",
        icon: "print",
        link: "#",
    },
    {
        title: "tablas",
        // caption: "laravel.com/docs",
        icon: "today",
        link: "#",
    },
    {
        title: "Informes",
        // caption: "laravel.com/docs",
        icon: "style",
        link: "#",
    },
];

export default defineComponent({
    name: "MainLayout",

    components: {
        EssentialLink,
    },

    setup() {
        const leftDrawerOpen = ref(false);

        return {
            essentialLinks: linksList,
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },
        };
    },
});
</script>
