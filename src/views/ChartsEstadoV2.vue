<template>
   <v-container
      fill-height
      fluid
      grid-list-xl>
      <v-layout wrap>
         <v-flex
            sm4
            xs12
            md4
            lg2>
            <div id="caixa" style="width: 110px; height: 200px;top: 150px;margin-left:1150px;align:center">
               <!--div class="tertiary--text font-weight-bold" style="margin-top:80px;margin-left: 10px" id="tituloPergunta">Pergunta: 1</div-->
               <a  id="next"  title="Próximo"  v-on:click="setas('next')"></a>
               <a  id="prev"  title="Anterior" v-on:click="setas('prev')"></a>
               <a  id="myBtn" title="Voltar ao Topo" v-on:click="topFunction()" >Topo</a>         
            </div>
            <div class="loading-screen" v-show="loading" v-bind:class="classes" v-bind:style="{backgroundColor:bc}">
               <component v-if="customLoader" v-bind:is="customLoader"></component>
               <div v-else>
                  <div class="loading-circle"></div>
                  <p class="loading-text">{{text}}</p>
               </div>
            </div>
            <div id="user_content" style="position:fixed;height:406px;margin-bottom:-60px;width:1450px;top:0px;margin-left:0px;background:#EEEEEE"> </div>
            <br>
            <v-container fluid style="width:11%;margin-bottom:4px;position:fixed">
               <v-layout row wrap>
                  <v-flex xs12>

                     <v-select                
                        :items="items"
                        v-model="select"
                        label="Painel"
                        single-line
                        item-text="report"
                        item-value="src"
                        return-object
                        persistent-hint
                        v-on:input="changeRoute(`${select.src}`)"
                        :hint="`${select.src}`"
                        ></v-select>
                     <v-select                
                        :items="items2"
                        v-model="select"
                        label="Gráficos"
                        single-line
                        item-text="report"
                        item-value="src"
                        return-object
                        persistent-hint
                        v-on:input="changeRoute(`${select.src}`)"
                        :hint="`${select.src}`"
                        ></v-select>
                     <v-select                
                        :items="items3"
                        v-model="select"
                        label="Tipo de Relatório"
                        single-line
                        item-text="report"
                        item-value="src"
                        return-object
                        persistent-hint
                        v-on:input="changeRoute(`${select.src}`)"
                        :hint="`${select.src}`"
                        ></v-select> 
                  </v-flex>
               </v-layout>
            </v-container>
            
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <template>
               <div class="card text-center m-3" style="position:fixed;width:1414px;top:120px;left:524px">
                  <div class="card-body">
                     <div v-for="group in pageOfItems" :key="group.id">
                        <v-form ref="form_research" lazy-validation>
                           <material-card 
                              class="card-tabs"
                              :color="color"
                              elevation="3"
                              dense
                              fixed
                              style="margin-top:-5px;position:absolute;font-size:18px;text-align: justify-all!important;width:85%"
                              >
                              <v-flex slot="header"
                                 style="height: 140px;overflow-y:auto !important"
                                 >
                                 <span
                                    class="subheading font-weight-light mr-3"
                                    style="align-self: center"
                                    v-html="'<b style=\'font-size:18px\'><center>Pergunta: '+group.id+'</center><br></b>'+group.answer"
                                    ></span>
                                 <input type="hidden" id="pergunta" name="pergunta" :value="group.id" :key="componentKey">
                              </v-flex>
                              <v-layout wrap>
                                 <v-flex md4 v-for="item in group.response">
                                    <v-card style="height: 130px;width:398px"
                                       class="pa-3"
                                       outlined
                                       tile                                
                                       >
                                       {{item.name}}
                                    </v-card>
                                 </v-flex>
                              </v-layout>
                           </material-card>
                        </v-form>
                     </div>
                  </div>
               </div>
            </template>
           
         </v-flex>

         <v-flex
            sm8
            xs12
            md8
            lg8>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <template>

               <div class="card text-center m-3" style="margin-left:-224px!important">
                  <div class="card-body">
                     <div v-for="group in pageOfItems" :key="group.id">  
                        <v-form ref="form_research" lazy-validation :key="componentKey">
                           <apexchart
                           ref="exampleChart"
                           width="120%" 
                           height="500px" 
                           type="bar" 
                           :options="chartOptions" 
                           :series="series"
                           :key="componentKey"/>
                           <div v-html="setaGrupoPergunta(grupo,group.id)" />
                        </v-form>
                     </div>
                  </div>
                  <div class="social font-weight-light theme--dark" style="padding-right:30px;height: 33px;border: 1px solid #ddd;position:fixed;bottom:3px;right:0;z-index:0px;padding:0px;color:white!important;background-color: #EBEBEB">
                     <p align="center">
                        <jw-pagination :items="combined" :pageSize=1 @changePage="onChangePage"></jw-pagination>
                        <br>
                     </p>
                  </div>
               </div>
            </template>
         </v-flex>
      </v-layout>
   </v-container>
