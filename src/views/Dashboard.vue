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
      <v-flex
        sm6
        xs12
        md6
        lg3>
        <material-stats-card
          color="cyan"
          icon="mdi-cloud-check"
          title="Brasil"
          :value="responses"
        />
        <v-data-table
          :headers="norte.headers"
          :items="norte.items"
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
            <td>{{ item.name }}</td>
            <td>{{ item.salary }}</td>
          </template>
        </v-data-table>
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
          value="00"
        />
        <v-data-table
          :headers="nordeste.headers"
          :items="nordeste.items"
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
            <td>{{ item.name }}</td>
            <td>{{ item.salary }}</td>
          </template>
        </v-data-table>
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
          value="00"
        />
        <v-data-table
          :headers="sudeste.headers"
          :items="sudeste.items"
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
            <td>{{ item.name }}</td>
            <td>{{ item.salary }}</td>
          </template>
        </v-data-table>
        <v-data-table
          :headers="centro_oeste.headers"
          :items="centro_oeste.items"
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
            <td>{{ item.name }}</td>
            <td>{{ item.salary }}</td>
          </template>
        </v-data-table>


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
          value="00%"
        />
        <v-data-table
          :headers="sul.headers"
          :items="sul.items"
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
            <td>{{ item.name }}</td>
            <td>{{ item.salary }}</td>
          </template>
        </v-data-table>

      </v-flex>
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

  export default {
    data() {
      return {
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
              value: 'regioes'
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
              value: 'nordeste'
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
              value: 'regioes'
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
              value: 'regioes'
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
              value: 'regioes'
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
        // tabs: 0,
        // list: {
        //   0: false,
        //   1: false,
        //   2: false
        // }
      }
    },
    methods: {
      async getDataByRegion(regionId) {

        let region = await db.collection("users").where('city.ibge_region_id', '==', regionId).get().then((querySnapshot) => {

          let values = querySnapshot.docs;
          let arrayData = [];
          for (let i = 0; i < values.length; i++) {
            let obj = {}
            let data = values[i].data();
            arrayData.push(data);
          }
          return arrayData;
        });
        return region;

      },
      async getData() {

        let norte = await this.getDataByRegion('1').then((response) => {
          return response.length;
        })
        let nordeste = await this.getDataByRegion('2').then((response) => {
          return response.length;
        })
        let sudeste = await this.getDataByRegion('3').then((response) => {
          return response.length;
        })
        let sul = await this.getDataByRegion('4').then((response) => {
          return response.length;
        })
        let centro_oeste = await this.getDataByRegion('5').then((response) => {
          return response.length;
        })


        this.norte.headers[1].text = norte;
        this.nordeste.headers[1].text = nordeste;
        this.sudeste.headers[1].text = sudeste;
        this.sul.headers[1].text = sul;
        this.centro_oeste.headers[1].text = centro_oeste;

        let washData = await db.collection("users").get().then(function (querySnapshot) {

          let values = querySnapshot.docs;
          let arrayData = [];
          for (let i = 0; i < values.length; i++) {
            let obj = {}
            let data = values[i].data();
            obj.quest = data.quest;
            arrayData.push(obj);
          }
          return arrayData;
        });

        console.log(washData)

        this.users = washData;

        let responses = this.users.length;

        this.responses = responses.toString();

        this.loading = false;


      },

    },
    created() {
      this.getData();
    }
    ,
  }
</script>
