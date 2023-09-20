
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pageToDo.vue'), name:'ToDo' },
      { path: '/settings', component: () => import('pages/pageSettings.vue'), name:'Settings' },
      { path: '/about', component: () => import('pages/pageAbout.vue'), name:'About' }
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
