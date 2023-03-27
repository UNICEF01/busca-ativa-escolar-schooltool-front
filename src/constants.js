let hostname = window.location.hostname
let url = ''
switch (hostname) {
  case 'localhost':
    url = 'api.escolas.busca-ativa-escolar.test'
    break
  case 'escolas.testes.buscaativaescolar.org.br':
    url = 'api.escolas.testes.buscaativaescolar.org.br'
    break
  case 'escolas.dev.buscaativaescolar.org.br':
    url = 'api.escolas.dev.buscaativaescolar.org.br'
    break
  default:
    url = 'api.escolas.buscaativaescolar.org.br'
}

export default Object.freeze({
  HOSTURL: '//' + url + '/api/v1'
})
