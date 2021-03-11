<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap>
      <v-flex xs12 md6>
        <material-card color="cyan" title="Login" text="">
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

            <v-btn v-if="recoverPassword" @click="recoverPassword = !recoverPassword" color="default" text>
              Cancelar
            </v-btn>

            <v-btn v-if="!recoverPassword" color="success" @click="loginUser()">
              Entrar
            </v-btn>
            <v-btn v-if="recoverPassword" color="success" @click="resetPassword()">
              Enviar
            </v-btn>
          </v-card-actions>

        </material-card>


      </v-flex>

    </v-layout>
  </v-container>

</template>

<script>
  import Estados from "../components/core/CitySelect";
  import {db, auth, usersCollection} from "./../firebase";
  import Vue from 'vue';
  import VueConfirmDialog from 'vue-confirm-dialog'
  import CircularJSON from 'circular-json'
  Vue.use(VueConfirmDialog)
  Vue.component('vue-confirm-dialog', VueConfirmDialog.default)


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
        quest: []
      }
    },
    methods: {
      checkAutenticate() {
        if (auth.currentUser) {
          this.$router.push({path: '/admin'})
        }else{
          Vue.$toast.open({
            message: 'Usuário não habilitado para este ambiente.',
            type: 'error',
            position: 'top'
              });
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
                displayName: this.user.name,
                uid: user.user.uid

              })

              db.collection("users").doc(user.user.uid).set(this.user)
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
      async loginUser() {

        //var getUserAdmin = await db.collection("admin-users").doc(auth.currentUser.uid).get()
        //alert(getUserAdmin)

        if (this.$refs.form_login.validate()) {
          var user = await auth.signInWithEmailAndPassword(this.login.email, this.login.password).then((user) => {
            return user;
          })


         . catch (function (err) {

            if(err.code === "auth/user-not-found") {
              Vue.$toast.open({
                message: 'Usuário não encontrado.',
                type: 'error',
                position: 'top'
              });
            }
            if(err.code === "auth/wrong-password") {
              Vue.$toast.open({
                message: 'Senha não confere.',
                type: 'error',
                position: 'top'
              });
            }  
            if(err.code === "auth/too-many-requests") {
              Vue.$toast.open({
                message: 'Excedido o número de requisições. Tente mais tarde.',
                type: 'error',
                position: 'top'
              });
            }
          });

          let uidInfo = user.user.uid
          localStorage.setItem("uidInfo", uidInfo);

          var getUser = await db.collection("admin-users").where("uid", "==", user.user.uid).get().then(function (querySnapshot) {
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

            if(getUser == "") {
              Vue.$toast.open({
                message: 'Usuário não habilitado para este ambiente.',
                type: 'error',
                position: 'top'
              });
            }


          localStorage.setItem("admin", getUser[0].perfil);
          
          if (getUser[0].perfil === 'admin') {            
            this.$router.push({path: '/results'})
          } else {
            this.$router.push({path: '/results'})
          }
          setInterval(function () {
            window.location.reload();
          }, 100);
        }


      },
      close() {
        this.dialog = false;
        this.recoverPassword = false;
      },
      resetPassword() {
        
        if (this.$refs.form_login.validate()) {

          var user = auth.signInWithEmailAndPassword(this.login.email, this.login.password).then((user) => {
            return user;

          })

         . catch (function (err) {
            if(err.code === "auth/user-not-found") {
              Vue.$toast.open({
                message: 'Usuário não encontrado.',
                type: 'error',
                position: 'top'
              });

            }
          });

                auth.sendPasswordResetEmail(this.login.email).then((user) => {
                });
                this.$toast.open({
                  message: 'Um e-mail foi enviado para recuperar a senha!',
                  type: 'warning',
                  position: 'top'
                });
                this.recoverPassword = false;



        }
      }

    },

    watch: {
      school(val) {
        if (val != null)
          this.school = val;
      },
      search(val) {
        //Items have already been loaded
        if (val.length < 3) return

        this.isLoading = true

        const requestOptions = {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(
            {
              name: val,
              id: this.user.city.id,
              uf: this.user.uf,
              city_id: this.user.city.ibge_city_id,
              $hide_loading_feedback: true
            }
          )
        }

        // Lazily load input items ?XDEBUG_SESSION_START=PHPSTORM
        fetch("https://api.buscaativaescolar.org.br/api/v1/open/schools", requestOptions)
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
