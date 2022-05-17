/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */

export default [

  {
    path: '/',
    name: 'Pesquisas - UNICEF',
    view: 'Researchs',
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/dashboard',
    name: 'Painel de Resultados',
    view: 'Dashboard'
  },
  {
    path: '/quest', // faz o mesmo que /login-usuario Mantendo para não perder links encaminhados antes
    name: 'Questionário de autoavaliação sobre a condição de água, esgotamento sanitário e práticas de higiene na escola',
    view: 'Quest'
  },
  {
    path: '/login-usuario',
    name: 'login_usuario',
    view: 'Quest'
  },
  {
    path: '/login-usuario',
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
    path: '/resultsv2',
    name: 'Painel de Resultados',
    view: 'ResultsV2'
  },
  {
    path: '/results',
    name: 'Painel de Resultados',
    view: 'Results'
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
    path: '/exportExcelNS',
    name: 'Exportar Dados Brutos Norte e Sul',
    view: 'exportExcelNS'
  },
  {
    path: '/exportExcelCOSE',
    name: 'Exportar Dados Brutos Centro-oeste e Sudeste',
    view: 'exportExcelCOSE'
  },
  {
    path: '/exportExcelNE1',
    name: 'Exportar Dados Brutos Nordeste 1',
    view: 'exportExcelNE1'
  }, 
  {
    path: '/exportExcelNE2',
    name: 'Exportar Dados Brutos Nordeste 2',
    view: 'exportExcelNE2'
  },     
  
  {
    path: '/exportExcelChecklist',
    name: 'Exportar Dados Brutos Checklist',
    view: 'exportExcelChecklist'
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
    path: '/ResultsMunicipiov2',
    name: 'Painel de Resultados de Municípios',
    view: 'ResultsMunicipioV2'
  },
  {
    path: '/ResultsEscolav2',
    name: 'Painel de Resultados de Escolas',
    view: 'ResultsEscolaV2'
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
    path: '/MapaBrasil',
    name: 'Relatório Estado',
    view: 'MapaBrasil'
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
    path: '/protocolos',
    name: 'Checklist sobre a implementação de protocolos seguros nas escolas',
    view: 'ResearchProtocol',
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/pesquisas',
    name: 'Pesquisas - UNICEF',
    view: 'Researchs',
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
    path: '/updateQuestChecklist',
    // Relative to /src/views,
    name: 'updateQuestChecklist',
    view: 'updateQuestChecklist'
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
    path: '/api',
    name: 'API',
    view: 'api'
  }

      
]
