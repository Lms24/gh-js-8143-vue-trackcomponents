import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import * as Sentry from '@sentry/vue';

const app = createApp(App);

Sentry.init({
  app,
  dsn: 'https://a8c76c59894c4334882cfb901fe1e0bc@o447951.ingest.sentry.io/4504956726345728',
  integrations: [
    new Sentry.BrowserTracing({
      // routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: ['localhost', /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 10%
  // of transactions for performance monitoring.
  // Adjust as necessary to stay below quota.
  tracesSampleRate: 0.1,

  environment: process.env.NODE_ENV,

  // Enable performance profiling of all components,
  // instead of just App.vue.
  trackComponents: true,
});

app.mount('#app');
