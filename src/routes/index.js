import {middlewares} from '@/app/middlewares'
import Base from '@/resources/views/master/Base'
import BaseError from '@/resources/views/master/BaseError'

export const routes = [
    {
        path: '/',
        component: Base,
        meta: {
            middleware: middlewares,
        },
        children: [
            {
                path: 'clear-site-data',
                name: 'clear_site_data',
                component: () => import('@/resources/views/pages/ClearSiteData'),
            },
            {
                path: 'error',
                component: BaseError,
                children: [
                    {
                        path: '404',
                        name: 'not_found',
                        component: () => import('@/resources/views/errors/NotFound'),
                    },
                    //
                ],
            },
            {
                path: '/',
                name: 'root',
                component: () => import('@/resources/views/pages/Home'),
            },
            //
            {
                path: 'about',
                name: 'about',
                component: () => import('@/resources/views/pages/About'),
            },
            //
            {
                path: ':pathMatch(.*)*',
                component: () => import('@/resources/views/pages/Welcome'),
            },
        ],
    },
]
