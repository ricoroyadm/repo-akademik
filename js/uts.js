// 1. Kumpulan URL dalam satu variabel objek
const links = {
  Indo: "https://forms.gle/fjKTKMStHo3zcFAu5",
  Makro: "https://forms.gle/gmiSwBgyXKNVNm3f8",
  Mtk: "https://forms.gle/47Qg4jYStEAqMY1L6",
  Rsk: "https://forms.gle/16EfeiZjC7QV26Vr6",
  Apl: "https://forms.gle/aRXTMxf2GbidSAqJ9",
  IAD: "https://forms.gle/UPwKbV2CmfYeR1qS8",
  Biaya: "https://forms.gle/wGfpeD64EqB9SWSA7",
  MSDM: "https://forms.gle/twbMRd7Q4RH6JpSG8",
  BisInt: "https://forms.gle/Kn7prAoxfZmtrnNP8",
  RO: "https://drive.google.com/drive/folders/19fMeZ_q5PyW8x23xZZic4ux1AnUNXmYA?usp=drive_link",
  MLB: "https://drive.google.com/drive/folders/1ob-cMTxgyyIuLNapPStQZnlbO3PYHhVW?usp=drive_link",
  Akm: "https://forms.gle/DyRzAMfTBaFsayiQ6",
  AspekHKM: "https://drive.google.com/drive/folders/1OPibDiUvqQpz7yLsRS6X6nG-j6IeH5Iy?usp=drive_link",
  BLK: "https://drive.google.com/drive/folders/1kKw9xZ8O4MHaVcEVz8t-eDOS1w7zhP3S?usp=drive_link",
  Mutu: "https://forms.gle/Gs9zazEEYRBF7KGv6",
  EEK: "https://drive.google.com/drive/folders/13pMIW5OATFhr8paHr-GjQQbqnE3saIXZ?usp=drive_link",
  StrP: "https://drive.google.com/drive/folders/1EUhvi8Ndqtc9oaN3HCa1Aphvq1Vr983Q?usp=drive_link",
  MPar: "https://forms.gle/dsVuuZgybiZy94hv7",
  MKI: "https://drive.google.com/drive/folders/1vYxfPzUAdN7UnIfpP8eQSAVClk5VUPJ9?usp=drive_link",
  Smn: "https://drive.google.com/drive/folders/12THmQcnr3gSqb8cX3SPLrNpCVnXbbb5W?usp=drive_link",
  kurnia: "https://drive.google.com/drive/folders/15vERGCruo9SwLo_9ZjFQ504g3Ka7sABM?usp=drive_link",
  AisyahM: "https://drive.google.com/drive/folders/1K0W4VdmAmxhqIKcCAvsnR6Hu7MayUAd_?usp=drive_link",
  AndrikM: "https://drive.google.com/drive/folders/1r_J59IYhFNdzWOF99O-jOPpn2MPiVYt4?usp=drive_link",
  AyiM: "https://drive.google.com/drive/folders/1Ka_pHKJ_cfKcjEBqQzBjr6px7bxFbQzk?usp=drive_link",
  BasukiM: "https://drive.google.com/drive/folders/10A3AmBv_NBKBLV3m6DMht5J9QKDALMn5?usp=drive_link",
  ChairilM: "https://drive.google.com/drive/folders/12npqwbi3N9TnbPJD3HApKVYx8iLyjHvx?usp=drive_link",
  DanangM: "https://drive.google.com/drive/folders/13e9XyyHJEmR5dlaoUKy2so83hNErDOi4?usp=drive_link",
  DennyM: "https://drive.google.com/drive/folders/15ywZIEyFyj8anio3wtKAi94BLnO6EQob?usp=drive_link",
  NuryadiM: "https://drive.google.com/drive/folders/11l8F7aeZ19oIhNtStrkYoL6zi2xiTWiS?usp=drive_link",
  OnyM: "https://drive.google.com/drive/folders/1OsHWI_uCCoNm93X8I2w-Oe9vOYUIVGP1?usp=drive_link",
  BinarM: "https://drive.google.com/drive/folders/1a0VRt0ijrcv3b2awPZmhrHl1OdQvRNwb?usp=drive_link",
  PriyoM: "https://drive.google.com/drive/folders/13Y2Fsm4YpsEThxkfwyTzLQQujcVnDipB?usp=drive_link",
  IndriyaM: "https://drive.google.com/drive/folders/1-hh4dDvxwzAzizXN5U8ZVNhqq-eb1-ni?usp=drive_link",
  IntanM: "https://drive.google.com/drive/folders/12hsMd0ISxgYMZAdcbaRWMjDdfFbORNgI?usp=drive_link",
  KomarunM: "https://drive.google.com/drive/folders/1UWHRhxtY3W9M0gjw3e9GVU5w6lHvEEd5?usp=drive_link",
  LelliM: "https://drive.google.com/drive/folders/1lpcUFiO2-M-K-WrTJDJJ3a258h_x7_a0?usp=drive_link",
  MundariM: "https://drive.google.com/drive/folders/18nlcg6zKt4Qg6ZojcPEtlMPQvMJFwS2K?usp=drive_link",
  FaridaM: "https://drive.google.com/drive/folders/1yIgCPuKcFJytukg-Y643--AWRyiQsoc2?usp=drive_link",
  NoeM: "https://drive.google.com/drive/folders/1AVrlC6eAEqNEQOKLXrQrl2Kbqay_HnEL?usp=drive_link",
  SisM: "https://drive.google.com/drive/folders/1tZUHgnNoafwhNpwHPeCRv9Jqbz5YTvJX?usp=drive_link",
  SyamM: "https://drive.google.com/drive/folders/1W4dSf4aWPbzsDhTzCS-3fdC4mjH2MM5s?usp=drive_link",
};

