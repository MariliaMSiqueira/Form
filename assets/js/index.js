// function getCEP(cep) {
//   let url = `https://viacep.com.br/ws/${cep}/json`

//   let request = new XMLHttpRequest()

//   request.open('GET', url)

//   request.onreadystatechange = () => {
//     if (request.readyState == 4 && request.status == 200) {
//       // CONECTADO E RECEBIDO
//       let responseText = request.responseText
//       let toJSON = JSON.parse(responseText)
//       console.log(toJSON)

//       let endereco = document.getElementById('endereco')
//       let bairro = document.getElementById('bairro')
//       let cidade = document.getElementById('cidade')
//       let uf = document.getElementById('uf')

//       endereco.value = toJSON.logradouro
//       bairro.value = toJSON.bairro
//       cidade.value = toJSON.localidade
//       uf.value = toJSON.uf
//     } else if (request.readyState == 4 && request.status == 404) {
//       // CONECTADO
//       // CEP NÃO ENCONTRADO
//     }
//   }
//   request.send()
// }

function getCEP(cep) {
  const url = `http://viacep.com.br/ws/${cep}/json/`
  const request = new XMLHttpRequest()
  request.open('GET', url)

  request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
      const responseText = request.responseText
      const toJSON = JSON.parse(responseText)
      console.log(responseText)

      const logradouro = document.getElementById('logradouro')
      const bairro = document.getElementById('bairro')
      const cidade = document.getElementById('cidade')
      const uf = document.getElementById('uf')

      logradouro.value = toJSON.logradouro
      bairro.value = toJSON.bairro
      cidade.value = toJSON.localidade
      uf.value = toJSON.uf
    } else if (request.readyState == 4 && request.status == 404) {
      // console.log(responseText)
      $('#dialogModal').modal('show')
    }
  }

  request.send()
}

function resetInfo() {
  const firstName = document.getElementById('first-name')
  const lastName = document.getElementById('last-name')
  const email = document.getElementById('email')
  const salario = document.getElementById('salario')
  const cep = document.getElementById('cep')
  firstName.value = ''
  lastName.value = ''
  email.value = ''
  salario.value = ''
  cep.value = ''
}
