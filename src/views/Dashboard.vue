<template>
  <!--  <v-container>-->
  <!--    <vue-blob-json-csv-->
  <!--      @success="handleSuccess"-->
  <!--      @error="handleError"-->
  <!--      tag-name="div"-->
  <!--      file-type="json"-->
  <!--      file-name="sample"-->
  <!--      title="Backupt"-->
  <!--      :data="users"-->
  <!--      confirm="Do you want to download it?"-->
  <!--    ></vue-blob-json-csv>-->
  <!--  </v-container>-->
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout wrap>
      <v-flex xs12 md12 d-flex>
        <v-select
          v-model="territorioSelecioando"
          :items="divisoesTerritoriais"
          label="Selecione"
          outline
          item-text="nome"
          item-value="id"
          @change="selectItem(territorioSelecioando)"
        ></v-select>
      </v-flex>
      <v-flex
        sm6
        xs12
        md12
      >
        <h1>Pergunta 1</h1>
        <v-data-table
          :headers="headers"
          :items="values"
          hide-actions>
          <template
            slot="headerCell"
            slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
          </template>
          <template
            slot="items"
            slot-scope="{ item }">
            <td>{{ item.nome }}</td>
            <td>{{ item.count }}</td>
            <td>{{ item.salary }}</td>
            <td>{{ item.salary }}</td>
            <td>{{ item.salary }}</td>
          </template>
        </v-data-table>
      </v-flex>


