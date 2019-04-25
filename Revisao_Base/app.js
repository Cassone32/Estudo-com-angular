var mensagem = "Hello World Console Debian!";
console.log(mensagem);
var contribuidores = 10;
console.log("Eu possuo:" + contribuidores + " desenvolvedores voluntários!");
console.log(contribuidores, mensagem);
var totalContribuidores = function (numContribuidores) {
    return numContribuidores >= 10;
};
console.log("Função calcular contribuidores");
console.log("O total de " + contribuidores + " contribuidores lhe agrada? " + (totalContribuidores(contribuidores) ? 'SIM' : 'NÃO'));
