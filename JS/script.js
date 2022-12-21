
document.getElementById('button').addEventListener("click", function() {
    alert ("wahsapening");
});

function encriptar ( string ){
    let string=document.querySelector("input");
    let resultado = "";

    for (let i=0; i< string.length; i++){
        switch (string[i]){
            case 'e':
                resultado = resultado + "enter";
                break;
            case 'i':
                resultado = resultado + "imes";
                break;
            case 'a':
                resultado = resultado + "ai";
                break;
            case 'o':
                resultado = resultado + "ober";
                break;
            case 'u':
                resultado = resultado + "ufat";
                break;
            default:
            resultado=resultado+string[i];
        }
    }
    return(resultado); 
}

/*
let string = "hoberlai qufatenter tail";
let resultado = "";
let i=0;
while (i< string.length){
    if(string[i]=="e"){
        resultado = resultado + "e";
        i=+5;
    }else if (string[i]=="i"){
        resultado = resultado + "i";
        i=+4;
    }else if (string[i]=="a"){
        resultado = resultado + "a";
        i=+2;
    }else if (string[i]=="o"){
        resultado = resultado + "o";
        i=+4;
    }else if (string[i]=="u"){
        resultado = resultado + "u";
        i=+4;
    }else{
        resultado = resultado + string[i];
    }
}
alert(resultado); */