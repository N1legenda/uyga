let num1 = +prompt("kerakli sonni kiriting va ortachasini aniqlang!");
let num2 = +prompt("kerakli sonni kiriting va ortachasini aniqlang!");
let num3 = +prompt("kerakli sonni kiriting va ortachasini aniqlang!");

if(num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2){
    alert(num1 + " ortacha son")
}else if(num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3){
    alert(num2 + " ortacha son ")
}else if(num3 > num1 && num3 < num2 || num3 < num1 && num3 > num2){
    alert(num3 + " ortacha son")
}