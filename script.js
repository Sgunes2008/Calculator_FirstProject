var input = document.getElementById("sayi");
var islemBtns = document.querySelectorAll(".islem");
var sayiBtns = document.querySelectorAll(".sayi");

sayiBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        input.value += this.value;
    });
});

islemBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        input.value += this.value;
    });
});

document.getElementById("hesapla").addEventListener("click", function() {
    var sonuc = eval(input.value);
    document.getElementById("sonuc").innerHTML = sonuc;
});

document.getElementById("reset").addEventListener("click", function() {
    input.value = "";
    document.getElementById("sonuc").innerHTML = "";
});

// Klavye ile girişi dinle
document.addEventListener("keydown", function(event) {
    // Sayıları ve işlem butonlarını kontrol et
    if ((event.key >= "0" && event.key <= "9") || event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.key === "%" || event.key === ".") {
        input.value += event.key;
    }
    // Enter tuşu "=" işlevini gerçekleştirir
    if (event.key === "Enter") {
        var sonuc = eval(input.value);
        document.getElementById("sonuc").innerHTML = sonuc;
    }
    // Escape tuşu "C" işlevini gerçekleştirir
    if (event.key === "Escape") {
        input.value = "";
        document.getElementById("sonuc").innerHTML = "";
    }
});
