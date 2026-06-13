// 1. Kumpulan URL dalam satu variabel objek
const links = {
  BIng1: "https://forms.gle/mLD8a8d1rTZojxsV7",
};

// 2. Ambil semua elemen button
const btnBIng1 = document.getElementById("btnBIng1");

// 3. Pasang fungsi klik untuk masing-masing tombol
btnBIng1.addEventListener("click", () => {
  window.open(links.BIng1, "_blank");
});
