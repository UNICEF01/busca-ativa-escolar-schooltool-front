
<template>

    <div id="app">
      <br> <br> <br> <br>
     
        
        <ejs-grid ref='grid' id='Grid' locale='pt-BR' :dataSource='data' :toolbar='toolbarOptions' height='572px' :allowFiltering='true' :allowExcelExport='true' :toolbarClick='toolbarClick' :allowPaging="true" :pageSettings='pageSettings' :allowSorting='true' >
          
          <e-columns>
            <!--e-column field='id' headerText='ID' textAlign='Left' width=120></e-column-->
            <e-column field='nome' headerText='Nome' textAlign='left' width=140></e-column>
            <e-column field='telefone' headerText='Telefone' textAlign='Left' width=140></e-column>
            <e-column field='escola' headerText='Escola' textAlign='Left' width=140></e-column>
            <e-column field='territorio' headerText='Território' textAlign='Left' width=140></e-column>
            <e-column field='municipio' headerText='Município' textAlign='Left' width=140></e-column>
            <e-column field='estado' headerText='Estado' textAlign='Left' width=120></e-column>
            <e-column field='quest_complete' headerText='Finalizou respostas' textAlign='Left' width=140></e-column>
            <e-column field='quest1' headerText='A água está disponível nas instalações da escola sempre e em quantidade suficiente para todos os tipos de necessidade (banheiros,lavagem de mãos,preparação dos alimentos,beber)' textAlign='Left' width=120></e-column>
            <e-column field='quest2' headerText='Existe armazenamento de água e ele é suficiente para satisfazer as necessidades da escola durante,pelo menos,dois dias' textAlign='Left' width=120></e-column>
            <e-column field='quest3' headerText='A água está tratada com cloro (teor mínimo,0,2 - 0,5 mg/L de cloro residual livre) ou com um método comprovada e que siga as especificações do Ministério da Saúde ou da Organização Mundial da Saúde. A Portaria de Consolidação nº 5,de 28/09/2017/Minist[erio da Saúde determina a obrigatoriedade de se manter,no mínimo,0,2 mg/L de cloro residual livre ou 2 mg/L de cloro residual combinado em toda a extensão do sistema de distribuição (reservatório e rede).' textAlign='Left' width=120></e-column>
            <e-column field='quest4' headerText='Há pias ou locais para a lavagem de mãos com água e sabão na entrada da escola.' textAlign='Left' width=120></e-column>
            <e-column field='quest5' headerText='Há pias ou locais para a lavagem de mãos com água e sabão na frente das salas de aula e a menos de 5 metros de cada banheiro' textAlign='Left' width=120></e-column>
            <e-column field='quest6' headerText='São organizadas atividades de lavagem de mãos para todos os estudantes,pelo menos três vezes por dia na escola' textAlign='Left' width=120></e-column>
            <e-column field='quest7' headerText='Os seguintes recursos para a higiene menstrual estão disponíveis na escola: i) duchas higiênicas ou locais de banho ii) itens de higiene (por exemplo,absorventes íntimos) iii) educação sobre higiene menstrual iv) cesto de lixo com tampa v) pias para lavagem das mãos perto dos banheiros.' textAlign='Left' width=120></e-column>
            <e-column field='quest8' headerText='A escola tem um número suficiente de banheiros ou vasos sanitários funcionando para uso dos estudantes.' textAlign='Left' width=120></e-column>
            <e-column field='quest9' headerText='Os banheiros ou sanitários estão claramente separados para meninos e meninas' textAlign='Left' width=120></e-column>
            <e-column field='quest10' headerText='A escola tem um número suficiente de banheiros ou sanitários para os professores e funcionários.' textAlign='Left' width=120></e-column>
            <e-column field='quest11' headerText='O piso,a maçaneta da porta,a área dos banheiros e sanitários são limpos pelo menos uma vez por dia,com água e detergente,e são desinfectados com água sanitária' textAlign='Left' width=120></e-column>
            <e-column field='quest12' headerText='Todos os banheiros têm pia ou um local para a lavagem de mãos com água e sabão em um raio mínimo de 5 metros' textAlign='Left' width=120></e-column>
            <e-column field='quest13' headerText='Há lixeiras em cada sala de aula,nos banheiros e ao lado dos vasos sanitários e em locais estratégicos,nas dependências da escola,e o o lixo é recolhido diariamente,de forma segura' textAlign='Left' width=120></e-column>
            <e-column field='quest14' headerText='O lixo da escola é descartado de forma segura (são ensacados e separados parao o recolhimento do prestador de serviços)?' textAlign='Left' width=120></e-column>
            <e-column field='quest15' headerText='Todas as salas de aula dispõem de material informativo sobre o COVID-19 e outras doenças infecciosas.' textAlign='Left' width=120></e-column>
            <e-column field='quest16' headerText='Há pessoal designado e informado,professores,equipe de limpeza,funcionários,estudantes mais velhos,membros da comunidade ou associações que atuem no tema de água e saneamento e de prevenção e controle de doenças transmissíveis para supervisionar os locais de lavagem de mãos e banheiros (disponibilidade de água e sabão,manutenção,comportamento de lavagem de mãos e respeito às normas de distanciamento físico,etc).' textAlign='Left' width=120></e-column>
            <e-column field='quest17' headerText='Há um planejamento claro e detalhando para a limpeza de toda a dependência escolar,que é supervisionado e aplicado.' textAlign='Left' width=120></e-column>
            <e-column field='quest18' headerText='Estão disponíveis equipamentos de proteção individual (máscaras,luvas) para a equipe de limpeza,e materiais de limpeza apropriados e bem armazenados (detergente,esfregão,vassouras,baldes,etc.).' textAlign='Left' width=120></e-column>
            <e-column field='quest19' headerText='É respeitada a distância física entre os professores e os estudantes,e entre os estudantes,nas salas de aula (pelo menos 1,5 metro).' textAlign='Left' width=120></e-column>
            <e-column field='quest20' headerText='É respeitada a distância física entre os usuários dos locais de lavagem de mãos ou enquanto fazem fila para ir ao banheiro' textAlign='Left' width=120></e-column>
            <e-column field='quest21' headerText='Se há um refeitório escolar,a distância física entre os estudantes é implementada e respeitada' textAlign='Left' width=120></e-column>
            <e-column field='quest22' headerText='A equipe da cozinha usa máscaras faciais e dispõe de pias e locais para a lavagem das mãos ou de produtos desinfetantes para as mãos.' textAlign='Left' width=120></e-column>
            <e-column field='quest23' headerText='As salas de aulas têm uma boa ventilação natural' textAlign='Left' width=120></e-column>
            <e-column field='quest24' headerText='Existe um protocolo para identificar os estudantes com sintomas de COVID-19 e informar às autoridades sanitárias.' textAlign='Left' width=120></e-column>
            <e-column field='quest25' headerText='A escola dispõe de um espaço privado,designado para o isolamento de estudantes com sintomas de COVID -19,onde possam aguardar que seus responsáveis os busquem' textAlign='Left' width=120></e-column>
            <e-column field='quest26' headerText='A escola tem uma reserva de máscaras para uso dos estudantes,que tenham sido identificados com sintomas de COVID,até que seus responsáveis os busquem' textAlign='Left' width=120></e-column>
            <e-column field='quest27' headerText='Na escola onde se recomenda o uso de máscaras,todos os estudantes têm acesso a máscaras (em particular estudantes de famílias mais vulneráveis)' textAlign='Left' width=120></e-column>
            <e-column field='quest28' headerText='Há uma lista de controle para uso da equipe de limpeza e funcionários para monitorar os pontos críticos.' textAlign='Left' width=120></e-column>

            </e-columns>
        </ejs-grid>




    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Page, Sort, Toolbar, ExcelExport, Filter  } from "@syncfusion/ej2-vue-grids";
