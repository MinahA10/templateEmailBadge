import { createMemoryHistory, createRouter } from 'vue-router'

import InvitationQVCT from "@/pages/pages/InvitationQVCT.vue";
import RegistrationReceipt from "@/pages/pages/RegistrationReceipt.vue";
import RegistrationRejection from "@/pages/pages/RegistrationRejection.vue";
import RegistrationValidation from "@/pages/pages/RegistrationValidation.vue";

const routes = [
    { path: '/', component: InvitationQVCT },
    { path: '/registration/receipt', component: RegistrationReceipt },
    { path: '/registration/rejection', component: RegistrationRejection },
    { path: '/registration/validation', component: RegistrationValidation },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;