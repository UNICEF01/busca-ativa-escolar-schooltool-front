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
                  <v-text-field class="purple-input" label="E-mail" v-model="login.email"
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
                    v-model="login.password"
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
                    v-model="login.confirmPassword"
                    :append-icon="showPasword2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min, rules.passMatch]"
                    :type="showPasword2 ? 'text' : 'password'"
                    counter
                    @click:append="showPasword2 = !showPasword2"/>
                </v-flex>

                <Estados @childToParent="onChildClick"></Estados>

                <v-flex xs12 md12>

                  <v-autocomplete
                    v-model="school"
                    :items="items"
                    :loading="isLoading"
                    :search-input.sync="search"
                    clearable
                    hide-details
                    hide-selected
                    item-text="name"
                    label="Nome da escola"
                    return-object
                    :rules="[rules.required]"
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
                  <v-radio-group v-model="user.relation.name" row :rules="[rules.required]">
                    <v-radio v-for="n in ['Aluno(a)', 'Funcionário(a)' , 'Outros']" :label="n" :value="n"></v-radio>
                  </v-radio-group>
                </v-flex>

                <v-flex md12>
                  <v-text-field md6 v-if="user.relation.name === 'Outros'" label="Qual?" class="purple-input"
                                v-model="user.relation.other" :rules="[rules.required]"/>
                </v-flex>

              </v-layout>

            </v-container>

            <v-flex class="d-flex">
              <v-btn large @click="start()" class="font-weight-light" color="success">
                Começar
              </v-btn>
            </v-flex>


          </v-form>

        </material-card>

        <v-dialog v-model="dialog" width="500">

          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="warning" @click="checkAutenticate()">
              Continuar de onde parou
            </v-btn>
          </template>

          <v-card>
            <v-card-title v-if="!recoverPassword" class="headline grey lighten-2">
              Forneça seus dados
            </v-card-title>

            <v-card-title v-if="recoverPassword" class="headline grey lighten-2">
              Recuperar senha
            </v-card-title>


            <v-form ref="form_login" lazy-validation>
              <v-container fluid>
                <v-flex xs12>
                  <v-text-field label="Email" v-model="login.email" :rules="[rules.required, rules.email]"/>
                </v-flex>

                <v-flex xs12 v-if="!recoverPassword">
                  <v-text-field
                    class="purple-input"
                    label="Senha"
                    v-model="login.password"
                    :append-icon="showPasword1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="showPasword1 ? 'text' : 'password'"
                    counter
                    @click:append="showPasword1 = !showPasword1"/>
                </v-flex>

              </v-container>
            </v-form>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="default" v-if="!recoverPassword" text @click="recoverPassword = !recoverPassword">
                Recuperar senha
              </v-btn>
              <v-btn color="default" text @click="close()">
                Fechar
              </v-btn>
              <v-btn v-if="!recoverPassword" color="success" @click="loginUser()">
                Login
              </v-btn>
              <v-btn v-if="recoverPassword" color="success" @click="resetPassword()">
                Enviar
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-dialog>


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
        login: {
          email: '',
          password: '',
          confirmPassword: '',
          error: '',
        },
        recoverPassword: false,
        user: {
          telefone: '',
          uf: '',
          city: '',
          relation: {name: '', other: ''}
        },
        showPasword1: false,
        showPasword2: false,
        rules: {
          required: value => !!value || 'Obrigatório.',
          min: v => v.length >= 6 || 'Mínimo 6 caracteres',
          passMatch: v => v === this.login.password || 'As senhas não correspondem',
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
        school: '',
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
        quest: []
      }
    },
    methods: {
      checkAutenticate() {

        if (auth.currentUser) {
          this.$router.push({path: '/wash'})
        }

      },
      // Triggered when `childToParent` event is emitted by the child.
      onChildClick(value) {
        this.user.uf = value.uf
        this.user.city = value.city
      },

      async start() {
        if (this.$refs.form_register.validate()) {
          try {
            let user = auth.createUserWithEmailAndPassword(this.login.email, this.login.password).then((user) => {
              this.user.uid = user.user.uid
              this.user.name = this.user.name.trim()
              this.user.dt_create = new Date()
              this.user.school = this.school

              user.user.updateProfile({
                displayName: this.user.name
              })

              db.collection("users").doc(user.user.uid).set(this.user)
                .then(function () {
                  // console.log()
                })
                .catch(function (error) {
                  // console.error(error)
                });
              //console.log(user);
              this.$router.push({path: '/wash'})
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
      loginUser() {
        if (this.$refs.form_login.validate()) {
          try {
            const user = auth.signInWithEmailAndPassword(this.login.email, this.login.password).then((user) => {
              //console.log(user);
              this.$router.push({path: '/wash'})
            })
          } catch (error) {
            console.log(error)
          }
        }
      },
      close() {
        this.dialog = false;
        this.recoverPassword = false;
      },
      resetPassword() {
        auth.sendPasswordResetEmail(this.login.email).then((user) => {
          console.log(user)
        });
        this.$toast.open({
          message: 'Um e-mail foi enviado para recuperar a senha!',
          type: 'warning',
          position: 'top'
        });
      }

    },

    watch: {
      school(val) {
        if (val != null)
          this.school = val;
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
