gsap.registerPlugin(ScrollTrigger);

// Curated Portfolio Asset Manifest
const photographyData = [
    { url: "https://i.ibb.co/vYmZf6m/IMG-20260510-122606.png", title: "Neon Monsoon Monologue", category: "Cinematic Street", layout: "portrait" },
    { url: "https://i.ibb.co/r7X0vXk/In-Shot-20260522-125043105.jpg", title: "Himalayan Ridge Layering", category: "Mountain Landscape", layout: "landscape" },
    { url: "https://i.ibb.co/rZhG0qQ/In-Shot-20260525-113635932.jpg", title: "The Misty Transit Way", category: "Mood Landscape", layout: "landscape" },
    { url: "https://i.ibb.co/YyYQLm1/file-00000000d930720891f74f9f44088538.png", title: "Candid Alleyways", category: "Street Portraiture", layout: "landscape" },
    { url: "https://i.ibb.co/D8GgL9q/file-00000000e6e8720789ec4c9a025610e2.png", title: "Breeze of Prayers", category: "Cultural Elements", layout: "landscape" },
    { url: "https://i.ibb.co/yq6C0f1/file-0000000090cc72069d598728e65628a7.png", title: "Silent Peace Pagoda", category: "Architectural Mystique", layout: "portrait" }
];

const galleryGrid = document.getElementById('gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

// Generate Grid Cards wrapped with Custom Inner Sub-Parallax Frameworks
function generateGalleryGrid() {
    photographyData.forEach(photo => {
        const itemFrame = document.createElement('div');
        itemFrame.classList.add('gallery-item', photo.layout);
        itemFrame.innerHTML = `
            <div class="img-parallax-wrapper">
                <img src="${photo.url}" alt="${photo.title}" loading="lazy">
            </div>
            <div class="item-info">
                <h3 class="item-title">${photo.title}</h3>
                <p class="item-category">${photo.category}</p>
            </div>
        `;
        itemFrame.addEventListener('click', () => launchLightbox(photo));
        galleryGrid.appendChild(itemFrame);
    });
}

// Master Kinetic Control & GSAP Timeline Sequencer Engine
function initMotionSequences() {
    
    // 1. Cinematic Page Wipe Load Curtain Transition 
    const introTimeline = gsap.timeline({
        onComplete: () => document.getElementById('intro-curtain').style.pointerEvents = 'none'
    });

    introTimeline.to('#curtain-text', { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
                 .to('#curtain-text', { opacity: 0, y: -15, duration: 0.6, ease: "power3.in", delay: 0.5 })
                 .to('#intro-curtain', { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", duration: 1.2, ease: "power4.inOut" })
                 .to('#hero-title', { opacity: 1, y: 0, duration: 1.4, ease: "power4.out" }, "-=0.4")
                 .to('#hero-subtitle', { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=1");

    // 2. Continuous Soft Parallax Interaction on Fullscreen Hero Background
    gsap.to('.hero-parallax-img', {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
            trigger: '#hero-parallax-trigger',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // 3. Image Clip-Path Reveal Wipes & Sub-Parallax Matrix
    gsap.utils.toArray('.gallery-item').forEach(item => {
        const singleImg = item.querySelector('img');

        // Smooth Reveal Wiping open animation as user scrolls down
        gsap.to(item, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.6,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: item,
                start: "top bottom-=12%"
            }
        });

        // Inter-Grid Image Card Parallax matrix calculations
        gsap.fromTo(singleImg, 
            { yPercent: -8 },
            { 
                yPercent: 8,
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }
        );
    });
}

// Lightbox Focus Display Controller Module
function launchLightbox(photo) {
    lightboxImg.src = photo.url;
    document.getElementById('lightbox-title').textContent = photo.title;
    document.getElementById('lightbox-category').textContent = photo.category;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function exitLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; 
}

lightboxClose.addEventListener('click', exitLightbox);
lightbox.addEventListener('click', (e) => { if(e.target === lightbox) exitLightbox(); });
document.addEventListener('keydown', (e) => { if(e.key === "Escape") exitLightbox(); });

// Start Application On Content Load
document.addEventListener('DOMContentLoaded', () => {
    generateGalleryGrid();
    initMotionSequences();
});
