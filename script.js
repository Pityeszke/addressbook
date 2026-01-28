let Névjegyek = [];
function felvétel(){
    const vezetéknév = document.getElementById("vezetéknév").value;
    const keresztnév = document.getElementById("keresztnév").value;
    const otthoni = document.getElementById("otthoni").value;
    const mobil = document.getElementById("mobil").value;
    const email = document.getElementById("email").value;
    const lakcím = document.getElementById("lakcím").value;
    const születési_dátum = document.getElementById("születési_dátum").value;
    const megjegyzés = document.getElementById("megjegyzés").value;
    const csoportneve = document.getElementById("csoportneve").value;
    const csoportleírás = document.getElementById("csoportleírás").value;
    const névjegy = {
        vezetéknév,
        keresztnév,
        otthoni,
        mobil,
        email,
        lakcím,
        születési_dátum,
        megjegyzés,
        csoportneve,
        csoportleírás
    };
    Névjegyek.push(névjegy);
}