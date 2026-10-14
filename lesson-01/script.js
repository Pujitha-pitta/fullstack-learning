
// Animated job title
const typingElement = document.getElementById("typing");
const titles = [
    "Computer Science Graduate",
    "Software Developer",
    "AI & Machine Learning Enthusiast"
];

let titleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeTitle() {
    const currentTitle = titles[titleIndex];

    typingElement.textContent = currentTitle.slice(0, characterIndex);

    if (!deleting) {
        characterIndex++;

        if (characterIndex > currentTitle.length) {
            deleting = true;
            setTimeout(typeTitle, 1400);
            return;
        }
    } else {
        characterIndex--;

        if (characterIndex < 0) {
            characterIndex = 0;
            deleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }
    }

    setTimeout(typeTitle, deleting ? 40 : 85);
}

typeTitle();

// Floating 3D-style polygon particles
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let width;
let height;
let particles = [];

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    const count = Math.min(30, Math.max(12, Math.floor(width / 45)));

    particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 7 + Math.random() * 18,
        speedX: (Math.random() - 0.5) * 0.45,
        speedY: (Math.random() - 0.5) * 0.45,
        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        sides: 5 + Math.floor(Math.random() * 3),
        color: Math.random() > 0.5
            ? "rgba(70, 157, 139, 0.48)"
            : "rgba(142, 49, 64, 0.62)"
    }));
}

function drawParticle(particle) {
    const points = [];
    const angleStep = (Math.PI * 2) / particle.sides;

    for (let i = 0; i < particle.sides; i++) {
        const angle = i * angleStep + particle.rotation;
        const variation = 0.78 + Math.sin(i * 4 + particle.rotation) * 0.12;

        points.push({
            x: particle.x + Math.cos(angle) * particle.size * variation,
            y: particle.y + Math.sin(angle) * particle.size * variation
        });
    }

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }

    ctx.closePath();
    ctx.fillStyle = particle.color;
    ctx.fill();

    // Subtle facets give the shapes a 3D-like appearance.
    ctx.beginPath();
    ctx.moveTo(particle.x, particle.y);
    ctx.lineTo(points[0].x, points[0].y);
    ctx.lineTo(points[1].x, points[1].y);
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
    ctx.fill();
}

function animateParticles() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        if (particle.x < -40) particle.x = width + 40;
        if (particle.x > width + 40) particle.x = -40;
        if (particle.y < -40) particle.y = height + 40;
        if (particle.y > height + 40) particle.y = -40;

        drawParticle(particle);
    });

    requestAnimationFrame(animateParticles);
}

resizeCanvas();
animateParticles();
window.addEventListener("resize", resizeCanvas);

// Glowing cursor that follows the mouse.
const glow = document.getElementById("cursor-glow");

if (window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", (event) => {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
    });
}

// Support navigation links and browser back/forward.
function showCurrentPage() {
    const sections = document.querySelectorAll(".page");
    const currentHash = window.location.hash || "#home";

    sections.forEach((section) => {
        section.style.display =
            `#${section.id}` === currentHash ? "block" : "none";
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("hashchange", showCurrentPage);
showCurrentPage();
```
