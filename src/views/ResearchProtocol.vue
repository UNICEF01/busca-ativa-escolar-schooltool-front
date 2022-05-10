<template>

  <v-container fill-height fluid grid-list-xl>

    <v-layout justify-center wrap>

      <v-flex xs12 md8>

        <div v-if="isReportReady == false">
          
            <h4 class="heading-4">{{user.name ? user.name : ""}}</h4>
            <h6 class="heading-6"><strong>{{user.school ? user.school.name : ""}} | {{user.school ? user.school.city_name : ""}}/ {{user.school ? user.school.uf : ""}}</strong></h6>

            <br/>

            <h3 class="heading-3">Checklist sobre a implementação de protocolos seguros nas escolas</h3>

            <p>Essa ferramenta foi construída com o intuito de auxiliar na implementação de protocolos seguros nas escolas com atividades presenciais. Sugere-se que o mesmo seja respondido pela equipe diretiva da escola.</p>

            <p>Para mais informações sobre reabertura segura das escolas, o UNICEF e parceiros desenvolveram a seguinte página, com conteúdos sempre revisados e atualizados de acordo com os documentos mais recentes: <a target="_blank" href="#">https://www.unicef.org/brazil/reabertura-segura-das-escolas</a></p>

            <br/>

            <p>As questões abaixo apresentam condições mínimas para que as escolas possam reabrir de forma segura e garantir a proteção da comunidade escolar.</p>

            <br/>
            
          <div v-for="group in quest">

            <h5 class="headline">{{group.group}}</h5>

            <v-form ref="form_research" lazy-validation>

              <material-card v-for="item in group.questions" :key="item.id"
                             class="card-tabs"
                             :color="color"
                             elevation="3">

                <v-flex slot="header">

                  <span
                    class="subheading font-weight-light mr-3"
                    style="align-self: center"
                    v-html="item.answer"
                  ></span>

                </v-flex>

                <v-radio-group v-model="item.selected">
                  <v-radio v-for="n in item.response" :label="n.name" :value="n.value"></v-radio>
                </v-radio-group>

              </material-card>

            </v-form>

          </div>

          <v-btn @click="finish(true)" class="font-weight-light" color="success" :disabled="isDisabledToReport()">
            Salvar
          </v-btn>

          <br/><br/><br/>

          <v-btn @click="returnToResearchs()" class="font-weight-light" color="default">
            Retornar para pesquisas
          </v-btn>

        </div>


        <div v-if="isReportReady == true">
        
          <h2 class="heading-2">Agradecemos pelo envio das respostas.</h2>

          <p>Obrigado pela sua participação. É importante salientar que, se você respondeu não a alguma das perguntas, há a necessidade de revisar os protocolos de segurança da sua escola. Para ajudar nesse processo, o UNICEF oferece os seguintes materiais de apoio:</p>
          
          <h3>Reabertura segura das escolas</h3>

          <p>Orientações para a rede e comunidade escolar sobre como promover uma volta às aulas segura e garantir o direito à educação de crianças e adolescentes. <a target="_blank" href="https://www.unicef.org/brazil/reabertura-segura-das-escolas">https://www.unicef.org/brazil/reabertura-segura-das-escolas</a></p>

          <h3>Ferramenta de autoavaliação das escolas</h3>

          <p>UNICEF disponibiliza ferramenta para apoiar a avaliação da condição das escolas e traz recomendações personalizadas. <a href="https://escolas.buscaativaescolar.org.br/quest" target="_blank">https://escolas.buscaativaescolar.org.br/quest</a></p>

          <p>Material sobre água, saneamento e higiene na prevenção e controle de infecções nas escolas <a href="https://www.unicef.org/brazil/media/14251/file/agua-saneamento-e-higiene-e-prevencao-e-controle-de-infeccoes-nas-escolas" target="_blank">https://www.unicef.org/brazil/media/14251/file/agua-saneamento-e-higiene-e-prevencao-e-controle-de-infeccoes-nas-escolas</a></p>

          <v-btn @click="returnToResearchs()" class="font-weight-light" color="default">
            Retornar para pesquisas
          </v-btn>
        
        </div>

        <br/>

      </v-flex>

    </v-layout>

  </v-container>

</template>

