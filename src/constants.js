let hostname = window.location.hostname
let url = ''
switch (hostname) {
  case 'localhost':
    url = hostname
    break
  case 'escolas.testes.buscaativaescolar.org.br:':
    url = hostname
    break
}

console.log(url)

export default Object.freeze({
  HOSTURL: '//' + url + ':3000/api/v1'
})