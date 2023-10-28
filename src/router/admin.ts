import DashBoard from '../views/admin/layouts/pages/dashboards/Index.vue'
import UserManagement from '../views/admin/layouts/pages/users/Index.vue'
import ProductManagement from '../views/admin/layouts/pages/products/Index.vue'
import OrderManagement from '../views/admin/layouts/pages/orders/Index.vue'

const admin:any = [
    {
        path: '/admin',
        children: [
            {
                path: '',
                component: DashBoard,
                name: 'admin.dashboard'
            },
            {
                path: '/admin/user',
                component: UserManagement,
                name: 'admin.user'
            },
            {
                path: '/admin/product',
                component: ProductManagement,
                name: 'admin.product'
            },
            {
                path: '/admin/order',
                component: OrderManagement,
                name: 'admin.order'
            },
        ]
    }
]

export default admin