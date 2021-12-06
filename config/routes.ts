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
    path: '/',
    redirect: './accountcenter'
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
    name: '工作情况群组分析',
    icon: 'smile',
    path: '/group/empTime',
    component: './group/EmpTime',
  },
  {
    name: '个人中心',
    icon: 'smile',
    path: '/accountcenter',
    component: './AccountCenter',
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
