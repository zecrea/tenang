import { getPlatform } from 'boot/util'
const platform = getPlatform()
const layouts = {
  'desktop': () => import('layouts/Desktop/MainLayout.vue'),
  'mobile': () => import('layouts/Mobile/MainLayout.vue')
}
const pages = {
  'desktop': {
    home: () => import('pages/Desktop/Index.vue'),
    view: () => import('pages/Desktop/View.vue')
  },
  'mobile': {
    home: () => import('pages/Mobile/Index.vue'),
    view: () => import('pages/Mobile/View.vue')
  }
}

const routes = [
  {
    path: '/',
    component: layouts[platform != 'mobile' ? 'desktop':platform],
    children: [
      { path: '', redirect: 'home' },
      { path: 'github', name: 'github', beforeEnter: function(){window.location.href="https://zecrea.id"} },
      { path: 'home', name: 'home', component: pages[platform != 'mobile' ? 'desktop':platform].home },
      { path: 'view',
        component: () => import('pages/ViewRoute.vue'),
        children: [
          { path: '', name: 'view-index', redirect: {name: 'home'} },
          { path: ':id', 
            component: pages[platform != 'mobile' ? 'desktop':platform].view,
            name: 'view-by-id' 
          }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
