<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap>
      
       <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="items2"
          label="Outlined style"
        ></v-select>
      </v-col>

      <v-flex md12>
        <material-card
          color="cyan"
          title="Simple Table"
          text="Here is a subtitle for this table"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions>
            <template
              slot="headerCell"
              slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }">
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex md12>
        <material-card
          color="cyan"
          flat
          full-width
          title="Table on Plain Background"
          text="Here is a subtitle for this table"
        >
          <v-data-table
            :headers="headers"
            :items="items.slice(0, 7)"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }">
              <span
                class="subheading font-weight-light text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }">
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import constants from '../constants'
export default {
  data: () => ({
    items2: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    headers: [
      {
        sortable: false,
        text: 'Name',
        value: 'name'
      },
      {
        sortable: false,
        text: 'Country',
        value: 'country'
      },
      {
        sortable: false,
        text: 'City',
        value: 'city'
      },
      {
        sortable: false,
        text: 'Salary',
        value: 'salary',
        align: 'right'
      }
    ],
    items: [
      {
        name: 'Dakota Rice',
        country: 'Niger',
        city: 'Oud-Tunrhout',
        salary: '$35,738'
      },
      {
        name: 'Minerva Hooper',
        country: 'Curaçao',
        city: 'Sinaai-Waas',
        salary: '$23,738'
      },
      {
        name: 'Sage Rodriguez',
        country: 'Netherlands',
        city: 'Overland Park',
        salary: '$56,142'
      },
      {
        name: 'Philip Chanley',
        country: 'Korea, South',
        city: 'Gloucester',
        salary: '$38,735'
      },
      {
        name: 'Doris Greene',
        country: 'Malawi',
        city: 'Feldkirchen in Kārnten',
        salary: '$63,542'
      },
      {
        name: 'Mason Porter',
        country: 'Chile',
        city: 'Gloucester',
        salary: '$78,615'
      }
    ],
    url: constants.HOSTURL
  }),
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
            this.alunos = response.body.data
            this.loading = false
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
