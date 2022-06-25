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
                component: () => import(/* webpackChunkName: "view-clear-site-data" */ '@/resources/views/pages/ClearSiteData'),
            },
            {
                path: 'error',
                component: BaseError,
                children: [
                    {
                        path: '404',
                        name: 'not_found',
                        component: () => import(/* webpackChunkName: "view-error-not-found" */ '@/resources/views/errors/NotFound'),
                    },
                    //
                ],
            },
            {
                path: '/',
                name: 'root',
                component: () => import(/* webpackChunkName: "view-home" */ '@/resources/views/pages/Home'),
            },
            //
            {
                path: 'about',
                name: 'about',
                component: () => import(/* webpackChunkName: "view-about" */ '@/resources/views/pages/About'),
            },
            //
            {
                path: ':pathMatch(.*)*',
                component: () => import(/* webpackChunkName: "view-welcome" */ '@/resources/views/pages/Welcome'),
            },
        ],
    },
]
