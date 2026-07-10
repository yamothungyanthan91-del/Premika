// Music Toggle
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
let musicPlaying = false;
musicToggle.addEventListener('click', () => {
    if (musicPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('active');
        musicPlaying = false;
    } else {
        bgMusic.play().catch(err => console.log('Audio playback blocked:', err));
        musicToggle.classList.add('active');
        musicPlaying = true;
    }
});
// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
document.querySelectorAll('.fade-in-section').forEach(element => {
    observer.observe(element);
});
// Smooth Scroll for Scroll Indicator
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    document.getElementById('drink').scrollIntoView({ behavior: 'smooth' });
});
