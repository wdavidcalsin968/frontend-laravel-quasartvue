<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff">
      <q-header elevated :class="$q.dark.isActive ? 'bg-principal' : 'bg-principal'">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <q-toolbar-title>DashBoard Vue + Quasar</q-toolbar-title>
          <MenuProfile/>
          <!-- <q-btn flat round dense icon="whatshot" /> -->
        </q-toolbar>
        <!-- <q-toolbar inset>
          <q-breadcrumbs active-color="white" style="font-size: 16px">
            <q-breadcrumbs-el label="Home" icon="home" />
            <q-breadcrumbs-el label="Components" icon="widgets" />
            <q-breadcrumbs-el label="Index" />
          </q-breadcrumbs>
        </q-toolbar> -->
      </q-header>

      <q-drawer v-model="drawer" show-if-above :mini="!drawer || miniState" @click.capture="drawerClick" :width="200"
        :breakpoint="500" bordered :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list>
            <q-item-label header> <strong class="text-grey-10 text-lg">SiderBar</strong> </q-item-label>

            <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
          </q-list>
        </q-scroll-area>
        <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
          <q-btn dense round unelevated color="primary" icon="chevron_left" @click="miniState = true" />
        </div>
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
    link: "/",
  },
  {
    title: "Clientes",
    // caption: "quasar.dev",
    icon: "school",
    link: "/about",
  },
  {
    title: "Formulario",
    // caption: "laravel.com/docs",
    icon: "format_size",
    link: "/formulario",
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
    MenuProfile,
  },

  setup() {
    const miniState = ref(false)
    const drawer = ref(true)
    return {
      drawer,
      miniState,
      essentialLinks: linksList,

      drawerClick(e) {
        if (miniState.value) {
          miniState.value = false
          e.stopPropagation()
        }
      }
    }
  }
})
</script>