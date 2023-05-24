import '@quasar/extras/material-icons/material-icons.css'
import "@quasar/extras/mdi-v6/mdi-v6.css";
import "quasar/dist/quasar.css";

import {createInertiaApp} from "@inertiajs/vue3";
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";
import {Quasar} from "quasar";
import quasarIconSet from "quasar/icon-set/svg-mdi-v6";
import {createApp, h} from "vue";
import { Notify } from 'quasar';

createInertiaApp({
  resolve : (name) => resolvePageComponent(
      `./pages/${name}.vue`, import.meta.glob("./pages/**/*.vue")),

  setup({el, App, props, plugin}) {
    createApp({render : () => h(App, props)})
        .use(plugin)
        .use(Quasar, {
          plugins : [Notify], // import Quasar plugins and add here
          iconSet : quasarIconSet,
          config : {
            brand : {
                primary: '#0176BC',
                principal: '#2F6DF5',
            },
          }
        })
        .mount(el);
  },
});
