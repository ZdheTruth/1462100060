function sumHargaMakanan() {
    let e = document.getElementById("exampleFormControlSelect1");
    switch (e.selectedIndex) {
    case 0:
        document.getElementById("hargaMakanan").value = 0;
        break;
    case 1:
        document.getElementById("hargaMakanan").value = 12000;
        break;
    case 2:
        document.getElementById("hargaMakanan").value = 10000;
        break;
    case 3:
        document.getElementById("hargaMakanan").value = 11000;
        break;
    case 4:
        document.getElementById("hargaMakanan").value = 12000;
    }
    calSubtotal()
}
function sumHargaMinuman() {
    let e = document.getElementById("exampleFormControlSelect2");
    switch (e.selectedIndex) {
    case 0:
        document.getElementById("hargaMinuman").value = 0;
        break;
    case 1:
        document.getElementById("hargaMinuman").value = 3000;
        break;
    case 2:
        document.getElementById("hargaMinuman").value = 4000;
        break;
    case 3:
        document.getElementById("hargaMinuman").value = 5000;
        break;
    case 4:
        document.getElementById("hargaMinuman").value = 6000;
    }
    calSubtotal()
}
var sumPPN = ()=>{
    let e = document.getElementById("inputPPN")
      , a = document.getElementById("inputSubtotal");
    e.value = .11 * a.value
}
  , calSubtotal = ()=>{
    let e = document.getElementById("inputPorsiMakanan")
      , a = document.getElementById("inputPorsiMinuman")
      , t = document.getElementById("checkMinuman")
      , l = document.getElementById("hargaMakanan").value * e.value + (t.checked ? document.getElementById("hargaMinuman").value * a.value : 0);
    document.getElementById("inputSubtotal").value = l,
    sumPPN(),
    calTotal(),
    calKembali()
}
  , calTotal = ()=>{
    let e = document.getElementById("inputTotal")
      , a = document.getElementById("inputSubtotal")
      , t = document.getElementById("inputPPN");
    e.value = parseInt(a.value) + parseInt(t.value)
}
  , calKembali = ()=>{
    let e = document.getElementById("inputTotal")
      , a = document.getElementById("inputDibayar")
      , t = document.getElementById("inputKembali")
      , l = (isNaN(parseInt(a.value)) ? 0 : parseInt(a.value)) - parseInt(e.value);
    t.value = l
}
  , calCheckMinuman = ()=>{
    document.getElementById("checkMinuman"),
    calSubtotal()
}
;
function checkNumber(e) {
    var a = e || window.event
      , t = a.which || a.keyCode;
    return console.log(t),
    (!(t > 8) || !(t < 47) && !(t > 57)) && !a.shiftKey
}
window.addEventListener("load", ()=>{
    sumHargaMakanan(),
    sumHargaMinuman(),
    calSubtotal(),
    calKembali()
}
);

