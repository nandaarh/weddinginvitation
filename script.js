// Fungsi untuk menghitung mundur ke tanggal acara
const countdown = () => {
    // Tanggal dan waktu acara (ganti sesuai kebutuhan)
    const eventDate = new Date("November 9, 2024 00:00:00").getTime();
    
    // Dapatkan waktu saat ini
    const now = new Date().getTime();
    
    // Hitung selisih waktu antara event dan waktu saat ini
    const gap = eventDate - now;

    // Konversi selisih waktu menjadi hari, jam, menit, dan detik
    const day = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((gap % (1000 * 60)) / 1000);

    // Tampilkan hitungan mundur di elemen .countdown
    document.querySelector('.countdown').innerText = 
        `Sisa ${day} hari ${hour} jam ${minute} menit ${second} detik lagi!`;
};

// Panggil fungsi countdown setiap 1 detik
countdown();
setInterval(countdown, 1000);
