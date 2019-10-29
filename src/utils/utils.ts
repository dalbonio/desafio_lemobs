
//validador de cpf, fonte: https://www.devmedia.com.br/validar-cpf-com-javascript/23916
export function testaCPF(strCPF): boolean {
    var soma;
    var resto;
    soma = 0;
if (strCPF == "00000000000") return false;
    
for (var i=1; i<=9; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(strCPF.substring(9, 10)) ) return false;

soma = 0;
    for (var i = 1; i <= 10; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

export class Utils{}