// Premium Media Manifest Array - Configured with 8 Project Assets
const photographyData = [
    { url: "./IMG_20260510_122606.png", title: "Neon Monsoon Monologue", category: "Cinematic Street", layout: "portrait" },
    { url: "./InShot_20260522_125043105.jpg", title: "Himalayan Ridge Layering", category: "Mountain Landscape", layout: "landscape" },
    { url: "./InShot_20260525_113635932.jpg", title: "The Misty Transit Way", category: "Mood Landscape", layout: "landscape" },
    { url: "./file_00000000d930720891f74f9f44088538.png", title: "Candid Alleyways", category: "Street Portraiture", layout: "landscape" },
    { url: "./file_00000000e6e8720789ec4c9a025610e2.png", title: "Breeze of Prayers", category: "Cultural Elements", layout: "landscape" },
    { url: "./file_0000000090cc72069d598728e65628a7.png", title: "Silent Peace Pagoda", category: "Architectural Mystique", layout: "portrait" },
    // Mapped system keys directly matching uploaded filenames to resolve display issues
    { url: "./file_00000000d34071f7a0f58cb4bb47bc7b.png", title: "Midnight Hillside Constellations", category: "Atmospheric Landscape", layout: "landscape" },
    { url: "./file_00000000ff2472079842c4d554060777.png", title: "Sacred Forest Grids", category: "Cultural Composition", layout: "landscape" }
];

// --- 1. PREMIUM LERP INERTIAL SCROLL MECHANICS ---
const scrollContainer = document.getElementById('scroll-container');
let currentY = 0;
let targetY = 0;
const easeFactor = 0.085; 

function applySmoothScrollEngine() {
    document.body.style.height = `${scrollContainer.getBoundingClientRect().height}px`;
    scrollContainer.style.position = 'fixed';
    scrollContainer.style.top = 0;
    scrollContainer.style.left = 0;
    
    window.addEventListener('scroll', () => {
        targetY = window.scrollY;
    });

    function runLinearInterpolation() {
        currentY += (targetY - currentY) * easeFactor;
        scrollContainer.style.transform = `translateY(-${currentY.toFixed(2)}px)`;
        requestAnimationFrame(runLinearInterpolation);
    }
    requestAnimationFrame(runLinearInterpolation);
    
    window.addEventListener('resize', () => {
        document.body.style.height = `${scrollContainer.getBoundingClientRect().height}px`;
    });
}

// --- 2. ASYMMETRICAL MOUNT ENGINE & REAL-TIME INTERACTIVE 3D TILT TETHER ---
const masonryGallery = document.getElementById('masonry-gallery');

function generateExhibitionGrid() {
    if(!masonryGallery) return;
    masonryGallery.innerHTML = ""; 
    
    photographyData.forEach(item => {
        const frameCard = document.createElement('div');
        frameCard.classList.add('gallery-card-frame', item.layout);
        
        frameCard.innerHTML = `
            <div class="image-inner-box">
                <img src="${item.url}" alt="${item.title}" loading="lazy">
            </div>
            <div class="card-meta-bar">
                <h4>${item.title}</h4>
                <span>${item.category}</span>
            </div>
        `;
        
        // Precise Cursor Matrix Tracking Math
        frameCard.addEventListener('mousemove', (e) => {
            const cardBoundingRect = frameCard.getBoundingClientRect();
            const coordinateX = e.clientX - cardBoundingRect.left; 
            const coordinateY = e.clientY - cardBoundingRect.top;
            
            const centerDistanceX = coordinateX - cardBoundingRect.width / 2;
            const centerDistanceY = coordinateY - cardBoundingRect.height / 2;
            
            // Map rotational limits on X and Y perspective tracks
            const degreesRotationX = (centerDistanceY / (cardBoundingRect.height / 2)) * -12; 
            const degreesRotationY = (centerDistanceX / (cardBoundingRect.width / 2)) * 12;
            
            frameCard.style.transform = `perspective(1200px) rotateX(${degreesRotationX.toFixed(2)}deg) rotateY(${degreesRotationY.toFixed(2)}deg) scale(1.03) translateZ(15px)`;
        });
        
        // Neutral Smooth Core Frame Reset Layer
        frameCard.addEventListener('mouseleave', () => {
            frameCard.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)`;
        });
        
        frameCard.addEventListener('click', () => openAppleLightbox(item));
        masonryGallery.appendChild(frameCard);
    });
}

// --- 3. HERO SLIDESHOW CROSSFADER ---
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    if(slides.length === 0) return;
    let activeSlideIdx = 0;

    setInterval(() => {
        slides[activeSlideIdx].classList.remove('active');
        activeSlideIdx = (activeSlideIdx + 1) % slides.length;
        slides[activeSlideIdx].classList.add('active');
    }, 5000); 
}

// --- 4. LIGHTBOX DISPLAY HANDLERS ---
const exhibitionModal = document.getElementById('exhibition-modal');
const modalImgNode = document.getElementById('modal-img-node');
const closeModalView = document.getElementById('close-modal-view');

function openAppleLightbox(data) {
    modalImgNode.src = data.url;
    document.getElementById('modal-title-node').textContent = data.title;
    document.getElementById('modal-tag-node').textContent = data.category;
    exhibitionModal.style.display = 'flex';
    setTimeout(() => exhibitionModal.classList.add('show'), 10);
}

function closeAppleLightbox() {
    exhibitionModal.classList.remove('show');
    setTimeout(() => exhibitionModal.style.display = 'none', 300);
}

if(closeModalView) closeModalView.addEventListener('click', closeAppleLightbox);
if(exhibitionModal) {
    exhibitionModal.addEventListener('click', (e) => { if (e.target === exhibitionModal) closeAppleLightbox(); });
}

// --- 5. SYSTEM WORKSPACE INITIALIZATION ENGINE ---
document.addEventListener('DOMContentLoaded', () => {
    generateExhibitionGrid();
    initHeroSlideshow();
    
    // Smooth delay for complete DOM matrix structural renders before scroll evaluation
    setTimeout(() => {
        applySmoothScrollEngine();
    }, 600);
});
