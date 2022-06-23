import {app} from '@/config/app'

export const storage = {
    default: 'local',
    drivers: {
        local: {
            prefix: app.id + '__',
            flatten: true,
        },
        cookie: {
            prefix: app.id + '__',
            flatten: true,
            // encrypt: true,
        },
    },
}
