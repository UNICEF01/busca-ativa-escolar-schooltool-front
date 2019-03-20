let hostname = window.location.hostname
let url = ''
switch (hostname) {
  case 'localhost':
    url = hostname
    break
  case 'escolas.testes.buscaativaescolar.org.br:':
    url = 'api.escolas.testes.buscaativaescolar.org.br'
    break
  default:
    url = 'api.escolas.buscaativaescolar.org.br'
}

export default Object.freeze({
  HOSTURL: '//' + url + ':3000/api/v1'
})
