<template>
  <v-card>
    <v-card-title>
      Informar dados de endereço da criança
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Pesquisar"
        single-line
        hide-details
        :loading="loading"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="alunos"
      :search="search"
    >
      <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}<br>
          <small><b>Nome da mãe:</b> {{props.item.mother_name}}</small>
        </td>
        <td class="text-xs-left">
          <v-text-field
            v-model="props.item.place_cep" v-mask="'#####-###'" @change="searchCep(props.item.place_cep, props.index)"
            required
          ></v-text-field>
        </td>
        <td class="text-xs-left">
          <v-text-field
            v-model="alunos[props.index].place_address"
            required
          ></v-text-field>
        </td>
        <!--<td class="text-xs-left">-->
          <!--<v-text-field-->
            <!--v-model="props.item.numero"-->
            <!--required-->
          <!--&gt;</v-text-field>-->
        <!--</td>-->
        <td class="text-xs-left">
          <v-text-field
            v-model="props.item.complemento"
            required
          ></v-text-field>
        </td>
        <td class="text-xs-left">
          <v-text-field
            v-model="props.item.place_neighborhood"
            required
          ></v-text-field>
        </td>
        <td class="text-xs-left">{{ props.item.status }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Você pesquisou por "{{ search }}" mas não foi encontrado.
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      pagination: {},
      selected: [],
      loading: true,
      headers: [
        {
          text: 'Nome',
          align: 'left',
          value: 'nome'
        },
        { text: 'CEP', sortable: false, align: 'left', value: 'place_cep' },
        { text: 'Logradouro / Endereço', sortable: false, align: 'left', value: 'place_address' },
        // { text: 'Número', sortable: false, align: 'left', value: 'numero' },
        { text: 'Complemento', sortable: false, align: 'left', value: 'complemento' },
        { text: 'Bairro', sortable: false, align: 'left', value: 'place_neighborhood' },
        { text: 'Status', align: 'left', value: 'status' }
      ],
      alunos: []
    }
  },
  created: function () {
    this.getAlunos()
  },
  methods: {
    getAlunos: function () {
      // GET /someUrl
      this.$http.get('/dados.json').then(response => {
        // get body data
        this.alunos = response.body.results
        this.loading = false
      }, response => {
        // error callback
      })
    },
    searchCep: function (cep, i) {
      console.log(this)
      let newValu = cep.replace(/[^A-Z0-9]/ig, '')
      console.log(newValu)
      if (newValu.length === 8) {
        this.$http.get(`https://viacep.com.br/ws/${newValu}/json/`).then(function (response) {
          console.log(response)
          this.alunos[i].place_address = response.body.logradouro
          this.alunos[i].numero = response.body.numero
          this.alunos[i].complemento = response.body.complemento
          this.alunos[i].place_cep = response.body.cep
          this.alunos[i].place_neighborhood = response.body.bairro
        })
          .catch(error => console.log(error))
      }
    }
  }
}
</script>

<style>

</style>
