/** Exercício 02
* Faça uma função que receba um único valor representado em segundos. Essa função deverá convertê-lo para horas, minutos e segundos.
*/

// Solicita ao usuário um número de segundos e converte a entrada para um número
let segundos = Number(prompt('Digite um número'));

// Declaração da função que converte segundos em horas, minutos e segundos
const converte = (seg) => {
    // Calcula a quantidade de horas, considerando que 1 hora tem 3600 segundos
    let horas = Math.floor(segundos / 3600);
    
    // Calcula os segundos restantes após extrair as horas
    let segundosRestantes = segundos % 3600;
    
    // Calcula a quantidade de minutos, considerando que 1 minuto tem 60 segundos
    let minutos = Math.floor(segundosRestantes / 60);
    
    // Calcula os segundos finais que restaram após extrair minutos e horas
    let segundosFinal = segundosRestantes % 60;
    
    // Exibe o resultado no console, formatando a saída
    console.log(`${segundos} segundos são equivalentes a ${horas} horas, ${minutos} minutos e ${segundosFinal} segundos`);
}

// Chama a função passando o número de segundos informado pelo usuário
converte(segundos);
