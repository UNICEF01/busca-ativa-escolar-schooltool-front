<template>
<div
style="
  position: relative;
  left: 265px;
  width: 86%;  
  "
  >

<v-toolbar
    id="core-toolbar"
        color="teal lighten-3"
        dense
        fixed
        style="background: #eee;
">
 <h3 class="tertiary--text font-weight-light"
         style="
  position: absolute;
  left: 270px;
  width: 86%;
   
  " >


  <i v-if="titulo == 'municipio'" class="mdi mdi-file-document"> {{title}} {{uf}} {{munic}}</i>
  <i v-if="titulo == 'regiao'" class="mdi mdi-file-document"> {{title}}</i>
  <i v-if="titulo == 'escola'" class="mdi mdi-file-document"> {{title}} {{uf}} {{munic}}</i>
  <i v-if="titulo == 'questionario'" class="mdi mdi-checkbox-multiple-marked"> {{title}}</i>
  <i v-if="titulo == 'admin'" class="mdi mdi-account-plus"> {{title}}</i> 
  <i v-if="titulo == 'login'" class="mdi mdi-account-key"> {{title}}</i> 

    </h3>

    
    <div class="v-toolbar-title">

      <v-toolbar-title>   
        <v-btn
          v-if="responsive"
          class="default v-btn--simple"
          dark
          icon
          @click.stop="onClickBtn"
        >
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
    
      </v-toolbar-title>
    
    </div>

    <v-toolbar-items>
      <v-flex
        align-center
        layout
        py-2>
      </v-flex>
    </v-toolbar-items>


  </v-toolbar>
  
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    notifications: [
      'Mike, John responded to your email',
      'You have 5 new tasks',
      "You're now a friend with Andrew",
      'Another Notification',
      'Another One'
    ],
    title: null,
    responsive: false,
    responsiveInput: false,
    titulo: null,
    uf: null,
    munic: null,
  }),

  watch: {
    $route (val) {
      this.title = val.name
      this.titulo = localStorage.getItem("titulo")
      this.uf = localStorage.getItem("estado")
      this.munic = localStorage.getItem("munic")
     
    }
  },

  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)  
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },

  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onClickBtn () {
      this.setDrawer(!this.$store.state.app.drawer)
    },
    onClick () {
      //
    },
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
        this.responsiveInput = false
      } else {
        this.responsive = false
        this.responsiveInput = true
      }
    }
  }
}
</script>

<style>
#core-toolbar a {
  text-decoration: none;
}
</style>
