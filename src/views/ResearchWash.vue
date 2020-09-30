<template>

  <v-container fill-height fluid grid-list-xl>

    <v-layout justify-center wrap>

      <v-flex xs12 md8>

        <div v-if="isReportReady == false">
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

          <v-btn @click="isReportReady=true" class="font-weight-light" color="success" :disabled="isDisabledToReport()">
            Gerar relatório final
          </v-btn>

        </div>

        <br/><br/>

        <div v-if="isReportReady == true">

            <h5 class="headline">Relatório</h5>

            <v-alert type="success" value="true" v-if="getPercentualAnswers() > 75" style="font-size: 15px;">
              Boa situação geral, pequenas melhorias podem ser necessárias em uma ou várias áreas
            </v-alert>

            <v-alert type="warning" value="true" color="#cabf10" v-if="getPercentualAnswers() > 50 && getPercentualAnswers() <= 75" style="font-size: 15px;">
              Situação geral insuficiente, podem ser necessárias grandes melhorias em uma ou várias áreas
            </v-alert>

            <v-alert type="warning" color="orange" value="true" v-if="getPercentualAnswers() > 25 && getPercentualAnswers() <= 50" style="font-size: 15px;">
              Situação geral muito inadequada, são necessárias grandes melhorias em várias áreas
            </v-alert>

            <v-alert type="error" value="true" v-if="getPercentualAnswers() <= 25" style="font-size: 15px;">
              Situação geral crítica, são necessárias grandes melhorias o mais rápido possível em todas as áreas
            </v-alert>

          <p class="paragraph_report">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non turpis id elit condimentum consectetur vitae nec dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sagittis semper augue, vel venenatis neque laoreet vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam pretium sem vel leo pulvinar volutpat. Duis vehicula facilisis eros quis accumsan. Proin vitae volutpat nisi.</p>

            <div v-for="group in quest">

              <h5 class="headline">{{group.group}} - {{getSumAnswersOfGroup(group.id)}} (<small>pts</small>)</h5>

              <material-card class="card-tabs" :color="color" elevation="3">
                <div>
                  <p class="recommendation" v-html="group.headerRecommendation"></p>
                </div>
                <div>
                  <p class="recommendation" v-for="recommendation in group.recommendations" v-html="recommendation.text" v-if="isVisibleRecommendation(group.id, recommendation.id)"></p>
                </div>
              </material-card>

              <br/>

              <material-card class="card-tabs" :color="color" elevation="3">
                <div>
                  <p class="recommendation" v-html="group.groupRecommendation"></p>
                </div>
              </material-card>

<!--              <material-card class="card-tabs" :color="color" elevation="3" v-if="getSumAnswersOfGroup(group.id) <= group.limitForGroupRecommendation">-->
<!--                <div>-->
<!--                  <p class="recommendation" v-html="group.groupRecommendation"></p>-->
<!--                </div>-->
<!--              </material-card>-->

            </div>

          <br/><br/>

          <v-btn @click="isReportReady=false" class="font-weight-light" color="warning">
            Responder novamente
          </v-btn>

        </div>


      </v-flex>

    </v-layout>
  </v-container>

</template>

