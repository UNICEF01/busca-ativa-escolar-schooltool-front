<template>
  <v-menu
    :close-on-content-click="false"
    bottom
    left
    min-width="300"
    max-width="300"
    nudge-left="12"
    offset-x
    transition="slide-y-transition"
  >
    <v-btn
      slot="activator"
      class="elevation-0"
      color="grey"
      dark
      fab
      fixed
      style="top: 96px;"
      top
    >
      <v-icon>mdi-settings</v-icon>
    </v-btn>
    <v-card>
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex xs12>
            <div class="text-xs-center body-2 text-uppercase sidebar-filter">
              Temas
            </div>

            <v-layout justify-center>
              <v-avatar
                v-for="c in colors"
                :key="c"
                :class="[
                  c === color ? 'color-active color-' + c : 'color-' + c
                ]"
                size="23"
                @click="setColor(c)"
              />
            </v-layout>
            <v-divider class="mt-3" />
          </v-flex>
          <v-flex xs12>
            <div class="text-xs-center body-2 text-uppercase sidebar-filter">
              Imagens
            </div>
          </v-flex>
          <v-flex
            v-for="img in images"
            :key="img"
            xs3>
            <v-img
              :class="[image === img ? 'image-active' : '']"
              :src="img"
              height="120"
              @click.native="setImage(img)"
            />
          </v-flex>
          <!--<v-flex xs12>-->
          <!--<v-btn-->
          <!--href="https://www.creative-tim.com/product/vuetify-material-dashboard"-->
          <!--target="_blank"-->
          <!--color="success"-->
          <!--block-->
          <!--&gt;-->
          <!--Free Download-->
          <!--</v-btn>-->
          <!--</v-flex>-->
          <!--<v-flex xs12>-->
          <!--<v-btn-->
          <!--href="https://demos.creative-tim.com/vuetify-material-dashboard/documentation"-->
          <!--target="_blank"-->
          <!--class="white&#45;&#45;text"-->
          <!--color="primary"-->
          <!--block-->
          <!--&gt;-->
          <!--Documentation-->
          <!--</v-btn>-->
          <!--</v-flex>-->
          <v-flex xs12>
            <div class="text-xs-center body-2 text-uppercase">
              <div class=" sidebar-filter">
                Redes sociais
              </div>

              <div>
                <v-btn
                  color="indigo"
                  class="mr-2 v-btn-facebook"
                  fab
                  icon
                  small
                  round
                  href="https://www.facebook.com/watch/?v=430495967719536"
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  color="red"
                  class="v-btn-youtube"
                  fab
                  icon
                  small
                  round
                  href="https://www.youtube.com/watch?v=yK3fX9lJFOM"
                >
                  <v-icon>mdi-youtube</v-icon>
                </v-btn>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>
// Utilities
import { mapMutations, mapState } from 'vuex'

export default {
  data: () => ({
    colors: ['primary', 'info', 'success', 'warning', 'danger'],
    images: [
      'img/1.jpg',
      'img/2.jpg',
      'img/3.jpg',
      'img/4.jpg'
    ]
  }),

  computed: {
    ...mapState('app', ['image', 'color']),
    color () {
      return this.$store.state.app.color
    }
  },

  methods: {
    ...mapMutations('app', ['setImage']),
    setColor (color) {
      switch(color) {
        case 'info':
          this.$store.state.app.color = 'cyan'
          break;
        case 'danger':
          this.$store.state.app.color = 'red'
          break;
        case 'primary':
          this.$store.state.app.color = 'purple'
          break;
        default:
          this.$store.state.app.color = color
      }
    }
  }
}
</script>

<style lang="scss">
.v-avatar,
.v-responsive {
  cursor: pointer;
}
</style>
