// 1. Kumpulan URL dalam satu variabel objek
const links = {
  BIng1: "https://forms.gle/mLD8a8d1rTZojxsV7",
  Mikro: "https://forms.gle/NTWvZKBmjpA2q7mU8",
  SIM: "https://forms.gle/R532PSvU1mm46p2G7",
  Pjk: "https://forms.gle/xYbTXj51vw74p88X9",
  MS: "https://forms.gle/PsszuK39RRZVWyh77",
  PKns: "https://forms.gle/Xh58zHRGMg1Cd7ji7",
  MIP: "https://forms.gle/tNAEyzYNeSCTb71w9",
};

// 2. Ambil semua elemen button
const btnBIng1 = document.getElementById("btnBIng1");
const btnMikro = document.getElementById("btnMikro");
const btnSIM = document.getElementById("btnSIM");
const btnPjk = document.getElementById("btnPjk");
const btnMS = document.getElementById("btnMS");
const btnPKns = document.getElementById("btnPKns");
const btnMIP = document.getElementById("btnMIP");

// 3. Pasang fungsi klik untuk masing-masing tombol
btnBIng1.addEventListener("click", () => {
  window.open(links.BIng1, "_blank");
});

btnMikro.addEventListener("click", () => {
  window.open(links.Mikro, "_blank");
});

btnSIM.addEventListener("click", () => {
  window.open(links.SIM, "_blank");
});

btnPjk.addEventListener("click", () => {
  window.open(links.Pjk, "_blank");
});

btnMS.addEventListener("click", () => {
  window.open(links.MS, "_blank");
});

btnPKns.addEventListener("click", () => {
  window.open(links.PKns, "_blank");
});

btnMIP.addEventListener("click", () => {
  window.open(links.MIP, "_blank");
});
