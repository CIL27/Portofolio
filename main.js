function goHome() {
  ['profile-page', 'skills-page', 'projects-page'].forEach(id => {
    document.getElementById(id).classList.remove('active');
  });
  ['profile', 'skills', 'projects'].forEach(n => {
    const el = document.getElementById('nav-' + n);
    if (el) el.classList.remove('active');
  });
  document.getElementById('home-page').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showPage(page) {
  document.getElementById('home-page').style.display = 'none';
  ['profile-page', 'skills-page', 'projects-page'].forEach(id => {
    document.getElementById(id).classList.remove('active');
  });
  ['profile', 'skills', 'projects'].forEach(n => {
    const el = document.getElementById('nav-' + n);
    if (el) el.classList.remove('active');
  });
  document.getElementById(page + '-page').classList.add('active');
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}
