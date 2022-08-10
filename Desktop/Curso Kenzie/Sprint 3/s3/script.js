alert("Digite suas notas abaixo de cada matéria:");
let nome = prompt("Nome do Aluno")

let quantidade = nome.length;

console.log(quantidade)

if (quantidade >= 5){}

else { alert("Nome deve ter no mínimo 5 carácteres") 
console.log("Errado")}

let materia1 = parseFloat(prompt("Matemática"))

if (materia1 <= 0)
{ alert("Nota não pode ser igual ou menor que 0 em Matemática")
console.log("Reprovado")}

else if(materia1 > 10){ alert("Nota não pode ser maior que 10 em Matemática")

  console.log("Reprovado")}



let materia2 = parseFloat(prompt("Português"))

if(materia2 <= 0){alert("Nota não pode ser igual ou menor que 0 em Português")
  
  console.log("Reprovado")}

else if(materia2 > 10){alert("Nota não pode ser maior que 10 em Português")

  console.log("Reprovado")}



let materia3 = parseFloat(prompt("Informática"))

if(materia3 <= 0){alert("Nota não pode ser igual ou menor que 0 em Informática")
  
  console.log("Reprovado")}

else if(materia3 > 10){alert("Nota não pode ser maior que 10 em Informática")
  
  console.log("Reprovado")}




let materia4 = parseFloat(prompt("Geografia"))

if(materia4 <= 0){alert("Nota não pode ser igual ou menor que 0 em Geografia")
  
  console.log("Reprovado")}

else if(materia4 > 10){alert("Nota não pode ser maior que 10 em Geografia")
  
  console.log("Reprovado")}




let materia5 = parseFloat(prompt("Inglês"))

if(materia5 <= 0){alert("Nota não pode ser igual ou menor que 0 em Inglês")
  
  console.log("Reprovado")}

else if(materia5 > 10){alert("Nota não pode ser maior que 10 em Inglês")
  
  console.log("Reprovado")}




let materia6 = parseFloat(prompt("História"))

if(materia6 <= 0){alert("Nota não pode ser igual ou menor que 0 em História")
  
  console.log("Reprovado")}

else if(materia6 > 10){alert("Nota não pode ser maior que 10 em História")
  
  console.log("Reprovado")}



let materia7 = parseFloat(prompt("Filosofia"))

if(materia7 <= 0){alert("Nota não pode ser igual ou menor que 0 em Filosofia")
  
  console.log("Reprovado")}

else if(materia7 > 10){alert("Nota não pode ser maior que 10 em Filosofia")
  
  console.log("Reprovado")}




let materia8 = parseFloat(prompt("Sociologia"))

if(materia8 <= 0){alert("Nota não pode ser igual ou menor que 0 em Sociologia")
  
  console.log("Reprovado")}

else if(materia8 > 10){alert("Nota não pode ser maior que 10 em Sociologia")
  
  console.log("Reprovado")}




let materia9 = parseFloat(prompt("Literatura"))

if(materia9 <= 0){alert("Nota não pode ser igual ou menor que 0 em Literatura")
  
  console.log("Reprovado")}

else if(materia9 > 10){alert("Nota não pode ser maior que 10 em Literatura")
  
  console.log("Reprovado")}




let materia10 = parseFloat(prompt("Educação Física"))

if(materia10 <= 0){alert("Nota não pode ser igual ou menor que 0 em Educação Física")
  
  console.log("Reprovado")}

else if(materia10 > 10){alert("Nota não pode ser maior que 10 em Física")
  
  console.log("Reprovado")}




let presenca1 = parseInt(prompt("Digite sua Presença"))


let soma = materia1 + materia2 + materia3 + materia4 + materia5 + materia6 + materia7 + materia8 + materia9 + materia10;
let media = soma / 10;


  if (presenca1 <= 0 ){ alert("Nota de presença não pode ser 0 ou menor")
    console.log("Reprovado")}
    else if (presenca1 > 10){alert("Nota de presença não pode ser maior que 10")
  console.log("Reprovado")}

if (presenca1 >= 6)
    {console.log("Você foi Aprovado")}

    else{ alert("Você foi Reprovado Por Falta de Presença")
  console.log("Você foi Reprovado")}

 

if (media >= 8 && media <= 10 && presenca1 >= 6 && presenca1 <= 10 ){ alert(`A nota do aluno ${nome} é de ${media} e sua presença de ${presenca1}: Aluno Aprovado`)
console.log("Você foi Aprovado")}

    


else { alert("Você foi Reprovado Por Falta de Nota")
  console.log("Reprovado")}