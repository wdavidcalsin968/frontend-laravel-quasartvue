<template>
    <!-- <div class="q-pa-md" style="max-width: 400px"> -->
        <q-form @submit.prevent="onSubmit" @reset="onReset" ref="myForm" class="row q-col-gutter-md">
            <div class="col-12 col-sm-4">
                <q-input filled v-model="name" label="Nombre" hint="Nombre y Apellidos" lazy-rules
                :rules="[val => val && val.length > 0 || 'Por favor ingrese su nombre']" />
            </div>

            <div class="col-12 col-sm-4">
                <q-input filled type="number" v-model="age" label="Edad" lazy-rules :rules="[
                val => val !== null && val !== '' || 'Por favor ingrese su edad',
                val => val > 0 && val < 100 || 'Por favor ingrese una edad real'
            ]" />
            </div>

            <div class="col-12 col-sm-4">
                <q-input filled type="email" v-model="correo" label="Correo Electronico" lazy-rules :rules="[
                val => val !== null && val !== '' || 'Ingrese su correo electronico',
            ]" />
            </div>

            <div class="col-12 col-sm-4">
                <q-select color="grey-3" outlined label-color="grey-8" v-model="model" :options="options" label="Label">
                </q-select>
            </div>
            
            <div class="col-12 col-sm-4">
                <q-file outlined bottom-slots v-model="file" label="File" counter max-files="12">
                    <template v-slot:before>
                    <q-icon name="attachment" />
                    </template>
                    <template v-slot:append>
                    <q-icon v-if="model !== null" name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
                    <q-icon name="search" @click.stop.prevent />
                    </template>

                    <template v-slot:hint>
                    Field hint
                    </template>
                </q-file>
            </div>
            
            <div class="col-12 col-sm-4">
                <q-input filled v-model="time" mask="time" :rules="['time']">
                    <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-time v-model="time">
                            <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                        </q-time>
                        </q-popup-proxy>
                    </q-icon>
                    </template>
                </q-input>
            </div>

            <div class="col-12 col-sm-4">
                <q-input filled v-model="date" mask="date" :rules="['date']">
                <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date v-model="date">
                        <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                        </q-date>
                    </q-popup-proxy>
                    </q-icon>
                </template>
                </q-input>
            </div>
            
            <div class="col-12">
                <q-toggle v-model="accept" label="I accept the license and terms" />
            </div>
            <div class="col-12">
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>
    <!-- </div> -->
</template>
  
<script>
import { useQuasar } from 'quasar'
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: "FormP",
    setup() {
        const $q = useQuasar()

        const name = ref(null)
        const age = ref(null)
        const correo = ref(null)
        const accept = ref(false)
        const myForm = ref(null)

        const onSubmit = () => {
            if (accept.value !== true) {
                $q.notify({
                    color: 'red-5',
                    textColor: 'white',
                    icon: 'warning',
                    message: 'You need to accept the license and terms first',
                });
            }
            else {
                
                $q.notify({
                    color: 'green-4',
                    textColor: 'white',
                    icon: 'cloud_done',
                    message: 'Submitted'
                })
                myForm.value.resetValidation();
                onReset();
                //procesar formulario backend
            }
        }

        const onReset = () => {
            name.value = null
            age.value = null
            correo.value = null
            accept.value = false
        }
        return {
            name,
            age,
            correo,
            accept,
            model: ref(null),
            file: ref(null),
            time: ref('13:00'),
            timeWithSeconds: ref('13:00:00'),
            date: ref('2023/05/24'),
            onSubmit,
            onReset,

            options: [
            'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
            ],

        }
    }
});
</script>
  