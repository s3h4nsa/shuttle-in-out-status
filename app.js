import { SHUTTLES } from './shuttles.js';
import { API_URL, TEMPLATE } from './config.js';

const container = document.getElementById('app');

let selectedShuttle = null;
let sending = false;
let lastMessage = "";

// FORMAT TIME
function getTime() {
  return new Date().toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

// BUILD MESSAGE
function buildMessage(s) {
  const time = getTime();

  return TEMPLATE
    .replace(/{name}/g, s.name)
    .replace(/{from}/g, s.from)
    .replace(/{time}/g, time)
    .replace(/{cat}/g, s.cat)
    .replace(/{id}/g, s.id)
    .replace(/{driver}/g, s.driver || "N/A");
}

// RENDER
function render() {
  const groups = {
    "Pickup Shuttle": [],
    "Branch Shuttle": [],
    "Shuttle": []
  };

  SHUTTLES.forEach(s => groups[s.cat].push(s));

  container.innerHTML = Object.keys(groups).map(cat => `
    <div class="cat" id="cat-${cat}">
      <div class="cat-header" onclick="toggleCat('${cat}')">
        ${cat}
        <span>${groups[cat].length}</span>
      </div>

      <div class="cat-body">
        ${groups[cat].map(s => `
          <div class="card ${getClass(s.cat)}"
               id="card-${s.id}"
               onclick="askConfirm('${s.id}')">
            <strong>${s.name}</strong><br>
            <small>${s.from}</small>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function getClass(cat) {
  if (cat.includes("Pickup")) return "pickup";
  if (cat.includes("Branch")) return "branch";
  return "shuttle";
}

// COLLAPSE
window.toggleCat = function(cat) {
  document.querySelectorAll('.cat').forEach(c => {
    if (c.id !== `cat-${cat}`) c.classList.add('collapsed');
  });
  document.getElementById(`cat-${cat}`).classList.toggle('collapsed');
};

// OPEN CONFIRM
window.askConfirm = function(id) {
  if (sending) return;

  selectedShuttle = SHUTTLES.find(s => s.id === id);

  // generate message at click time
  lastMessage = buildMessage(selectedShuttle);

  document.getElementById('confirmText').innerText =
    `Send message for ${selectedShuttle.name}?`;

  document.getElementById('previewBox').innerText = lastMessage;

  document.getElementById('confirmModal').classList.add('open');
};

window.closeModal = function() {
  document.getElementById('confirmModal').classList.remove('open');
};

// SEND
window.confirmSend = async function() {
  if (!selectedShuttle || sending) return;

  sending = true;

  const card = document.getElementById(`card-${selectedShuttle.id}`);
  card.classList.add('loading');

  closeModal();

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        shuttle: selectedShuttle,
        message: lastMessage
      })
    });

    showToast("Sent ✅");

  } catch {
    showToast("Failed ❌");
  }

  card.classList.remove('loading');
  sending = false;
};

// SEARCH FIX (NO OVERFLOW)
document.getElementById('search').addEventListener('input', e => {
  const q = e.target.value.toLowerCase();

  document.querySelectorAll('.card').forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(q)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// TOAST
function showToast(msg) {
  let t = document.querySelector('.toast');

  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }

  t.textContent = msg;
  t.classList.add('show');

  setTimeout(() => t.classList.remove('show'), 2500);
}

render();