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
    name: '地区数据群组分析',
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
    name: '交易数据群组分析',
    icon: 'smile',
    path: '/group/accOpen',
    component: './group/AccOpen',
  },
  {
    name: '房屋属性群组分析',
    icon: 'smile',
    path: '/group/homeOwnership',
    component: './group/HomeOwnership',
  },
  {
    name: '账户余额群组分析',
    icon: 'smile',
    path: '/group/avgCurBal',
    component: './group/AvgCurBal',
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
