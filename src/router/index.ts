import { createMemoryHistory, createRouter } from 'vue-router'

import InvitationQVCT from "@/pages/pages/InvitationQVCT.vue";
import RegistrationReceipt from "@/pages/pages/RegistrationReceipt.vue";
import RegistrationRejection from "@/pages/pages/RegistrationRejection.vue";
import RegistrationValidation from "@/pages/pages/RegistrationValidation.vue";
import WebBuilder from "@/pages/pages/WebBuilder.vue";
import ListTemplate from "@/pages/pages/ListTemplate.vue";

const routes = [
    { path: '/', component: InvitationQVCT },
    { path: '/registration/receipt', component: RegistrationReceipt },
    { path: '/registration/rejection', component: RegistrationRejection },
    { path: '/registration/validation', component: RegistrationValidation },
    { path: '/editor', component: WebBuilder },
    { path: '/template/list', component: ListTemplate },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;
