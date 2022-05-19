import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _177a2061 = () => interopDefault(import('..\\pages\\Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _716a4cee = () => interopDefault(import('..\\pages\\Projects.vue' /* webpackChunkName: "pages/Projects" */))
const _4b950c12 = () => interopDefault(import('..\\pages\\en\\PrivacyPolicy.vue' /* webpackChunkName: "pages/en/PrivacyPolicy" */))
const _6c4b6800 = () => interopDefault(import('..\\pages\\MyProjects\\Graphics.vue' /* webpackChunkName: "pages/MyProjects/Graphics" */))
const _6c15ffe5 = () => interopDefault(import('..\\pages\\MyProjects\\Webpages.vue' /* webpackChunkName: "pages/MyProjects/Webpages" */))
const _60a2b273 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Contact",
    component: _177a2061,
    name: "Contact"
  }, {
    path: "/Projects",
    component: _716a4cee,
    name: "Projects"
  }, {
    path: "/en/PrivacyPolicy",
    component: _4b950c12,
    name: "en-PrivacyPolicy"
  }, {
    path: "/MyProjects/Graphics",
    component: _6c4b6800,
    name: "MyProjects-Graphics"
  }, {
    path: "/MyProjects/Webpages",
    component: _6c15ffe5,
    name: "MyProjects-Webpages"
  }, {
    path: "/",
    component: _60a2b273,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
