// function showTime() {
// 	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
// }
// showTime();
// setInterval(function () {
// 	showTime();
// }, 1000);

// 1. Kumpulan URL dalam satu variabel objek
const links = {
    ade: 'https://drive.google.com/drive/folders/1RNS-i--GUMTY4HflYYkgRoONAQoJa2bi?usp=drive_link',
    eka: 'https://drive.google.com/drive/folders/1z8hD_YWJiGR_gGrXaFelQm0IQgQSezDD?usp=drive_link',
    lis: 'https://drive.google.com/drive/folders/1kGUTYmyiyiHKfnFtx1iZLPaPGTqXnFhl?usp=drive_link',
    rika: 'https://drive.google.com/drive/folders/1QNg8_HG-osbpB-FBWKpg-xLHUC7c5Weg?usp=drive_link',
    nurna: 'https://drive.google.com/drive/folders/1p-FjTmF1zEb98lR1MkKrdgZED5egk_Tn?usp=drive_link',
    rubi: 'https://drive.google.com/drive/folders/1Ah1oN6i_95fIX7bDtmNTK1fIq55Wkwp0?usp=drive_link',
    anisa: 'https://drive.google.com/drive/folders/19fMeZ_q5PyW8x23xZZic4ux1AnUNXmYA?usp=drive_link',
    ika: 'https://drive.google.com/drive/folders/1-GujStMYWpWQroCQZcXMbmMZW5qKTVnN?usp=drive_link',
    nikmah: 'https://drive.google.com/drive/folders/1kKw9xZ8O4MHaVcEVz8t-eDOS1w7zhP3S?usp=drive_link',
    merry: 'https://drive.google.com/drive/folders/1kKw9xZ8O4MHaVcEVz8t-eDOS1w7zhP3S?usp=drive_link',
    yuli: 'https://drive.google.com/drive/folders/1EUhvi8Ndqtc9oaN3HCa1Aphvq1Vr983Q?usp=drive_link'
};

// 2. Ambil semua elemen button
const btnAde = document.getElementById('btnAde');
const btnEka = document.getElementById('btnEka');
const btnLis = document.getElementById('btnLis');
const btnRika = document.getElementById('btnRika');
const btnNurna = document.getElementById('btnNurna');
const btnRubi = document.getElementById('btnRubi');
const btnAnisa = document.getElementById('btnAnisa');
const btnIka = document.getElementById('btnIka');
const btnNikmah = document.getElementById('btnNikmah');
const btnMerry = document.getElementById('btnMerry');
const btnYuli = document.getElementById('btnYuli')

// 3. Pasang fungsi klik untuk masing-masing tombol
btnAde.addEventListener('click', () => {
    window.open(links.ade, '_blank');
});

btnEka.addEventListener('click', () => {
    window.open(links.eka, '_blank');
});

btnLis.addEventListener('click', () => {
    window.open(links.lis, '_blank');
});

btnRika.addEventListener('click', () => {
    window.open(links.rika, '_blank');
});

btnNurna.addEventListener('click', () => {
    window.open(links.nurna, '_blank');
});

btnRubi.addEventListener('click', () => {
    window.open(links.rubi, '_blank');
});

btnAnisa.addEventListener('click', () => {
    window.open(links.anisa, '_blank');
});

btnIka.addEventListener('click', () => {
    window.open(links.ika, '_blank');
});

btnNikmah.addEventListener('click', () => {
    window.open(links.nikmah, '_blank');
});

btnMerry.addEventListener('click', () => {
    window.open(links.merry, '_blank');
});

btnYuli.addEventListener('click', () => {
    window.open(links.yuli, '_blank');
});
