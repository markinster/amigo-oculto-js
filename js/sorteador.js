
var nomes = [];
nomes.push("Marcos");
nomes.push("Steve Balmer");
nomes.push("Jobs");
nomes.push("Arthas");
nomes.push("James Gosling");
nomes.push("Guldan");
nomes.push("Dennis Ritchie");
nomes.push("Martin Fowler");
nomes.push("Varyan Wryn");
nomes.push("Sargeras");
nomes.push("Valdemort");
nomes.push("Dumbledore");



var numeroDeParticipantes = nomes.length;
var participantes = [];
var numerosSorteados = [];

sorteia();
imprimeResultado();


//========================================


function sorteia() {

	for(var i = 0; i < numeroDeParticipantes; i++) {

		var numero = pegaNumero();
		while (numero == i) {
			numero = pegaNumero();
		}

		numerosSorteados[i] = numero; 
		
		participantes[i] = {
			nome: nomes[i],
			numero: numero,
			pessoaSorteada: nomes[numero]
		}
	}


}

function imprimeResultado() {

	participantes.forEach(function(element) {
				console.log(element.nome, "  .........>  ", element.pessoaSorteada);
			});
	
}



function pegaNumero() {

	max = numeroDeParticipantes - 1;
    var numero = Math.round(Math.random() * max);

    if (numeroJaFoiSorteado(numero)) {
    	return pegaNumero();
    } else {
    	return numero;
    }
}


//verifica se um numero já foi sorteado
function numeroJaFoiSorteado(numero) {

	for(var i = 0; i<= numeroDeParticipantes; i++) {

		if (numerosSorteados[i] === numero)
			return true; 
	}

	return false;
}