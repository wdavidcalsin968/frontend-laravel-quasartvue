<template>
  <div class="q-pa-md">
    <q-btn color="transparent" flat dense round>
      <q-avatar size="52px">
        <img src="https://cdn.quasar.dev/img/avatar4.jpg">
      </q-avatar>
      <q-menu v-model="showing">
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Settings</div>
            <!-- <q-toggle v-model="mobileData" label="Use Mobile Data" />
            <q-toggle v-model="bluetooth" label="Bluetooth" /> -->

            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Account</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Reset password</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Recent tabs</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>History</q-item-section>
              </q-item>
            </q-list>
          </div>
          <q-separator vertical inset class="q-mx-lg" />
          <div class="column items-center">
            <q-avatar size="72px">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>
            <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>
            <q-btn color="primary" label="Logout" push size="sm" v-close-popup />
          </div>
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "MenuProfile",
  setup() {
    return {
      mobileData: ref(true),
      bluetooth: ref(false),
      showing: ref(false)
    }
  }
});
</script>
