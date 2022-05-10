<template>
  <v-container fill-height fluid grid-list-xl>
    
    <v-layout justify-center wrap>

      <v-flex xs12 md12></v-flex>
      <br/>
      <br/>
      <br/>
      
      <v-flex xs12 md3>
        
        <material-card class="v-card-profile">
          
            <v-avatar slot="offset" class="mx-auto d-block" size="130">
              <img alt="Checklist sobre a implementação de protocolos seguros nas escolas" src="/img/logo_checklist_protocolos.png">
            </v-avatar>

            <v-card-text class="text-xs-center">

              <v-tooltip top content-class="top" v-if="checklistProtocolos == false">
                <v-icon slot="activator" style="font-size:50px; color: orange; ">mdi-account-alert</v-icon>
                <span>Pesquisa não preenchida</span>
              </v-tooltip>

              <v-tooltip top content-class="top" v-if="checklistProtocolos == true">
                <v-icon slot="activator" style="font-size:50px; color: green;">mdi-account-check</v-icon>
                <span>Pesquisa preenchida</span>
              </v-tooltip>

            <h4 class="card-title font-weight-light">Checklist sobre a implementação de protocolos seguros nas escolas</h4>
            <p class="card-description font-weight-light">
              Auxílio na  implementação de protocolos seguros nas escolas com atividades presenciais. Sugere-se que o mesmo seja respondido pela equipe diretiva da escola. 
            </p>
            <v-btn @click="finish('/protocolos')" color="warning" round class="font-weight-light">
                Acessar
            </v-btn>
          </v-card-text>

        </material-card>

      </v-flex>
<div style="position:absolute;bottom:-250px">
<youtube video-id="xx-AtI_ot1w" ref="youtube"></youtube><br />
 </div>



      <v-flex xs12 md3>
        
        <material-card class="v-card-profile">
          
          <v-avatar slot="offset" class="mx-auto d-block" size="130">
            <img alt="Vue logo" src="/img/logo_pesquisa_wash.png">
          </v-avatar>

          <v-card-text class="text-xs-center">
            
              <v-tooltip top content-class="top" v-if="pesquisaWash == false">
                <v-icon slot="activator" style="font-size:50px; color: orange; ">mdi-account-alert</v-icon>
                <span>Pesquisa não preenchida</span>
              </v-tooltip>

              <v-tooltip top content-class="top" v-if="pesquisaWash == true">
                <v-icon slot="activator" style="font-size:50px; color: green; ">mdi-account-check</v-icon>
                <span>Pesquisa preenchida</span>
              </v-tooltip>

            <h4 class="card-title font-weight-light">Autoavaliação sobre a condição de água, esgotamento sanitário e práticas de higiene na escola</h4>
            <p class="card-description font-weight-light">
              Perguntas para conhecer melhor a estrutura e o funcionamento da sua escola, no que se refere aos aspectos de água, higiene e saneamento.
            </p>
            <v-btn color="info" round class="font-weight-light" @click="finish('/wash')">
                Acessar
            </v-btn>
            
          </v-card-text>

        </material-card>

      </v-flex>

    </v-layout>

  </v-container>

</template>

<script>

  import {db, auth, usersCollection} from "./../firebase";

  import Vue from 'vue'
  import VueYoutube from 'vue-youtube'
  Vue.use(VueYoutube)

    export default {

        data() {
            return {
              pesquisaWash: false,
              checklistProtocolos: false
            }
        },

        methods: {
            finish(value){
                this.$router.push({ path: value });
            },

            playVideo() {
              this.player.playVideo()
            },
            playing() {
              console.log('\o/ we are watching!!!')
            },
            
            computed: {
              player() {
                return this.$refs.youtube.player
              }
            },


        },

        created() {

          var docRefWash = db.collection("users").doc(auth.currentUser.uid);

          docRefWash.get()
            .then( (doc) => {
              if (doc.exists) {
                this.pesquisaWash = true
              } 
            }).catch( (error) => {
              this.$toast.open({
                message: 'Erro ao retornar os dados do usuário relatório wash',
                type: 'error',
                position: 'top'
              });
            });

          var docRefProtocolos = db.collection("users-protocolos").doc(auth.currentUser.uid);

          docRefProtocolos.get()
            .then( (doc) => {
              if (doc.exists) {
                this.checklistProtocolos = true
              } 
            }).catch( (error) => {
              this.$toast.open({
                message: 'Erro ao retornar os dados do usuário relatório wash',
                type: 'error',
                position: 'top'
              });
            });

        }

      }
</script>
