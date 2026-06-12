// 1. Kumpulan URL dalam satu variabel objek
const links = {
  PMnj: "https://forms.gle/Aa6Cnt5r3Ty1FrtP6",
  Stat2: "https://forms.gle/arH8wHQE6zZgVoDz6",
  EK: "https://forms.gle/nQrxSJBga3Vxgz2d8",
  MK2: "https://forms.gle/fiUQxfPNubrvNH7x9",
  MetPen: "https://forms.gle/3S8eCkbqNrLVD9us6",
  POrg: "https://forms.gle/AZF5HSgUBYKKgvc16",
  MPJ: "https://forms.gle/nEM2aukQGaS9kHxf9",
};

// 2. Ambil semua elemen button
const btnPMnj = document.getElementById("btnPMnj");
const btnStat2 = document.getElementById("btnStat2");
const EK = document.getElementById("EK");
const MK2 = document.getElementById("MK2");
const MetPen = document.getElementById("MetPen");
const POrg = document.getElementById("POrg");
const MPJ = document.getElementById("MPJ");

// 3. Pasang fungsi klik untuk masing-masing tombol
btnPMnj.addEventListener("click", () => {
  window.open(links.PMnj, "_blank");
});

btnStat2.addEventListener("click", () => {
  window.open(links.Stat2, "_blank");
});

btnEK.addEventListener("click", () => {
  window.open(links.EK, "_blank");
});

btnMK2.addEventListener("click", () => {
  window.open(links.MK2, "_blank");
});

btnMetPen.addEventListener("click", () => {
  window.open(links.MetPen, "_blank");
});

btnPOrg.addEventListener("click", () => {
  window.open(links.POrg, "_blank");
});

btnMPJ.addEventListener("click", () => {
  window.open(links.MPJ, "_blank");
});
