/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */

// Lazy import component
import home from '../components/Home.vue'

// Routes
export const routes = [
  {
    name: 'home',
    path: '',
    component: home
  },
  {
    path: '*',
    redirect: () => ({ path: '/', query: { notFound: true } })
  }
]
