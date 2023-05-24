<template>
    <q-drawer v-model="drawer" :width="200" :breakpoint="500" overlay bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
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
</template>

<script>
import { defineComponent, ref } from "vue";
import { QIcon } from 'quasar'
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
  name: "Sidebar",

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