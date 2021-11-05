let pwokes;
let nevokes;
let pw2okes;

function nevHossz() {
    nevhossz = document.getElementById("nev").value.length;
    nevhossza = document.getElementById("nevhossz");
    if (nevhossz < 20) {
        nevhossza.innerHTML = nevhossz + "/20";
        nevhossza.style.color = "black";
        nevokes = true;
    }else{
        nevhossza.innerHTML = nevhossz + "/20";
        nevhossza.style.color = "red";
        nevokes = false;
    }
}

function pwHossz() {
    pwhossz = document.getElementById("pw").value.length;
    pwhossza = document.getElementById("pwhossz");
    if (pwhossz >= 8) {
        pwokes=true;
        pwhossza.innerHTML = pwhossz + " / 8";
        pwhossza.style.color = "black";
    }else{
        pwokes=false;
        pwhossza.innerHTML = pwhossz + " / 8";
        pwhossza.style.color = "red";
    }
}

function pwEgyez() {
    pw1 = document.getElementById("pw").value;
    pw2 = document.getElementById("pw2").value;
    pwhossz = document.getElementById("pwhossz2");
    if (pw1 != pw2) {
        pw2okes = false;
        pwhossz.innerHTML = "Nem egyezik a 2 pw!";
        pwhossz.style.color = "red";
    }else{
        pw2okes = true;
        pwhossz.innerHTML="";
    }
}

function register() {
    siker = document.getElementById("sikeres");
    if (nevokes==true && pwokes == true && pw2okes == true) {
        siker.innerHTML = "Sikeres bevitel";
    }else{
        siker.innerHTML="nemsikeresbevitel";
    }
}

function registerTimeOut(){
    setTimeout(register,2000);
}
function init(){
    document.getElementById('nev').addEventListener("input",nevHossz);
    document.getElementById('pw').addEventListener("input",pwHossz);
    document.getElementById('pw2').addEventListener("blur",pwEgyez);
    document.getElementById("regist").addEventListener("click",registerTimeOut);
}

document.addEventListener("DOMContentLoaded", init);