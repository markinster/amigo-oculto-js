
var numeroDeParticipantes = 12;
var nomes = [numeroDeParticipantes];
nomes[0] = "Marcos";
nomes[1] = "Steve Balmer";
nomes[2] = "Jobs";
nomes[3] = "Arthas";
nomes[4] = "James Gosling";
nomes[5] = "Guldan";
nomes[6] = "Dennis Ritchie";
nomes[7] = "Martin Fowler";
nomes[8] = "Varyan Wryn";
nomes[9] = "Sargeras";
nomes[10] = "Valdemort";
nomes[11] = "Dumbledore";




var participantes = [numeroDeParticipantes];
var numerosSorteados = [numeroDeParticipantes];
var count = 0;


sorteia();
imprimeResultado();


//========================================


function sorteia() {

		for(var i = 0; i < numeroDeParticipantes; i++) {

			var numero = pegaNumero();
			while (numero == i) {
				numero = pegaNumero();
			}

			count = 0;
			numerosSorteados[i] = numero; 
			
			participantes[i] = {
				nome: nomes[i],
				numero: numero,
				pessoaSorteada: nomes[numero]
			}
		}


}

function imprimeResultado() {
	
		for(var i = 0; i < numeroDeParticipantes; i++) {

			console.log(participantes[i].nome +
			   "  .........>  " 
			   + participantes[i].pessoaSorteada);
		}
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