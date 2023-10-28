import { createRouter, createWebHistory } from "vue-router";
import admin from './admin'
import login from './auth'
import register from './auth'

const routes = [
    ...admin,
    ...login,
    ...register,
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
