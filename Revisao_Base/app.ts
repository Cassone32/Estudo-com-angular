let mensagem: string = "Hello World Console Debian!"
console.log(mensagem)

let contribuidores: number = 10
console.log("Eu possuo:" + contribuidores + " desenvolvedores voluntários!")

console.log(contribuidores, mensagem)

let totalContribuidores = function (numContribuidores: number): boolean{
  return numContribuidores >= 10
}

console.log("Função calcular contribuidores")
console.log(`O total de ${contribuidores} contribuidores lhe agrada? ${totalContribuidores(contribuidores) ? 'SIM': 'NÃO' }`)
