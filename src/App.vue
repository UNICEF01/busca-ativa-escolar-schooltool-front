<template>
  <v-app>
    <v-toolbar app color="blue" class="white--text">
        <img src="https://buscaativaescolar.org.br/images/logo-busca-ativa-escolar.png?1540573178" class="logo">
      <v-toolbar-title class="headline">
        <span>Bem vind@!</span>
        <span class="font-weight-light"> Nome da escola</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="//buscaativaescolar.org.br"
        target="_blank"
        class="white--text">
        <span class="mr-2">Ir para o Busca Ativa Escolar</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