<script>

  import {db, auth, usersCollection} from "./../firebase";
  import {mapMutations, mapState} from 'vuex'

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
                    name: 'Não há água disponível nas instalações da escola para todas as necessidades, seja em quantidade insuficiente ou não disponível durante o ano letivo.',
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
                answer: "<span>A água está tratada com cloro (teor mínimo,  0,2 - 0,5 mg/L de cloro residual livre) ou com um método comprovada e que siga as especificações do Ministério da Saúde [Portaria nº 2.914/2011 do Ministério da Saúde determina a obrigatoriedade de se manter, no mínimo, 0,2 mg/L de cloro residual livre ou 2 mg/L de cloro residual combinado em toda a extensão do sistema de distribuição (reservatório e rede)]  ou da Organização Mundial da Saúde (OMS)</span>",
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Água tratada mas abaixo do teor mínimo (de 0 a 0,2 mg/l) no momento do estudo.',
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
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>entre em contato com o prestador de serviço de água local para verificar as soluções para o fornecimento mais regular na escola.</li>"
                  +"<li>viabilize o serviço de abastecimento onde não houver ligação da escola ao sistema de abastecimento de água.</li>"
                  +"<li>organize abastecimento móvel de água para a reabertura das escolas, enquanto mais soluções são estudadas.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 2,
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>providencie reservatórios complementares de armazenamento de água.</li>"
                  +"<li>promova a aquisição de reservatórios de água pelos gestores de escolas particulares.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 3,
                text: "<span>"
                  +"<ul>"
                  +"<li>oriente gestores escolares sobre como verificar o teor mínimo de cloro residual livre."
                  +"<br/>Manual Prático de Análise de Água http://www.funasa.gov.br/site/wp-content/files_mf/manual_pratico_de_analise_de_agua_2.pdf</li>"
                  +"<li>verifique junto ao prestador de serviço de água que a água fornecida é clorada.</li>"
                  +"</ul>"
                  +"</span>"
              }
            ],
            limitForGroupRecommendation: 3,
            headerRecommendation: "<span><strong>É recomendado que a Secretaria de Educação, em coordenação com outras autoridades locais:</strong></span>",
            groupRecommendation: "<span> encoraje os gestores das escolas a discutirem as limitações no fornecimento de água e buscarem possíveis soluções para antes da reabertura, especialmente em locais de alta incidência de casos de COVID-19.</span>"
          },

          {
            id: 1,
            group: "2. Higiene das mãos e menstrual",
            questions: [
              {
                id: 4,
                answer: "<span>Há locais para a lavagem de mãos com água e sabão na entrada da escola. </span>",
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Há locais para a lavagem de mãos com água na entrada, mas sem sabão.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'A escola não dispõe de locais  para a lavagem de mãos em funcionamento nas suas entradas.',
                    value: 0,
                  }
                ]
              },
              {
                id: 5,
                answer: "<span>Há locais para a lavagem de mãos com água e sabão na frente das salas de aula e a menos de 5 metros de cada banheiro</span>",
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Há locais para a lavagem das mãos, com água, próximas das salas de aula, mas sem sabão.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Os locais de lavagem das mãos não estão próximos das salas de aula.',
                    value: 0,
                  }
                ]
              },
              {
                id: 6,
                answer: '<span>São organizadas atividades de lavagem de mãos para todos os estudantes pelo menos três vezes por dia na escola</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'As atividades de lavagem de mãos são organizadas, mas não três vezes por dia ou todos os dias da semana.',
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
                  'Os seguintes recursos para a higiene menstrual (MHM) estão disponíveis na escola:' +
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
                    name: 'Pelo menos um ou dois, mas não todos, recursos para a higiene menstrual (MHM) estão disponíveis na escola.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Nenhum dos recursos para a higiene menstrual (MHM) está disponível na escola.',
                    value: 0,
                  }
                ]
              }
            ],
            recommendations: [
              {
                id: 4,
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>solicite e viabilize a instalação de locais para lavagem das mãos, com disponibilização de sabão, em todas as entradas da escola;</li>"
                  +"<li>apoie as escolas para que disponham continuamente de sabão, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 5,
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>solicite e viabilize a instalação de locais para lavagem das mãos, com disponibilização de sabão, nas proximidades de todos os banheiros.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 6,
                text: "<span>"
                  +"<ul>"
                  +"<li>promova, juntamente com os gestores escolares, a realização de atividades de sensibilização e de lavagem de mãos em grupo, chamando a atenção de estudantes para a importância da higiene das mãos.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 7,
                text: "<span>"
                  +"<ul>"
                  +"<li>promova a importância da higiene menstrual;</li>"
                  +"<li>viabilize a existência de espaços e disponibilidade de materiais adequados e seguros para a prática da higiene menstrual.</li>"
                  +"</ul>"
                  +"</span>"
              }
            ],
            limitForGroupRecommendation: 4,
            headerRecommendation: "<span><strong>É recomendado que a Secretaria de Educação, em coordenação com outras autoridades locais:</strong></span>",
            groupRecommendation: "<span>encoraje os gestores das escolas a discutirem as limitações para a lavagem das mãos e higiene menstrual e buscarem possíveis soluções para antes da reabertura, especialmente em locais de alta incidência de casos de COVID-19.</span>"
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
                answer: '<span>O piso, a maçaneta da porta, a área dos banheiros e sanitários são limpos pelo menos uma vez por dia com água e detergente, e são desinfectados com água sanitária</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Os sanitários são limpos mas não todos os dias ou com água e detergente mas não desinfectados com água sanitária.',
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
                answer: '<span>Todos os banheiros têm um local para a lavagem de mãos com água e sabão em um raio mínimo de 5 metros</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Locais para lavagem de mãos com água mas sem sabão ou a mais de 5 metros dos banheiros ou sanitários.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Locais para lavagem de mãos sem água e sabão ou inexistentes.',
                    value: 0,
                  }
                ]
              },
              {
                id: 13,
                answer: '<span>Há lixeiras em cada sala de aula, nos banheiros e sanitários e em locais estratégicos nas dependências da escola, e se recolhe diariamente o lixo de forma segura</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Há lixeiras na escola, mas não em cada sala de aula, cada banheiro ou sanitário, ou outros locais importantes ou não é recolhido todos os dias.',
                    value: 1,
                  },
                  {
                    id: 2,
                    name: 'Sem lixeiras nas salas de aula, e em outros locais.',
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
                  +"<ul>"
                  +"<li>apoie e viabilize a instalação de mais banheiros, com vasos sanitários em quantidade suficiente, e/ou o reparo de estruturas que não funcionem, excepcionalmente, providenciando banheiros químicos e sua manutenção regular e adequada.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 9,
                text: "<span>"
                  +"<ul>"
                  +"<li>promova junto aos gestores escolares (públicos e privados) a importância de ter banheiros separados para meninas e meninos, sinalizados claramente, requerendo a separação dos banheiros e sanitários quando necessário e o quanto antes.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 10,
                text: "<span>"
                  +"<ul>"
                  +"<li>apoie e viabilize a instalação de mais banheiros, com vasos sanitários em quantidade suficiente, e/ou o reparo de estruturas que não funcionem, excepcionalmente, providenciando banheiros químicos e sua manutenção regular e adequada.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 11,
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>promova e apoie gestores escolares (públicos e privados), para que antes da reabertura, criem orientações e rotinas diárias de limpeza e desinfecção nas escolas.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 12,
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>apoie e viabilize a instalação de mais locais para lavagem das mãos, com disponibilização de sabão, próximos a cada grupo de banheiros.</li>"
                  +"<li>apoie as escolas para que disponham continuamente de sabão, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 13,
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>apoie e viabilize a instalação de lixeiras em cada sala de aula, nos banheiros e em locais estratégicos da escola.</li>"
                  +"<li>apoie as escolas que não disponham de lixeiras para que as obtenham, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 14,
                text: "<span>"
                  +"<ul>"
                  +"<li>promova junto aos gestores escolares (públicos e privados) a importância de gerir e descartar resíduos sólidos adequadamente, com o apoio dos órgãos responsáveis pela prestação dos serviços de limpeza urbana e manejo dos resíduos sólidos.</li>"
                  +"<li>garanta o recolhimento e destinação final adequada dos resíduos das escolas, com o apoio dos órgãos responsáveis pela prestação dos serviços de limpeza urbana e manejo dos resíduos sólidos.</li>"
                  +"</ul>"
                  +"</span>"
              }
            ],
            limitForGroupRecommendation: 7,
            headerRecommendation: "<span><strong>É recomendado que a Secretaria de Educação, em coordenação com outras autoridades locais, em especial os provedores de serviços de água e esgoto e de limpeza urbana e manejo dos resíduos sólidos:</strong></span>",
            groupRecommendation: "<span>encoraje os gestores das escolas a discutirem as limitações dos serviços de água e esgoto e/ou de limpeza urbana e manejo dos resíduos sólidos, para que busquem possíveis soluções para antes da reabertura, especialmente em locais de alta incidência de casos de COVID-19.</span>"
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
                    name: 'Não há informação sobre a COVID-19 e outras doenças infecciosas disponível.',
                    value: 0,
                  }
                ]
              },
              {
                id: 16,
                answer: '<span>Há pessoal designado e informado, professores, equipe de limpeza, funcionários, estudantes mais velhos, membros da comunidade ou associações que atuem no tema de água e saneamento e de Prevenção e Controle de Doenças Transmissíveis para supervisionar os locais de lavagem de mãos e banheiros (disponibilidade de água e sabão, manutenção, comportamento de lavagem de mãos e respeito às normas de distanciamento físico, etc).</span>',
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
                answer: '<span>Há um planejamento claro e detalhando para a limpeza de toda a dependência escolar, que é supervisionada e aplicada.</span>',
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
                    name: 'Sim, estão disponíveis mas não bem conservados ou não há disponibilidade de material ou equipamento.',
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
                answer: '<span>É respeitada a distância física entre os professores e os estudantes nas salas de aula (pelo menos 1,5 metro), e entre os estudantes.</span>',
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
                    name: 'Não há espaço suficiente na sala de aula para distância física ou professores e alunos não o praticam de todo.',
                    value: 0,
                  }
                ]
              },
              {
                id: 20,
                answer: '<span>É implementada a distância física entre os usuários dos locais de lavagem de mãos ou enquanto fazem fila para ir ao banheiro</span>',
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
                    name: 'O pessoal da cozinha não usa máscaras regularmente e não tem água para lavar as mãos ou produtos desinfectantes para as mãos com regularidade.',
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
                answer: '<span>Existe um protocolo para identificar os estudantes com sintomas e informar às autoridades sanitárias.</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 2,
                  },
                  {
                    id: 1,
                    name: 'Existe um protocolo mas não é conhecido pelos professores ou pelos estudantes.',
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
                    name: 'A escola não tem uma reserva suficiente de máscaras de tecido para os alunos detectados com sintomas de COVID-19.',
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
                    name: 'Existe uma lista de controle mas não é utilizada regularmente.',
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
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>apoie e viabilize a colocação de cartazes sobre a prevenção e transmissão do COVID-19 em cada sala de aula, banheiros e em locais estratégicos da escola, facilitando a sua produção e obtenção de materiais educativos sobre COVID-19, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 16,
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>promova junto aos gestores escolares (públicos e privados) a identificação de pessoas (incluindo da sociedade civil) para que se tornem pontos focais de água, esgotamento sanitário, higiene e saúde escolar, oferecendo informações e orientações, presenciais ou à distância.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 17,
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>incentive que os gestores escolares (públicos e privados) elaborem um planejamento de limpeza e desinfecção das dependências das escolas.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 18,
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>consulte os gestores escolares (públicos e privados) sobre a disponibilidade de equipamentos e materiais de limpeza e desinfecção e, se for o caso, viabilize-os antes da reabertura da escola.</li>"
                  +"<li>apoie as escolas que não disponham de equipamentos ou materiais de limpeza e desinfecção ou dos recursos para sua aquisição para que os obtenham, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 19,
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>discuta com gestores escolares (públicos e privados) como criar condições que permitam o distanciamento físico adequado ou quais as melhores alternativas: uso de máscara, turnos escolares etc.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 20,
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>promova e apoie gestores escolares (públicos e privados), para que antes da reabertura, sinalizem o chão dos locais de lavagem de mãos e dos banheiros para indicar a distância física entre os usuários e assegurar que os estudantes a respeitem.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 21,
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>promova e apoie gestores escolares (públicos e privados), para que antes da reabertura, sinalizem o chão dos locais das carteiras e das áreas do refeitório para indicar a distância física entre os usuários e assegurar que os estudantes a respeitem.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 22,
                text: "<span>"
                  +"<ul>"
                  +"<li>promova e apoie gestores escolares (públicos e privados) para que disponibilizem máscaras faciais e produtos desinfetantes para as mãos, para funcionários da cozinha.</li>"
                  +"<li>apoie as escolas que não disponham de máscaras faciais e produtos desinfetantes para as mãos ou dos recursos para sua aquisição para que os obtenham, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 23,
                text: "<span>"
                  +"<ul>"
                  +"<li>promova junto aos gestores escolares (públicos e privados) a importância de uma boa ventilação em todas as salas de aula e de buscar soluções para os espaços da escola que não têm ventilação suficiente.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 24,
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>promova, com o apoio dos órgãos responsáveis pela Saúde, que os gestores escolares (públicos e privados) recebam orientações para a identificação de estudantes com sintomas de COVID-19.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 25,
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>promova, com o apoio dos órgãos responsáveis pela Saúde, que os gestores escolares (públicos e privados) identifiquem um espaço privado com acesso à água potável e banheiro, designado para o isolamento de estudantes com sintomas de COVID -19.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 26,
                text: "<span><strong>[Condição essencial para reabertura segura]</strong>"
                  +"<ul>"
                  +"<li>promova e apoie gestores escolares (públicos e privados) para que disponibilizem máscaras faciais para estudantes que apresentem sintomas de COVID-19.</li>"
                  +"<li>apoie as escolas que não disponham de máscaras faciais ou dos recursos para sua aquisição para que as obtenham, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 27,
                text: "<span>"
                  +"<ul>"
                  +"<li>promova e apoie gestores escolares (públicos e privados), nos Estados e Municípios em que for recomendado, para que disponibilizem máscaras faciais para os estudantes, educadores e funcionários.</li>"
                  +"<li>apoie as escolas que não disponham de máscaras faciais ou dos recursos para sua aquisição para que as obtenham, inclusive, se for o caso, com a colaboração do setor privado.</li>"
                  +"</ul>"
                  +"</span>"
              },
              {
                id: 28,
                text: "<span>"
                  +"<ul>"
                  +"<li>oriente e apoie gestores escolares (públicos e privados) para que elaborem listas de verificação que permitam acompanhar, ao menos semanalmente, o cumprimento das exigências de água, esgotamento sanitário, higiene e prevenção e controle de doenças transmissíveis.</li>"
                  +"</ul>"
                  +"</span>"
              }
            ],
            limitForGroupRecommendation: 14,
            headerRecommendation: "<span><strong>É recomendado que a Secretaria de Educação, em coordenação com outras autoridades locais:</strong></span>",
            groupRecommendation: "<span>promova e apoie gestores escolares (públicos e privados), para que antes da reabertura, sinalizem o chão dos locais de lavagem de mãos e dos banheiros para indicar a distância física entre os usuários e assegurar que os estudantes a respeitem.</span>"
          }

        ]
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

        let checkSave = await db.collection("users").doc(id).update(Object.assign({}, this.user)).then(function (resp) {
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

      }

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

