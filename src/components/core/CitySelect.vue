<template>
  <v-container class="pa-2">
    <v-layout>
      <v-flex xs12 md6>
        <v-select
          v-model="estado"
          :items="estados"
          label="Estado"
          :rules="[rules.required]"
        ></v-select>
      </v-flex>

      <v-flex xs12 md6>
        <v-autocomplete
          v-model="cidade"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          clearable
          hide-details
          hide-selected
          item-text="name"
          label="Município"
          return-object
          :rules="[rules.required]"
          @change="emitToParent({uf: estado, city: cidade})"
        >
          <template v-slot:no-data>
            <v-list-item>
              <v-list-item-title>
                Escreva o nome do município
              </v-list-item-title>
            </v-list-item>
          </template>

          <template v-slot:selection="{ attr, on, item, selected }">
            <span v-text="item.name"></span>
          </template>

          <template v-slot:item="{ item }">
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
              -
              <v-list-item-subtitle v-text="item.uf"></v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-autocomplete>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>

</style>

<script>

  import brasil from "../../assets/brasil.json";

  export default {
    name: "Estados",
    data() {
      return {
        cidades: [],
        items: [],
        estado: '',
        cidade: '',
        isLoading: false,
        search: null,
        rules: {
          required: value => !!value || 'Obrigatório.',
        },
        estados: [
          {value: "AC", text: "Acre"},
          {value: "AL", text: "Alagoas"},
          {value: "AP", text: "Amapá"},
          {value: "AM", text: "Amazonas"},
          {value: "BA", text: "Bahia"},
          {value: "CE", text: "Ceará"},
          {value: "DF", text: "Distrito Federal"},
          {value: "ES", text: "Espírito Santo"},
          {value: "GO", text: "Goiás"},
          {value: "MA", text: "Maranhão"},
          {value: "MT", text: "Mato Grosso"},
          {value: "MS", text: "Mato Grosso do Sul"},
          {value: "MG", text: "Minas Gerais"},
          {value: "PA", text: "Pará"},
          {value: "PB", text: "Paraíba"},
          {value: "PR", text: "Paraná"},
          {value: "PE", text: "Pernambuco"},
          {value: "PI", text: "Piauí"},
          {value: "RJ", text: "Rio de Janeiro"},
          {value: "RN", text: "Rio Grande do Norte"},
          {value: "RS", text: "Rio Grande do Sul"},
          {value: "RO", text: "Rondônia"},
          {value: "RR", text: "Roraima"},
          {value: "SC", text: "Santa Catarina"},
          {value: "SP", text: "São Paulo"},
          {value: "SE", text: "Sergipe"},
          {value: "TO", text: "Tocantins"}
        ]
      };
    },
    watch: {
      cidade(val) {
        if (val != null)
          this.cidade = val;
      },
      search(val) {
        //Items have already been loaded
        if (val < 3) return

        this.isLoading = true

        const requestOptions = {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(
            {
              name: val,
              uf: this.estado,
              $hide_loading_feedback: true
            }
          )
        }

        // Lazily load input items
        fetch("https://api.testes.buscaativaescolar.org.br/api/v1/cities/search", requestOptions)
          .then(res => res.clone().json())
          .then(res => {
            this.items = res.results
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      },
    },
    methods: {
      emitToParent(event) {
        this.$emit('childToParent', event)
      }
    }
  };
</script>
