// Clock
setInterval(()=>{document.getElementById('clock').textContent=new Date().toLocaleTimeString()},1000);

// Render shuttle categories & shuttles
const container = document.getElementById('categories-container');

categories.forEach(cat=>{
  const catDiv = document.createElement('div');
  catDiv.className='category';
  catDiv.innerHTML=`<div class="category-header">${cat.name}</div><div class="shuttle-grid" id="cat-${cat.id}"></div>`;
  container.appendChild(catDiv);

  const grid = catDiv.querySelector('.shuttle-grid');
  shuttles.filter(s=>s.category===cat.id).forEach(sh=>{
    const card=document.createElement('div');
    card.className='sh-card';
    card.innerHTML=`
      <div class="sh-name">${sh.name}</div>
      <div class="sh-info">From: ${sh.from}</div>
      <button class="sh-btn">Send WhatsApp</button>`;
    grid.appendChild(card);

    const btn = card.querySelector('.sh-btn');
    btn.addEventListener('click',()=>{
      const time=new Date().toLocaleTimeString();
      const msg=sh.template.replace('{name}',sh.name).replace('{from}',sh.from).replace('{time}',time);
      openConfirmModal(msg);
    });
  });
});

// Modal functions
function openConfirmModal(msg){
  document.getElementById('confirm-msg').value=msg;
  document.getElementById('confirm-modal').classList.add('open');
  const sendBtn=document.getElementById('confirm-send-btn');
  sendBtn.onclick=()=>{ sendWhatsApp(msg); closeOverlay('confirm-modal'); }
}
function closeOverlay(id){ document.getElementById(id).classList.remove('open'); }

// Open WhatsApp with message
function sendWhatsApp(msg){
  const url=`https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(url,'_blank');
}