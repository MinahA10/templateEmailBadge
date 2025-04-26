<script setup>
import { onMounted } from 'vue';
import createStudioEditor from '@grapesjs/studio-sdk';
import '@grapesjs/studio-sdk/style';

onMounted(() => {
    createStudioEditor({
        container: '#gjs',
        root: '#studio-editor',
        licenseKey: '08d38c7960d94f68ac5550e5bd3543a3a63f01c830b74e54b735335585f98def',
        project: {
            type: 'email',
        },
        assets: {
            storageType: 'self',
            onUpload: async ({ files }) => {
                const body = files;
                const response = await fetch('http://localhost:8000/api/grapesjs/assets/upload', {
                    method: 'POST',
                    body,
                });
                return await response.json();
            },
            onDelete: async ({ assets }) => {
                await fetch('http://localhost:8000/api/grapesjs/assets/delete', {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(assets),
                });
            },
        },
        storage: {
            type: 'self',
            onSave: async ({ project }) => {
                await fetch('http://localhost:8000/api/grapesjs/8fe0c856-392c-4f88-a552-9bbec209d5f8/save', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ project }),
                });
            },
            onLoad: async () => {
                const res = await fetch('http://localhost:8000/api/grapesjs/bc194220-236d-4ea2-972b-74a9b90a644d/load');
                return await res.json();
            },
            // autosaveChanges: 100,
            // autosaveIntervalMs: 10000
        },
        onReady: async (editor) => {
            const variables = ['name', 'email', 'phone'];
            variables.forEach((key) => {
                editor.BlockManager.add(`var-${key}`, {
                    label: `{{${key}}}`,
                    category: 'Variables',
                    content: `<mj-text>{{${key}}}</mj-text>`,
                });
            });
        },
    });
});
</script>

<template>
  <div id="studio-editor" style="height: 100vh;"></div>
</template>

<style>
#gjs {
  border: 1px solid #ddd;
}
</style>
