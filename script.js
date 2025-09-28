function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function toggleGlow(element) {
    element.classList.toggle('active');
}

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    initDrops();
}

function initDrops() {
    const columns = canvas.width / fontSize;
    drops = Array(Math.floor(columns)).fill(1);
}

let drops = [];
const binaryChars = '01';
const fontSize = 12;
resizeCanvas();

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00BFFF';
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
        const text = binaryChars[Math.floor(Math.random() * binaryChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height / window.devicePixelRatio && Math.random() > 0.99) {
            drops[i] = 0;
        }
        if (Math.random() > 0.3) {
            drops[i] += 0.5; 
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    draw();
}
animate();

window.addEventListener('resize', () => {
    resizeCanvas();
    draw();
});

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
