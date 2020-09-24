<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap>
      <v-flex xs12 md8>

        <material-card color="cyan" title="Pesquisa" text="Colocar Descrição">

          <v-form ref="form_register" lazy-validation>
            <v-container fluid>
              <v-layout wrap>

                <v-flex xs12 md4>
                  <v-text-field label="Nome Completo" v-model="user.name" :rules="[rules.required]"/>
                </v-flex>

                <v-flex xs12 md4>
                  <v-text-field class="purple-input" label="E-mail" v-model="user.email"
                                :rules="[rules.required, rules.email]"/>
                </v-flex>

                <v-flex xs12 md4>
                  <v-text-field label="Telefone" class="purple-input" v-model="user.telefone"
                                :rules="[rules.required]"/>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    class="purple-input"
                    label="Senha"
                    v-model="user.password"
                    :append-icon="showPasword1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="showPasword1 ? 'text' : 'password'"
                    counter
                    @click:append="showPasword1 = !showPasword1"/>
                </v-flex>

                <v-flex xs12 md6>
                  <v-text-field
                    class="purple-input"
                    label="Confirme a senha"
                    v-model="user.confirmPassword"
                    :append-icon="showPasword2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min, rules.passMatch]"
                    :type="showPasword2 ? 'text' : 'password'"
                    counter
                    @click:append="showPasword2 = !showPasword2"/>
                </v-flex>


                <Estados @childToParent="onChildClick"></Estados>

                <v-flex xs12 md12>

                  <v-autocomplete
                    v-model="school_name"
                    :items="items"
                    :loading="isLoading"
                    :search-input.sync="search"
                    clearable
                    hide-details
                    hide-selected
                    item-text="name"
                    label="Nome da escola"
                  >
                    <template v-slot:no-data>
                      <v-list-item>
                        <v-list-item-title>
                          Escreva o nome da escola
                        </v-list-item-title>
                      </v-list-item>
                    </template>

                    <template v-slot:selection="{ attr, on, item, selected }">
                      <span v-text="item.name"></span>
                    </template>

                    <template v-slot:item="{ item }">
                      <v-list-item-content>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                        -
                        <v-list-item-subtitle v-text="item.city_name"></v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-autocomplete>

                </v-flex>

                <v-flex md12>
                  <label>Qual o tipo de relação você tem com a escola?</label>
                  <v-radio-group v-model="user.relation" row>
                    <v-radio v-for="n in ['Aluno(a)', 'Funcionário(a)' , 'Outros']" :label="n" :value="n"></v-radio>
                  </v-radio-group>
                </v-flex>

                <v-flex md12>
                  <v-text-field md6 v-if="user.relation === 'Outros'" label="Qual?" class="purple-input"
                                v-model="user.relation.outros" :rules="[rules.required]"/>
                </v-flex>

              </v-layout>

            </v-container>

            <v-flex xs12 class="d-flex justify-space-between">
              <v-dialog v-model="dialog" width="500">

                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" color="warning">
                    Continuar de onde parou
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="headline grey lighten-2">
                    Forneça seus dados
                  </v-card-title>

                  <v-form>
                    <v-container fluid>
                      <v-flex xs12>
                        <v-text-field label="Email" v-model="user.email"/>
                      </v-flex>

                      <v-flex xs12>
                        <v-text-field label="Senha" v-model="user.password"/>
                      </v-flex>

                    </v-container>
                  </v-form>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="default" text @click="dialog = false">
                      Recuperar senha
                    </v-btn>
                    <v-btn color="default" text @click="dialog = false">
                      Fechar
                    </v-btn>
                    <v-btn color="success" text @click="login()">
                      Login
                    </v-btn>
                  </v-card-actions>
                </v-card>

              </v-dialog>

              <v-spacer></v-spacer>
              <v-btn @click="start()" class="font-weight-light" color="success">
                Começar
              </v-btn>
            </v-flex>


          </v-form>

        </material-card>


      </v-flex>

    </v-layout>
  </v-container>

</template>

