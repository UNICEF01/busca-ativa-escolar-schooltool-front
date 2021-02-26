<template>

  <v-container fill-height fluid grid-list-xl>

    <v-layout justify-center wrap>

      <v-flex xs12 md8>

        <div v-if="isReportReady == false">

          <h5 class="headline">Questionário de Autoavaliação</h5>

          <p class="paragraph_report">
            As perguntas abaixo foram organizadas para que você conheça melhor a estrutura e o funcionamento da sua escola, no que se refere aos aspectos de água, higiene e saneamento. Além disso, são abordadas as condições para a prevenção e o controle de infecções, em resposta ao COVID-19.
            <br/>Responda atentamente às perguntas de cada seção e receba orientações específicas para a sua situação.
          </p>

          <div v-for="group in quest">

            <h5 class="headline">{{group.group}}</h5>

            <v-form ref="form_research" lazy-validation>

              <material-card v-for="item in group.questions" :key="item.id"
                             class="card-tabs"
                             :color="color"
                             elevation="3">

                <v-flex slot="header">

                    <span
                      class="subheading font-weight-light mr-3"
                      style="align-self: center"
                      v-html="item.answer"
                    ></span>

                </v-flex>

                <v-radio-group v-model="item.selected">
                  <v-radio v-for="n in item.response" :label="n.name" :value="n.value"></v-radio>
                </v-radio-group>

              </material-card>

            </v-form>

          </div>

          <v-btn @click="finish(true)" class="font-weight-light" color="success" :disabled="isDisabledToReport()">
            Gerar relatório final
          </v-btn>

        </div>

        <br/><br/>

        <div v-if="isReportReady == true" id="relatorio_wash">

            <h5 class="headline">Relatório</h5>

            <v-alert type="success" value="true" v-if="getPercentualAnswers() > 75" style="font-size: 15px;">
              Boa situação geral, algumas melhorias podem ser necessárias em uma ou várias áreas.
            </v-alert>

            <v-alert type="warning" value="true" class="amarelo" color="#cabf10" v-if="getPercentualAnswers() > 50 && getPercentualAnswers() <= 75" style="font-size: 15px;">
              Situação geral insuficiente, sugerem-se algumas melhorias em uma ou várias áreas.
            </v-alert>

            <v-alert type="warning" color="orange" value="true" v-if="getPercentualAnswers() > 25 && getPercentualAnswers() <= 50" style="font-size: 15px;">
              Situação geral inadequada, recomenda-se observar as melhorias necessárias em várias áreas.
            </v-alert>

            <v-alert type="error" value="true" v-if="getPercentualAnswers() <= 25" style="font-size: 15px;">
              Situação geral crítica, recomenda-se observar as melhorias necessárias em todas as áreas e o quanto antes possível.
            </v-alert>

            <p class="paragraph_report" v-if="getPercentualAnswers() == 100">
              Parabéns, de acordo com as suas respostas ao questionário de autoavaliação a sua escola está apta a retornar às aulas e receber estudantes, professores e funcionários de maneira segura.
              <br/>É importante que as condições necessárias sejam mantidas e avaliadas regularmente.
              <br/>Sugerimos que cada gestor escolar mantenha um diálogo constante com autoridades e comunidade sobre as necessidades e dúvidas que possam surgir. Todos temos um papel importante para que as escolas sejam um sempre um ambiente acolhedor, seguro e saudável para todos.
            </p>

            <p class="paragraph_report" v-if="getPercentualAnswers() < 100">
              Os resultados da sua autoavaliação indicam que existem aspectos importantes a serem observados, antes mesmo da reabertura das escolas. Logo abaixo você encontrará orientações sobre como proceder e como organizar a estrutura, os suprimentos e quais medidas são necessárias para o caso específico da sua escola. Verifique cada um dos itens abaixo e explore os documentos de apoio. É o momento para desenvolver e aprimorar estratégias para a reabertura segura das escolas.
            </p>

            <div v-for="group in quest">

              <h5 class="headline">{{group.group}}</h5>

              <material-card class="card-tabs" :color="color" elevation="3">
                <div>
                  <p class="recommendation" v-html="group.headerRecommendation"></p>
                </div>
                <div>
                  <p class="recommendation" v-for="recommendation in group.recommendations" v-html="recommendation.text" v-if="isVisibleRecommendation(group.id, recommendation.id)"></p> <br/>
                </div>
              </material-card>

              <br/>

              <material-card class="card-tabs" :color="color" elevation="3">
                <div>
                  <p class="recommendation" v-html="group.groupRecommendation"></p>
                </div>
              </material-card>

            </div>

          <br/><br/>

          <v-btn @click="finish(false)" class="font-weight-light" color="warning">
            Retornar ao formulário
          </v-btn>

          <v-btn @click="exportPDF()" class="font-weight-light" color="#5cb860" style="margin-left: 10px;">
            Exportar PDF
          </v-btn>

          <v-btn @click="print()" class="font-weight-light" color="#5cb860" style="margin-left: 10px;">
            Imprimir
          </v-btn>

          <v-btn @click="sendToEmail()" class="font-weight-light" color="#5cb860" style="margin-left: 10px;">
            Enviar para o email
          </v-btn>

        </div>

      </v-flex>

    </v-layout>

  </v-container>

