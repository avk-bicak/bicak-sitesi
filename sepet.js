let sepet = [];

const sepeteEkleButonlari = document.querySelectorAll(".product-card button");
const sepetListesi = document.getElementById("sepet-listesi");
const toplamFiyat = document.getElementById("toplam");

sepeteEkleButonlari.forEach(button => {
    button.addEventListener("click", function() {
        const kart = button.parentElement;
        const isim = kart.querySelector("h3").innerText;
        const fiyatMetin = kart.querySelector(".price").innerText.replace("₺", "");
        const fiyat = parseFloat(fiyatMetin);

        sepet.push({ isim, fiyat });
        sepetiGuncelle();
    });
});

function sepetiGuncelle() {
    sepetListesi.innerHTML = "";
    let toplam = 0;

    sepet.forEach(urun => {
        const li = document.createElement("li");
        li.textContent = `${urun.isim} - ₺${urun.fiyat}`;
        sepetListesi.appendChild(li);

        toplam += urun.fiyat;
    });

    toplamFiyat.textContent = `Toplam: ₺${toplam.toFixed(2)}`;
}
