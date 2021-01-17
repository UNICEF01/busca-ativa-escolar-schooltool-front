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
          icon="mdi-account"
          title="Usuários"
          :value="responses"
          sub-text="Quantidade de usuários"
        />
      </v-flex>
      <!--      <pre v-if="users.length > 1">-->
      <!--      {{users}}-->
      <!--        </pre>-->

      <v-flex md12>
        <!--        <vue-excel-xlsx-->
        <!--          :data="users"-->
        <!--          :columns="headers"-->
        <!--          :filename="'filename'"-->
        <!--          :sheetname="'sheetname'"-->
        <!--        >-->
        <!--        </vue-excel-xlsx>-->

        <div>
          <v-toolbar flat color="white" class="marker mb-0">
            <v-toolbar-title>Usuários</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn color="cyan" dark class="mb-2" v-on="on">Adicionar</v-btn>
              </template>
              <v-form ref="form_register" lazy-validation>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-layout wrap>
                      <v-flex xs12 sm12 md12>
                        <v-text-field v-model="editedItem.nome" label="Nome" :rules="[rules.required]"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md12>
                        <v-text-field v-model="editedItem.email" label="E-mail"
                                      :rules="[rules.required, rules.email]"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md12>
                        <v-radio-group
                          v-model="editedItem.perfil"
                          row
                          :rules="[rules.required]"
                        >
                          <v-radio
                            label="Administrador"
                            value="admin"
                          ></v-radio>
                          <v-radio
                            label="Usuário"
                            value="user"
                          ></v-radio>
                        </v-radio-group>
                      </v-flex>
                      <v-flex xs12 sm6 md6>
                        <v-text-field v-model="editedItem.senha" label="Senha" :rules="[rules.required]"></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="close">Caneclar</v-btn>
                    <v-btn color="blue darken-1" flat @click="start">Salvar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-form>
            </v-dialog>
          </v-toolbar>
          <v-data-table
            :headers="headers"
            :items="users"
            :loading="true"
            :search="search"
            item-key="uid"
            :items-per-page="100"
            :hide-default-footer="true"
          >
            <template>
              asdfasd
              <v-toolbar
                flat
              >
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                      <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>

            <template
              slot="items"
              slot-scope="props">
              <td>
                <span v-if="props.item.name">{{ props.item.name}}</span>
              </td>
              <td class="text-xs-left with-input-xs">
                {{props.item.perfil ? props.item.perfil : 'NI'}}
              </td>
            </template>
          </v-data-table>
          <v-progress-linear
            :active="loading"
            :color="color"
            indeterminate
          />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {db, auth, usersCollection} from "./../firebase";

  export default {
    data() {
      return {
        rules: {
          required: value => !!value || 'Obrigatório.',
          min: v => v.length >= 6 || 'Mínimo 6 caracteres',
          passMatch: v => v === this.login.password || 'As senhas não correspondem',
          email: v => /.+@.+\..+/.test(v) || 'E-mail inválido',
        },
        formHasErrors: false,
        dialog: false,
        desserts: [],
        editedIndex: -1,
        editedItem: {
          nome: '',
          email: '',
          perfil: '',
          senha: ''
        },
        defaultItem: {
          nome: '',
          email: '',
          perfil: '',
          senha: ''
        },
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
            text: 'Perfil',
            value: 'perfil',
            field: 'perfil',
            label: 'Perfil'
          }
        ]
      }
    },
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? 'Novo' : 'Editar'
      },
    },
    methods: {
      async getData() {
        // const snapshot =  db.collection('users').get();
        // snapshot.then(function (data) {
        //   this.users = data;
        //   console.log(this.users)
        // })


        let userList = await db.collection("admin-users").get().then(function (querySnapshot) {

          let values = querySnapshot.docs;
          let arrayData = [];
          for (let i = 0; i < values.length; i++) {
            let obj = {}
            let data = values[i].data();
            obj.name = data.nome;
            obj.perfil = data.perfil;
            arrayData.push(obj);
          }
          return arrayData;
        });


        this.users = userList;

        let responses = this.users.length;

        this.responses = responses.toString();

        this.loading = false;


      },
      editItem(item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem(item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm() {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close() {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete() {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
      async start() {
        if (this.$refs.form_register.validate()) {
          try {
            let user = auth.createUserWithEmailAndPassword(this.editedItem.email, this.editedItem.senha).then((user) => {
              this.editedItem.uid = user.user.uid
              this.editedItem.nome = this.editedItem.nome.trim()
              this.editedItem.dt_create = new Date()

              user.user.updateProfile({
                displayName: this.editedItem.nome
              })

              db.collection("admin-users").doc(user.user.uid).set(this.editedItem)
                .then(function () {
                  // console.log()
                })
                .catch(function (error) {
                  // console.error(error)
                });
            })
          } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
              this.$toast.open({
                message: 'E-mail já cadastrado, clique em continuar de onde parou para fazer login',
                type: 'error',
                position: 'top'
              });
            }
          }
        }
      },

    },
    created() {
      this.getData();
    }
    ,
  }
</script>
<style>
  .v-toolbar__content {
    margin-left: 0px !important;
  }
</style>
