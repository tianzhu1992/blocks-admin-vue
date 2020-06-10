export const asyncRouterMap = [
    {
        path: '/dashboard',
        component: Layout,
        redirect: '/dashboard/index',
        children: [
            {
                path: 'index',
                name: 'Dashboard',
                component: () => import('@/views/dashboard'),
                meta: {title: '首页', icon: 'home', role: 'Dashboard'}
            }
        ]
    },
    {
        path: '/guide',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'Guide',
                component: () => import('@/views/guide'),
                meta: {title: '引导页', icon: 'guide', role: 'Guide'}
            }
        ]
    },
    {
        path: '/components',
        component: Layout,
        name: 'Components',
        redirect: '/components/table',
        meta: {title: '组件', icon: 'component'},
        children: [
            {
                path: 'table',
                name: 'Table',
                component: () => import('@/views/components/table'),
                meta: {title: '表格', icon: 'table', role: 'Table'}
            },
            {
                path: '/form',
                name: 'Form',
                component: () => import('@/views/components/form'),
                meta: {title: '表单', icon: 'form', role: 'Form'}
            },
            {
                path: 'tinymce',
                name: 'Tinymce',
                component: () => import('@/views/components/tinymce'),
                meta: {title: 'Tinymce富文本', icon: 'tinymce', role: 'Tinymce'}
            },
            {
                path: 'upload',
                name: 'Upload',
                component: () => import('@/views/components/upload'),
                meta: {title: '上传', icon: 'upload', role: 'Upload'}
            },
        ]
    },
    {
        path: '/charts',
        component: Layout,
        name: 'Charts',
        redirect: '/charts/echarts',
        meta: {title: '图表', icon: 'charts'},
        children: [
            {
                path: 'echarts',
                name: 'Echarts',
                component: () => import('@/views/charts/echarts'),
                meta: {title: 'Echarts', icon: 'echarts', role: 'Echarts'}
            },
            {
                path: 'morris',
                name: 'Morris',
                component: () => import('@/views/charts/morris'),
                meta: {title: 'Morris', icon: 'morris', role: 'Morris'}
            },
            {
                path: 'justgage',
                name: 'Justgage',
                component: () => import('@/views/charts/justgage'),
                meta: {title: 'Justgage', icon: 'justgage', role: 'Justgage'}
            }
        ]
    },
    {
        path: '/errpage',
        name: 'Errpage',
        redirect: '/404',
        meta: {title: '错误页面', icon: 'errpage'},
        children: [
            {
                path: '404',
                name: '404',
                redirect: '/404',
                meta: {title: '404', icon: '404', role: '404'}
            },
            {
                path: '500',
                name: '500',
                redirect: '/500',
                meta: {title: '500', icon: '500', role: '500'}
            },
        ]
    },
    {
        path: "*",
        redirect: "/404",
        hidden: true
    }
]