// 1. Kumpulan URL dalam satu variabel objek
const links = {
  BIng1: "https://forms.gle/mLD8a8d1rTZojxsV7",
  Mikro: "https://forms.gle/NTWvZKBmjpA2q7mU8",
  SIM: "https://forms.gle/R532PSvU1mm46p2G7",
  Pjk: "https://forms.gle/xYbTXj51vw74p88X9",
  MS: "https://forms.gle/PsszuK39RRZVWyh77",
  PKns: "https://forms.gle/Xh58zHRGMg1Cd7ji7",
  MIP: "https://forms.gle/tNAEyzYNeSCTb71w9",
  PAg: "https://forms.gle/iWu6jBgiopApaMPU6",
  BIng2: "https://forms.gle/PstG9nJSBfPBgKd5A",
  PKn: "https://forms.gle/NFFT5FAGYPd6X5LC8",
  MK1: "https://forms.gle/du5gtEdAMyEXqPcL9",
  ISD: "https://forms.gle/ekvhggrfweyZydMr9",
  EM: "https://forms.gle/UusosYUnn2fLGwpo6",
  PPSDM: "https://forms.gle/4hjWJcAMTbYL5Kgy5",
  KssMnj: "https://forms.gle/LXZNCdi1Qnd5ELuG9",
  PPO: "https://forms.gle/jBtyVvaotEk1CuXo6",
};

// 2. Ambil semua elemen button
const btnBIng1 = document.getElementById("btnBIng1");
const btnMikro = document.getElementById("btnMikro");
const btnSIM = document.getElementById("btnSIM");
const btnPjk = document.getElementById("btnPjk");
const btnMS = document.getElementById("btnMS");
const btnPKns = document.getElementById("btnPKns");
const btnMIP = document.getElementById("btnMIP");
const btnPAg = document.getElementById("btnPAg");
const btnBIng2 = document.getElementById("btnBIng2");
const btnPKn = document.getElementById("btnPKn");
const btnMK1 = document.getElementById("btnMK1");
const btnISD = document.getElementById("btnISD");
const btnEM = document.getElementById("btnEM");
const btnPPSDM = document.getElementById("btnPPSDM");
const btnKssMnj = document.getElementById("btnKssMnj");
const btnPPO = document.getElementById("btnPPO");

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

btnPAg.addEventListener("click", () => {
  window.open(links.PAg, "_blank");
});

btnBIng2.addEventListener("click", () => {
  window.open(links.BIng2, "_blank");
});

btnPKn.addEventListener("click", () => {
  window.open(links.PKn, "_blank");
});

btnMK1.addEventListener("click", () => {
  window.open(links.MK1, "_blank");
});

btnISD.addEventListener("click", () => {
  window.open(links.ISD, "_blank");
});

btnEM.addEventListener("click", () => {
  window.open(links.EM, "_blank");
});

btnPPSDM.addEventListener("click", () => {
  window.open(links.PPSDM, "_blank");
});

btnPPO.addEventListener("click", () => {
  window.open(links.PPO, "_blank");
});
