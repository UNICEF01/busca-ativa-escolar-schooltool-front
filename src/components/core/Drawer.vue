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
        <v-list-tile avatar>
          <v-img
            :src="logo"
            height="50"
            contain/>
        </v-list-tile>

        <v-card-actions class="justify-center">
          Bem Vindo(a)!
        </v-card-actions>
        <v-card-actions class="justify-center">
          {{user.displayName}}
        </v-card-actions>
        <v-btn v-if="user.uid !== undefined" @click="logout()" class="font-weight-light" :class="color">
          Sair
        </v-btn>

        <v-divider/>
        <!--        <v-list-tile v-if="responsive">-->
        <!--          <v-text-field-->
        <!--            class="purple-input search-input"-->
        <!--            label="Pesquisar..."-->
        <!--            color="purple"-->
        <!--          />-->
        <!--        </v-list-tile>-->
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

        <v-list-tile
          :active-class="color"
          class="v-list-item v-list__tile--buy"
          href="http://buscaativaescolar.org.br"
          target="_blank"
        >
          <v-list-tile-action>
            <v-icon>mdi-package-up</v-icon>
          </v-list-tile-action>
          Conheça a estratégia
        </v-list-tile>
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
      logo:
        'https://buscaativaescolar.org.br/images/logo-busca-ativa-escolar.png',
      links: [
        // {
        //   to: '/dashboard',
        //   icon: 'mdi-view-dashboard',
        //   text: 'Dashboard'
        // },
        // {
        //   to: '/user-profile',
        //   icon: 'mdi-account',
        //   text: 'Sua escola'
        // },
        {
          to: '/children',
          icon: 'mdi-clipboard-outline',
          text: 'Crianças / Adolescentes'
        }
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
    },
    created: function () {
      var docRef = db.collection("users").where('uid', '==', auth.currentUser.uid).onSnapshot(querySnapshot => {

        // console.log(querySnapshot)
        // let values = []
        // querySnapshot.forEach((doc) => {
        //   values.push(doc.data())
      })
    },
    mounted() {

      this.onResponsiveInverted()
      window.addEventListener('resize', this.onResponsiveInverted)

      this.user = auth.currentUser || '';

      if (this.user.displayName.length > 1) {
        this.$router.push({path: '/wash'})

      }

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
      logout() {
        auth.signOut().then(function () {

        }).catch(function (error) {
          // An error happened.
        });
        this.$router.push({path: '/quest'})
        setInterval(function () {
          window.location.reload();
        }, 2000);

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
