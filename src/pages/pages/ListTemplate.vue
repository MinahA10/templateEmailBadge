<script setup>
import {onMounted, ref} from "vue";

const items = ref([]);

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:8000/api/get/templates/list');
        const data = await response.json()
        items.value = data.templates;
    } catch (error) {
        console.error('Erreur lors du chargement des données', error);
    }
});
</script>

<template>
    <div>
        <h1>Liste des templates</h1>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Titre</th>
                <th>Contenu</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in items" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.contents }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>
