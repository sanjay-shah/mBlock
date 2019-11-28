import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Doctors from '@/components/DoctorsDashboard'
import Patients from '@/components/PatientDashboard'
import MedicalRecord from '@/components/MedicalRecord'

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
        },
        {
            path: '/medical-record',
            name: 'MedicalRecord',
            component: MedicalRecord,
            props: true
        }
    ]
})
