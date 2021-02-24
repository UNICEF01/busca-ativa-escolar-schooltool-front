
<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
    
    >
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

      <v-card-title>
      
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Procurar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>        

        <div>
          <vue-confirm-dialog></vue-confirm-dialog>
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
                                      :rules="[rules.required, rules.email]" :disabled="editedIndex == 0"></v-text-field>
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
                        <v-text-field v-model="editedItem.senha" label="Senha" :rules="[rules.required]" :type="showPasword1 ? 'text' : 'password'"></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="close">Cancelar</v-btn>
                    <v-btn color="blue darken-1" flat @click="start">Salvar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-form>
            </v-dialog>
          </v-toolbar>

          <v-data-table
            dense
            :headers="headers"
            :items="users"
            :loading="true"
            :search="search"
            item-key="uid"
            :items-per-page="100"
            :hide-default-footer="true"
            loading-text="Carregando... aguarde por favor"

          >

            <template
              slot="items"
              slot-scope="props">
              <td>
                <span v-if="props.item.name">{{ props.item.name}}</span>
              </td>
              <td class="text-xs-left with-input-xs">
                {{props.item.perfil ? ((props.item.perfil === 'user') ? 'Usuário' : 'Administrador') : 'NI'}}
              </td>
              <td class="text-xs-left with-input-xs">
                <a @click="deleteItem(props.item.uid)"><i aria-hidden="true"
                                                          class="v-icon mdi mdi-trash-can red--text"></i>
                </a>
                <a @click="editItem(props.item.uid)"><i aria-hidden="true"
                                                          class="v-icon mdi mdi-account-edit gray--text"></i>
                </a>                
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
import Vue from 'vue';
import CircularJSON from 'circular-json'
import VueToast from 'vue-toast-notification';
import VueConfirmDialog from 'vue-confirm-dialog'
import * as admin from "firebase-admin";
const serviceAccount = require('./../serviceAccountKey.json');
import * as functions from 'firebase-functions'
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pesquisas-678f7.firebaseio.com'
});

//if(auth.currentUser == null){self.location='/login'}


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
          status: true
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
          },
          {
            sortable: false,
            text: 'Ações',
            value: 'action',
            field: 'action',
            label: 'Ações'
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
      checkAutenticate() {
        if (!auth.currentUser) {
          this.$router.push({path: '/login'})
        }
      },

      async getData() {
        // const snapshot =  db.collection('users').get();
        // snapshot.then(function (data) {
        //   this.users = data;
        //   console.log(this.users)
        // })


        let userList = await db.collection("admin-users").where("status", "==", true).get().then(function (querySnapshot) {

          let values = querySnapshot.docs;
          let arrayData = [];
          for (let i = 0; i < values.length; i++) {
            let obj = {}
            let data = values[i].data();
            obj.uid = data.uid;
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
      async editItem(item) {

         this.editedIndex = 0


         let userData = await db.collection("admin-users").where("uid", "==", item).get().then(function (querySnapshot) {

          let values = querySnapshot.docs;

          let arrayData = [];
          for (let i = 0; i < values.length; i++) {
            let obj = {}
            let data = values[i].data();
            obj.uid = data.uid;
            obj.name = data.nome;
            obj.perfil = data.perfil;
            obj.email = data.email;
            obj.senha = data.senha
            arrayData.push(obj);
          }
          return arrayData;
        });



      this.editedItem = Object.assign({nome: userData[0].name, email:userData[0].email,perfil:userData[0].perfil,senha:userData[0].senha,uid:userData[0].uid}, item)
      this.dialog = true 




      },

      deleteItem(uid) {

      this.$confirm({
        title: 'Deletar usuário',
        message: 'Confirmar exclusão do usuário?',
        button: {
          yes: 'Sim',
          no: 'Não'
        },
        
        callback: (confirm) => {
          if (confirm ){
          //db.collection("admin-users").doc(uid).update({status: false});
          //var user = auth.deleteUser(uid);
          //user.delete(uid);
          //firebase.auth().currentUser.delete().
          
          //db.collection("admin-users").doc(uid).delete()
   
admin.auth().deleteUser(uid)
.then(function() {
    alert("Successfully deleted user");
})
.catch(function(error) {
    alert("Error deleting user:", error);
});
          this.$toast.open({
            message: 'Usuário excluido com sucesso!',
            type: 'error',
            position: 'top'
          });
          setInterval(function () {
            window.location.reload();
          }, 1000);           

          }else{
            return false;
          }
        }
      })

     },

      deleteItemConfirm() {
        this.users.splice(this.editedIndex, 1)
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
      start() {

        
        if (this.$refs.form_register.validate()) {


        if (this.editedIndex == 0){
          this.editedIndex == 0
          var user = auth.currentUser;
          user.updatePassword(this.editedItem.senha);
      

          db.collection("admin-users")
              .doc(this.editedItem.uid)
              .update({"nome":this.editedItem.nome,"perfil":this.editedItem.perfil,"senha":this.editedItem.senha})
              .then(function() {

                  Vue.$toast.open({
                    message: 'Alterado com sucesso!',
                    type: 'success',
                    position: 'top'
                  });  
                   
                  setInterval(function () {
                    window.location.reload();
                  }, 2000);              })
        }else{
            
            this.editedIndex == -1
            let user = auth.createUserWithEmailAndPassword(this.editedItem.email, this.editedItem.senha).then((user) => {
              
              this.editedItem.uid = user.user.uid
              this.editedItem.nome = this.editedItem.nome.trim()
              this.editedItem.dt_create = new Date()

              user.user.updateProfile({
                displayName: this.editedItem.nome
              })

              const uid = user.user.uid;
              const email = user.user.email;



              db.collection("admin-users").doc(uid).set(this.editedItem)
                .then(function (response) {
                  console.log('Salvo')
                })
                .catch(function (error) {
                  alert(error)
                });

              this.resetPassword(email);

              this.$toast.open({
                message: 'Salvo com sucesso!',
                type: 'success',
                position: 'top'
              });

              this.close();
              setInterval(function () {
                window.location.reload();
              }, 2000);
    

            })
   


         . catch (function (err) {
            if(err.code === "auth/email-already-in-use") {
              Vue.$toast.open({
                message: 'E-mail já cadastrado. Escolha outro e-mail',
                type: 'error',
                position: 'top'
              });
            }
            if(err.code === "auth/weak-password") {
              Vue.$toast.open({
                message: 'A senha deve ter mínimo 6 caracteres',
                type: 'error',
                position: 'top'
              });
            }

          });


        }


        }
      },

        resetPassword(email) {
        console.log(email)
        auth.sendPasswordResetEmail(email).then((user) => {
          console.log(user)
        });
      }
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


