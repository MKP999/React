export const routes = [
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
          routes: [
            {
              path: '/course',
              redirect: '/course/list'
            },
            {
              path: '/course/list',
              component: '@/pages/Course/index',
              title: '课程列表',
              breadcrumbName: '课程列表'
            },
            {
              path: '/course/add',
              component: '@/pages/AddCourse/index',
              title: '添加课程',
              breadcrumbName: '添加课程'
            }
          ]
        },
        {
          path: '/about',
          component: '@/pages/About/index',
          title: '关于我们',
          breadcrumbName: '关于我们'
        }
      ] 
    },
  ]