</template>
<script>
   import {db, auth, usersCollection, fireSQL} from "../firebase";
   import ufid from "../assets/estado.js";
   
   localStorage.removeItem("munic")
   
   let userAdmin = localStorage.getItem("admin");
   
   //if (!userAdmin || auth.currentUser == null){self.location='/quest'}
   
   localStorage.setItem("titulo", "charts");
   
     export default {
       data() {
         return {
           grupo: 0,
           valObj: [],
           results: [],
           pergunta: 0,
           arrayTmp: [],
           chartOptions: {
            chart: {
              id: 'vuechart-example',
            toolbar: {
              show: false
            },                
              events: {
                dataPointMouseLeave(event, chartContext, config) {
                    console.log(chartContext,config)
                   
                }
            }
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: undefined,
                formatter: function (val, opts) {
                    return val
                },
                textAnchor: 'middle',
                distributed: false,
                offsetX: 0,
                offsetY: 0,
                style: {
                    fontSize: '10px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 'bold',
                    colors: undefined
                },
                background: {
                  enabled: true,
                  foreColor: '#fff',
                  padding: 5,
                  borderRadius: 2,
                  borderWidth: 1,
                  borderColor: '#fff',
                  opacity: 0.9,
                  dropShadow: {
                    enabled: false,
                    top: 1,
                    left: 1,
                    blur: 1,
                    color: '#000',
                    opacity: 0.45
                  }
                },
                dropShadow: {
                    enabled: false,
                    top: 1,
                    left: 1,
                    blur: 1,
                    color: '#000',
                    opacity: 0.45
                }
            },
            plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '75%',
                  endingShape: 'rounded'
                }
            },
            tooltip: {
                enabled: false,
                followCursor: true,
                x: {
                    format: 'dd MMM',
                    formatter: undefined,
                },

                yaxis: {
                    labels: {
                        formatter: (value) => { return val + "%" },
                    },
                },

            },
            xaxis: {
            //  categories: ['Rondônia', 'Acre', 'Amazonas', 'Roraima', 'Pará', 'Amapá', 'Tocantins', 'Maranhão', 'Piauí', 'Ceará', 'Rio Grande do Norte', 'Paraíba', 'Pernambuco', 'Alagoas', 'Sergipe', 'Bahia', 'Minas Gerais', 'Espírito Santo', 'Rio de Janeiro', 'São Paulo', 'Mato Grosso do Sul', 'Mato Grosso', 'Goiás', 'Distrito Federal', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul']
            categories: []
            },
            //labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'],
            labels: [],
            legend: {
              show: true,
              showForSingleSeries: false,
              showForNullSeries: true,
              showForZeroSeries: true,
              position: 'bottom',
              horizontalAlign: 'center', 
              floating: false,
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial',
              fontWeight: 400,
              formatter: undefined,
              inverseOrder: false,
              width: undefined,
              height: undefined,
              tooltipHoverFormatter: undefined,
              offsetX: 0,
              offsetY: 0,
              labels: {
                  colors: undefined,
                  useSeriesColors: false
              },
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: '#000',
                fillColors: undefined,
                radius: 12,
                customHTML: function() {
                  return '<br/>'
                },
                //onClick: undefined,
                offsetX: 0,
                offsetY: 0
            }
            }
          },
          series: [{
              name: 'Sim',
              data: []
            }, {
              name: 'A água está disponível nas instalações da escola para todas as necessidades, em quantidade suficiente mas não durante todo o ano letivo.',
              data: []
            }, {
              name: 'Não há água disponível nas instalações da escola para todas as necessidades, seja em quantidade suficiente, seja por que não está disponível durante o ano letivo.',
              data: []
            }],
           grupo: 0,
           pergunta: 0,
           index_pergunta: 0,
           combined: [],
           pageOfItems: [],
           componentKey: 0,
           select: { report: 'Rep1', src: '' },
          items: [
             { report: 'Região e Estados', src: '/resultsv2' },
             { report: 'Territórios', src: '/resultsterritoriov2' },
           ],
           select: { report: 'Rep2', src: '' },
           items2: [
             { report: 'Região', src: '/chartsregiaov2' },
             { report: 'Território', src: '/chartsterritoriov2' },
           ],
           items3: [
             { report: 'Região', src: '/relatorioregiaov2' },
             { report: 'Estado', src: '/mapabrasil' },
             { report: 'Território', src: '/relatorioterritoriov2' },
           ],
           text: 'Consultando dados, aguarde',
           dark: false,
           classes: null,
           loading: false,
           background: null,
           customLoader: null,
           i_aux: [
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},
             {valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'},{valor: '0'}
           ],        
           cards: [
             {title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6},
             {title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6}
           ],
           quest: [
   
             {
               id: 0,
               group: "1. Água",
               questions: [
                 {
                   id: 1,
                   answer: '<span>A água está disponível nas instalações da escola sempre e em quantidade suficiente para todos os tipos de necessidade</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'A água está disponível nas instalações da escola para todas as necessidades, em quantidade suficiente mas não durante todo o ano letivo.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'Não há água disponível nas instalações da escola para todas as necessidades, seja em quantidade suficiente, seja por que não está disponível durante o ano letivo.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 2,
                   answer: '<span>Existe armazenamento de água e ele é suficiente para satisfazer as necessidades da escola durante, pelo menos, dois dias</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'O armazenamento de água é insuficiente para satisfazer as necessidades da escola.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'Não há armazenamento de água.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 3,
                   answer: "<span>A água está tratada com cloro (teor mínimo,  0,2 - 0,5 mg/L de cloro residual livre) ou com um método comprovado e que segue as especificações do Ministério da Saúde [Portaria nº 2.914/2011 do Ministério da Saúde determina a obrigatoriedade de se manter, no mínimo, 0,2 mg/L de cloro residual livre ou 2 mg/L de cloro residual combinado em toda a extensão do sistema de distribuição (reservatório e rede)]  ou da Organização Mundial da Saúde (OMS)</span>",
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Água tratada, mas abaixo do teor mínimo (de 0 a 0,2 mg/l) no momento do estudo.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'Nenhum tratamento foi relatado.',
                       value: 0,
                     }
                   ]
                 }
               ],
               recommendations: [
                 {
                   id: 1,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Verifique com o prestador de serviço de água local as alternativas ou soluções para o fornecimento mais regular na escola.</li>"
                     + "<li>Viabilize o serviço de abastecimento onde não houver ligação da escola ao sistema de abastecimento de água.</li>"
                     + "<li>Providencie o abastecimento móvel de água para a reabertura das escolas, enquanto mais soluções são estudadas.</li>"
                     + "</ul>"
                     + "</span></strong>"
                 },
                 {
                   id: 2,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Providencie reservatórios complementares de armazenamento de água.</li>"
                     + "<li>Viabilize a aquisição de reservatórios de água, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                     + "</ul>"
                     + "</span></strong>"
                 },
                 {
                   id: 3,
                   text: "<span>"
                     + "<ul>"
                     + "<li>Busque informações sobre como verificar o teor mínimo de cloro residual livre. <br/>"
                     + " <a href=\"http://www.funasa.gov.br/site/wp-content/files_mf/manual_pratico_de_analise_de_agua_2.pdf\" target=\"_blank\">Clique para acessar o Manual Prático de Análise de Água</a> </li>"
                     + "<li>Verifique junto ao prestador de serviço de água se a água fornecida à escola é adequadamente clorada.</li>"
                     + "</ul>"
                     + "</span>"
                 }
               ],
               limitForGroupRecommendation: 3,
               headerRecommendation: "<span><strong>É recomendado que o gestor escolar, em direta articulação com a Secretaria de Educação, e em coordenação com outras autoridades locais:</strong></span>",
               groupRecommendation: "<span>Discuta as limitações no fornecimento de água em sua escola e, conjuntamente com a Secretaria, busque possíveis soluções para antes da reabertura, especialmente em locais de alta incidência de casos de COVID-19.</span>"
             },
   
             {
               id: 1,
               group: "2. Higiene das mãos e menstrual",
               questions: [
                 {
                   id: 4,
                   answer: "<span>Há pias ou locais para a lavagem de mãos com água e sabão na entrada da escola. </span>",
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Há pias ou locais para a lavagem de mãos com água na entrada, mas sem sabão.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'A escola não dispõe de pias ou de locais  para a lavagem de mãos em funcionamento nas suas entradas.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 5,
                   answer: "<span>Há pias ou locais para a lavagem de mãos com água e sabão na frente das salas de aula e a menos de 5 metros de cada banheiro</span>",
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Há pias ou locais para a lavagem das mãos, com água, próximas das salas de aula, mas sem sabão.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'As pias ou locais de lavagem das mãos não estão próximos das salas de aula.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 6,
                   answer: '<span>São organizadas atividades de lavagem de mãos para todos os estudantes, pelo menos três vezes por dia na escola</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'As atividades de lavagem de mãos são organizadas, mas não três vezes por dia e nem todos os dias da semana.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'Não há atividades de lavagem de mãos.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 7,
                   answer: '<span>' +
                     'Os seguintes recursos para a higiene menstrual estão disponíveis na escola:' +
                     '<br/> i) duchas higiênicas ou locais de banho' +
                     '<br/> ii) itens de higiene (por exemplo, absorventes íntimos)' +
                     '<br/> iii) educação sobre higiene menstrual' +
                     '<br/> iv) cesto de lixo com tampa' +
                     '<br/> v) pias para lavagem das mãos perto dos banheiros.' +
                     '</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Pelo menos um ou dois, mas não todos; recursos para a higiene menstrual estão disponíveis na escola.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'Nenhum dos recursos para a higiene menstrual está disponível na escola.',
                       value: 0,
                     }
                   ]
                 }
               ],
               recommendations: [
                 {
                   id: 4,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Instale pias ou locais para lavagem das mãos, com disponibilidade de sabão, em todas as entradas da escola;</li>"
                     + "<li>Certifique-se que a escola disponha continuamente de sabão, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                     + "</ul>"
                     + "</span></strong>"
                 },
                 {
                   id: 5,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Instale pias ou locais para lavagem das mãos, com disponibilidade de sabão, nas proximidades de todos os banheiros.</li>"
                     + "</ul>"
                     + "</span></strong>"
                 },
                 {
                   id: 6,
                   text: "<span>"
                     + "<ul>"
                     + "<li>Promova, juntamente com a Secretaria e a comunidade escolar, a realização de atividades de sensibilização e de lavagem de mãos em grupo, chamando a atenção de estudantes para a importância da higiene das mãos.</li>"
                     + "</ul>"
                     + "</span>"
                 },
                 {
                   id: 7,
                   text: "<span>"
                     + "<ul>"
                     + "<li>Promova, juntamente com a Secretaria e a comunidade escolar, a importância da higiene menstrual;</li>"
                     + "<li>Viabilize a existência de espaços e a disponibilidade de materiais adequados e seguros para a prática da higiene menstrual.</li>"
                     + "</ul>"
                     + "</span>"
                 }
               ],
               limitForGroupRecommendation: 4,
               headerRecommendation: "<span><strong>É recomendado que o gestor escolar, em direta articulação com a Secretaria de Educação, e em coordenação com outras autoridades locais:</strong></span>",
               groupRecommendation: "<span>Discuta as limitações para a lavagem das mãos e higiene menstrual em sua escola e conjuntamente com a Secretaria busque possíveis soluções para antes da reabertura, especialmente em locais de alta incidência de casos de COVID-19.</span>"
             },
   
             {
               id: 2,
               group: "3. Saneamento",
               questions: [
                 {
                   id: 8,
                   answer: '<span>A escola tem um número suficiente de banheiros ou vasos sanitários funcionando para uso dos estudantes.</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'A escola tem um número suficiente de banheiros ou sanitários, mas estes não funcionam.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'A escola não dispõe de banheiros ou sanitários suficientes.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 9,
                   answer: '<span>Os banheiros ou sanitários estão claramente separados para meninos e meninas</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Alguns banheiros estão claramente separados, mas não todos.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'Não há banheiros separados.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 10,
                   answer: '<span>A escola tem um número suficiente de banheiros ou sanitários para os professores e funcionários.</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'A escola tem um número suficiente de banheiros ou sanitários, mas estes não funcionam.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'A escola não dispõe de banheiros ou sanitários suficientes.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 11,
                   answer: '<span>O piso, a maçaneta da porta, a área dos banheiros e sanitários são limpos pelo menos uma vez por dia, com água e detergente, e são desinfectados com água sanitária</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Os sanitários são limpos, mas não todos os dias ou com água e detergente; e não desinfectados com água sanitária.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'Os banheiros ou sanitários não são limpos regularmente.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 12,
                   answer: '<span>Todos os banheiros têm pia ou um local para a lavagem de mãos com água e sabão em um raio mínimo de 5 metros</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Pias ou locais para lavagem de mãos com água, mas sem sabão ou a mais de 5 metros dos banheiros ou sanitários.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'Pias ou locais para lavagem de mãos sem água e sabão ou pias ou locais inexistentes.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 13,
                   answer: '<span>Há lixeiras em cada sala de aula, nos banheiros e sanitários e em locais estratégicos nas dependências da escola, e o lixo é recolhido de forma segura</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Há lixeiras na escola, mas não em cada sala de aula, cada banheiro ou sanitário, ou outros locais importantes ou o lixo não é recolhido todos os dias.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'Sem lixeiras nas salas de aula e em outros locais.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 14,
                   answer: '<span>Os resíduos sólidos (lixo) da escola são descartados de forma segura.</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Os resíduos sólidos são retirados de forma segura e levados para aterros sanitários, adequadamente.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'Os resíduos sólidos são retirados da escola, mas de forma inadequada.',
                       value: 0,
                     }
                   ]
                 }
               ],
               recommendations: [
                 {
                   id: 8,
                   text: "<span>"
                     + "<ul>"
                     + "<li>Instale mais banheiros para estudantes, com vasos sanitários em quantidade suficiente, e/ou o repare de estruturas que não funcionem, excepcionalmente, providenciando banheiros químicos e sua manutenção regular e adequada.</li>"
                     + "</ul>"
                     + "</span>"
                 },
                 {
                   id: 9,
                   text: "<span>"
                     + "<ul>"
                     + "<li>Promova a importância de ter banheiros separados para meninas e meninos, sinalizados claramente. Viabilize a separação dos banheiros e sanitários quando necessário e o quanto antes.</li>"
                     + "</ul>"
                     + "</span>"
                 },
                 {
                   id: 10,
                   text: "<span>"
                     + "<ul>"
                     + "<li>Instale mais banheiros para professores e funcionários, com vasos sanitários em quantidade suficiente, e/ou o repare de estruturas que não funcionem, excepcionalmente, providenciando banheiros químicos e sua manutenção regular e adequada.</li>"
                     + "</ul>"
                     + "</span>"
                 },
                 {
                   id: 11,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Crie, antes da reabertura, orientações e rotinas diárias de limpeza e desinfecção nas escolas.</li>"
                     + "</ul>"
                     + "</span></strong>"
                 },
                 {
                   id: 12,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Instale mais pias ou locais para lavagem das mãos, com disponibilidade de sabão, próximos a cada grupo de banheiros.</li>"
                     + "<li>Certifique-se que a escola disponha continuamente de sabão, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                     + "</ul>"
                     + "</span></strong>"
                 },
                 {
                   id: 13,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Instale lixeiras em cada sala de aula, nos banheiros e em locais estratégicos da escola. </li>"
                     + "<li>Viabilize a aquisição de lixeiras, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                     + "</ul>"
                     + "</span></strong>"
                 },
                 {
                   id: 14,
                   text: "<span>"
                     + "<ul>"
                     + "<li>Promova a importância de gerir e descartar resíduos sólidos adequadamente, com a orientação e o apoio dos órgãos responsáveis pela prestação dos serviços de limpeza urbana e manejo dos resíduos sólidos.</li>"
                     + "<li>Certifique-se de que ocorre o recolhimento e destinação final adequada dos resíduos da escola, com o apoio dos órgãos responsáveis pela prestação dos serviços de limpeza urbana e manejo dos resíduos sólidos.</li>"
                     + "</ul>"
                     + "</span>"
                 }
               ],
               limitForGroupRecommendation: 7,
               headerRecommendation: "<span><strong>É recomendado que o gestor escolar, em direta articulação com a Secretaria de Educação, e em coordenação com outras autoridades locais, em especial os provedores de serviços de água e esgoto e de limpeza urbana e manejo dos resíduos sólidos:</strong></span>",
               groupRecommendation: "<span>Discuta as limitações dos serviços de água e esgoto e/ou de limpeza urbana e manejo dos resíduos sólidos em sua escola e conjuntamente com a Secretaria busque possíveis soluções para antes da reabertura, especialmente em locais de alta incidência de casos de COVID-19.</span>"
             },
   
             {
               id: 3,
               group: "4. Prevenção e controle de infecções",
               questions: [
                 {
                   id: 15,
                   answer: '<span>Todas as salas de aula dispõem de material informativo sobre o COVID-19 e outras doenças infecciosas.</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Há informações sobre a COVID-19 e outras doenças infecciosas disponíveis, mas não em todas as salas de aula.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'Não há informação disponível sobre a COVID-19 e outras doenças infecciosas.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 16,
                   answer: '<span>Há pessoal designado e informado, professores, equipe de limpeza, funcionários, estudantes mais velhos, membros da comunidade ou associações que atuem no tema de água e saneamento e de prevenção e controle de doenças transmissíveis para supervisionar os locais de lavagem de mãos e banheiros (disponibilidade de água e sabão, manutenção, comportamento de lavagem de mãos e respeito às normas de distanciamento físico, etc).</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Apenas uma pessoa é capacitada em protocolos de saúde escolar para o COVID-19 e nem sempre está presente na escola.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'Não há pessoas formadas nos protocolos de saneamento.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 17,
                   answer: '<span>Há um planejamento claro e detalhando para a limpeza de toda a dependência escolar, que é supervisionado e aplicado.</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Há um planejamento claro e detalhando de limpeza, mas não cumprido ou monitorado.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'Não há um planejamento de limpeza.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 18,
                   answer: '<span>Estão disponíveis equipamentos de proteção individual (máscaras, luvas) para a equipe de limpeza, e materiais de limpeza apropriados e bem armazenados (detergente, esfregão, vassouras, baldes, etc.).</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Sim, estão disponíveis, mas não bem conservados ou não há disponibilidade de material ou equipamento.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'Nenhum equipamento ou material de limpeza disponível.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 19,
                   answer: '<span>É respeitada a distância física entre os professores e os estudantes, e entre os estudantes, nas salas de aula (pelo menos 1,5 metro).</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'O distanciamento físico é exercido de forma irregular, quer devido ao espaço limitado em algumas aulas, quer porque não é praticado em todos os momentos.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'Não há espaço suficiente na sala de aula para a distância física ou professores e alunos não a praticam de todo.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 20,
                   answer: '<span>É respeitada a distância física entre os usuários dos locais de lavagem de mãos ou enquanto fazem fila para ir ao banheiro</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'O distanciamento físico é implementado e respeitado de forma irregular.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'O distanciamento físico durante a lavagem das mãos não é totalmente implementado ou respeitado.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 21,
                   answer: '<span>Se há um refeitório escolar, a distância física entre os estudantes é implementado e respeitada</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'A distância física entre os assentos dos estudantes no refeitório só é implementado às vezes ou desrespeitado.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'A distância física entre os assentos dos estudantes no refeitório não é implementado ou respeitado.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 22,
                   answer: '<span>A equipe da cozinha usa máscaras e dispõe de locais para a lavagem ou produtos desinfectantes para as mãos</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'O pessoal da cozinha não usa máscaras regularmente e não tem água para lavar as mãos, ou produtos desinfectantes para as mãos, com regularidade.',
                       value: 1,
                     },
                     {
                       id: 2,
                       name: 'O pessoal da cozinha não usa máscaras e não tem água para lavar as mãos ou produtos desinfectantes para as mãos.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 23,
                   answer: '<span>As salas de aulas têm uma boa ventilação natural</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
   
                     {
                       id: 2,
                       name: 'Não',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 24,
                   answer: '<span>Existe um protocolo para identificar os estudantes com sintomas de COVID-19 e informar às autoridades sanitárias.</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Existe um protocolo mas, não é conhecido pelos professores ou pelos estudantes.',
                       value: 1
                     },
                     {
                       id: 2,
                       name: 'Não há protocolo',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 25,
                   answer: '<span>A escola dispõe de um espaço privado, designado para o isolamento de estudantes com sintomas de COVID -19, onde possam aguardar que seus responsáveis os busquem</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Os alunos com sintomas são isolados em espaço aberto enquanto esperam que seus responsáveis os busquem.',
                       value: 1
                     },
                     {
                       id: 2,
                       name: 'Não há espaço designado para estudantes com sintomas de COVID-19.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 26,
                   answer: '<span>A escola tem uma reserva de máscaras para uso dos estudantes, que tenham sido identificados com sintomas de COVID, até que seus responsáveis os busquem</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'A escola não tem uma reserva suficiente de máscaras para os alunos detectados com sintomas de COVID-19.',
                       value: 1
                     },
                     {
                       id: 2,
                       name: 'A escola não possui uma reserva de máscaras para estudantes detectados com sintomas de COVID-19.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 27,
                   answer: '<span>Na escola onde se recomenda o uso de máscaras, todos os estudantes têm acesso a máscaras (em particular estudantes de famílias mais vulneráveis)</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Alguns estudantes não têm acesso a máscaras.',
                       value: 1
                     },
                     {
                       id: 2,
                       name: 'Nenhum estudante tem acesso a máscaras.',
                       value: 0,
                     }
                   ]
                 },
                 {
                   id: 28,
                   answer: '<span>Há uma lista de controle para uso da equipe de limpeza e funcionários para monitorar os pontos críticos.</span>',
                   selected: null,
                   response: [
                     {
                       id: 0,
                       name: 'Sim',
                       value: 2,
                     },
                     {
                       id: 1,
                       name: 'Existe uma lista de controle, mas não é utilizada regularmente.',
                       value: 1
                     },
                     {
                       id: 2,
                       name: 'Não há lista de controle.',
                       value: 0,
                     }
                   ]
                 }
               ],
               recommendations: [
                 {
                   id: 15,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Coloque cartazes sobre a prevenção e transmissão do COVID-19 em cada sala de aula, banheiros e em locais estratégicos da escola. Busque apoio para a produção e obtenção de materiais educativos sobre COVID-19, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                     + "</ul>"
                     + "</span></strong>"
                 },
                 {
                   id: 16,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Identifique pessoas (incluindo da comunidade escolar) para que se tornem pontos focais de água, esgotamento sanitário, higiene e saúde escolar, oferecendo informações e orientações, presenciais ou à distância.</li>"
                     + "</ul>"
                     + "</span></strong>"
                 },
                 {
                   id: 17,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Elabore um planejamento de limpeza e desinfecção das dependências das escolas.</li>"
                     + "</ul>"
                     + "</span></strong>"
                 },
                 {
                   id: 18,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Verifique a disponibilidade de equipamentos e materiais de limpeza e desinfecção e, se for o caso, viabilize-os antes da reabertura da escola.</li>"
                     + "<li>Viabilize a disponibilidade de equipamentos ou materiais de limpeza e desinfecção ou dos recursos para sua aquisição, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                     + "</ul>"
                     + "</span></strong>"
                 },
                 {
                   id: 19,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Crie condições que permitam o distanciamento físico adequado ou quais as melhores alternativas: uso de máscara, turnos escolares etc.</li>"
                     + "</ul>"
                     + "</span></strong>"
                 },
                 {
                   id: 20,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Sinalize, antes da reabertura, o chão das pias ou dos locais de lavagem de mãos e dos banheiros para indicar a distância física entre os usuários. Assegure que o distanciamento seja respeitado.</li>"
                     + "</ul>"
                     + "</span></strong>"
                 },
                 {
                   id: 21,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Sinalize, antes da reabertura, o chão dos locais das carteiras e das áreas do refeitório para indicar a distância física entre os usuários. Assegure que o distanciamento seja respeitado.</li>"
                     + "</ul>"
                     + "</span></strong>"
                 },
                 {
                   id: 22,
                   text: "<span>"
                     + "<ul>"
                     + "<li>Disponibilize máscaras faciais e produtos desinfetantes para as mãos, para funcionários da cozinha.</li>"
                     + "<li>Viabilize a disponibilidade de máscaras faciais e produtos desinfetantes para as mãos ou dos recursos para sua aquisição, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                     + "</ul>"
                     + "</span>"
                 },
                 {
                   id: 23,
                   text: "<span>"
                     + "<ul>"
                     + "<li>Promova a importância de uma boa ventilação em todas as salas de aula e busque soluções para os espaços da escola que não têm ventilação suficiente.</li>"
                     + "</ul>"
                     + "</span>"
                 },
                 {
                   id: 24,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Busque junto aos órgãos responsáveis pela Saúde, orientações para a pronta identificação de estudantes com sintomas de COVID-19.</li>"
                     + "</ul>"
                     + "</span>"
                 },
                 {
                   id: 25,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Reserve um espaço privado, com acesso à água potável e banheiro, para o isolamento de estudantes com sintomas de COVID -19, onde devem ficar até que os responsáveis venham buscá-los.</li>"
                     + "</ul>"
                     + "</span></strong>"
                 },
                 {
                   id: 26,
                   text: "<span><strong>"
                     + "<ul>"
                     + "<li>Disponibilize máscaras faciais para estudantes que apresentem sintomas de COVID-19.</li>"
                     + "<li>Viabilize a disponibilidade de máscaras faciais ou dos recursos para sua aquisição, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                     + "</ul>"
                     + "</span></strong>"
                 },
                 {
                   id: 27,
                   text: "<span>"
                     + "<ul>"
                     + "<li>Disponibilize (nos Estados e Municípios em que for recomendado) máscaras faciais para os estudantes, educadores e funcionários.</li>"
                     + "<li>Viabilize a disponibilidade de máscaras faciais ou dos recursos para sua aquisição, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                     + "</ul>"
                     + "</span>"
                 },
                 {
                   id: 28,
                   text: "<span>"
                     + "<ul>"
                     + "<li>Elabore listas de verificação que permitam acompanhar, ao menos semanalmente, o cumprimento das exigências de água, esgotamento sanitário, higiene e prevenção e controle de doenças transmissíveis.</li>"
                     + "</ul>"
                     + "</span>"
                 }
               ],
               limitForGroupRecommendation: 14,
               headerRecommendation: "<span><strong>É sugerido que o gestor escolar, em direta articulação com a Secretaria de Educação, e em coordenação com outras autoridades locais:</strong></span>",
               groupRecommendation: "<span>Discuta as limitações e dificuldades na prevenção e controle de infecções em sua escola e conjuntamente com a Secretaria busque possíveis soluções para antes da reabertura, especialmente em locais de alta incidência de casos de COVID-19.</span>"
             }
   
           ],
           regions: [],
           users: '',
           loading: true,
           color: 'cyan',
           search: '',
           responses: '',
           rowsPerPageItems: [20, 300, 400, 500],
           pagination: {
             rowsPerPage: 20
           },
           dailySalesChart: {
             data: {
               labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
               series: [[12, 17, 7, 17, 23, 18, 38]]
             },
             options: {
               lineSmooth: this.$chartist.Interpolation.cardinal({
                 tension: 0
               }),
               low: 0,
               high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
               chartPadding: {
                 top: 0,
                 right: 0,
                 bottom: 0,
                 left: 0
               }
             }
           },
           dataCompletedTasksChart: {
             data: {
               labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
               series: [[230, 750, 450, 300, 280, 240, 200, 190]]
             },
             options: {
               lineSmooth: this.$chartist.Interpolation.cardinal({
                 tension: 0
               }),
               low: 0,
               high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
               chartPadding: {
                 top: 0,
                 right: 0,
                 bottom: 0,
                 left: 0
               }
             }
           },
           emailsSubscriptionChart: {
             data: {
               labels: [
                 'Ja',
                 'Fe',
                 'Ma',
                 'Ap',
                 'Mai',
                 'Ju',
                 'Jul',
                 'Au',
                 'Se',
                 'Oc',
                 'No',
                 'De'
               ],
               series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
             },
             options: {
               axisX: {
                 showGrid: false
               },
               low: 0,
               high: 1000,
               chartPadding: {
                 top: 0,
                 right: 5,
                 bottom: 0,
                 left: 0
               }
             },
             responsiveOptions: [
               [
                 'screen and (max-width: 640px)',
                 {
                   seriesBarDistance: 15,
                   axisX: {
                     labelInterpolationFnc: function (value) {
                       return value[0]
                     }
                   }
                 }
               ]
             ]
           },
           norte: {
             id: 1,
             headers: [
               {
                 sortable: false,
                 text: 'Norte',
                 value: 'regioes',
                 width: "230px"
               },
               {
                 sortable: false,
                 text: '',
                 value: 'total'
               }
             ],
             items: [
               {
                 name: 'Rondônia',
                 country: 'Niger',
                 city: 'Oud-Tunrhout',
                 salary: '52'
               },
               {
                 name: 'Acre',
                 country: 'Curaçao',
                 city: 'Sinaai-Waas',
                 salary: '22'
               },
               {
                 name: 'Amazonas',
                 country: 'Netherlands',
                 city: 'Overland Park',
                 salary: '62'
               },
               {
                 name: 'Roraima',
                 country: 'Korea, South',
                 city: 'Gloucester',
                 salary: '15'
               },
               {
                 name: 'Pará',
                 country: 'Malawi',
                 city: 'Feldkirchen in Kārnten',
                 salary: '144'
               },
               {
                 name: 'Amapá',
                 country: 'Chile',
                 city: 'Gloucester',
                 salary: '16'
               },
               {
                 name: 'Tocantins',
                 country: 'Chile',
                 city: 'Gloucester',
                 salary: '139'
               }
             ],
           },
           nordeste: {
             id: 2,
             headers: [
               {
                 sortable: false,
                 text: 'Nordeste',
                 value: 'nordeste',
                 width: "230px"
               },
               {
                 sortable: false,
                 text: '',
                 value: 'total'
               }
             ],
             items: [
               {
                 name: 'Maranhão',
                 country: 'Niger',
                 city: 'Oud-Tunrhout',
                 salary: '52'
               },
               {
                 name: 'Piauí',
                 country: 'Curaçao',
                 city: 'Sinaai-Waas',
                 salary: '22'
               },
               {
                 name: 'Ceará',
                 country: 'Netherlands',
                 city: 'Overland Park',
                 salary: '62'
               },
               {
                 name: 'Rio Grande do Norte',
                 country: 'Korea, South',
                 city: 'Gloucester',
                 salary: '15'
               },
               {
                 name: 'Paraíba',
                 country: 'Malawi',
                 city: 'Feldkirchen in Kārnten',
                 salary: '144'
               },
               {
                 name: 'Pernambuco',
                 country: 'Chile',
                 city: 'Gloucester',
                 salary: '16'
               },
               {
                 name: 'Alagoas',
                 country: 'Chile',
                 city: 'Gloucester',
                 salary: '139'
               },
               {
                 name: 'Sergipe',
                 country: 'Chile',
                 city: 'Gloucester',
                 salary: '139'
               },
               {
                 name: 'Bahia',
                 country: 'Chile',
                 city: 'Gloucester',
                 salary: '139'
               }
             ],
           },
           sudeste: {
             id: 3,
             headers: [
               {
                 sortable: false,
                 text: 'Sudeste',
                 value: 'regioes',
                 width: "230px"
                 
               },
               {
                 sortable: false,
                 text: '',
                 value: 'total'
               }
             ],
             items: [
               {
                 name: 'Minas Gerais',
                 country: 'Niger',
                 city: 'Oud-Tunrhout',
                 salary: '52'
               },
               {
                 name: 'Espirito Santo',
                 country: 'Curaçao',
                 city: 'Sinaai-Waas',
                 salary: '22'
               },
               {
                 name: 'Rio de Janeiro',
                 country: 'Netherlands',
                 city: 'Overland Park',
                 salary: '62'
               },
               {
                 name: 'São Paulo',
                 country: 'Korea, South',
                 city: 'Gloucester',
                 salary: '15'
               }
             ],
           },
           sul: {
             id: 4,
             headers: [
               {
                 sortable: false,
                 text: 'Sul',
                 value: 'regioes',
                width: "230px"
               },
               {
                 sortable: false,
                 text: '',
                 value: 'total'
               }
             ],
             items: [
               {
                 name: 'Paraná',
                 country: 'Niger',
                 city: 'Oud-Tunrhout',
                 salary: '52'
               },
               {
                 name: 'Santa Catarina',
                 country: 'Curaçao',
                 city: 'Sinaai-Waas',
                 salary: '22'
               },
               {
                 name: 'Rio Grande do Sul',
                 country: 'Netherlands',
                 city: 'Overland Park',
                 salary: '62'
               }
             ],
           },
           centro_oeste: {
             id: 5,
             headers: [
               {
                 sortable: false,
                 text: 'Centro Oeste',
                 value: 'regioes',
                 width: "230px"
               },
               {
                 sortable: false,
                 text: '',
                 value: 'total'
               }
             ],
             items: [
               {
                 name: 'Mato Grosso do Sul',
                 country: 'Niger',
                 city: 'Oud-Tunrhout',
                 salary: '52'
               },
               {
                 name: 'Mato Grosso',
                 country: 'Curaçao',
                 city: 'Sinaai-Waas',
                 salary: '22'
               },
               {
                 name: 'Goiás',
                 country: 'Netherlands',
                 city: 'Overland Park',
                 salary: '62'
               },
               {
                 name: 'Distrito Federal',
                 country: 'Korea, South',
                 city: 'Gloucester',
                 salary: '15'
               }
             ],
           },
           headers: [
             {
               sortable: false,
               text: 'Nome',
               value: 'name',
               field: 'name',
               label: 'Nome'
             },
             {
               sortable: false,
               text: 'Telefone',
               value: 'telefone',
               align: 'left',
               field: 'telefone',
               label: 'Telefone'
             },
             {
               sortable: false,
               text: 'Cidade',
               value: 'city',
               align: 'left',
               field: 'city',
               label: 'Cidade'
             },
             {
               sortable: false,
               text: 'UF',
               value: 'UF',
               align: 'left',
               field: 'uf',
               label: 'UF'
             },
             {
               sortable: false,
               text: 'Escola',
               value: 'school',
               align: 'left',
               field: 'school',
               label: 'Escola'
             }
           ],
         }
       },
   
   
       methods: {
        atualizarGrafico(pergunta,resposta1,resposta2,resposta3,flag_first) {

               this.series[0].name = resposta1;
               this.series[1].name = resposta2;
               this.series[2].name = resposta3;

               let geoParaConsulta = [
                {ibge: '11', sg_uf: 'RO'},
                {ibge: '12', sg_uf: 'AC'},
                {ibge: '13', sg_uf: 'AM'},
                /* ESSE AQUI NÃO TEM QUEST NA PRODUÇÃO */
                {ibge: '14', sg_uf: 'RR'},
                {ibge: '15', sg_uf: 'PA'},
                /* ESSE AQUI NÃO TEM QUEST NA PRODUÇÃO */
                {ibge: '16', sg_uf: 'AP'},
                {ibge: '17', sg_uf: 'TO'},
                {ibge: '21', sg_uf: 'MA'},
                {ibge: '22', sg_uf: 'PI'},
                {ibge: '23', sg_uf: 'CE'},
                {ibge: '24', sg_uf: 'RN'},
                {ibge: '25', sg_uf: 'PB'},
                {ibge: '26', sg_uf: 'PE'},
                {ibge: '27', sg_uf: 'AL'},
                {ibge: '28', sg_uf: 'SE'},
                {ibge: '29', sg_uf: 'BA'},
                {ibge: '31', sg_uf: 'MG'},
                {ibge: '32', sg_uf: 'ES'},
                {ibge: '33', sg_uf: 'RJ'},
                {ibge: '35', sg_uf: 'SP'},
                {ibge: '41', sg_uf: 'PR'},
                {ibge: '42', sg_uf: 'SC'},
                {ibge: '43', sg_uf: 'RS'},
                {ibge: '50', sg_uf: 'MS'},
                {ibge: '51', sg_uf: 'MT'},
                {ibge: '52', sg_uf: 'GO'},
                {ibge: '53', sg_uf: 'DF'}
                ];

                let arrayParaOrdenacao = [];

                /*ARRAY PARA ORDENAÇÃO*/
                for (let geo of geoParaConsulta ) {
                  if (this.consultaQtd(geo.ibge,pergunta,'0') != undefined) {
                    let qntResp_0 = this.consultaQtd(geo.ibge,pergunta,'0');
                    let qntResp_1 = this.consultaQtd(geo.ibge,pergunta,'1');
                    let qntResp_2 = this.consultaQtd(geo.ibge,pergunta,'2');
                    let total = parseInt(qntResp_0) + parseInt(qntResp_1) + parseInt(qntResp_2);

                    arrayParaOrdenacao.push({total: total, qntResp_0: qntResp_0, qntResp_1: qntResp_1, 
                    qntResp_2: qntResp_2, sg_uf: geo.sg_uf});
                  }
                }

                arrayParaOrdenacao.sort((a, b) => (a.total < b.total) ? 1 : -1)


                  let i = 0;
                 for (let array of arrayParaOrdenacao ) {
                      this.series[0].data[i] = array.qntResp_0;
                      this.series[1].data[i] = array.qntResp_1;
                      this.series[2].data[i] = array.qntResp_2;
                     if (flag_first == 1) this.chartOptions.xaxis.categories.push(array.sg_uf);
                     i++;
                }

               //this.chartOptions.xaxis.categories = [this.results];



          /*     this.series[0].data[0] = this.consultaQtd('11',pergunta,'0');
               this.series[1].data[0] = this.consultaQtd('11',pergunta,'1');
               this.series[2].data[0] = this.consultaQtd('11',pergunta,'2');

             //  this.chartOptions.xaxis.categories = ['RO'];
               console.log('aqui leo veio'+this.series[0].data[0]);

               this.series[0].data[1] = this.consultaQtd('12',pergunta,'0');
               this.series[1].data[1] = this.consultaQtd('12',pergunta,'1');
               this.series[2].data[1] = this.consultaQtd('12',pergunta,'2');

               this.series[0].data[2] = this.consultaQtd('13',pergunta,'0');
               this.series[1].data[2] = this.consultaQtd('13',pergunta,'1');
               this.series[2].data[2] = this.consultaQtd('13',pergunta,'2');

               this.series[0].data[3] = this.consultaQtd('14',pergunta,'0');
               this.series[1].data[3] = this.consultaQtd('14',pergunta,'1');
               this.series[2].data[3] = this.consultaQtd('14',pergunta,'2'); 

               this.series[0].data[4] = this.consultaQtd('15',pergunta,'0');
               this.series[1].data[4] = this.consultaQtd('15',pergunta,'1');
               this.series[2].data[4] = this.consultaQtd('15',pergunta,'2');

               this.series[0].data[5] = this.consultaQtd('16',pergunta,'0');
               this.series[1].data[5] = this.consultaQtd('16',pergunta,'1');
               this.series[2].data[5] = this.consultaQtd('16',pergunta,'2');
            
               this.series[0].data[6] = this.consultaQtd('17',pergunta,'0');
               this.series[1].data[6] = this.consultaQtd('17',pergunta,'1');
               this.series[2].data[6] = this.consultaQtd('17',pergunta,'2');
               
               this.series[0].data[7] = this.consultaQtd('21',pergunta,'0');
               this.series[1].data[7] = this.consultaQtd('21',pergunta,'1');
               this.series[2].data[7] = this.consultaQtd('21',pergunta,'2');
               
               this.series[0].data[8] = this.consultaQtd('22',pergunta,'0');
               this.series[1].data[8] = this.consultaQtd('22',pergunta,'1');
               this.series[2].data[8] = this.consultaQtd('22',pergunta,'2');               
            
               this.series[0].data[9] = this.consultaQtd('23',pergunta,'0');
               this.series[1].data[9] = this.consultaQtd('23',pergunta,'1');
               this.series[2].data[9] = this.consultaQtd('23',pergunta,'2');
               
               this.series[0].data[10] = this.consultaQtd('24',pergunta,'0');
               this.series[1].data[10] = this.consultaQtd('24',pergunta,'1');
               this.series[2].data[10] = this.consultaQtd('24',pergunta,'2');

               this.series[0].data[11] = this.consultaQtd('25',pergunta,'0');
               this.series[1].data[11] = this.consultaQtd('25',pergunta,'1');
               this.series[2].data[11] = this.consultaQtd('25',pergunta,'2');

               this.series[0].data[12] = this.consultaQtd('26',pergunta,'0');
               this.series[1].data[12] = this.consultaQtd('26',pergunta,'1');
               this.series[2].data[12] = this.consultaQtd('26',pergunta,'2');
               
               this.series[0].data[13] = this.consultaQtd('27',pergunta,'0');
               this.series[1].data[13] = this.consultaQtd('27',pergunta,'1');
               this.series[2].data[13] = this.consultaQtd('27',pergunta,'2');
               
               this.series[0].data[14] = this.consultaQtd('28',pergunta,'0');
               this.series[1].data[14] = this.consultaQtd('28',pergunta,'1');
               this.series[2].data[14] = this.consultaQtd('28',pergunta,'2');
               
               this.series[0].data[15] = this.consultaQtd('29',pergunta,'0');
               this.series[1].data[15] = this.consultaQtd('29',pergunta,'1');
               this.series[2].data[15] = this.consultaQtd('29',pergunta,'2');               

               this.series[0].data[16] = this.consultaQtd('31',pergunta,'0');
               this.series[1].data[16] = this.consultaQtd('31',pergunta,'1');
               this.series[2].data[16] = this.consultaQtd('31',pergunta,'2');
               
               this.series[0].data[17] = this.consultaQtd('32',pergunta,'0');
               this.series[1].data[17] = this.consultaQtd('32',pergunta,'1');
               this.series[2].data[17] = this.consultaQtd('32',pergunta,'2');    
               
               this.series[0].data[18] = this.consultaQtd('33',pergunta,'0');
               this.series[1].data[18] = this.consultaQtd('33',pergunta,'1');
               this.series[2].data[18] = this.consultaQtd('33',pergunta,'2');    
               
               this.series[0].data[19] = this.consultaQtd('35',pergunta,'0');
               this.series[1].data[19] = this.consultaQtd('35',pergunta,'1');
               this.series[2].data[19] = this.consultaQtd('35',pergunta,'2');    
               
               this.series[0].data[20] = this.consultaQtd('41',pergunta,'0');
               this.series[1].data[20] = this.consultaQtd('41',pergunta,'1');
               this.series[2].data[20] = this.consultaQtd('41',pergunta,'2');    
               
               this.series[0].data[21] = this.consultaQtd('42',pergunta,'0');
               this.series[1].data[21] = this.consultaQtd('42',pergunta,'1');
               this.series[2].data[21] = this.consultaQtd('42',pergunta,'2');    
               
               this.series[0].data[22] = this.consultaQtd('43',pergunta,'0');
               this.series[1].data[22] = this.consultaQtd('43',pergunta,'1');
               this.series[2].data[22] = this.consultaQtd('43',pergunta,'2');    
               
               this.series[0].data[23] = this.consultaQtd('50',pergunta,'0');
               this.series[1].data[23] = this.consultaQtd('50',pergunta,'1');
               this.series[2].data[23] = this.consultaQtd('50',pergunta,'2');    
               
               this.series[0].data[24] = this.consultaQtd('51',pergunta,'0');
               this.series[1].data[24] = this.consultaQtd('51',pergunta,'1');
               this.series[2].data[24] = this.consultaQtd('51',pergunta,'2');    
               
               this.series[0].data[25] = this.consultaQtd('52',pergunta,'0');
               this.series[1].data[25] = this.consultaQtd('52',pergunta,'1');
               this.series[2].data[25] = this.consultaQtd('52',pergunta,'2');
               
               this.series[0].data[26] = this.consultaQtd('53',pergunta,'0');
               this.series[1].data[26] = this.consultaQtd('53',pergunta,'1');
               this.series[2].data[26] = this.consultaQtd('53',pergunta,'2'); */
             

       /*
            this.series = [{
              data: [this.consultaQtd('11',pergunta,'0'), 55, 41, 64, 22, 43, 21]
            }, {
              data: [this.consultaQtd('11',pergunta,'1'), 32, 33, 52, 13, 44, 32]
            }, {
              data: [this.consultaQtd('11',pergunta,'2'), 32, 33, 52, 13, 44, 32]
            }]; */
            
        },
        random(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
         consultaQtd(ibge,idpergunta,resp) {
           let valObj = [];
           switch (resp) {
             case '0':
             valObj = this.results.filter(function(elem){
                if(elem.ibge == ibge&&elem.id_pergunta == idpergunta) { return elem.qntResp_0; }
              });
             if (valObj[0] != undefined) {
              return(valObj[0].qntResp_0);
             }
             break;
             case '1':
             valObj = this.results.filter(function(elem){
                if(elem.ibge == ibge&&elem.id_pergunta == idpergunta) { return elem.qntResp_1; }
              });
             if (valObj[0] != undefined) {
              return(valObj[0].qntResp_1);
             }
             break;
             case '2':
             valObj = this.results.filter(function(elem){
                if(elem.ibge == ibge&&elem.id_pergunta == idpergunta) { return elem.qntResp_2; }
              });
             if (valObj[0] != undefined) {
              return(valObj[0].qntResp_2);
             }
             break;
             case 'total':
             valObj = this.results.filter(function(elem){
                if(elem.ibge == ibge&&elem.id_pergunta == idpergunta) { return elem.total; }
              });
             if (valObj[0] != undefined) {
              return(valObj[0].total);
             }
            break;
           }
            
         },
           myFunction() {
         // `this` inside methods point to the Vue instance
   
          this.current_page = 2;
         },
           changeRoute(a) {
             this.$router.push({path: a })
             console.log(a, this.select.src)
           },
           onChangePage(pageOfItems) {
               // update page of items
               
              // this.chartOptions.xaxis.categories = [];

             //  this.chartOptions.xaxis.categories=[this.results[0].sg_uf];
               console.log(pageOfItems);
               this.pageOfItems = pageOfItems;
               this.atualizarGrafico(pageOfItems[0].id,pageOfItems[0].response[0].name,pageOfItems[0].response[1].name,pageOfItems[0].response[2].name,0);
  
           },
           setas(value){
             if (value == 'prev'){
               $(".previous a")[0].click();
               var number = $("#pergunta").val()-1
               $("#tituloPergunta").text("Pergunta: "+number)
             }else{
               $(".next a")[0].click();
               var number = parseInt($("#pergunta").val()*1)+1
               $("#tituloPergunta").text("Pergunta: "+number)            
             }
           },
           scrollFunction() {
             var mybutton = document.getElementById("myBtn");
             if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
               mybutton.style.display = "block";
             } else {
               mybutton.style.display = "none";
             }
           },
           topFunction() {
             document.body.scrollTop = 0;
             document.documentElement.scrollTop = 0;
           },
           setUf(value){
             let uf = ufid.find((item) => item.value == value);
             setInterval(function () {
               window.location.reload();
               localStorage.setItem("estado", "("+uf.text+")");
             }, 100); 
               
           },
           setaGrupoPergunta(grupo,pergunta)  {
             this.grupo = grupo;
             this.pergunta = pergunta;
         },
         async getData() {

   /* INICIO DO PRÉ-CARREGAMENTO DE TODAS AS INFORMAÇÕES */
           let geoParaConsulta = [
            
            {filtroGeo: 'school.ibge_uf_id', ibge: '11', sg_uf: 'RO'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '12', sg_uf: 'AC'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '13', sg_uf: 'AM'},
            
            /* ESSE AQUI NÃO TEM QUEST NA PRODUÇÃO */
            {filtroGeo: 'school.ibge_uf_id', ibge: '14', sg_uf: 'RR'},

            {filtroGeo: 'school.ibge_uf_id', ibge: '15', sg_uf: 'PA'},

            /* ESSE AQUI NÃO TEM QUEST NA PRODUÇÃO */
            {filtroGeo: 'school.ibge_uf_id', ibge: '16', sg_uf: 'AP'},

            {filtroGeo: 'school.ibge_uf_id', ibge: '17', sg_uf: 'TO'},

            {filtroGeo: 'school.ibge_uf_id', ibge: '21', sg_uf: 'MA'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '22', sg_uf: 'PI'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '23', sg_uf: 'CE'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '24', sg_uf: 'RN'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '25', sg_uf: 'PB'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '26', sg_uf: 'PE'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '27', sg_uf: 'AL'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '28', sg_uf: 'SE'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '29', sg_uf: 'BA'},

            {filtroGeo: 'school.ibge_uf_id', ibge: '31', sg_uf: 'MG'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '32', sg_uf: 'ES'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '33', sg_uf: 'RJ'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '35', sg_uf: 'SP'},

            {filtroGeo: 'school.ibge_uf_id', ibge: '41', sg_uf: 'PR'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '42', sg_uf: 'SC'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '43', sg_uf: 'RS'},

            {filtroGeo: 'school.ibge_uf_id', ibge: '50', sg_uf: 'MS'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '51', sg_uf: 'MT'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '52', sg_uf: 'GO'},
            {filtroGeo: 'school.ibge_uf_id', ibge: '53', sg_uf: 'DF'}
            ];

           let results = [];
            for (let geo of geoParaConsulta) {

            var washData = await db.collection("users").where(geo.filtroGeo, '==', geo.ibge).get().then(function (querySnapshot) {

             let values = querySnapshot.docs;
             let arrayData = [];
             let consolidadoTotal = 0;
             let consolidado0 = 0;
             let consolidado1 = 0;
             let consolidado2 = 0;
             let modelo = undefined;
             let idPergunta = '';
             let quest_complete = 'S';

             for (let i = 0; i < values.length; i++) {
               let obj = {}
               let data = values[i].data();
               obj = data;
               arrayData.push(obj);
             }

             for (let i = 0; i < arrayData.length; i++) {
                if (arrayData[i].quest != undefined) {
                  modelo = i;
                }
             }

             if (modelo != undefined) {

             for (let j = 0; j < arrayData[modelo].quest.length; j++) {
                  if (arrayData[modelo].quest[j].questions != undefined) { 
                    for (let k = 0; k < arrayData[modelo].quest[j].questions.length; k++) {

                      for (let i = 0; i < arrayData.length; i++) {
                        if (arrayData[i].quest != undefined&&arrayData[i].school.quest_complete == 'S') {
                          ((arrayData[i].quest[j].questions[k].selected == '0')&&(arrayData[i].quest[j].questions[k].selected != null)) ? consolidado0++ : '';
                          ((arrayData[i].quest[j].questions[k].selected == '1')&&(arrayData[i].quest[j].questions[k].selected != null)) ? consolidado1++ : '';
                          ((arrayData[i].quest[j].questions[k].selected == '2')&&(arrayData[i].quest[j].questions[k].selected != null)) ? consolidado2++ : '';
                          ((arrayData[i].quest[j].questions[k].selected != null)) ? consolidadoTotal++ : '';
                          ((arrayData[i].quest[j].questions[k].id != null)) ? idPergunta = arrayData[i].quest[j].questions[k].id : '';
                        }
                    }
                   
                    results.push({ibge: geo.ibge, sg_uf: geo.sg_uf, grupo: j.toString(), pergunta: k.toString(), id_pergunta: idPergunta, 
                    total: consolidadoTotal.toString(), qntResp_0: consolidado0.toString(), qntResp_1: consolidado1.toString(), qntResp_2: consolidado2.toString()});
                    consolidado0 = 0;
                    consolidado1 = 0;
                    consolidado2 = 0;
                    consolidadoTotal = 0;
                    idPergunta = '';
                    quest_complete = 'S';
                    }
                  }
              }

             }
             

              console.log(results);


       /*      for (let i = 0; i < arrayData.length; i++) {
                if (arrayData[i].quest != undefined) {
                  ((arrayData[i].quest[0].questions[0].selected == '0')&&(arrayData[i].quest[0].questions[0].selected != null)) ? consolidado0++ : '';
                  ((arrayData[i].quest[0].questions[0].selected == '1')&&(arrayData[i].quest[0].questions[0].selected != null)) ? consolidado1++ : '';
                  ((arrayData[i].quest[0].questions[0].selected == '2')&&(arrayData[i].quest[0].questions[0].selected != null)) ? consolidado2++ : '';
                  ((arrayData[i].quest[0].questions[0].selected != null)) ? consolidadoTotal++ : '';
                }
             }

             results.push({tipo: 'estado', info: '53', grupo: '0', pergunta: '0', total: consolidadoTotal.toString(), 
             qntResp_0: consolidado0.toString(), qntResp_1: consolidado1.toString(), qntResp_2: consolidado2.toString()});

        */     

      /*       for (let i = 0; i < arrayData.length; i++) {
                if (arrayData[i].quest != undefined) {
                  ((arrayData[i].quest[0].questions[0].selected == '0')&&(arrayData[i].quest[0].questions[0].selected != null)) ? consolidado0++ : '';
                  ((arrayData[i].quest[0].questions[0].selected == '1')&&(arrayData[i].quest[0].questions[0].selected != null)) ? consolidado1++ : '';
                  ((arrayData[i].quest[0].questions[0].selected == '2')&&(arrayData[i].quest[0].questions[0].selected != null)) ? consolidado2++ : '';
                  ((arrayData[i].quest[0].questions[0].selected != null)) ? consolidadoTotal++ : '';
                }
             }
        
             results.push({tipo: 'estado', info: '53', grupo: '0', pergunta: '0', total: consolidadoTotal.toString(), 
             qntResp_0: consolidado0.toString(), qntResp_1: consolidado1.toString(), qntResp_2: consolidado2.toString()});

        */     

         /*    for (let i = 0; i < arrayData.length; i++) {
                if (arrayData[i].quest != undefined) { for (let j = 0; j < arrayData[i].quest.length; j++) {
                    if (arrayData[i].quest[j].questions != undefined) { for (let k = 0; k < arrayData[i].quest[j].questions.length; k++) {
                        ((arrayData[i].quest[j].questions[k].selected == '0')&&(arrayData[i].quest[j].questions[k].selected != null)) ? contador++ : '';
                      }
                    }
                  }
                }
             } */

            //  testeArray.push({uf: "sp", resposta: arrayData[0].quest[0].questions[0].selected});
            //  console.log('olha aqui royce:'+JSON.stringify(testeArray))
             return results;
           });

           this.series = [{
              data: []
            }, {
              data: []
            }, {
              data: []
            }];

            this.results = washData;

            //this.atualizarGrafico(1,this.pageOfItems[0].response[0].name,this.pageOfItems[0].response[1].name,this.pageOfItems[0].response[2].name);

            }
            /*FIM DO PRÉ-CARREGAMENTO DE INFORMAÇÕES*/
            this.atualizarGrafico(1,this.pageOfItems[0].response[0].name,this.pageOfItems[0].response[1].name,this.pageOfItems[0].response[2].name,1);

           this.questions = washData;
   
           let responses = this.users.length;
   
           this.responses = responses.toString();
   
           this.loading = false;
   
   
         },
   
       },
       created() {
         this.combined=[...(this.quest[0].questions), ...(this.quest[1].questions), ...(this.quest[2].questions), ...(this.quest[3].questions)];
         console.log((this.quest[0].questions).concat(this.quest[1].questions));
         this.getData();
       }
       ,
       computed:{
         bc(){
           return this.background || (this.dark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)')
         }
       },    
     }
   
     window.document.body.onscroll = function() {
       var mybutton = document.getElementById("myBtn");
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "block";
       } else {
         mybutton.style.display = "none";       
       }
     }
   
   
   
   
