/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */

export default [
  {
    path: '/dashboard',
    name: 'Painel de Resultados',
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
    path: '/quest',
    name: 'Questionário de autoavaliação sobre a condição de água, esgotamento sanitário e práticas de higiene na escola',
    view: 'Quest'
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
    name: 'Acesso',
    view: 'Login'
  },
{
  path: '/updateQuest',
  // Relative to /src/views,
  name: 'updateQuest',
  view: 'updateQuest'
},
{
path: '/updateQuestComplete',
// Relative to /src/views,
name: 'updateQuestComplete',
view: 'updateQuestComplete'
},
  {
    path: '/admin',
    // Relative to /src/views,
    name: 'Configurações de Usuários',
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
