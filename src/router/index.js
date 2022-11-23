  import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Auth from '@/components/Auth.vue'
import Register from '@/components/Register'
import CustomerList from '@/components/CustomerList'
import CustomerCreate from '@/components/CustomerCreate'
import PuppyList from '@/components/PuppyList'
import PuppyCreate from '@/components/PuppyCreate'
  import TrainingList from '@/components/TrainingList'
import TrainingCreate from '@/components/TrainingCreate'
  import Tips from '@/components/Tips'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tips',
    name: 'Tips',
    component: Tips
  },



  {
    path: '/customer-list',
    name: 'CustomerList',
    component: CustomerList
  },
  {
    path: '/customer-list/:msg',
    name: 'CustomerUpdatedList',
    component: CustomerList
  },
  {
    path: '/customer-create',
    name: 'CustomerCreate',
    component: CustomerCreate
  },
  {
    path: '/customer-create/:pk',
    name: 'CustomerUpdate',
    component: CustomerCreate
  },





  {
    path: '/puppy-list',
    name: 'PuppyList',
    component: PuppyList
  },
  {
    path: '/puppy-list/:msg',
    name: 'PuppyUpdatedList',
    component: PuppyList
  },
  {
    path: '/puppy-create',
    name: 'PuppyCreate',
    component: PuppyCreate
  },
  {
    path: '/puppy-create/:pk',
    name: 'PuppyUpdate',
    component: PuppyCreate
  },



     {
    path: '/training-list',
    name: 'TrainingList',
    component: TrainingList
  },
  {
    path: '/training-list/:msg',
    name: 'TrainingUpdatedList',
    component: TrainingList
  },
  {
    path: '/training-create',
    name: 'TrainingCreate',
    component: TrainingCreate
  },
  {
    path: '/training-create/:pk',
    name: 'TrainingUpdate',
    component: TrainingCreate
  },








  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path:'/register',
    name: 'Register',
    component: Register
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router



