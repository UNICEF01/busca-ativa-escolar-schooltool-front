<template>
  <v-container fill-height fluid grid-list-xl class="pt-0">
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card
          color="green"
          title="Lista de Crianças/Adolecentes"
          text="Por favor informar os endereços das crianças/adolecentes"
        >
          <v-data-table
            :headers="headers"
            :items="alunos"
            :loading="true"
            hide-actions
          >
            <template slot="headerCell" slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template slot="items" slot-scope="props">
              <td>
                {{ props.item.name }}<br />
                <small><b>Nome da mãe:</b> {{ props.item.mother_name }}</small>
              </td>
              <td class="text-xs-left">
                <v-text-field
                  v-model="props.item.place_cep"
                  v-mask="'#####-###'"
                  @keyup="searchCep(props.item.place_cep, props.index)"
                  required
                ></v-text-field>
              </td>
              <td class="text-xs-left">
                <v-text-field
                  v-model="alunos[props.index].place_address"
                  @blur="update(props.index, alunos[props.index].place_address)"
                  required
                ></v-text-field>
              </td>
              <td class="text-xs-left">
                <v-text-field
                  v-model="alunos[props.index].place_reference"
                  @blur="
                    update(props.index, alunos[props.index].place_reference)
                  "
                  required
                ></v-text-field>
              </td>
              <td class="text-xs-left">
                <v-text-field
                  v-model="alunos[props.index].place_neighborhood"
                  @blur="
                    update(props.index, alunos[props.index].place_neighborhood)
                  "
                  required
                ></v-text-field>
              </td>
              <td class="text-xs-left">{{ props.item.status }}</td>
            </template>
          </v-data-table>
        </material-card>
        <v-progress-linear
          :active="loading"
          color="green"
          indeterminate
        ></v-progress-linear>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import constants from "../constants";
export default {
  data: () => ({
    headers: [
      {
        text: "Nome",
        align: "left",
        value: "nome"
      },
      { text: "CEP", sortable: false, align: "left", value: "place_cep" },
      {
        text: "Logradouro / Endereço",
        sortable: false,
        align: "left",
        value: "place_address"
      },
      // { text: 'Número', sortable: false, align: 'left', value: 'numero' },
      {
        text: "Complemento",
        sortable: false,
        align: "left",
        value: "place_reference"
      },
      {
        text: "Bairro",
        sortable: false,
        align: "left",
        value: "place_neighborhood"
      },
      { text: "Status", align: "left", value: "status" }
    ],
    alunos: [],
    search: "",
    pagination: {},
    selected: [],
    loading: true,
    school_id: "",
    token: "",
    url: constants.HOSTURL
  }),
  created: function() {
    this.school_id = this.$route.query.i;
    this.token = this.$route.query.t;
    this.$nextTick(() => {
      this.getAlunos();
    });
  },
  methods: {
    getAlunos: function() {
      this.$http
        .get(
          this.url +
            "/alertas?school_last_id=" +
            this.school_id +
            "&token=" +
            this.token
        )
        .then(
          response => {
            this.alunos = response.data.data;
            this.loading = false;
          },
          response => {
            console.log("Error on request");
          }
        );
    },
    searchCep: function(cep, i) {
      let newValu = cep.replace(/[^A-Z0-9]/gi, "");
      if (newValu.length === 8) {
        this.loading = true;
        this.$http
          .get(`https://viacep.com.br/ws/${newValu}/json/`)
          .then(function(response) {
            this.alunos[i].place_address = response.body.logradouro;
            this.alunos[i].numero = response.body.numero;
            this.alunos[i].complemento = response.body.complemento;
            this.alunos[i].place_cep = response.body.cep;
            this.alunos[i].place_neighborhood = response.body.bairro;
            this.loading = false;
            this.update(i, true);
          })
          .catch(error => console.log(error));
      }
    },
    update: function(index, value) {
      console.log(index);
      if (value) {
        this.loading = true;
        let aluno = this.alunos[index];
        this.$http.put(this.url + "/alertas/" + aluno.id, aluno).then(
          response => {
            this.loading = false;
          },
          response => {
            console.log("Error on request");
          }
        );
      }
    }
  }
};
</script>