<script>
  import Estados from "../components/core/CitySelect";
  import {db, auth, usersCollection} from "./../firebase";

  export default {
    components: {Estados},
    data() {
      return {

        user: {
          email: '',
          password: '',
          confirmPassword: '',
          error: '',
          telefone: '',
          uf: '',
          city: ''
        },
        showPasword1: false,
        showPasword2: false,
        rules: {
          required: value => !!value || 'Obrigatório.',
          min: v => v.length >= 8 || 'Mínimo 6 caracteres',
          passMatch: v => v === this.user.password || 'As senhas não correspondem',
          email: v => /.+@.+\..+/.test(v) || 'E-mail inválido',
        },
        formHasErrors: false,

        dialog: false,
        descriptionLimit: 60,
        items: [],
        isLoading: false,
        stateSelected: null,
        citySelected: null,
        search: null,
        model: null,
        count: null,
        uf: '',
        city: '',
        value: '',
        school_name: '',
        states: [
          {
            "id": "1",
            "sigla": "AC",
            "name": "Acre"
          },
          {
            "id": "2",
            "sigla": "AL",
            "name": "Alagoas"
          },
          {
            "id": "3",
            "sigla": "AM",
            "name": "Amazonas"
          },
          {
            "id": "4",
            "sigla": "AP",
            "name": "Amapá"
          },
          {
            "id": "5",
            "sigla": "BA",
            "name": "Bahia"
          },
          {
            "id": "6",
            "sigla": "CE",
            "name": "Ceará"
          },
          {
            "id": "7",
            "sigla": "DF",
            "name": "Distrito Federal"
          },
          {
            "id": "8",
            "sigla": "ES",
            "name": "Espírito Santo"
          },
          {
            "id": "9",
            "sigla": "GO",
            "name": "Goiás"
          },
          {
            "id": "10",
            "sigla": "MA",
            "name": "Maranhão"
          },
          {
            "id": "11",
            "sigla": "MG",
            "name": "Minas Gerais"
          },
          {
            "id": "12",
            "sigla": "MS",
            "name": "Mato Grosso do Sul"
          },
          {
            "id": "13",
            "sigla": "MT",
            "name": "Mato Grosso"
          },
          {
            "id": "14",
            "sigla": "PA",
            "name": "Pará"
          },
          {
            "id": "15",
            "sigla": "PB",
            "name": "Paraíba"
          },
          {
            "id": "16",
            "sigla": "PE",
            "name": "Pernambuco"
          },
          {
            "id": "17",
            "sigla": "PI",
            "name": "Piauí"
          },
          {
            "id": "18",
            "sigla": "PR",
            "name": "Paraná"
          },
          {
            "id": "19",
            "sigla": "RJ",
            "name": "Rio de Janeiro"
          },
          {
            "id": "20",
            "sigla": "RN",
            "name": "Rio Grande do Norte"
          },
          {
            "id": "21",
            "sigla": "RO",
            "name": "Rondônia"
          },
          {
            "id": "22",
            "sigla": "RR",
            "name": "Roraima"
          },
          {
            "id": "23",
            "sigla": "RS",
            "name": "Rio Grande do Sul"
          },
          {
            "id": "24",
            "sigla": "SC",
            "name": "Santa Catarina"
          },
          {
            "id": "25",
            "sigla": "SE",
            "name": "Sergipe"
          },
          {
            "id": "26",
            "sigla": "SP",
            "name": "São Paulo"
          },
          {
            "id": "27",
            "sigla": "TO",
            "name": "Tocantins"
          }
        ],
        quest: [

          {
            group: "1. Água",
            questions: [
              {
                id: 1,
                answer: '<span>A água está disponível nas instalações da escola sempre e em quantidade suficiente para todos os tipos de necessidade.</span>',
                selected: '',
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
                answer: '<span>Existe armazenamento de água e ele é suficiente para satisfazer as necessidades da escola durante, pelo menos, dois dias.</span>',
                selected: '',
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
                answer: '<span>A água está tratada com cloro (teor mínimo,  0,2 - 0,5 mg/L de cloro residual livre) ou com um método comprovada e que siga as especificações do Ministério da Saúde [Portaria nº 2.914/2011 do Ministério da Saúde determina a obrigatoriedade de se manter, no mínimo, 0,2 mg/L de cloro residual livre ou 2 mg/L de cloro residual combinado em toda a extensão do sistema de distribuição (reservatório e rede)] ou da Organização Mundial da Saúde (OMS).</span>',
                selected: '',
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
            ]
          },

          {
            group: "2. Higiene das mãos e menstrual",
            questions: [
              {
                id: 4,
                answer: '<span>Há locais para a lavagem de mãos com água e sabão na entrada da escola.</span>',
                selected: '',
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
                answer: '<span>Há locais para a lavagem de mãos com água e sabão na frente das salas de aula e a menos de 5 metros de cada banheiro.</span>',
                selected: '',
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
                answer: '<span>São organizadas atividades de lavagem de mãos para todos os estudantes pelo menos três vezes por dia na escola.</span>',
                selected: '',
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
                selected: '',
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
            ]
          },

          {
            group: "3. Saneamento",
            questions: [
              {
                id: 8,
                answer: '<span>A escola tem um número suficiente de banheiros ou vasos sanitários funcionando para uso dos estudantes.</span>',
                selected: '',
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
                answer: '<span>Os banheiros ou sanitários estão claramente separados para meninos e meninas.</span>',
                selected: '',
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
                selected: '',
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
                answer: '<span>O piso, a maçaneta da porta, a área dos banheiros e sanitários são limpos pelo menos uma vez por dia com água e detergente, e são desinfectados com água sanitária.</span>',
                selected: '',
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
                answer: '<span>Todos os banheiros têm um local para a lavagem de mãos com água e sabão em um raio mínimo de 5 metros.</span>',
                selected: '',
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
                answer: '<span>Há lixeiras em cada sala de aula, nos banheiros e sanitários e em locais estratégicos nas dependências da escola, e se recolhe diariamente o lixo de forma segura.</span>',
                selected: '',
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
                selected: '',
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
              },

            ]
          },

          {
            group: "4. Prevenção e controle de infecções",
            questions: [
              {
                id: 15,
                answer: '<span>Todas as salas de aula dispõem de material informativo sobre o COVID-19 e outras doenças infecciosas.</span>',
                selected: '',
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
                selected: '',
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
                selected: '',
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
                selected: '',
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
                selected: '',
                response: [
                  {
                    id: 0,
                    name: 'Sim, os professores estão sempre conscientes e reforçam a distância física entre eles e os alunos.',
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
                answer: '<span>É implementada a distância física entre os usuários dos locais de lavagem de mãos ou enquanto fazem fila para ir ao banheiro.</span>',
                selected: '',
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
                answer: '<span>Se há um refeitório escolar, a distância física entre os estudantes é implementado e respeitada.</span>',
                selected: '',
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
                answer: '<span>A equipe da cozinha usa máscaras e dispõe de locais para a lavagem ou produtos desinfectantes para as mãos.</span>',
                selected: '',
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
                answer: '<span>As salas de aulas têm uma boa ventilação natural.</span>',
                selected: '',
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
                selected: '',
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
                answer: '<span>A escola dispõe de um espaço privado, designado para o isolamento de estudantes com sintomas de COVID -19, onde possam aguardar que seus responsáveis os busquem.</span>',
                selected: '',
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
                answer: '<span>A escola tem uma reserva de máscaras para uso dos estudantes, que tenham sido identificados com sintomas de COVID, até que seus responsáveis os busquem.</span>',
                selected: '',
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
                answer: '<span>Na escola onde se recomenda o uso de máscaras, todos os estudantes têm acesso a máscaras (em particular estudantes de famílias mais vulneráveis).</span>',
                selected: '',
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
                selected: '',
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

            ]
          }
        ]
      }
    },
    methods: {
      // Triggered when `childToParent` event is emitted by the child.
      onChildClick(value) {
        console.log(value)
        this.uf = value.uf
        this.city = value.city
      },

      async start() {
        if (this.$refs.form_register.validate()) {
          try {
            const user = auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then((user) => {

              this.user.uid = user.user.uid
              this.user.name = this.user.name.trim()
              this.user.dt_create = new Date()

              db.collection("users").doc(user.user.uid).set(this.user)
                .then(function () {
                  console.log("Document successfully written!");
                })
                .catch(function (error) {
                  console.error("Error writing document: ", error);
                });
              //console.log(user);
              this.$router.push({path: '/pesquisa/wash'})
            })
          } catch (error) {
            console.log(error)
          }
        }
      },

      login() {
        alert();
      }

    },

    watch: {
      school_name(val) {
        if (val != null)
          this.school_name = val;
        console.log(val)
      },
      search(val) {
        //Items have already been loaded
        if (val < 3) return

        this.isLoading = true

        const requestOptions = {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({name: val, $hide_loading_feedback: true})
        }

        // Lazily load input items
        fetch("http://api.busca-ativa-escolar.test/api/v1/open/schools", requestOptions)
          .then(res => res.clone().json())
          .then(res => {
            this.items = res
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      },
    },

  }

</script>
