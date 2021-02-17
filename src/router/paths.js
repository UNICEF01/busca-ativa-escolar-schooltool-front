/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    // Relative to /src/views,
    name: 'Dash Board',
    view: 'Dashboard'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/',
    name: 'Crianças/Adolecentes',
    view: 'ChildList'
  },
  {
    path: '/tablelist',
    name: 'Crianças/Adolecentes',
    view: 'TableList'
  },
  {
    path: '/quest',
    name: 'Questionário de autoavaliação sobre a condição de água, esgotamento sanitário e práticas de higiene na escola',
    view: 'Quest'
  },
  {
    path: '/results',
    name: 'Visualização dos resultados',
    view: 'Results'
  },
  {
    path: '/wash',
    name: 'Questionário de autoavaliação sobre a condição de água, esgotamento sanitário e práticas de higiene na escola',
    view: 'ResearchWash',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    // Relative to /src/views,
    name: 'Login',
    view: 'Login'
  },
{
  path: '/updateQuest',
  // Relative to /src/views,
  name: 'updateQuest',
  view: 'updateQuest'
},
  {
    path: '/admin',
    // Relative to /src/views,
    name: 'Admin',
    view: 'Admin'
  },
  {
    path: '/typography',
    view: 'Typography'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  }
]
