
function isPalindroma(parola){
    check = parola.split("").reverse("").join("");
    if(check === parola){
        console.log("La parola è palindroma");
    }
    else{
        console.log("La parola non è palindroma");
    }
}

parola = prompt("inserire parola da verificare");
isPalindroma(parola);