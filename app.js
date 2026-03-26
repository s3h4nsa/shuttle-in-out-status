const container = document.getElementById('categories-container');

function renderCategories(){
  container.innerHTML = '';

  categories.forEach(cat=>{
    const catEl = document.createElement('div');
    catEl.classList.add('cat-section');

    // HEADER
    const header = document.createElement('div');
    header.classList.add('cat-header');
    header.innerHTML = `
      <div class="cat-title">${cat.name}</div>
      <div class="cat-arrow">&#9660;</div>
    `;
    catEl.appendChild(header);

    // GRID
    const shuttleGrid = document.createElement('div');
    shuttleGrid.classList.add('shuttle-grid');

    shuttles
      .filter(sh=>sh.category===cat.id)
      .forEach(sh=>{
        const shEl = document.createElement('div');
        shEl.classList.add('sh-card');

        shEl.innerHTML = `
          <div class="sh-name">${sh.name}</div>
        `;

        // 🔥 MAKE WHOLE CARD CLICKABLE
        shEl.addEventListener('click', ()=> previewMsg(sh.id));

        shuttleGrid.appendChild(shEl);
      });

    catEl.appendChild(shuttleGrid);

    // ✅ MODERN TOGGLE (smooth collapse)
    header.addEventListener('click', ()=>{
      catEl.classList.toggle('collapsed');
    });

    container.appendChild(catEl);
  });
}

// ─────────────────────────────
// MESSAGE PREVIEW
// ─────────────────────────────
function previewMsg(shId){
  const sh = shuttles.find(s=>s.id===shId);

  // ✅ 12H FORMAT WITH AM/PM
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2,'0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  const timestamp = `${hour12}:${minutes} ${ampm}`;

  const msg = sh.template
    .replace('{name}', sh.name)
    .replace('{time}', timestamp);

  const textarea = document.getElementById('confirm-msg');
  textarea.value = msg;

  openOverlay('confirm-modal');

  const sendBtn = document.getElementById('confirm-send-btn');
  sendBtn.onclick = ()=>{
    const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    window.open(url,'_blank');
  };
}

// ─────────────────────────────
// COPY BUTTON FEEDBACK
// ─────────────────────────────
document.getElementById('copy-msg-btn').addEventListener('click', ()=>{
  const textarea = document.getElementById('confirm-msg');

  navigator.clipboard.writeText(textarea.value).then(()=>{
    const btn = document.getElementById('copy-msg-btn');
    const original = btn.innerText;

    btn.innerText = 'Copied ✓';
    btn.style.background = '#27ae60';
    btn.style.color = '#fff';

    setTimeout(()=>{
      btn.innerText = original;
      btn.style.background = '';
      btn.style.color = '';
    },1500);
  });
});

renderCategories();