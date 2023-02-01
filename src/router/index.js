import { createRouter, createWebHistory } from 'vue-router';
import Homeview from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Homeview,
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ './views/AboutView.vue'),
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ './views/1_databinding/DataBindingStringView.vue'
      ),
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ './views/1_databinding/DataBindingHtmlView.vue'
      ),
  },
  {
    path: '/databinding/input',
    name: 'DataBindingHtmlInputView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ './views/1_databinding/DataBindingHtmlInputView.vue'
      ),
  },
  {
    path: '/databinding/select',
    name: 'DataBindingHtmlSelectView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ './views/1_databinding/DataBindingHtmlSelectView.vue'
      ),
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingHtmlCheckboxView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ './views/1_databinding/DataBindingHtmlCheckboxView.vue'
      ),
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingHtmlRadioView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ './views/1_databinding/DataBindingHtmlRadioView.vue'
      ),
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttributeView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ './views/1_databinding/DataBindingAttributeView.vue'
      ),
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ './views/1_databinding/DataBindingListView.vue'
      ),
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ './views/1_databinding/DataBindingClassView.vue'
      ),
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ './views/1_databinding/DataBindingStyleView.vue'
      ),
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ './views/2_event/EventClickView.vue'
      ),
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ './views/2_event/EventChangeView.vue'
      ),
  },
  {
    path: '/event/key',
    name: 'EventKeyView',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ './views/2_event/EventKeyView.vue'
      ),
  },
];
//name 값은 고유, component 내부에는 함수가 들어갈 수 있음

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
