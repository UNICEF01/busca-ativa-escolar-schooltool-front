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
    path: '/charts2',
    name: 'Gráficos',
    view: 'Charts2'
  },
  {
    path: '/charts',
    name: 'Gráficos',
    view: 'Charts'
  },
  {
    path: '/chartsestado',
    name: 'Gráficos Estado',
    view: 'ChartsEstado'
  },
  {
    path: '/results',
    name: 'Painel de Resultados',
    view: 'Results'
  },
  {
    path: '/resultsv2',
    name: 'Painel de Resultados',
    view: 'ResultsV2'
  },
  {
    path: '/chartsregiaov2',
    name: 'Gráficos Região',
    view: 'ChartsRegiaoV2'
  },
  {
    path: '/chartsestadov2',
    name: 'Graficos Estado',
    view: 'ChartsEstadoV2'
  },
  {
    path: '/exportExcel',
    name: 'Export Excel',
    view: 'exportExcel'
  },
  {
    path: '/bigData',
    name: 'big Data',
    view: 'bigData'
  },
  {
    path: '/chartsterritoriov2',
    name: 'Gráficos Território',
    view: 'ChartsTerritorioV2'
  },
  {
    path: '/relatorioestadov2',
    name: 'Relatório Estado',
    view: 'RelatorioEstadoV2'
  },
  {
    path: '/relatorioregiaov2',
    name: 'Relatório Região',
    view: 'RelatorioRegiaoV2'
  },
  {
    path: '/relatorioterritoriov2',
    name: 'Relatório Território',
    view: 'RelatorioTerritorioV2'
  },
  {
    path: '/resultsterritoriov2',
    name: 'Painel Território',
    view: 'ResultsTerritorioV2'
  },
  {
    path: '/ResultsMunicipio',
    name: 'Painel de Resultados de Municípios',
    view: 'ResultsMunicipio'
  },
  {
    path: '/ResultsEscola',
    name: 'Painel de Resultados de Escolas',
    view: 'ResultsEscola'
  },  
  {
    path: '/ResultsTerritorio',
    name: 'Painel de Resultados de Territórios',
    view: 'ResultsTerritorio'
  },  

  {
    path: '/updateSchool',
    name: 'updateSchool',
    view: 'updateSchool'
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
  path: '/findQuestComplete',
  // Relative to /src/views,
  name: 'findQuestComplete',
  view: 'findQuestComplete'
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
