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
	nurna: 'https://drive.google.com/drive/folders/1p-FjTmF1zEb98lR1MkKrdgZED5egk_Tn?usp=drive_link'
};

// 2. Ambil semua elemen button
const btnAde = document.getElementById('btnAde');
const btnEka = document.getElementById('btnEka');
const btnLis = document.getElementById('btnLis');
const btnRika = document.getElementById('btnRika');
const btnNurna = document.getElementById('btnNurna');

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