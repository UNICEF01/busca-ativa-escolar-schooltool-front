<template>
  <v-container fill-height fluid grid-list-xl> 
    <v-layout justify-center wrap>
      <v-flex xs12 md8><br><br><br>
        <h5 class="headline">Autoavaliação</h5>


          <div style="text-align: justify-all!important">Conhecer a estrutura de cada escola e saber quais aspectos precisam
          ser melhorados ou adaptados para o novo contexto de volta às aulas é
          muito importante. Criamos um questionário que poderá servir como
          referência e indicar onde e como os gestores devem atuar para garantir
          uma situação segura para estudantes, professores e funcionários.
          </div>
    

        <material-card
          color="cyan"
          title="Preencha o cadastro abaixo e responda o questionário a seguir com atenção. Conheça melhor a sua realidade."
          text=""
        >
          <v-form ref="form_register" lazy-validation >
            <v-container fluid>
              <!--              <v-img-->
              <!--                lazy-src="img/covide_banner_wash.jpg"-->
              <!--                max-width="300"-->
              <!--                src="img/covide_banner_wash.jpg"-->
              <!--              ></v-img>-->

              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field
                    label="Nome Completo"
                    v-model="user.name"
                    :rules="[rules.required]"
                  />
                </v-flex>

                <v-flex xs12 md4>
                  <v-text-field
                    class="purple-input"
                    label="E-mail"
                    v-model="login.email"
                    :rules="[rules.required, rules.email]"
                  />
                </v-flex>

                <v-flex xs12 md4>
                  <v-text-field
                    label="Telefone"
                    class="purple-input"
                    v-model="user.telefone"
                    return-masked-value
                    mask="(##)#####-####"
                  />
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
                    @click:append="showPasword1 = !showPasword1"
                  />
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
                    @click:append="showPasword2 = !showPasword2"
                  />
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
                    item-text="id_name"
                    label="Nome da escola ou o código do INEP"
                    return-object
                    :rules="[rules.required]"
                  >
                    <template v-slot:no-data>
                      <v-list-item>
                        <v-list-item-title>
                          Escreva o nome da escola ou o código do INEP
                        </v-list-item-title>
                      </v-list-item>
                    </template>

                    <template v-slot:selection="{ attr, on, item, selected }">
                      <span v-text="item.name"></span>
                    </template>

                    <template v-slot:item="{ item }">
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.id"
                        ></v-list-item-title>
                        -
                        <v-list-item-title
                          v-text="item.name"
                        ></v-list-item-title>
                        -
                        <v-list-item-subtitle
                          v-text="item.city_name"
                        ></v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-autocomplete>
                </v-flex>

                <v-flex md12>
                  <label>Qual o tipo de relação você tem com a escola?</label>
                  <v-radio-group
                    v-model="user.relation.name"
                    row
                    :rules="[rules.required]"
                  >
                    <v-radio
                      v-for="n in [
                        'Aluno(a)/ Família',
                        'Professor(a)',
                        'Equipe diretiva',
                        'Outros',
                      ]"
                      :label="n"
                      :value="n"
                    ></v-radio>
                  </v-radio-group>
                </v-flex>

                <v-flex md12>
                  <v-text-field
                    md6
                    v-if="user.relation.name === 'Outros'"
                    label="Qual?"
                    class="purple-input"
                    v-model="user.relation.other"
                    :rules="[rules.required]"
                  />
                  
                </v-flex>
              </v-layout>
            </v-container>

            <v-flex class="d-flex">
              <v-btn
                large
                @click="start()"
                class="font-weight-light"
                color="success"
              >
                Começar
              </v-btn>
            </v-flex>
          </v-form>
        </material-card>

        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="warning"
              @click="checkAutenticate()"
            >
              Continuar de onde parou
            </v-btn>
          </template>

          <v-card>
            <v-card-title
              v-if="!recoverPassword"
              class="headline grey lighten-2"
            >
              Forneça seus dados
            </v-card-title>

            <v-card-title
              v-if="recoverPassword"
              class="headline grey lighten-2"
            >
              Recuperar senha
            </v-card-title>

            <v-form ref="form_login" lazy-validation>
              <v-container fluid>
                <v-flex xs12>
                  <v-text-field
                    label="Email"
                    v-model="login.email"
                    :rules="[rules.required, rules.email]"
                  />
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
                    @click:append="showPasword1 = !showPasword1"
                  />
                </v-flex>
              </v-container>
            </v-form>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="default"
                v-if="!recoverPassword"
                text
                @click="recoverPassword = !recoverPassword"
              >
                Recuperar senha
              </v-btn>
              <v-btn color="default" text @click="close()"> Fechar </v-btn>
              <v-btn
                v-if="!recoverPassword"
                color="success"
                @click="loginUser()"
              >
                Login
              </v-btn>
              <v-btn
                v-if="recoverPassword"
                color="success"
                @click="resetPassword()"
              >
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
import { db, auth, usersCollection } from "./../firebase";
import ibgeid from "../assets/territory.js";
import Vue from "vue";
//if(auth.currentUser == null){self.location='/login'}

import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);


