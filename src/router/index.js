import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Doctors from '@/components/Doctors'
import Patients from '@/components/Patients'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/doctors',
            name: 'Doctors',
            component: Doctors,
            props: true
        },
        {
            path: '/patients',
            name: 'Patients',
            component: Patients,
            props: true
        }
    ]
})