// 2. Ambil semua elemen button
const btnIndo = document.getElementById("btnIndo");
const btnEka = document.getElementById("btnEka");
const btnLis = document.getElementById("btnLis");
const btnRsk = document.getElementById("btnRsk");
const btnRika = document.getElementById("btnRika");
const btnRikaM = document.getElementById("btnRikaM");
const btnBiaya = document.getElementById("btnBiaya");
const btnRubi = document.getElementById("btnRubi");
const btnBisInt = document.getElementById("btnBisInt");
const btnAnisa = document.getElementById("btnAnisa");
const btnAnisaM = document.getElementById("btnAnisaM");
const btnAkM = document.getElementById("btnAkM");
const btnIkaM = document.getElementById("btnIkaM");
const btnNikmah = document.getElementById("btnNikmah");
const btnMerry = document.getElementById("btnMerry");
const btnMerryM = document.getElementById("btnMerryM");
const btnYuli = document.getElementById("btnYuli");
const btnRayhan = document.getElementById("btnRayhan");
const btnSuud = document.getElementById("btnSuud");
const btnNico = document.getElementById("btnNico");
const btnKurnia = document.getElementById("btnKurnia");
const btnAisyahM = document.getElementById("btnAisyahM");
const btnAndrikM = document.getElementById("btnAndrikM");
const btnAyiM = document.getElementById("btnAyiM");
const btnBasukiM = document.getElementById("btnBasukiM");
const btnChairilM = document.getElementById("btnChairilM");
const btnDanangM = document.getElementById("btnDanangM");
const btnDennyM = document.getElementById("btnDennyM");
const btnNuryadiM = document.getElementById("btnNuryadiM");
const btnOnyM = document.getElementById("btnOnyM");
const btnBinarM = document.getElementById("btnBinarM");
const btnPriyoM = document.getElementById("btnPriyoM");
const btnIndriyaM = document.getElementById("btnIndriyaM");
const btnIntanM = document.getElementById("btnIntanM");
const btnKomarunM = document.getElementById("btnKomarunM");
const btnLelliM = document.getElementById("btnLelliM");
const btnMundariM = document.getElementById("btnMundariM");
const btnFaridaM = document.getElementById("btnFaridaM");
const btnNoeM = document.getElementById("btnNoeM");
const btnSisM = document.getElementById("btnSisM");
const btnSyamM = document.getElementById("btnSyamM");