</template>

<script>

  import {db, auth, usersCollection} from "./../firebase";
  import {mapMutations, mapState} from 'vuex';
  import Printd from 'printd';
  import html2pdf from 'html2pdf.js';
  import jsPDF from 'jspdf';

  export default {

    data() {
      return {
        isReportReady: false,
        user: {},
        quest: [

          {
            id: 0,
            group: "1. Água",
            questions: [
              {
                id: 1,
                answer: '<span>A água está disponível nas instalações da escola sempre e em quantidade suficiente para todos os tipos de necessidade (banheiros, lavagem de mãos, preparação dos alimentos, beber)</span>',
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
                answer: "<span>A água está tratada com cloro (teor mínimo,  0,2 - 0,5 mg/L de cloro residual livre) ou com um método comprovada e que siga as especificações do Ministério da Saúde ou da Organização Mundial da Saúde.  A Portaria de Consolidação nº 5, de 28/09/2017/Minist[erio da Saúde determina a obrigatoriedade de se manter, no mínimo, 0,2 mg/L de cloro residual livre ou 2 mg/L de cloro residual combinado em toda a extensão do sistema de distribuição (reservatório e rede). </span>",
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
                  +"<ul>"
                  +"<li>Verifique com o prestador de serviço de água local as alternativas ou soluções para o fornecimento mais regular na escola.</li>"
                  +"<li>Viabilize o serviço de abastecimento onde não houver ligação da escola ao sistema de abastecimento de água.</li>"
                  +"<li>Providencie o abastecimento móvel de água para a reabertura das escolas, enquanto mais soluções são estudadas.</li>"
                  +"</ul>"
                  +"</span></strong>"
              },
              {
                id: 2,
                text: "<span><strong>"
                  +"<ul>"
                  +"<li>Providencie reservatórios complementares de armazenamento de água.</li>"
                  +"<li>Viabilize a aquisição de reservatórios de água, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span></strong>"
              },
              {
                id: 3,
                text: "<span>"
                  +"<ul>"
                  +"<li>Busque informações sobre como verificar o teor mínimo de cloro residual livre. <br/>"
                  +" <a href=\"http://www.funasa.gov.br/site/wp-content/files_mf/manual_pratico_de_analise_de_agua_2.pdf\" target=\"_blank\">Clique para acessar o Manual Prático de Análise de Água</a> </li>"
                  +"<li>Verifique junto ao prestador de serviço de água se a água fornecida à escola é adequadamente clorada.</li>"
                  +"</ul>"
                  +"</span>"
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
                  +"<ul>"
                  +"<li>Instale pias ou locais para lavagem das mãos, com disponibilidade de sabão, em todas as entradas da escola;</li>"
                  +"<li>Certifique-se que a escola disponha continuamente de sabão, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span></strong>"
              },
              {
                id: 5,
                text: "<span><strong>"
                  +"<ul>"
                  +"<li>Instale pias ou locais para lavagem das mãos, com disponibilidade de sabão, nas proximidades de todos os banheiros.</li>"
                  +"</ul>"
                  +"</span></strong>"
              },
              {
                id: 6,
                text: "<span>"
                  +"<ul>"
                  +"<li>Promova, juntamente com a Secretaria e a comunidade escolar, a realização de atividades de sensibilização e de lavagem de mãos em grupo, chamando a atenção de estudantes para a importância da higiene das mãos.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 7,
                text: "<span>"
                  +"<ul>"
                  +"<li>Promova, juntamente com a Secretaria e a comunidade escolar, a importância da higiene menstrual;</li>"
                  +"<li>Viabilize a existência de espaços e a disponibilidade de materiais adequados e seguros para a prática da higiene menstrual.</li>"
                  +"</ul>"
                  +"</span>"
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
                answer: '<span>Há lixeiras em cada sala de aula, nos banheiros e ao lado dos vasos sanitários e em locais estratégicos, nas dependências da escola, e o o lixo é recolhido diariamente, de forma segura</span>',
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
                answer: '<span>O lixo da escola  é descartado de forma segura (são ensacados e  separados parao o recolhimento do prestador de serviços)?</span>',
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
                  +"<ul>"
                  +"<li>Instale mais banheiros para estudantes, com vasos sanitários em quantidade suficiente, e/ou o repare de estruturas que não funcionem, excepcionalmente, providenciando banheiros químicos e sua manutenção regular e adequada.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 9,
                text: "<span>"
                  +"<ul>"
                  +"<li>Promova a importância de ter banheiros separados para meninas e meninos, sinalizados claramente. Viabilize a separação dos banheiros e sanitários quando necessário e o quanto antes.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 10,
                text: "<span>"
                  +"<ul>"
                  +"<li>Instale mais banheiros para professores e funcionários, com vasos sanitários em quantidade suficiente, e/ou o repare de estruturas que não funcionem, excepcionalmente, providenciando banheiros químicos e sua manutenção regular e adequada.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 11,
                text: "<span><strong>"
                  +"<ul>"
                  +"<li>Crie, antes da reabertura, orientações e rotinas diárias de limpeza e desinfecção nas escolas.</li>"
                  +"</ul>"
                  +"</span></strong>"
              },
              {
                id: 12,
                text: "<span><strong>"
                  +"<ul>"
                  +"<li>Instale mais pias ou locais para lavagem das mãos, com disponibilidade de sabão, próximos a cada grupo de banheiros.</li>"
                  +"<li>Certifique-se que a escola disponha continuamente de sabão, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span></strong>"
              },
              {
                id: 13,
                text: "<span><strong>"
                  +"<ul>"
                  +"<li>Instale lixeiras em cada sala de aula, nos banheiros e em locais estratégicos da escola. </li>"
                  +"<li>Viabilize a aquisição de lixeiras, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span></strong>"
              },
              {
                id: 14,
                text: "<span>"
                  +"<ul>"
                  +"<li>Promova a importância de gerir e descartar resíduos sólidos adequadamente, com a orientação e o apoio dos órgãos responsáveis pela prestação dos serviços de limpeza urbana e manejo dos resíduos sólidos.</li>"
                  +"<li>Certifique-se de que ocorre o recolhimento e destinação final adequada dos resíduos da escola, com o apoio dos órgãos responsáveis pela prestação dos serviços de limpeza urbana e manejo dos resíduos sólidos.</li>"
                  +"</ul>"
                  +"</span>"
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
                answer: '<span>Se há um refeitório escolar, a distância física entre os estudantes é implementada e respeitada</span>',
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
                answer: '<span>A equipe da cozinha usa máscaras faciais e dispõe de pias e locais para a lavagem das mãos ou de produtos desinfetantes para as mãos.</span>',
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
                  +"<ul>"
                  +"<li>Coloque cartazes sobre a prevenção e transmissão do COVID-19 em cada sala de aula, banheiros e em locais estratégicos da escola. Busque apoio para a produção e obtenção de materiais educativos sobre COVID-19, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span></strong>"
              },
              {
                id: 16,
                text: "<span><strong>"
                  +"<ul>"
                  +"<li>Identifique pessoas (incluindo da comunidade escolar) para que se tornem pontos focais de água, esgotamento sanitário, higiene e saúde escolar, oferecendo informações e orientações, presenciais ou à distância.</li>"
                  +"</ul>"
                  +"</span></strong>"
              },
              {
                id: 17,
                text: "<span><strong>"
                  +"<ul>"
                  +"<li>Elabore um planejamento de limpeza e desinfecção das dependências das escolas.</li>"
                  +"</ul>"
                  +"</span></strong>"
              },
              {
                id: 18,
                text: "<span><strong>"
                  +"<ul>"
                  +"<li>Verifique a disponibilidade de equipamentos e materiais de limpeza e desinfecção e, se for o caso, viabilize-os antes da reabertura da escola.</li>"
                  +"<li>Viabilize a disponibilidade de equipamentos ou materiais de limpeza e desinfecção ou dos recursos para sua aquisição, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span></strong>"
              },
              {
                id: 19,
                text: "<span><strong>"
                  +"<ul>"
                  +"<li>Crie condições que permitam o distanciamento físico adequado ou quais as melhores alternativas: uso de máscara, turnos escolares etc.</li>"
                  +"</ul>"
                  +"</span></strong>"
              },
              {
                id: 20,
                text: "<span><strong>"
                  +"<ul>"
                  +"<li>Sinalize, antes da reabertura, o chão das pias ou dos locais de lavagem de mãos e dos banheiros para indicar a distância física entre os usuários. Assegure que o distanciamento seja respeitado.</li>"
                  +"</ul>"
                  +"</span></strong>"
              },
              {
                id: 21,
                text: "<span><strong>"
                  +"<ul>"
                  +"<li>Sinalize, antes da reabertura, o chão dos locais das carteiras e das áreas do refeitório para indicar a distância física entre os usuários. Assegure que o distanciamento seja respeitado.</li>"
                  +"</ul>"
                  +"</span></strong>"
              },
              {
                id: 22,
                text: "<span>"
                  +"<ul>"
                  +"<li>Disponibilize máscaras faciais e produtos desinfetantes para as mãos, para funcionários da cozinha.</li>"
                  +"<li>Viabilize a disponibilidade de máscaras faciais e produtos desinfetantes para as mãos ou dos recursos para sua aquisição, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 23,
                text: "<span>"
                  +"<ul>"
                  +"<li>Promova a importância de uma boa ventilação em todas as salas de aula e busque soluções para os espaços da escola que não têm ventilação suficiente.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 24,
                text: "<span><strong>"
                  +"<ul>"
                  +"<li>Busque junto aos órgãos responsáveis pela Saúde, orientações para a pronta identificação de estudantes com sintomas de COVID-19.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 25,
                text: "<span><strong>"
                  +"<ul>"
                  +"<li>Reserve um espaço privado, com acesso à água potável e banheiro, para o isolamento de estudantes com sintomas de COVID -19, onde devem ficar até que os responsáveis venham buscá-los.</li>"
                  +"</ul>"
                  +"</span></strong>"
              },
              {
                id: 26,
                text: "<span><strong>"
                  +"<ul>"
                  +"<li>Disponibilize máscaras faciais para estudantes que apresentem sintomas de COVID-19.</li>"
                  +"<li>Viabilize a disponibilidade de máscaras faciais ou dos recursos para sua aquisição, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span></strong>"
              },
              {
                id: 27,
                text: "<span>"
                  +"<ul>"
                  +"<li>Disponibilize (nos Estados e Municípios em que for recomendado) máscaras faciais para os estudantes, educadores e funcionários.</li>"
                  +"<li>Viabilize a disponibilidade de máscaras faciais ou dos recursos para sua aquisição, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 28,
                text: "<span>"
                  +"<ul>"
                  +"<li>Elabore listas de verificação que permitam acompanhar, ao menos semanalmente, o cumprimento das exigências de água, esgotamento sanitário, higiene e prevenção e controle de doenças transmissíveis.</li>"
                  +"</ul>"
                  +"</span>"
              }
            ],
            limitForGroupRecommendation: 14,
            headerRecommendation: "<span><strong>É sugerido que o gestor escolar, em direta articulação com a Secretaria de Educação, e em coordenação com outras autoridades locais:</strong></span>",
            groupRecommendation: "<span>Discuta as limitações e dificuldades na prevenção e controle de infecções em sua escola e conjuntamente com a Secretaria busque possíveis soluções para antes da reabertura, especialmente em locais de alta incidência de casos de COVID-19.</span>"
          }

        ],
        cssForPrintd: `
          .error{
            background-color: #f55a4e !important;
            font-family: sans-serif;
            font-size: 25px !important;
            color: #ffffff;
            padding: 20px;
          }
          .orange {
            background-color: #ff9800!important;
            font-family: sans-serif;
            font-size: 25px !important;
            color: #ffffff;
            padding: 20px;
          }
          .success{
            background-color: #5cb860 !important;
            font-family: sans-serif;
            font-size: 25px !important;
            color: #ffffff;
            padding: 20px;
          }
          .amarelo{
            background-color: rgb(202, 191, 16);
            font-family: sans-serif;
            font-size: 25px !important;
            color: #ffffff;
            padding: 20px;
          }
          .headline{
            font-family: sans-serif;
            font-size: 25px !important;
          }
          .recommendation,
          .recommendation strong{
            font-family: sans-serif;
            font-size: 15px !important;
          }
          .paragraph_report {
            font-family: sans-serif;
            font-size: 15px !important;
            font-size: 16px !important;
            margin-bottom: 20px;
            margin-top: 20px;
          }
        `
      }
    },

    computed: {
      ...mapState('app', ['image', 'color'])
    },

    created() {

      var docRef = db.collection("users").doc(auth.currentUser.uid);

      docRef.get()
        .then( (doc) => {

          if (doc.exists) {

            this.user = doc.data();

            if( this.user.hasOwnProperty('quest') ) { this.quest = this.user.quest; }

          } else {

            this.$toast.open({
              message: 'Usuário não localizado!',
              type: 'error',
              position: 'top'
            });

          }
        }).catch( (error) => {

          this.$toast.open({
            message: 'Erro ao retornar os dados do usuário',
            type: 'error',
            position: 'top'
          });

        });

    },

    methods: {

      ...mapMutations('app', ['setDrawer', 'toggleDrawer']),

      toast(type, message) {

        this.$toast.open({
          message: message,
          type: type,
          position: 'top'
        });

      },

      async save() {

        let id = auth.currentUser.uid;

        this.user.quest = this.quest;

        let checkSave = await db.collection("users")
          .doc(id)
          .update(Object.assign({}, this.user))
          .then(function (resp) {
            return true;
          })
          .catch(function (error) {
            return false;
          });

        if (checkSave) {

          this.$toast.open({
            message: 'Pesquisa atualizada com sucesso!',
            type: 'success',
            position: 'top'
          });

        } else {

          this.$toast.open({
            message: 'Erro ao atualizar a pesquisa!',
            type: 'error',
            position: 'top'
          });

        }

        this.isUpdatingForm = false;

      },

      isDisabledToReport(){

        var questions = [];
        var blocked = false;

        this.quest.map( function (group) {
          group.questions.map( function (question) {
            questions.push(question);
          });
        });

        questions.map( function (question) {
          if (question.selected == null) { blocked = true; }
        });

        return blocked;

      },

      getPercentualAnswers(){
        var sum = 0;
        this.quest.map( function (group) {
          group.questions.map( function (question) {
            if (question.selected != null) { sum += question.selected; }
          })
        })
        return ((sum*100)/56).toFixed(0);
      },

      getSumAnswersOfGroup(groupId){
        var sum = 0;
        this.quest.map( function (group) {
          if (group.id === groupId) {
            group.questions.map( function (question) {
              sum += question.selected;
            })
          }
        })
        return sum;
      },

      isVisibleRecommendation(groupId, recommendationId){

        var group = this.quest.filter( function (gp) {
          return gp.id == groupId;
        })[0];

        var question = group.questions.filter( function (qt) {
          return qt.id == recommendationId;
        })[0];

        if ( question.selected < 2 ) { return true; } else { return false; }

      },

      finish(value){

        var docRef = db.collection("users").doc(auth.currentUser.uid);

            docRef.get().then(function(doc) {
              if (doc.exists) {

                db.collection("users").doc(auth.currentUser.uid).update({"school.quest_complete": "S"})

              }
            });
        window.scrollTo(0, 0);
        this.isReportReady=value;
      },

      exportPDF(){
        html2pdf()
          .from(document.getElementById('relatorio_wash'))
          .set({
            margin:       [30, 20, 30, 20],
            filename:     'file.pdf',
            image:        { type: 'jpeg',quality: 1.0 },
            html2canvas:  { dpi: 300, scale: 2, scrollX: 0, scrollY: 0, backgroundColor: '#FFF' },
            jsPDF:        { unit: 'pt', format: 'a4', orientation: 'p' },
            pagebreak: { before: '.page-break', avoid: 'img' }
          })
          .toPdf()
          .get('pdf').then(function (pdf) {
          var totalPages = pdf.internal.getNumberOfPages();

          for (let i = 1; i <= totalPages; i++) {
            pdf.setPage(i);
            pdf.setFontSize(10);
            pdf.setTextColor(150);
            pdf.text('Página ' + i + ' of ' + totalPages, pdf.internal.pageSize.getWidth() - 100, pdf.internal.pageSize.getHeight() - 10);
          }
        }).save();
      },

      print(){
        const d = new Printd()
        d.print( document.getElementById('relatorio_wash'), [this.cssForPrintd]);
      },

      sendToEmail(){

        var body_message = {
          message: document.getElementById('relatorio_wash').innerHTML,
          email: auth.currentUser.email,
          subject: "Relatório de autoavaliação sobre a condição de água, esgotamento sanitário e práticas de higiene na escola",
          name: auth.currentUser.email
        };

        this.$http.post('https://escolas.buscaativaescolar.org.br/mailgun/send_mail.php', body_message)
          .then( function (response) {
            this.toast('success', "Relatório encaminhado com sucesso");
          }, function (response) {
            this.toast('error', "Erro no envio da mesagem");
          });

      },

    },

    updated() {
      this.save();
    },

    watch: {}

  }

</script>

<style>
    .recommendation,
    .recommendation strong{
      font-size: 15px !important;
    }
    .paragraph_report {
      font-size: 16px !important;
      margin-bottom: 20px;
      margin-top: 20px;
    }
</style>

