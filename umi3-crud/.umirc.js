import { defineConfig } from 'umi';
export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        {
            path: '/',
            component: '@/layout/index',
            routes: [
                {
                    path: '/',
                    redirect: '/course'
                },
                {
                    path: '/course',
                    component: '@/pages/Course/index'
                },
                {
                    path: '/about',
                    component: '@/pages/About/index'
                }
            ]
        },
    ],
    cssModulesTypescriptLoader: {}
});
//# sourceMappingURL=.umirc.js.map