const countdown = () => {
    const eventDate = new Date("November 9, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = eventDate - now;

    const day = Math.floor(gap / (1000 * 60 * 60 * 24));
    document.querySelector('.countdown').innerText = `Sisa ${day} hari lagi!`;
};

countdown();
setInterval(countdown, 1000 * 60 * 60 * 24);