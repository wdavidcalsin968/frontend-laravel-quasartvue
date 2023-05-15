<template>
    <div class="q-pa-md">
      <q-layout view="lHh Lpr lff">
        <q-header elevated class="bg-cyan-8">
          <q-toolbar>
            <q-toolbar-title>DashBoard Vue + Quasar</q-toolbar-title>
          <div>Version Actual {{ $q.version }}</div>
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          </q-toolbar>
        </q-header>
  
        <q-drawer
          v-model="drawer"
          show-if-above
          :width="200"
          :breakpoint="400"
        >
          <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
            <q-list>
                <q-item-label header> <strong class="text-grey-10 text-lg">SiderBar</strong> </q-item-label>

                <EssentialLink
                    v-for="link in essentialLinks"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
          </q-scroll-area>
  
          <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
            <div class="absolute-bottom bg-transparent">
              <q-avatar size="56px" class="q-mb-sm">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              <div class="text-weight-bold">Brad Tyler Sanchez Mamani</div>
              <div>@BsanchezM</div>
            </div>
          </q-img>
        </q-drawer>
  
        <q-page-container>
            <slot />
        </q-page-container>
      </q-layout>
    </div>
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
        const drawer = ref(false);

        return {
            essentialLinks: linksList,
            drawer,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },
        };
    },
});

//   import { ref } from 'vue'
  
//   export default {
//     setup () {
//       return {
//         drawer: ref(false)
//       }
//     }
//   }
</script>