import { L10n, setCulture } from '@syncfusion/ej2-base';

import { data } from './bigData.js';

 
localStorage.setItem("titulo", "municipio");

Vue.use(GridPlugin);

setCulture('pt-BR');
L10n.load({
    'pt-BR': {
        'grid': {
            'EmptyRecord': 'Aguarde, carregando ...'
        },
        'pager':{
            'currentPageInfo': '{0} de {1} páginas',
            'totalItemsInfo': '({0} items)',
            'totalItemInfo': '({0} item)',
            'firstPageTooltip': 'primeira página',
            'lastPageTooltip': 'última página',
            'nextPageTooltip': 'próxima página',
            'previousPageTooltip': 'página anterior',
            'nextPagerTooltip': 'próxima página',
            'previousPagerTooltip': 'Go to previous pager',
            'pagerDropDown': 'Items por página',
            'pagerAllDropDown': 'Items',
            'CurrentPageInfo': '{0} de {1} páginas',
            'TotalItemsInfo': '({0} items)',
            'FirstPageTooltip': 'primeira página',
            'LastPageTooltip': 'última página',
            'NextPageTooltip': 'próxima página',
            'PreviousPageTooltip': 'página anterior',
            'NextPagerTooltip': 'Go to next pager',
            'PreviousPagerTooltip': 'Go to previous pager',
            'PagerDropDown': 'Items por página',
            'PagerAllDropDown': 'Items'
        }
    }
});

