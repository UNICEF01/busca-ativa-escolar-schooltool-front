<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
    <v-img
      :src="image"
      height="100%">

      <v-layout
        class="fill-height"
        tag="v-list"
        column>

        <br/><br/><br/>

        <v-card-actions class="justify-center" v-if="user">
          Bem vindo, {{user.displayName}}
        </v-card-actions>

        <v-btn v-if="user.uid !== undefined && editedIndex == 'admin' || editedIndex == 'user'" @click="dashboard()" class="font-weight-light" :class="color" >
          Painel
        </v-btn>

        <v-btn v-if="user.uid !== undefined && editedIndex == 'admin'" @click="admin()" class="font-weight-light" :class="color">
          Usuários
        </v-btn>

        <v-btn v-if="user.uid !== undefined && editedIndex == 'admin'" @click="exportExcel()" class="font-weight-light" :class="color">
          Exportar Dados Wash

        </v-btn>
        <v-btn
          v-if="user.uid !== undefined && editedIndex == 'admin'"
          @click="exportExcel('NS')" 
          small
          color="primary"
          dark
        >
          NORTE e SUL
        </v-btn>
        <v-btn
          v-if="user.uid !== undefined && editedIndex == 'admin'"
          @click="exportExcel('COSE')" 
          small
          color="primary"
          dark
        >
          CENTRO-OESTE E SUDESTE
        </v-btn>
        <v-btn
          v-if="user.uid !== undefined && editedIndex == 'admin'"
          @click="exportExcel('NE1')" 
          small
          color="primary"
          dark
        >
          NORDESTE 1
        </v-btn>
        <v-btn
          v-if="user.uid !== undefined && editedIndex == 'admin'"
          @click="exportExcel('NE2')" 
          small
          color="primary"
          dark
        >
          NORDESTE 2
        </v-btn>

        <v-btn v-if="user.uid !== undefined && editedIndex == 'admin'" @click="exportExcelChecklist()" class="font-weight-light" :class="color">
          Exportar Dados Checklist
        </v-btn>
        <v-divider/>
        
        <v-list-tile v-if="showButtom"
                     v-for="(link, i) in links"
                     :key="i"
                     :to="link.to"
                     :active-class="color"
                     avatar
                     :class="'v-list-item '+color"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="link.text"/>
        </v-list-tile>
        
        <v-btn depressed color="error" v-if="user.uid !== undefined" @click="logout(editedIndex)" class="font-weight-light" :class="color">
          Sair
        </v-btn>
  
      </v-layout>

    </v-img>

  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {mapMutations, mapState} from 'vuex'
  import {db, auth} from './../../firebase.js'

  export default {

    data: () => ({
      
      showButtom: false,
      user: '',
      editedIndex: 0,
      perfilUser:'',

      links: [
        /* {
          to: '/dashboard',
          icon: 'mdi-view-dashboard',
          text: 'Dashboard'
        } */
      ],
      
      responsive: false
      
    }),

    computed: {
      
      ...mapState('app', ['image', 'color']),
      
      inputValue: {
        
        get() {
          return this.$store.state.app.drawer
        },
        
        set(val) {
          this.setDrawer(val)
        }

      },
      
      items() {
        return this.$t('Layout.View.items')
      },

      formPerfil() {
        return this.perfilUser === "admin" ? 'Administrador ' : 'Usuário'
      },

    },

    created() {

        if(auth.currentUser){
          let userData = db.collection("admin-users").doc(auth.currentUser.uid)
          userData.get().then((response) => {
                if (response.exists) {
                    var perfil=response.get('perfil');
                }
               
                this.editedIndex = perfil
          });
        }

    },

    mounted() {

      this.onResponsiveInverted()
      window.addEventListener('resize', this.onResponsiveInverted)

      this.user = auth.currentUser || '';

      if (window.location.pathname === '/') {
        this.showButtom = true;
      }
      
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.onResponsiveInverted)

    },

    methods: {
      ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
      onResponsiveInverted() {
        if (window.innerWidth < 991) {
          this.responsive = true
        } else {
          this.responsive = false
        }
      },
      logout(item) {
        if (item == undefined){
          setInterval(function () {
            window.location.reload();
          }, 1000); 
          //this.$router.push({path: '/login'})
          self.location='/login-usuario'
          
          auth.signOut().then(function () {

          }).catch(function (error) {
            // An error happened.
          });          
        }else{
        localStorage.removeItem("admin");
        localStorage.removeItem("estado");
        localStorage.removeItem("munic");
        localStorage.setItem("titulo","login");
        auth.signOut().then(function () {

        }).catch(function (error) {
          // An error happened.
        });
          setInterval(function () {
            window.location.reload();
          }, 1000); 
          //this.$router.push({path: '/login'})
          self.location='/login-usuario'

        }         
      },
      dashboard(){
        localStorage.setItem("estado","");
        localStorage.setItem("munic","");        
        localStorage.setItem("titulo", "regiao");
        var uf =  localStorage.getItem("estado");
        localStorage.setItem("estado", uf);  
          setInterval(function () {
            window.location.reload();
          }, 100);         
        this.$router.push({path: '/resultsV2'})
      },
      admin(){
        localStorage.setItem("titulo", "admin");
        this.$router.push({path: '/admin'})
      },
      quest(){
        localStorage.setItem("titulo", "questionario");
        this.$router.push({path: '/quest'})
      },
      exportExcel(sigla){  
        localStorage.setItem("siglaregiao",sigla)
        this.$router.push({path: '/exportExcel'+sigla})
      },
      exportExcelChecklist(){       
        this.$router.push({path: '/exportExcelChecklist'})
      }

    }

  }
</script>

<style lang="scss">

  #app-drawer {

    .v-list__tile {
      border-radius: 4px;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }

    .v-image__image--contain {
      top: 9px;
      height: 60%;
    }

    .search-input {
      margin-bottom: 30px !important;
      padding-left: 15px;
      padding-right: 15px;
    }

  }

</style>