</script>
<style>
   a
   {
   color: #000;
   font-size: 17px;
   }
   a:hover {
   color: #2196F3;
   }
   table tr td {
   text-align: left;      
   }
   .page-item.first {
   visibility:hidden;
   margin-left:-135px;
   }
   .page-item.first a:after {
   content: url('https://api.iconify.design/mdi:chevron-double-left.svg?height=27');  
   visibility: visible;
   display: block;
   position: absolute;
   padding: 6px;
   margin-left:45px;
   top: 0px; 
   }
   .page-item.previous {
   visibility:hidden;
   }
   .page-item.previous a:after {
   content: url('https://api.iconify.design/mdi:chevron-left.svg?height=27');
   visibility: visible;
   display: block;
   position: absolute;
   padding: 6px;
   margin-left:30px;
   top: 0px; 
   }
   .page-item.next {
   visibility:hidden;
   }
   .page-item.next a:after {
   content: url('https://api.iconify.design/mdi:chevron-right.svg?height=27');
   visibility: visible;
   display: block;
   position: absolute;
   padding: 6px;
   margin-left:-12px;
   top: 0px;  
   }
   .page-item.last {
   visibility:hidden;
   }
   .page-item.last a:after {
   content: url('https://api.iconify.design/mdi:chevron-double-right.svg?height=27');
   visibility: visible;
   display: block;
   position: absolute;
   padding: 6px;
   margin-left:-27px;
   top: 0px;
   }
   #customers {
   font-family: Arial, Helvetica, sans-serif;
   border-collapse: collapse;
   width: 100%;
   }
   #customers td, #customers th {
   border: 1px solid #ddd;
   padding: 8px; 
   }
   #customers tr:nth-child(even){background-color: #f2f2f2;}
   #customers tr:hover {background-color: #ddd;}
   #customers th {
   padding-top: 12px;
   padding-bottom: 12px;
   text-align: center;
   background-color: #4CAF50;
   color: white;
   }
   #caixa {
   position: fixed;
   left:600px;
   }
   #next {
   text-align:center;
   position:absolute;
   margin-left:20px;
   top:20px;
   content: url('https://api.iconify.design/mdi:arrow-right-bold-circle.svg?height=54&color=gray');
   }
   #prev {
   text-align:center;
   position:absolute;
   margin-left:20px;
   top:110px;
   content: url('https://api.iconify.design/mdi:arrow-left-bold-circle.svg?height=54&color=gray');
   }
   #prev:hover {
   text-align:center;
   position:absolute;
   margin-left:20px;
   top:110px;
   content: url('https://api.iconify.design/mdi:arrow-left-bold-circle.svg?height=54&color=blue');
   }
   #next:hover {
   text-align:center;
   position:absolute;
   margin-left:20px;
   top:20px;
   content: url('https://api.iconify.design/mdi:arrow-right-bold-circle.svg?height=54&color=blue');
   }
   #myBtn {
   display: none;
   position: fixed;
   bottom: 70px;
   z-index: 99;
   font-size: 18px;
   border: none;
   outline: none;
   margin-left:10px;
   cursor: pointer;
   padding: 10px;
   border-radius: 4px;
   content: url('https://api.iconify.design/mdi:arrow-up-bold-circle.svg?height=54&color=gray');
   }
   #myBtn:hover {
   content: url('https://api.iconify.design/mdi:arrow-up-bold-circle.svg?height=54&color=blue');
   }
   #meuMenu {
   background:#345;
   width:100%;
   padding:20px;
   margin-top: 100px;
   }
   .fixar {
   position:fixed;
   margin-top: 0px !important;
   }
   .loading-screen {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh;
   width: 100vw;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 300;
   flex-direction: column;
   user-select: none;
   }
   .loading-circle {
   width: 50px;
   height: 50px;
   border-radius: 100%;
   border: 2px solid transparent;
   border-left-color: #ababab;
   animation: circleanimation .45s linear infinite
   }
   .loading-text {
   margin-top: 15px;
   color: #808080;
   font-size: 12px;
   text-align: center;
   }
   @keyframes circleanimation {
   from {
   transform: rotateZ(0deg);
   }
   to {
   transform: rotateZ(360deg);
   }
   }
</style>