export default {
 
  data() {
    return {
      data: data,
      toolbarOptions: ['ExcelExport'],
      pageSettings: { pageSize: 100 }
    };
  },

  methods: {
      toolbarClick: function(args) {
        if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
        let excelExportProperties = {
                    fileName:"RESPOSTAS.xlsx",
                    header: {
                        headerRows: 1,
                        rows: [
                            { cells: [
                              { colSpan: 1, value: ""},
                              { colSpan: 1, value: ""},
                              { colSpan: 1, value: ""},
                              { colSpan: 1, value: ""},
                              { colSpan: 1, value: ""},
                              { colSpan: 1, value: ""},
                              { colSpan: 1, value: ""},
                              { colSpan: 3, value: "1 - Água"},{ style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true } }, 
                              { colSpan: 1, value: ""},
                              { colSpan: 4, value: "2 - Higiene das mãos e menstrual"},{style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true } }, 
                              { colSpan: 1, value: ""},
                              { colSpan: 1, value: ""},
                              { colSpan: 7, value: "3 - Saneamento"},{style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true } }, 
                              { colSpan: 1, value: ""},
                              { colSpan: 1, value: ""},
                              { colSpan: 1, value: ""},
                              { colSpan: 1, value: ""},
                              { colSpan: 1, value: ""},
                              { colSpan: 14, value: "4 - Prevenção e controle de infecções"},{style: { fontColor: '#C67878', fontSize: 15, hAlign: 'Center', bold: true, } }
                              ] } ,
                        ]
                    }
        };

        this.$refs.grid.excelExport(excelExportProperties);
        }
    }
  },
  provide: {
    grid: [Toolbar, ExcelExport, Page, Sort,Filter]
  }
}

  if (screen.width == "1980") {
     document.body.style.zoom = "100%"
  }
  if (screen.width == "1680") {
    document.body.style.zoom = "88%"
  } 
  if (screen.width == "1366") {
    document.body.style.zoom = "71%"
  } 
  
  if (screen.width == "1360") {
    document.body.style.zoom = "71%"
  }   
  if (screen.width == "1280") {
    document.body.style.zoom = "67%"
  }
  if (screen.width == "1024") {
    document.body.style.zoom = "93%"
  } 

</script>
<style>
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>