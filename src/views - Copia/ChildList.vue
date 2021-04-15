<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
    class="pt-0">
    <v-layout
      justify-center
      wrap>
      Bem vind@ {{ school.name }} / {{ school.city_name }} - {{ school.uf }}
      <v-flex md12>
        <material-card
          :color="color"
          title="Lista de Crianças/Adolecentes"
          text="Por favor informar os endereços das crianças/adolecentes"
        >
          <v-card-title>
            <!--<v-spacer/>-->
            <!--<v-text-field-->
              <!--v-model="search"-->
              <!--label="Pesquisar"-->
              <!--single-line-->
              <!--hide-details-->
            <!--/>-->
          </v-card-title>
          <v-data-table

          >
            <template
              slot="headerCell"
              slot-scope="{ header }">
              <span
                class="subheading font-weight-light text--darken-3"
                v-text="header.text"
              />
              <br>
              <small>{{ header.description }}</small>
            </template>
            <template
              slot="items"
              slot-scope="props">
              <td>
                {{ props.item.name }}<br>
                <small><b>Nome da mãe:</b> {{ props.item.mother_name }}</small>
              </td>
              <td class="text-xs-left with-input-xs">
                <v-text-field
                  v-mask="'#####-###'"
                  v-model="props.item.place_cep"
                  required
                  @keyup="searchCep(props.item.place_cep, alunos.indexOf(props.item))"
                />
              </td>
              <td class="text-xs-left">
                <v-text-field
                  v-model="alunos[alunos.indexOf(props.item)].place_address"
                  required
                  @blur="update(alunos.indexOf(props.item), alunos[alunos.indexOf(props.item)].place_address)"
                />
              </td>
              <td class="text-xs-left">
                <v-text-field
                  v-model="alunos[alunos.indexOf(props.item)].place_reference"
                  required
                  @blur="
                    update(alunos.indexOf(props.item), alunos[alunos.indexOf(props.item)].place_reference)
                  "
                />
              </td>
              <td class="text-xs-left">
                <v-text-field
                  v-model="alunos[alunos.indexOf(props.item)].place_neighborhood"
                  required
                  @blur="
                    update(alunos.indexOf(props.item), alunos[alunos.indexOf(props.item)].place_neighborhood)
                  "
                />
              </td>
              <td class="text-lg-center">
                <span
                  v-if="alunos[alunos.indexOf(props.item)].place_address && alunos[alunos.indexOf(props.item)].place_neighborhood"
                  title="Está ok"
                  class="fa fa-thumbs-up size-lg text-size-md green--text"/></td>
            </template>
          </v-data-table>
        </material-card>
        <v-progress-linear
          :active="loading"
          :color="color"
          indeterminate
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import constants from '../constants'
import { mapState } from 'vuex'

export default {
  data: () => ({
    headers: [
      {
        text: 'Nome',
        sortable: false,
        align: 'left',
        value: 'nome'
      },
      {
        text: 'CEP',
        sortable: false,
        align: 'left',
        value: 'place_cep'
      },
      {
        text: 'Endereço*',
        sortable: false,
        align: 'left',
        value: 'place_address'
      },
      // { text: 'Número', sortable: false, align: 'left', value: 'numero' },
      {
        text: 'Referência geográfica',
        description: 'Ponto de referëncia',
        sortable: false,
        align: 'left',
        value: 'place_reference'
      },
      {
        text: 'Bairro*',
        sortable: false,
        align: 'left',
        value: 'place_neighborhood'
      },
      {
        text: 'Status',
        sortable: false,
        align: 'left',
        value: 'status'
      }
    ],
    alunos: [],
    search: '',
    pagination: { rowsPerPage: 5 },
    selected: [],
    loading: true,
    school_id: '',
    token: '',
    url: constants.HOSTURL,
    school: ''
  }),
  computed: {
    ...mapState('app', ['image', 'color'])
  },
  created: function () {
    this.school_id = this.$route.query.i
    this.token = this.$route.query.t
    this.$nextTick(() => {
      this.getAlunos()
    })
  },
  methods: {
    getAlunos: function () {
      this.$http
        .get(
          this.url +
          '/alertas?school_last_id=' +
          this.school_id +
          '&token=' +
          this.token
        )
        .then(
          response => {
            this.alunos = response.data.data
            this.loading = false
            this.school = response.data.school
          },
          response => {
            console.log('Error on request')
          }
        )
    },
    searchCep: function (cep, i) {
      let newValu = cep.replace(/[^A-Z0-9]/gi, '')
      if (newValu.length === 8) {
        this.loading = true
        this.$http
          .get(`https://viacep.com.br/ws/${newValu}/json/`)
          .then(function (response) {
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
        this.$http.put(this.url + '/alertas/' + aluno.id, aluno).then(
          response => {
            this.loading = false
          },
          response => {
            console.log('Error on request')
          }
        )
      }
    }
  }
}
</script>
<style lang="scss">
  .with-input-xs {
    width: 100px;
  }
</style>
