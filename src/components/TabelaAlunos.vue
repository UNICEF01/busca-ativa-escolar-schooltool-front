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
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="alunos"
      :loading="loading"
    >
      <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}<br>
          <small><b>Nome da mãe:</b> {{props.item.mother_name}}</small>
        </td>
        <td class="text-xs-left">
          <v-text-field
            v-model="props.item.place_cep" v-mask="'#####-###'" @keyup="searchCep(props.item.place_cep, props.index)"
            required
          ></v-text-field>
        </td>
        <td class="text-xs-left">
          <v-text-field
            v-model="alunos[props.index].place_address" @blur="update(props.index, alunos[props.index].place_address)"
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
            v-model="alunos[props.index].place_reference"
            @blur="update(props.index, alunos[props.index].place_reference)"
            required
          ></v-text-field>
        </td>
        <td class="text-xs-left">
          <v-text-field
            v-model="alunos[props.index].place_neighborhood"
            @blur="update(props.index, alunos[props.index].place_neighborhood)"
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
  data() {
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
        {text: 'CEP', sortable: false, align: 'left', value: 'place_cep'},
        {text: 'Logradouro / Endereço', sortable: false, align: 'left', value: 'place_address'},
        // { text: 'Número', sortable: false, align: 'left', value: 'numero' },
        {text: 'Complemento', sortable: false, align: 'left', value: 'place_reference'},
        {text: 'Bairro', sortable: false, align: 'left', value: 'place_neighborhood'},
        {text: 'Status', align: 'left', value: 'status'}
      ],
      alunos: [],
      school_id: '',
      token: '',
      url: 'http://localhost:3000/api/v1'
    }
  },
  created: function () {
    this.school_id = 29069572
    this.token = this.$route.params.token
    this.$nextTick(() => {
      this.getAlunos()
    })
  },
  methods: {
    getAlunos: function () {
      this.$http.get(this.url + '/alertas?school_last_id=' + this.school_id).then(response => {
        this.alunos = response.body.data
        this.loading = false
      }, response => {
        console.log('Error on request')
      })
    },
    searchCep: function (cep, i) {
      let newValu = cep.replace(/[^A-Z0-9]/ig, '')
      if (newValu.length === 8) {
        this.loading = true
        this.$http.get(`https://viacep.com.br/ws/${newValu}/json/`).then(function (response) {
          this.alunos[i].place_address = response.body.logradouro
          this.alunos[i].numero = response.body.numero
          this.alunos[i].complemento = response.body.complemento
          this.alunos[i].place_cep = response.body.cep
          this.alunos[i].place_neighborhood = response.body.bairro
          this.loading = false
          this.update(i, true)
        })
          .catch(error => console.log(error))
      }
    },
    update: function (index, value) {
      console.log(index)
      if (value) {
        this.loading = true
        let aluno = this.alunos[index]
        this.$http.put(this.url + '/alertas/' + aluno.id, aluno).then(response => {
          this.loading = false
        }, response => {
          console.log('Error on request')
        })
      }
    }
  }
}
</script>

<style>

</style>