export default {
  
  components: { Estados },
  methods: {
    myFunction: function () {
      return ibgeid;
    },
    
  },

  data() {
    return {
      login: {
        email: "",
        password: "",
        confirmPassword: "",
        error: "",
      },
      recoverPassword: false,
      user: {
        telefone: "",
        uf: "",
        city: "",
        relation: { name: "", other: "" },
      },
      showPasword1: false,
      showPasword2: false,
      rules: {
        required: (value) => !!value || "Obrigatório.",
        min: (v) => v.length >= 6 || "Mínimo 6 caracteres",
        passMatch: (v) =>
          v === this.login.password || "As senhas não correspondem",
        email: (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
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
      uf: "",
      city: "",
      value: "",
      school: "",
      quest: [],
    };
  },


  
  methods: {
    checkAutenticate() {
      if (auth.currentUser) {
        this.$router.push({ path: "/wash" });
      }
    },
    // Triggered when `childToParent` event is emitted by the child.
    onChildClick(value) {
      this.user.uf = value.uf;
      this.user.city = value.city;
    },

    async start() { 
        
          
   
       
    if (this.$refs.form_register.validate()) {
      this.$alert("As recomendações só serão mostradas depois que o questionário for TOTALMENTE respondido !!","Atenção!!","warning");  
        let user = auth
          .createUserWithEmailAndPassword(this.login.email, this.login.password)
          .then((user) => {
            this.user.uid = user.user.uid;
            this.user.name = this.user.name.trim();
            this.user.dt_create = new Date();
            this.user.school = this.school;

            user.user.updateProfile({
              displayName: this.user.name,
            });

            //-------------NOVOS CAMPOS - INÍCIO

            var docRef = db.collection("users").doc(user.user.uid);

            docRef.get().then(function (doc) {
              if (doc.exists) {
                var name = doc.get("city.region");
                var uff = doc.get("city.uf");
                var ibge_city_id = doc.get("school.ibge_id");
                var ibge_region_id=doc.get('city.ibge_region_id');
                var ibge_uf_id=doc.get('city.ibge_uf_id');                

                let region = [
                  { value: "NO", text: "NORTE" },
                  { value: "NE", text: "NORDESTE" },
                  { value: "SU", text: "SUL" },
                  { value: "SE", text: "SUDESTE" },
                  { value: "CO", text: "CENTRO-OESTE" },
                ];

                let regionName = region.find((item) => item.value == name);
                let territory = ibgeid.find((item) => item.value == ibge_city_id);

                db.collection("users").doc(user.user.uid).update({ "school.region_name": regionName.text });
                db.collection("users").doc(user.user.uid).update({ "school.uf": uff });
                db.collection("users").doc(user.user.uid).update({ "school.territory": territory.text });
                db.collection("users").doc(user.user.uid).update({"school.ibge_region_id": ibge_region_id})
                db.collection("users").doc(user.user.uid).update({"school.ibge_uf_id": ibge_uf_id})


              }
            });

            ////-------------NOVOS CAMPOS - FIM

            db.collection("users")
              .doc(user.user.uid)
              .set(this.user)

              .then(function () {
                // console.log()
              })
              .catch(function (error) {
                // console.error(error)
              });
            //console.log(user);

   
            this.$router.push({ path: "/wash" });
            setInterval(function () {
              window.location.reload();
            }, 4000);
      
          })

          .catch(function (err) {
            if (err.code === "auth/email-already-in-use") {
              Vue.$toast.open({
                message:
                  "E-mail já cadastrado, clique em CONTINUAR DE ONDE PAROU para fazer login",
                type: "error",
                position: "top",
              });
            }
          });
      }
    },
    loginUser() {
      if (this.$refs.form_login.validate()) {
        const user = auth
          .signInWithEmailAndPassword(this.login.email, this.login.password)
          .then((user) => {
            //console.log(user);
            this.$router.push({ path: "/wash" });
            setInterval(function () {
              window.location.reload();
            }, 1000);
          })

          . catch (function (err) {
            if (err.code === "auth/wrong-password") {
              Vue.$toast.open({
                message: "Senha não confere.",
                type: "error",
                position: "top",
              });
            }
              if (err.code === "auth/user-not-found") {
                Vue.$toast.open({
                  message: "Usuário não encontrado.",
                  type: "error",
                  position: "top",
                });
              }
          });
      }
    },
    close() {
      this.dialog = false;
      this.recoverPassword = false;
    },

    resetPassword() {
      auth.sendPasswordResetEmail(this.login.email).then((user) => {});
      this.$toast.open({
        message: "Um e-mail foi enviado para recuperar a senha!",
        type: "warning",
        position: "top",
      });
    },
  },

  watch: {
    school(val) {
      if (val != null) this.school = val;
    },
    search(val) {
      //Items have already been loaded
      if (val.length < 3) return;

      this.isLoading = true;

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: val,
          id: this.user.city.id,
          uf: this.user.uf,
          city_ibge_id: this.user.city.ibge_city_id,
          $hide_loading_feedback: true,
        }),
      };

      // Lazily load input items ?XDEBUG_SESSION_START=PHPSTORM
      fetch(
        "https://api.buscaativaescolar.org.br/api/v1/open/schools",
        requestOptions
      )
        .then((res) => res.clone().json())
        .then((res) => {
          this.items = res;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
};


</script>