// 3. Pasang fungsi klik untuk masing-masing tombol
btnIndo.addEventListener("click", () => {
  window.open(links.Indo, "_blank");
});

btnEka.addEventListener("click", () => {
  window.open(links.eka, "_blank");
});

btnLis.addEventListener("click", () => {
  window.open(links.lis, "_blank");
});

btnRsk.addEventListener("click", () => {
  window.open(links.Rsk, "_blank");
});

btnRika.addEventListener("click", () => {
  window.open(links.rika, "_blank");
});

btnRikaM.addEventListener("click", () => {
  window.open(links.rikaM, "_blank");
});

btnBiaya.addEventListener("click", () => {
  window.open(links.Biaya, "_blank");
});

btnRubi.addEventListener("click", () => {
  window.open(links.rubi, "_blank");
});

btnBisInt.addEventListener("click", () => {
  window.open(links.BisInt, "_blank");
});

btnAnisa.addEventListener("click", () => {
  window.open(links.anisa, "_blank");
});

btnAnisaM.addEventListener("click", () => {
  window.open(links.anisaM, "_blank");
});

btnAkM.addEventListener("click", () => {
  window.open(links.AkM, "_blank");
});

btnIkaM.addEventListener("click", () => {
  window.open(links.ikaM, "_blank");
});

btnNikmah.addEventListener("click", () => {
  window.open(links.nikmah, "_blank");
});

btnMerry.addEventListener("click", () => {
  window.open(links.merry, "_blank");
});

btnMerryM.addEventListener("click", () => {
  window.open(links.merryM, "_blank");
});

btnYuli.addEventListener("click", () => {
  window.open(links.yuli, "_blank");
});

btnRayhan.addEventListener("click", () => {
  window.open(links.rayhan, "_blank");
});

btnSuud.addEventListener("click", () => {
  window.open(links.suud, "_blank");
});

btnNico.addEventListener("click", () => {
  window.open(links.nico, "_blank");
});

btnKurnia.addEventListener("click", () => {
  window.open(links.kurnia, "_blank");
});

btnAisyahM.addEventListener("click", () => {
  window.open(links.AisyahM, "_blank");
});

btnAndrikM.addEventListener("click", () => {
  window.open(links.AndrikM, "_blank");
});

btnAyiM.addEventListener("click", () => {
  window.open(links.AyiM, "_blank");
});

btnBasukiM.addEventListener("click", () => {
  window.open(links.BasukiM, "_blank");
});

btnChairilM.addEventListener("click", () => {
  window.open(links.ChairilM, "_blank");
});

btnDanangM.addEventListener("click", () => {
  window.open(links.DanangM, "_blank");
});

btnDennyM.addEventListener("click", () => {
  window.open(links.DennyM, "_blank");
});

btnNuryadiM.addEventListener("click", () => {
  window.open(links.NuryadiM, "_blank");
});

btnOnyM.addEventListener("click", () => {
  window.open(links.OnyM, "_blank");
});

btnBinarM.addEventListener("click", () => {
  window.open(links.BinarM, "_blank");
});

btnPriyoM.addEventListener("click", () => {
  window.open(links.PriyoM, "_blank");
});

btnIndriyaM.addEventListener("click", () => {
  window.open(links.IndriyaM, "_blank");
});

btnIntanM.addEventListener("click", () => {
  window.open(links.IntanM, "_blank");
});

btnKomarunM.addEventListener("click", () => {
  window.open(links.KomarunM, "_blank");
});

btnLelliM.addEventListener("click", () => {
  window.open(links.LelliM, "_blank");
});

btnMundariM.addEventListener("click", () => {
  window.open(links.MundariM, "_blank");
});

btnFaridaM.addEventListener("click", () => {
  window.open(links.FaridaM, "_blank");
});

btnNoeM.addEventListener("click", () => {
  window.open(links.NoeM, "_blank");
});

btnSisM.addEventListener("click", () => {
  window.open(links.SisM, "_blank");
});

btnSyamM.addEventListener("click", () => {
  window.open(links.SyamM, "_blank");
});
