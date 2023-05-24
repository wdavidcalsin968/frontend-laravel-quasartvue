<template>
    <div class="q-pa-md q-gutter-sm">
        <q-btn label="Modal" color="primary" @click="fixed = true" />

        <q-dialog v-model="fixed">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Formulario</div>
                </q-card-section>

                <q-separator />

                <q-card-section style="max-height: 50vh" class="scroll">
                    <FormP />
                </q-card-section>

                <q-separator />

                <q-card-actions align="right">
                    <q-btn flat label="Decline" color="primary" v-close-popup />
                    <q-btn flat label="Accept" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>
  
<script>
import { defineComponent, ref } from 'vue'
import FormP from "../components/Form.vue";

export default defineComponent({
    name: "Modal",
    components: {
        FormP,
    },
    setup() {
        return {
            basic: ref(false),
            fixed: ref(false)
        }
    }
});
</script>
  