<script>

  import Vue from "vue";
  import {db, auth, usersCollection} from "./../firebase";
  import {mapMutations, mapState} from 'vuex';
  import Printd from 'printd';
  import html2pdf from 'html2pdf.js';
  import jsPDF from 'jspdf';
  import VueSimpleAlert from "vue-simple-alert";
  Vue.use(VueSimpleAlert);

  export default {

    data() {
      return {
        isReportReady: false,
        color: 'warning',
        user: {},
        quest: [

          {
            id: 1,
            group: "Planejamento, rotinas de limpeza e higienização:",
            questions: [
              {
                id: 1,
                answer: '<span>A escola está seguindo um plano de limpeza e desinfecção regular dos ambientes escolares, incluindo o transporte escolar, com especial atenção às superfícies muito tocadas de acordo com os protocolos seguidos pelo município?</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 1,
                  },
                  {
                    id: 1,
                    name: 'Não',
                    value: 0,
                  },
                ]
              }
            ],
            recommendations: [],
            limitForGroupRecommendation: 0,
            headerRecommendation: "",
            groupRecommendation: ""
          },

          {
            id: 2,
            group: "Uso de máscaras e etiqueta respiratória:",
            questions: [
              {
                id: 2,
                answer: '<span>A escola esclarece e orienta funcionários e estudantes sobre etiqueta respiratória e o uso correto e regular de máscaras faciais?</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 1,
                  },
                  {
                    id: 1,
                    name: 'Não',
                    value: 0,
                  },
                ]
              }
            ],
            recommendations: [],
            limitForGroupRecommendation: 0,
            headerRecommendation: "",
            groupRecommendation: ""
          },

          {
            id: 3,
            group: "Equipamentos de Proteção Individual (EPI) e suprimentos de limpeza e desinfecção:",
            questions: [

              {
                id: 3,
                answer: '<span>Funcionários e estudantes têm acesso à produtos de higiene (álcool gel a 70% nos corredores e salas e sabão nos locais de lavagem de mãos) e máscaras faciais?</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 1,
                  },
                  {
                    id: 1,
                    name: 'Não',
                    value: 0,
                  },
                ]
              }
              
            ],
            recommendations: [],
            limitForGroupRecommendation: 0,
            headerRecommendation: "",
            groupRecommendation: ""

          },

          {
            id: 4,
            group: "Infraestrutura",
            questions: [

              {
                id: 4,
                answer: '<span>A escola dispõe sempre de água nos banheiros, na cozinha, para a limpeza e para o consumo humano?</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 1,
                  },
                  {
                    id: 1,
                    name: 'Não',
                    value: 0,
                  },
                ]
              }
              
            ],
            recommendations: [],
            limitForGroupRecommendation: 0,
            headerRecommendation: "",
            groupRecommendation: ""

          },

          {
            id: 5,
            group: "Lavagem das mãos",
            questions: [

              {
                id: 5,
                answer: '<span>A escola divulga informações sobre a importância da lavagem correta e regular de mãos?</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 1,
                  },
                  {
                    id: 1,
                    name: 'Não',
                    value: 0,
                  },
                ]
              }
              
            ],
            recommendations: [],
            limitForGroupRecommendation: 0,
            headerRecommendation: "",
            groupRecommendation: ""

          },

          {
            id: 6,
            group: "Gestão dos resíduos",
            questions: [

              {
                id: 6,
                answer: '<span>O descarte de máscaras usadas é feito separadamente e todos os resíduos são recolhidos de forma regular e segura?</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 1,
                  },
                  {
                    id: 1,
                    name: 'Não',
                    value: 0,
                  },
                ]
              }
              
            ],
            recommendations: [],
            limitForGroupRecommendation: 0,
            headerRecommendation: "",
            groupRecommendation: ""

          },

          {
            id: 7,
            group: "Ventilação",
            questions: [

              {
                id: 7,
                answer: '<span>Todas as salas, espaços coletivos e transportes escolares contam com estruturas arejadas e que permitam uma boa ventilação?</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 1,
                  },
                  {
                    id: 1,
                    name: 'Não',
                    value: 0,
                  },
                ]
              }
              
            ],
            recommendations: [],
            limitForGroupRecommendation: 0,
            headerRecommendation: "",
            groupRecommendation: ""

          },


          {
            id: 8,
            group: "Distanciamento",
            questions: [

              {
                id: 8,
                answer: '<span>Todos os espaços coletivos e da escola estão organizados e sinalizados para permitir o distanciamento de ao menos 1,5 metro entre as pessoas?</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 1,
                  },
                  {
                    id: 1,
                    name: 'Não',
                    value: 0,
                  },
                ]
              }
              
            ],
            recommendations: [],
            limitForGroupRecommendation: 0,
            headerRecommendation: "",
            groupRecommendation: ""

          },

          {
            id: 9,
            group: "Na entrada da escola",
            questions: [

              {
                id: 9,
                answer: '<span>A escola organiza a entrada e saída de estudantes e funcionários na escola em horários escalonados com a devida medição de temperatura corporal e a orientação para a higienização das mãos?</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 1,
                  },
                  {
                    id: 1,
                    name: 'Não',
                    value: 0,
                  },
                ]
              }
              
            ],
            recommendations: [],
            limitForGroupRecommendation: 0,
            headerRecommendation: "",
            groupRecommendation: ""

          },

          {
            id: 10,
            group: "Casos de Covid-19",
            questions: [

              {
                id: 10,
                answer: '<span>A escola segue as orientações das autoridades de saúde para isolar e reportar casos de estudantes e/ou funcionários que estejam com sintomas de COVID-19 ou que tenham tido contato com pessoas doentes?</span>',
                selected: null,
                response: [
                  {
                    id: 0,
                    name: 'Sim',
                    value: 1,
                  },
                  {
                    id: 1,
                    name: 'Não',
                    value: 0,
                  },
                ]
              }
              
            ],
            recommendations: [],
            limitForGroupRecommendation: 0,
            headerRecommendation: "",
            groupRecommendation: ""

          },

        ]
      }
    },

    created() {

      //LOCALIZA A PESQUISA DO USUARIO NA COLECAO USERS DO FIRESTORE
      var docRef = db.collection("users-protocolos").doc(auth.currentUser.uid);

      docRef.get()
        .then( (doc) => {

          if (doc.exists) {

            this.user = doc.data();

            if( this.user.hasOwnProperty('quest') ) { this.quest = this.user.quest; }

          } else{

            this.createDocument();

          }

        }).catch( (error) => {

          this.$toast.open({
            message: 'Erro ao retornar os dados do usuário',
            type: 'error',
            position: 'top'
          });

        });

    },

    methods: {

      ...mapMutations('app', ['setDrawer', 'toggleDrawer', 'setImage']),

      toast(type, message) {

        this.$toast.open({
          message: message,
          type: type,
          position: 'top'
        });

      },

      async save() {
          
          let id = auth.currentUser.uid;
          this.user.quest = this.quest;

          let checkSave = await db.collection("users-protocolos")
            .doc(id)
            .update(Object.assign({}, this.user))     
            .then(function (resp) {
              return true;              
            })

            .catch(function (error) {
              return false;
            });

          if (checkSave) {

            this.$toast.open({
              message: 'Pesquisa atualizada com sucesso!',
              type: 'success',
              position: 'top'
            });

          } else {

            this.$toast.open({
              message: 'Erro ao atualizar a pesquisa!',
              type: 'error',
              position: 'top'
            });

          }

          this.isUpdatingForm = false;
      },

      isDisabledToReport(){

        var questions = [];
        var blocked = false;

        this.quest.map( function (group) {
          group.questions.map( function (question) {
            questions.push(question);
          });
        });

        questions.map( function (question) {
          if (question.selected == null) { blocked = true; }
        });

        return blocked;

      },

      finish(value){
        var docRef = db.collection("users-protocolos").doc(auth.currentUser.uid);
        docRef.get().then(function(doc) {
          if (doc.exists) {
            db.collection("users-protocolos").doc(auth.currentUser.uid).update({"school.quest_complete": "S"})
          }
        });
        window.scrollTo(0, 0);
        this.isReportReady=value;
      },

      createDocument(){

        var this_ = this;

        //DADOS DA COLECAO USUARIOS
        var docUsuarios = db.collection("usuarios").doc(auth.currentUser.uid);

        docUsuarios.get().then(function (docUser) {

          if (docUser.exists) {

              //CRIA O DOCUMENTO USER EM USERS-PROTOCOLOS FIREBASE
              db.collection("users-protocolos")
              .doc(auth.currentUser.uid)
              .set(docUser.data())
              .then(function () {
              
                this_.user = docUser.data();
                if( this_.user.hasOwnProperty('quest') ) { this_.quest = this_.user.quest; }

              })
              .catch(function (error) {

                console.log(error);

                //ERRO NA CRIACAO DA COLECAO USERS
                this_.$alert("Erro ao atualizar os dados do usuário","Atenção!","error");
                auth.signOut().then(function () {
                  self.location='/login-usuario'
                }).catch(function (error) {
                  
                });

              });
            
          }else{

              auth.signOut().then(function () {
                self.location='/login-usuario'
              }).catch(function (error) {
                
              });
          }

        });

      },

      returnToResearchs(){
        this.$router.push({ path: '/pesquisas' });
      }

    },

    updated() {
      this.save();
    },

    watch: {},

    mounted(){
      this.setImage('img/3.jpg');
    }

  }

</script>

<style>
    .recommendation,
    .recommendation strong{
      font-size: 15px !important;
    }
    .paragraph_report {
      font-size: 16px !important;
      margin-bottom: 20px;
      margin-top: 20px;
    }
</style>