<!--            <v-btn class="primary" @click="updateSchool">Atualiza Dados IBGE</v-btn>-->

      <!--      <v-flex md9>-->
      <!--        <div v-for="group in quest">-->

      <!--          <h5 class="headline">{{group.group}}</h5>-->

      <!--          <v-form ref="form_research" lazy-validation>-->

      <!--            <material-card v-for="item in group.questions" :key="item.id"-->
      <!--                           class="card-tabs"-->
      <!--                           :color="color"-->
      <!--                           elevation="3">-->

      <!--              <v-flex slot="header">-->

      <!--                    <span-->
      <!--                      class="subheading font-weight-light mr-3"-->
      <!--                      style="align-self: center"-->
      <!--                      v-html="item.answer"-->
      <!--                    ></span>-->

      <!--              </v-flex>-->
      <!--              <v-layout wrap>-->

      <!--                <v-flex md4 v-for="n in item.response">-->
      <!--                  <v-card style="height: 130px"-->
      <!--                          class="pa-3"-->
      <!--                          outlined-->
      <!--                          tile-->
      <!--                  >-->
      <!--                    {{n.name}}-->
      <!--                    <v-card-actions style="position: absolute; bottom: 0px; right: 0px">-->
      <!--                      <p>548</p>-->
      <!--                    </v-card-actions>-->
      <!--                  </v-card>-->
      <!--                </v-flex>-->
      <!--              </v-layout>-->


      <!--              &lt;!&ndash;            <v-layout justify-center>&ndash;&gt;-->
      <!--              &lt;!&ndash;              <v-flex>&ndash;&gt;-->

      <!--              &lt;!&ndash;                <v-card>&ndash;&gt;-->
      <!--              &lt;!&ndash;                  <v-container&ndash;&gt;-->
      <!--              &lt;!&ndash;                    fluid&ndash;&gt;-->
      <!--              &lt;!&ndash;                    grid-list-md&ndash;&gt;-->
      <!--              &lt;!&ndash;                  >&ndash;&gt;-->
      <!--              &lt;!&ndash;                    <v-layout row wrap>&ndash;&gt;-->
      <!--              &lt;!&ndash;                      <v-flex v-for="n in item.response">&ndash;&gt;-->
      <!--              &lt;!&ndash;                        <v-card>&ndash;&gt;-->
      <!--              &lt;!&ndash;                            <v-container&ndash;&gt;-->
      <!--              &lt;!&ndash;                              fill-height&ndash;&gt;-->
      <!--              &lt;!&ndash;                              fluid&ndash;&gt;-->
      <!--              &lt;!&ndash;                              pa-2&ndash;&gt;-->
      <!--              &lt;!&ndash;                            >&ndash;&gt;-->
      <!--              &lt;!&ndash;                              <v-layout fill-height>&ndash;&gt;-->
      <!--              &lt;!&ndash;                                <v-flex xs12 align-end flexbox>&ndash;&gt;-->
      <!--              &lt;!&ndash;                                  <span class="headline white&#45;&#45;text">{{n.name}}</span>&ndash;&gt;-->
      <!--              &lt;!&ndash;                                </v-flex>&ndash;&gt;-->
      <!--              &lt;!&ndash;                              </v-layout>&ndash;&gt;-->
      <!--              &lt;!&ndash;                            </v-container>&ndash;&gt;-->
      <!--              &lt;!&ndash;                          <v-card-actions>&ndash;&gt;-->
      <!--              &lt;!&ndash;                            <v-spacer></v-spacer>&ndash;&gt;-->
      <!--              &lt;!&ndash;                            <v-btn icon>&ndash;&gt;-->
      <!--              &lt;!&ndash;                              <v-icon>favorite</v-icon>&ndash;&gt;-->
      <!--              &lt;!&ndash;                            </v-btn>&ndash;&gt;-->
      <!--              &lt;!&ndash;                            <v-btn icon>&ndash;&gt;-->
      <!--              &lt;!&ndash;                              <v-icon>bookmark</v-icon>&ndash;&gt;-->
      <!--              &lt;!&ndash;                            </v-btn>&ndash;&gt;-->
      <!--              &lt;!&ndash;                            <v-btn icon>&ndash;&gt;-->
      <!--              &lt;!&ndash;                              <v-icon>share</v-icon>&ndash;&gt;-->
      <!--              &lt;!&ndash;                            </v-btn>&ndash;&gt;-->
      <!--              &lt;!&ndash;                          </v-card-actions>&ndash;&gt;-->
      <!--              &lt;!&ndash;                        </v-card>&ndash;&gt;-->
      <!--              &lt;!&ndash;                      </v-flex>&ndash;&gt;-->
      <!--              &lt;!&ndash;                    </v-layout>&ndash;&gt;-->
      <!--              &lt;!&ndash;                  </v-container>&ndash;&gt;-->
      <!--              &lt;!&ndash;                </v-card>&ndash;&gt;-->
      <!--              &lt;!&ndash;              </v-flex>&ndash;&gt;-->
      <!--              &lt;!&ndash;            </v-layout>&ndash;&gt;-->


      <!--              &lt;!&ndash;                            <v-card v-for="n in item.response">&ndash;&gt;-->
      <!--              &lt;!&ndash;                              <v-card-title primary-title>&ndash;&gt;-->
      <!--              &lt;!&ndash;                                <div>&ndash;&gt;-->
      <!--              &lt;!&ndash;                                  <p> {{ n.name }} </p>&ndash;&gt;-->
      <!--              &lt;!&ndash;                                  <div v-if="n.name === 'Sim'"></div>&ndash;&gt;-->
      <!--              &lt;!&ndash;                                </div>&ndash;&gt;-->
      <!--              &lt;!&ndash;                              </v-card-title>&ndash;&gt;-->

      <!--              &lt;!&ndash;                              <v-card-actions>&ndash;&gt;-->
      <!--              &lt;!&ndash;                                100&ndash;&gt;-->
      <!--              &lt;!&ndash;                              </v-card-actions>&ndash;&gt;-->
      <!--              &lt;!&ndash;                            </v-card>&ndash;&gt;-->

      <!--              &lt;!&ndash;            <v-radio-group v-model="item.selected">&ndash;&gt;-->
      <!--              &lt;!&ndash;              <v-radio v-for="n in item.response" :label="n.name" :value="n.value"></v-radio>&ndash;&gt;-->
      <!--              &lt;!&ndash;            </v-radio-group>&ndash;&gt;-->

      <!--            </material-card>-->

      <!--          </v-form>-->

      <!--        </div>-->
      <!--      </v-flex>-->

      <!--      <v-flex md12>-->
      <!--        <vue-excel-xlsx-->
      <!--          :data="users"-->
      <!--          :columns="headers"-->
      <!--          :filename="'filename'"-->
      <!--          :sheetname="'sheetname'"-->
      <!--        >-->
      <!--          <button type="button" class="font-weight-light v-btn v-btn&#45;&#45;large theme&#45;&#45;light success">-->
      <!--            Download-->
      <!--          </button>-->

      <!--        </vue-excel-xlsx>-->
      <!--        <v-data-table-->
      <!--          :headers="headers"-->
      <!--          :items="users"-->
      <!--          :loading="true"-->
      <!--          :search="search"-->
      <!--          item-key="uid"-->
      <!--          :items-per-page="100"-->
      <!--          :hide-default-footer="true"-->
      <!--        >-->
      <!--          <template-->
      <!--            slot="headerCell"-->
      <!--            slot-scope="{ header }">-->
      <!--                    <span-->
      <!--                      class="subheading font-weight-light text&#45;&#45;darken-3"-->
      <!--                      v-text="header.text"-->
      <!--                    />-->
      <!--            <br>-->
      <!--            <small>{{ header.description }}</small>-->
      <!--          </template>-->
      <!--          <template-->
      <!--            slot="items"-->
      <!--            slot-scope="props">-->
      <!--            <td>-->
      <!--              <span v-if="props.item.name">{{ props.item.name}}</span>-->
      <!--            </td>-->
      <!--            <td class="text-xs-left with-input-xs">-->
      <!--              {{props.item.telefone ? props.item.telefone : 'NI'}}-->
      <!--            </td>-->
      <!--            <td class="text-xs-left with-input-xs">-->
      <!--              {{props.item.city }}-->
      <!--            </td>-->
      <!--            <td class="text-xs-left with-input-xs">-->
      <!--              {{props.item.uf}}-->
      <!--            </td>-->
      <!--            <td class="text-xs-left with-input-xs">-->
      <!--              <span v-if="props.item.school">{{props.item.school}}</span>-->
      <!--              <span v-else="props.item.school">Não Informado</span>-->
      <!--            </td>-->
      <!--          </template>-->
      <!--        </v-data-table>-->
      <!--        <v-progress-linear-->
      <!--          :active="loading"-->
      <!--          :color="color"-->
      <!--          indeterminate-->
      <!--        />-->
      <!--      </v-flex>-->
    </v-layout>
  </v-container>
