<template>
    <Layout>
        <q-page padding>
            <h4>Data Table</h4>
            <Modal/>
            <Table/>
        </q-page>        
    </Layout>
</template>

<script setup>
import Layout from "../layouts/MainLayout.vue";
import Table from "../components/Table.vue";
import Modal from "../components/Modal.vue";

</script>