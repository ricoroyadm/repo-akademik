// 1. Kumpulan URL dalam satu variabel objek
const links = {
  Indoj: "https://forms.gle/fjKTKMStHo3zcFAu5",
};

// 2. Ambil semua elemen button
const btnIndoj = document.getElementById("btnIndoj");

// 3. Pasang fungsi klik untuk masing-masing tombol
btnIndoj.addEventListener("click", () => {
  window.open(links.Indoj, "_blank");
});