</template>

<script>
  import {db, auth, usersCollection} from "./../firebase";
  import municipios from "../municipios";

  export default {
    data() {
      return {
        divisoesTerritoriais:
          [
            {id: 1, nome: 'Regiões'},
            {id: 2, nome: 'Estados'},
            {id: 3, nome: 'Terrítórios UNICEF'},
          ],
        territorioSelecioando: '',
        values: '',
        estados: [
          {
            "id": 11,
            "sigla": "RO",
            "nome": "Rondônia",
            "regiao": {"id": 1, "sigla": "N", "nome": "Norte"}
          },
          {
            "id": 12, "sigla": "AC",
            "nome": "Acre",
            "regiao": {"id": 1, "sigla": "N", "nome": "Norte"}
          },
          {
            "id": 13,
            "sigla": "AM",
            "nome": "Amazonas",
            "regiao": {"id": 1, "sigla": "N", "nome": "Norte"}
          },
          {
            "id": 14, "sigla": "RR", "nome": "Roraima",
            "regiao": {"id": 1, "sigla": "N", "nome": "Norte"}
          }, {
            "id": 15,
            "sigla": "PA",
            "nome": "Pará",
            "regiao": {"id": 1, "sigla": "N", "nome": "Norte"}
          },
          {
            "id": 16, "sigla": "AP", "nome": "Amapá",
            "regiao": {"id": 1, "sigla": "N", "nome": "Norte"}
          },
          {
            "id": 17,
            "sigla": "TO",
            "nome": "Tocantins",
            "regiao": {"id": 1, "sigla": "N", "nome": "Norte"}
          },
          {
            "id": 21,
            "sigla": "MA",
            "nome": "Maranhão",
            "regiao": {"id": 2, "sigla": "NE", "nome": "Nordeste"}
          },
          {
            "id": 22,
            "sigla": "PI",
            "nome": "Piauí",
            "regiao": {"id": 2, "sigla": "NE", "nome": "Nordeste"}
          },
          {
            "id": 23,
            "sigla": "CE",
            "nome": "Ceará",
            "regiao": {"id": 2, "sigla": "NE", "nome": "Nordeste"}
          },
          {
            "id": 24,
            "sigla": "RN",
            "nome": "Rio Grande do Norte",
            "regiao": {"id": 2, "sigla": "NE", "nome": "Nordeste"}
          },
          {
            "id": 25,
            "sigla": "PB",
            "nome": "Paraíba",
            "regiao": {"id": 2, "sigla": "NE", "nome": "Nordeste"}
          },
          {
            "id": 26,
            "sigla": "PE",
            "nome": "Pernambuco",
            "regiao": {"id": 2, "sigla": "NE", "nome": "Nordeste"}
          },
          {
            "id": 27,
            "sigla": "AL",
            "nome": "Alagoas",
            "regiao": {"id": 2, "sigla": "NE", "nome": "Nordeste"}
          },
          {
            "id": 28,
            "sigla": "SE",
            "nome": "Sergipe",
            "regiao": {"id": 2, "sigla": "NE", "nome": "Nordeste"}
          },
          {
            "id": 29,
            "sigla": "BA",
            "nome": "Bahia",
            "regiao": {"id": 2, "sigla": "NE", "nome": "Nordeste"}
          },
          {
            "id": 31,
            "sigla": "MG",
            "nome": "Minas Gerais",
            "regiao": {"id": 3, "sigla": "SE", "nome": "Sudeste"}
          },
          {
            "id": 32,
            "sigla": "ES",
            "nome": "Espírito Santo",
            "regiao": {"id": 3, "sigla": "SE", "nome": "Sudeste"}
          },
          {
            "id": 33,
            "sigla": "RJ",
            "nome": "Rio de Janeiro",
            "regiao": {"id": 3, "sigla": "SE", "nome": "Sudeste"}
          },
          {
            "id": 35,
            "sigla": "SP",
            "nome": "São Paulo",
            "regiao": {"id": 3, "sigla": "SE", "nome": "Sudeste"}
          },
          {
            "id": 41, "sigla": "PR", "nome": "Paraná",
            "regiao": {"id": 4, "sigla": "S", "nome": "Sul"}
          }, {
            "id": 42,
            "sigla": "SC",
            "nome": "Santa Catarina",
            "regiao": {"id": 4, "sigla": "S", "nome": "Sul"}
          },
          {
            "id": 43,
            "sigla": "RS",
            "nome": "Rio Grande do Sul",
            "regiao": {"id": 4, "sigla": "S", "nome": "Sul"}
          },
          {
            "id": 50,
            "sigla": "MS",
            "nome": "Mato Grosso do Sul",
            "regiao": {"id": 5, "sigla": "CO", "nome": "Centro-Oeste"}
          },
          {
            "id": 51,
            "sigla": "MT",
            "nome": "Mato Grosso",
            "regiao": {"id": 5, "sigla": "CO", "nome": "Centro-Oeste"}
          },
          {
            "id": 52,
            "sigla": "GO",
            "nome": "Goiás",
            "regiao": {"id": 5, "sigla": "CO", "nome": "Centro-Oeste"}
          },
          {
            "id": 53,
            "sigla": "DF",
            "nome": "Distrito Federal",
            "regiao": {"id": 5, "sigla": "CO", "nome": "Centro-Oeste"}
          }
        ],
        municipios: municipios,
        regioes: [
          {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
          },
          {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
          },
          {
            "id": 3,
            "sigla": "SE",
            "nome": "Sudeste"
          },
          {
            "id": 4,
            "sigla": "S",
            "nome": "Sul"
          },
          {
            "id": 5,
            "sigla": "CO",
            "nome": "Centro-Oeste"
          }
        ],
        territorios_unicef: '',
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
            text: 'Totais de respostas',
            value: 'telefone',
            align: 'left',
            field: 'telefone',
            label: 'Telefone'
          },
          {
            sortable: false,
            text: 'Totais resposta 1',
            value: 'city',
            align: 'left',
            field: 'city',
            label: 'Cidade'
          },
          {
            sortable: false,
            text: 'Totais resposta 2',
            value: 'UF',
            align: 'left',
            field: 'uf',
            label: 'UF'
          },
          {
            sortable: false,
            text: 'Totais resposta 3',
            value: 'school',
            align: 'left',
            field: 'school',
            label: 'Escola'
          }
        ],
      }
    },
    methods: {

      selectItem(value) {
        switch (value) {
          case 1:
            this.getEstado();
            break;
          case 2:
            this.getRegiao();
            break;
          case 3:
            this.values = ""
            break;
          default:
            console.log(`Sorry, we are out of ${value}.`);
        }
      },
      getAnswer (value) {
        return value;
      },
      async getRegiao() {

        for (var i = 0; i < this.regioes.length; i++) {

          let region = await db.collection("users").where('ibge.regiao-imediata.regiao-intermediaria.UF.regiao.id', '==', this.regioes[i].id).get().then((querySnapshot) => {

            let values = querySnapshot.docs;
            let arrayData = [];
            for (let i = 0; i < values.length; i++) {
              let data = values[i].data();
              this.getAnswer(data)
              arrayData.push(data);
            }
            return {count: arrayData.length};
          });

          this.regioes[i].count = region.count;
        }
        this.values = this.regioes
      },

      async getEstado() {

        var data = [];

        for (var i = 0; i < this.estados.length; i++) {

          let region = await db.collection("users").where('ibge.regiao-imediata.regiao-intermediaria.UF.id', '==', this.estados[i].id).get().then((querySnapshot) => {

            let values = querySnapshot.docs;
            let arrayData = [];
            let perguntas = [];
            for (let i = 0; i < values.length; i++) {
              let data = values[i].data();
              perguntas.push(data.quest)
              arrayData.push(data);
            }
            return {count: arrayData.length, pergunta:  perguntas, respostas: []};
          });

          this.estados[i].count = region.count;
          this.estados[i].perguntas = region.pergunta;
        }
        console.log(this.estados)
        this.values = this.estados
      },
      async getRespostasPorEstado() {

        var data = [];

        for (var i = 0; i < this.estados.length; i++) {

          let region = await db.collection("users").where('ibge.regiao-imediata.regiao-intermediaria.UF.id', '==', this.estados[i].id).get().then((querySnapshot) => {

            let values = querySnapshot.docs;
            let arrayData = [];
            for (let i = 0; i < values.length; i++) {
              var obj = {}
              let data = values[i].data();
              obj.responses = {};
              obj.responses.values = [];
              obj.responses.answer = [];
              if (data.quest != undefined) {
                for (var i2 = 0; i2 < data.quest.length; i2++) { // 4 grupos de questões
                  for (var i3 = 0; i3 < data.quest[i2].questions.length; i3++) { // questões em si
                    if (data.quest[i3]) {
                      for (var i4 = 0; i4 < data.quest[i3].questions.length; i4++) {
                        var answer = data.quest[i3].questions[i4].answer;
                      }
                    }

                    obj.responses.answer = answer
                    obj.responses.values.push(data.quest[i2].questions[i3].selected)
                  }
                }
              }
              // obj.dados = data;
              arrayData.push(obj);

            }
            return {count: arrayData.length, respostas: arrayData};
          });

          this.estados[i].count = region.count;
          this.estados[i].resp = region.respostas;
          this.estados[i].estado = region.respostas.nome;

          data.push(region)
        }
        console.log(this.estados)
      },

      async getDataByMunicipio(id) {

        let region = await db.collection("users").where('ibge.regiao-imediata.regiao-intermediaria.UF.regiao.id', '==', id).get().then((querySnapshot) => {

          let values = querySnapshot.docs;
          let arrayData = [];
          for (let i = 0; i < values.length; i++) {
            let obj = {}
            let data = values[i].data();
            arrayData.push(data);
          }
          console.log(arrayData)
          return arrayData;
        });
        return region;
      },

      async getData() {

        var washData = await db.collection("users").get().then(function (querySnapshot) {

          let values = querySnapshot.docs;
          let arrayData = [];
          for (let i = 0; i < values.length; i++) {
            let obj = {}
            let data = values[i].data();
            obj.quest = data.quest;
            obj.school = data.school;
            arrayData.push(obj);
          }
          return arrayData;
        });


        this.questions = washData;

        let responses = this.users.length;

        this.responses = responses.toString();

        this.loading = false;


      },

      async updateSchool() {

        var region = await db.collection("users").get().then((querySnapshot) => {

          let values = querySnapshot.docs;
          let arrayData = [];
          for (let i = 0; i < values.length; i++) {
            let obj = {}
            let data = values[i].data();
            arrayData.push(data);
          }
          return arrayData;
        });


        for (var i = 0; i < region.length; i++) {

          let uid = region[i].uid;
          let school = region[i].school;
          let city_id = region[i].city.ibge_city_id ? region[i].city.ibge_city_id : undefined;


          if (undefined !== school) {
            if ((undefined !== uid) && (undefined !== school.ibge_id)) {

              fetch("https://servicodados.ibge.gov.br/api/v1/localidades/municipios/" + school.ibge_id, {
                method: "GET",
                headers: {"Content-Type": "application/json"}
              })
                .then(res => res.clone().json())
                .then(res => {
                  db.collection("users").doc(uid).update({ibge: res})
                    .then(function () {
                      console.log("Document successfully updated!" + uid);
                    });
                })
            }
          }
        }
      }
    },
    created() {
      this.getData();
    }
    ,
  }
</script>
