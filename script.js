
// Mobile menu
const burger = document.getElementById('burger');
const nav = document.getElementById('site-nav');
if (burger) {
  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}
// Year
const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
// Avatar upload
function setupAvatar(inputId, imgId){
  const input = document.getElementById(inputId);
  const img = document.getElementById(imgId);
  if(!input || !img) return;
  const trigger = document.querySelector(`.upload[data-input="${inputId}"]`);
  trigger?.addEventListener('click', ()=> input.click());
  input.addEventListener('change', (e)=>{
    const file = e.target.files?.[0]; if(!file) return;
    const r = new FileReader(); r.onload = ev => img.src = ev.target.result; r.readAsDataURL(file);
  });
}
setupAvatar('avatarTogether','imgTogether');
// Gallery upload
const refBtn = document.getElementById('refBtn');
const refInput = document.getElementById('refInput');
const gallery = document.getElementById('gallery');
if (refBtn && refInput && gallery){
  refBtn.addEventListener('click', ()=> refInput.click());
  refInput.addEventListener('change', (e)=>{
    const files = Array.from(e.target.files || []);
    files.forEach(file => {
      const r = new FileReader();
      r.onload = ev => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        const img = document.createElement('img');
        img.src = ev.target.result; img.alt = 'Referenz';
        tile.appendChild(img);
        gallery.prepend(tile);
      };
      r.readAsDataURL(file);
    });
  });
}
