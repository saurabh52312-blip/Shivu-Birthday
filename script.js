const intro = document.getElementById('intro');
const site = document.getElementById('birthday-site');
const openButton = document.getElementById('open-surprise');
const music = document.getElementById('birthday-music');
const musicControl = document.getElementById('music-control');
const musicToggle = document.getElementById('music-toggle');
const heartLayer = document.getElementById('heart-layer');
let musicPlaying = false;
let heartTimer = null;

openButton.addEventListener('click', async () => {
  intro.classList.add('opening');
  intro.style.transition = 'opacity .55s ease, transform .55s ease';
  intro.style.opacity = '0';
  intro.style.transform = 'scale(.98)';
  window.setTimeout(() => {
    intro.hidden = true;
    site.hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    startHearts();
  }, 500);

  // Browsers allow audio after a direct user gesture. If no MP3 has been added,
  // the page still works; the music control offers a way to retry.
  try {
    await music.play();
    musicPlaying = true;
    updateMusicButton();
    musicControl.hidden = false;
  } catch (error) {
    musicControl.hidden = false;
    musicPlaying = false;
    updateMusicButton();
  }
});

musicToggle.addEventListener('click', async () => {
  if (musicPlaying) {
    music.pause();
    musicPlaying = false;
  } else {
    try {
      await music.play();
      musicPlaying = true;
    } catch (error) {
      musicPlaying = false;
      musicToggle.querySelector('span').textContent = 'Add MP3';
    }
  }
  updateMusicButton();
});

function updateMusicButton() {
  musicToggle.setAttribute('aria-label', musicPlaying ? 'Pause background music' : 'Play background music');
  musicToggle.querySelector('span').textContent = musicPlaying ? 'Music on' : 'Play music';
}

function startHearts() {
  if (heartTimer) return;
  heartTimer = window.setInterval(() => {
    if (document.hidden) return;
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = ['♥', '♡', '✧', '💗'][Math.floor(Math.random() * 4)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${14 + Math.random() * 18}px`;
    heart.style.animationDuration = `${5 + Math.random() * 5}s`;
    heartLayer.appendChild(heart);
    window.setTimeout(() => heart.remove(), 10500);
  }, 650);
}

document.querySelectorAll('[data-scroll]').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById(button.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelectorAll('.reason-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('revealed');
    card.setAttribute('aria-expanded', card.classList.contains('revealed') ? 'true' : 'false');
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
document.querySelectorAll('.photo-card').forEach(card => {
  card.addEventListener('click', () => {
    lightboxImage.src = card.dataset.full;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('close-lightbox').focus();
  });
});
function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = '';
  document.body.style.overflow = '';
}
document.getElementById('close-lightbox').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
});

document.getElementById('wish-button').addEventListener('click', () => {
  const message = document.getElementById('final-message');
  message.hidden = false;
  document.getElementById('wish-button').textContent = 'A wish sent with love 💗';
  document.getElementById('wish-button').disabled = true;
  for (let i = 0; i < 24; i++) {
    window.setTimeout(() => {
      const heart = document.createElement('span');
      heart.className = 'floating-heart';
      heart.textContent = ['♥', '♡', '✧', '💗'][i % 4];
      heart.style.left = `${10 + Math.random() * 80}%`;
      heart.style.fontSize = `${18 + Math.random() * 18}px`;
      heart.style.animationDuration = `${3 + Math.random() * 3}s`;
      heartLayer.appendChild(heart);
      window.setTimeout(() => heart.remove(), 6500);
    }, i * 70);
  }
  message.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
