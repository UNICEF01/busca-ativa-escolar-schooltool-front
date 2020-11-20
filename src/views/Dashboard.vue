<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout wrap>
      <v-flex
        sm6
        xs12
        md6
        lg3>
        <material-stats-card
          color="cyan"
          icon="mdi-cloud-check"
          title="Respostas"
          :value="users.length"
          sub-icon="mdi-calendar"
          sub-text="Ultima resposta à 24h"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3>
        <material-stats-card
          color="orange"
          icon="mdi-city"
          title="Municípios"
          value="20"
          small-value=""
          sub-icon="mdi-alert"
          sub-icon-color="error"
          sub-text="Get More Space..."
          sub-text-color="text-primary"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3>
        <material-stats-card
          color="red"
          icon="mdi-school"
          title="Escolas"
          value="75"
          sub-icon="mdi-tag"
          sub-text="Tracked from Github"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3>
        <material-stats-card
          color="info"
          icon="mdi-water-off"
          title="Abastecimento"
          value="67%"
          sub-icon="mdi-update"
          sub-text="Falta Água"
        />
      </v-flex>

      <v-flex md12>
        <v-data-table
          :headers="headers"
          :items="users"
          :loading="true"
          :search="search"
          item-key="uid"
          :items-per-page="100"
          :hide-default-footer="true"
        >
          <template
            slot="headerCell"
            slot-scope="{ header }">
              <span
                class="subheading font-weight-light text--darken-3"
                v-text="header.text"
              />
            <br>
            <small>{{ header.description }}</small>
          </template>
          <template
            slot="items"
            slot-scope="props">
            <td>
              <span v-if="props.item.name">{{ props.item.name}}</span>
            </td>
            <td class="text-xs-left with-input-xs">
              {{props.item.telefone ? props.item.telefone : 'NI'}}
            </td>
            <td class="text-xs-left with-input-xs">
              {{props.item.city.name ? props.item.city.name : 'NI'}}
            </td>
            <td class="text-xs-left with-input-xs">
              {{props.item.city.uf ? props.item.city.uf : 'NI'}}
            </td>
            <td class="text-xs-left with-input-xs">
              <span v-if="props.item.school">{{props.item.school.name}}</span>
              <span v-else="props.item.school">Não Informado</span>
            </td>
          </template>
        </v-data-table>
        <v-progress-linear
          :active="loading"
          :color="color"
          indeterminate
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {db, auth, usersCollection} from "./../firebase";

  export default {
    data() {
      return {
        users: '',
        loading: true,
        color: 'cyan',
        search: '',
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
          // {
          //   sortable: false,
          //   text: 'ID',
          //   value: 'id'
          // },
          {
            sortable: false,
            text: 'Nome',
            value: 'name'
          },
          {
            sortable: false,
            text: 'Telefone',
            value: 'telefone',
            align: 'left'
          },
          {
            sortable: false,
            text: 'Cidade',
            value: 'city',
            align: 'left'
          },
          {
            sortable: false,
            text: 'UF',
            value: 'UF',
            align: 'left'
          },
          {
            sortable: false,
            text: 'Escola',
            value: 'school.name',
            align: 'left'
          }
        ],
        // tabs: 0,
        // list: {
        //   0: false,
        //   1: false,
        //   2: false
        // }
      }
    },
    methods: {
      async getData() {
        // const snapshot =  db.collection('users').get();
        // snapshot.then(function (data) {
        //   this.users = data;
        //   console.log(this.users)
        // })


        let washData = await db.collection("users").get().then(function (querySnapshot) {
          let arrayData = [];
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            arrayData.push(doc.data());
          });
          return arrayData;
        });

        this.users = washData;

        this.loading = false;

      },

    },
    created() {
      this.getData();
    },
  }
</script>
