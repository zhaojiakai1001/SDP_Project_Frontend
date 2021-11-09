export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '财务状况群组分析',
    icon: 'smile',
    path: '/group/debt',
    component: './group/Debt',
  },
  {
    name: '地区群组分析',
    icon: 'smile',
    path: '/group/region',
    component: './group/Region',
  },
  {
    name: '验证状态群组分析',
    icon: 'smile',
    path: '/group/status',
    component: './group/Status',
  },
  {
    name: '贷款用途群组分析',
    icon: 'smile',
    path: '/group/purpose',
    component: './group/Purpose',
  },
  {
    name: '个人中心',
    icon: 'smile',
    path: '/profile',
    component: './Profile',
  },
  {
    name: '个人设置',
    icon: 'smile',
    path: '/accountsettings',
    component: './AccountSettings',
  },
  {
    component: './404',
  },
];
