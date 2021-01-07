import { createApp, reactive } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App)
    .use(store)
    .use(router);

// 插件
app.mixin({
    created() {
        this.$reactive = reactive({
            a: 1,
            b: 2
        });
    }
});

// provide
app.provide(
    'root',
    reactive({
        c: 3,
        d: 4
    })
);

// use
app.use({
    install(app, options) {
        console.log(app, options);
    }
});

// mount
app.mount('#app');
