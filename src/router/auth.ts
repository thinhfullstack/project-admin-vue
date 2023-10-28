import Login from '../views/admin/auth/Login.vue'
import Register from '../views/admin/auth/Register.vue'
import ForgotPassword from '../views/admin/auth/ForgotPassword.vue'

const auth:any = [
    {
        path: '/login',
        component: Login,
        name: 'auth.login'
    },
    {
        path: '/register',
        component: Register,
        name: 'auth.register'
    },
    {
        path: '/forgot-password',
        component: ForgotPassword,
        name: 'auth.forgotPassword'
    }
]

export default auth