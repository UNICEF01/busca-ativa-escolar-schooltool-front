
<template>

    <div id="app">
      <br> <br> <br> <br>
     
        
        <ejs-grid ref='grid' id='Grid' locale='pt-BR' :dataSource='data' :toolbar='toolbarOptions' height='572px' :allowFiltering='true' :allowExcelExport='true' :toolbarClick='toolbarClick' :allowPaging="true" :pageSettings='pageSettings' :allowSorting='true' >
          
          <e-columns>
            <e-column field='id' headerText='ID' textAlign='Left' width=260></e-column>
            <e-column field='nome' headerText='Nome' textAlign='left' width=140></e-column>
            <e-column field='telefone' headerText='Telefone' textAlign='Left' width=140></e-column>
            <e-column field='escola' headerText='Escola' textAlign='Left' width=140></e-column>
            <e-column field='relacao' headerText='Relação c/ Escola' textAlign='Left' width=140></e-column>
            <e-column field='territorio' headerText='Território' textAlign='Left' width=140></e-column>
            <e-column field='municipio' headerText='Município' textAlign='Left' width=140></e-column>
            <e-column field='estado' headerText='Estado' textAlign='Left' width=120></e-column>
            <e-column field='quest_complete' headerText='Finalizou respostas' textAlign='Left' width=140></e-column>
            <e-column field='quest1' headerText='Planejamento, rotinas de limpeza e higienização' textAlign='Left' width=120></e-column>
            <e-column field='quest2' headerText='Uso de máscaras e etiqueta respiratória' textAlign='Left' width=120></e-column>  
            <e-column field='quest3' headerText='Equipamentos de Proteção Individual (EPI) e suprimentos de limpeza e desinfecção' textAlign='Left' width=120></e-column>  
            <e-column field='quest4' headerText='Infraestrutura' textAlign='Left' width=120></e-column>            
            <e-column field='quest5' headerText='Lavagem das mãos' textAlign='Left' width=120></e-column>
            <e-column field='quest6' headerText='Gestão dos resíduos' textAlign='Left' width=120></e-column>
            <e-column field='quest7' headerText='Ventilação' textAlign='Left' width=120></e-column>
            <e-column field='quest8' headerText='Distanciamento' textAlign='Left' width=120></e-column>
            <e-column field='quest9' headerText='Na entrada da escola' textAlign='Left' width=120></e-column>
            <e-column field='quest9' headerText='Casos de Covid-19' textAlign='Left' width=120></e-column>
            
            </e-columns>
        </ejs-grid>




    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Page, Sort, Toolbar, ExcelExport, Filter  } from "@syncfusion/ej2-vue-grids";
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { auth } from "../firebase";
import { data } from '../assets/bigDataChecklist.js';

let userAdmin = localStorage.getItem("admin");
if (!userAdmin || auth.currentUser == null){self.location='/login'}
 
localStorage.removeItem("estado")

Vue.use(GridPlugin);

let hoje = new Date()
const dataHoje = hoje.getDate()+"/"+(hoje.getMonth()+1)+"/"+hoje.getFullYear();


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
                    fileName:"RESPOSTAS_CHECKLIST.xlsx",
                    header: {
                        headerRows: 1,
                        rows: [
                            { cells: [
                              { colSpan: 8, value: "Data: "+dataHoje},
                             /* { colSpan: 1, value: ""},
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
                              */
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