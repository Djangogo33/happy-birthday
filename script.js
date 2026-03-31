document.getElementById('btnCreate').addEventListener('click', () => {
    const name = document.getElementById('inputName').value || 'Emma';
    const msg = document.getElementById('inputMsg').value;
    
    document.getElementById('cardName').textContent = name;
    document.getElementById('cardMsg').textContent = msg;
    
    document.getElementById('creatorPanel').classList.add('hidden');
    document.getElementById('cardView').classList.remove('hidden');
    document.getElementById('cardView').classList.add('flex');
    document.getElementById('cardView').style.background = 'linear-gradient(135deg, #1e1b4b, #701a75)';
    
    launchConfetti();
});

document.getElementById('btnBack').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('cardView').classList.add('hidden');
    document.getElementById('cardView').classList.remove('flex');
    document.getElementById('creatorPanel').classList.remove('hidden');
});

function launchConfetti() {
    const layer = document.getElementById('confettiLayer');
    layer.innerHTML = '';
    const colors = ['#6366f1', '#a78bfa', '#f472b6', '#818cf8'];
    for (let i = 0; i < 50; i++) {
        const el = document.createElement('div');
        el.className = 'confetti-piece';
        el.style.left = Math.random() * 100 + '%';
        el.style.bottom = '-10px';
        el.style.background = colors[Math.floor(Math.random() * colors.length)];
        el.style.animationDelay = Math.random() * 2 + 's';
        layer.appendChild(el);
    }
}