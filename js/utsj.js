// 1. Kumpulan URL dalam satu variabel objek
const links = {
  Indo: "https://forms.gle/fjKTKMStHo3zcFAu5",
};

// 2. Ambil semua elemen button
const btnIndo = document.getElementById("btnIndo");

// 3. Pasang fungsi klik untuk masing-masing tombol
btnIndo.addEventListener("click", () => {
  window.open(links.Indo, "_blank");
});
