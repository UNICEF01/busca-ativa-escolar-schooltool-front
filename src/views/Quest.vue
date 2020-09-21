<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap>
      <v-flex
        xs12
        md8>
        <material-card
          color="cyan"
          title="Pesquisa"
          text="Colocar Descrição"
        >
          <v-form>
            <v-container fluid>
              <v-layout wrap>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="Nome Completo"
                  />
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    class="purple-input"
                    label="E-mail"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="Telefone"
                    class="purple-input"/>
                </v-flex>
                <Estados v-on:childToParent="onChildClick"></Estados>

                <v-autocomplete
                  v-model="model"
                  :items="items"
                  :loading="isLoading"
                  :search-input.sync="search"
                  clearable
                  hide-details
                  hide-selected
                  item-text="name"
                  item-value="symbol"
                  label="Nome da escola"
                  solo
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
                    <v-list-item-avatar>
                      {{ item.name.charAt(0) }}
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.name"></v-list-item-title>
                      <v-list-item-subtitle v-text="item.id"></v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </v-autocomplete>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex
        xs12
        md8>
        <material-card v-for="item in quest"
                       class="card-tabs"
                       color="cyan">
          <v-flex slot="header">
            <v-tabs
              color="transparent"
              slider-color="white">
              <span
                class="subheading font-weight-light mr-3"
                style="align-self: center"
              >{{item.answer}}</span
              >
            </v-tabs>
          </v-flex>


          <v-radio-group v-model="item.selected">
            <v-radio v-for="n in item.response" :label="n.name" :value="n.value"></v-radio>
          </v-radio-group>

        </material-card>
      </v-flex>

      <!--      <v-flex-->
      <!--        xs12-->
      <!--        md4>-->
      <!--        <material-card class="v-card-profile">-->
      <!--          <v-avatar-->
      <!--            slot="offset"-->
      <!--            class="mx-auto d-block"-->
      <!--            size="130">-->
      <!--            <img-->
      <!--              src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"-->
      <!--            >-->
      <!--          </v-avatar>-->
      <!--          <v-card-text class="text-xs-center">-->
      <!--            <h6 class="category text-gray font-weight-thin mb-3">-->
      <!--              CEO / CO-FOUNDER-->
      <!--            </h6>-->
      <!--            <h4 class="card-title font-weight-light">Alec Thompson</h4>-->
      <!--            <p class="card-description font-weight-light">-->
      <!--              Don't be scared of the truth because we need to restart the human-->
      <!--              foundation in truth And I love you like Kanye loves Kanye I love-->
      <!--              Rick Owens’ bed design but the back is...-->
      <!--            </p>-->
      <!--            <v-btn-->
      <!--              color="success"-->
      <!--              round-->
      <!--              class="font-weight-light"-->
      <!--            >Follow</v-btn-->
      <!--            >-->
      <!--          </v-card-text>-->
      <!--        </material-card>-->
      <!--      </v-flex>-->
      {{uf}}
    </v-layout>
  </v-container>
</template>

<script>
  import Estados from "../components/core/CitySelect";

  export default {
    components: {Estados},
    data() {
      return {
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
            id: 0,
            answer: 'A água está disponível nas instalações da escola sempre e em quantidade suficiente para todos os tipos de necessidade',
            selected: '',
            response: [
              {
                id: 0,
                name: 'Sim',
                value: 2,
              },
              {
                id: 1,
                name: 'A água está disponível nas instalações da escola para todas as necessidades, em quantidade suficiente mas não durante todo o ano letivo. ',
                value: 1,
              },
              {
                id: 1,
                name: 'Não há água disponível nas instalações da escola para todas as necessidades, seja em quantidade insuficiente ou não disponível durante o ano letivo. ',
                value: 0,
              }
            ]
          },
          {
            id: 1,
            answer: 'Existe armazenamento de água e ele é suficiente para satisfazer as necessidades da escola durante, pelo menos, dois dias',
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
                id: 1,
                name: 'Não há armazenamento de água.',
                value: 0,
              }
            ]
          }
        ]
      }
    },
    methods: {
      // Triggered when `childToParent` event is emitted by the child.
      onChildClick (value) {
        console.log(value)
        this.uf = value
      }
    },

    watch: {
      model(val) {
        if (val != null) this.tab = 0
        else this.tab = null
      },
      search(val) {
        // Items have already been loaded
        if (this.items.length > 0) return

        this.isLoading = true

        const requestOptions = {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({name: "", UF: ""})
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
