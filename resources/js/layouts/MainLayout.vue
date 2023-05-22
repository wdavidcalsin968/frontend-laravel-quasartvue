<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff">
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
          <q-toolbar-title align="center">
            <q-btn flat round dense icon="dashboard" />
            <q-btn flat round dense icon="assignment_ind"/>
            <q-btn flat round dense icon="sim_card" class="q-mr-xs" />
            <q-btn flat round dense icon="gamepad" />
            DashBoard Vue + Quasar
          </q-toolbar-title>
          <!-- <q-btn flat to="/login" class="text-white" dense label="Login" /> -->
          <div>Version Actual {{ $q.version }}</div>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
        <q-toolbar inset>
          <q-breadcrumbs active-color="white" style="font-size: 16px">
            <q-breadcrumbs-el label="Home" icon="home" />
            <q-breadcrumbs-el label="Components" icon="widgets" />
            <q-breadcrumbs-el label="Index" />
          </q-breadcrumbs>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list>
            <q-item-label header> <strong class="text-grey-10 text-lg">SiderBar</strong> </q-item-label>

            <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
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
import { QIcon } from 'quasar'
import EssentialLink from "../components/EssentialLink.vue";
import MenuProfile from "../components/Menu.vue";

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
    to: "/about",
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
    icon: "drafts",
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
    QIcon,
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
</script>