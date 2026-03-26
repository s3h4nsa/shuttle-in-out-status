const container = document.getElementById('categories-container');

function renderCategories(){
  container.innerHTML = '';
  categories.forEach(cat=>{
    const catEl = document.createElement('div');
    catEl.classList.add('cat-section');

    const header = document.createElement('div');
    header.classList.add('cat-header');
    header.innerHTML = `
      <div class="cat-title">${cat.name}</div>
      <div>&#9660;</div>
    `;
    catEl.appendChild(header);

    const shuttleGrid = document.createElement('div');
    shuttleGrid.classList.add('shuttle-grid');

    shuttles.filter(sh=>sh.category===cat.id).forEach(sh=>{
      const shEl = document.createElement('div');
      shEl.classList.add('sh-card');
      shEl.innerHTML = `
        <div class="sh-name">${sh.name}</div>
        <button class="btn-icon" onclick="previewMsg(${sh.id})">Send</button>
      `;
      shuttleGrid.appendChild(shEl);
    });

    catEl.appendChild(shuttleGrid);

    header.addEventListener('click', ()=>{
      if(shuttleGrid.style.display==='none'){
        shuttleGrid.style.display='grid';
        header.querySelector('div:last-child').innerHTML='&#9660;';
      } else {
        shuttleGrid.style.display='none';
        header.querySelector('div:last-child').innerHTML='&#9654;';
      }
    });

    container.appendChild(catEl);
  });
}

function previewMsg(shId){
  const sh = shuttles.find(s=>s.id===shId);
  const timestamp = new Date().toLocaleTimeString();
  const msg = sh.template.replace('{name}', sh.name).replace('{time}', timestamp);

  const textarea = document.getElementById('confirm-msg');
  textarea.value = msg;
  openOverlay('confirm-modal');

  const sendBtn = document.getElementById('confirm-send-btn');
  sendBtn.onclick = ()=>{
    const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    window.open(url,'_blank');
  };
}

// Copy button with feedback
document.getElementById('copy-msg-btn').addEventListener('click', ()=>{
  const textarea = document.getElementById('confirm-msg');
  navigator.clipboard.writeText(textarea.value).then(()=>{
    const btn = document.getElementById('copy-msg-btn');
    const original = btn.innerText;
    btn.innerText = 'Message Copied';
    setTimeout(()=> btn.innerText = original,1500);
  });
});

renderCategories();