// Clean Media Manifest Core Configuration Array
const photographyData = [
    { url: "IMG_20260510_122606.png", title: "Neon Monsoon Monologue", category: "Cinematic Street", layout: "portrait" },
    { url: "InShot_20260522_125043105.jpg", title: "Himalayan Ridge Layering", category: "Mountain Landscape", layout: "landscape" },
    { url: "InShot_20260525_113635932.jpg", title: "The Misty Transit Way", category: "Mood Landscape", layout: "landscape" },
    { url: "file_00000000d930720891f74f9f44088538.png", title: "Candid Alleyways", category: "Street Portraiture", layout: "landscape" },
    { url: "file_00000000e6e8720789ec4c9a025610e2.png", title: "Breeze of Prayers", category: "Cultural Elements", layout: "landscape" },
    { url: "file_0000000090cc72069d598728e65628a7.png", title: "Silent Peace Pagoda", category: "Architectural Mystique", layout: "portrait" },
    // Case-corrected structural path variables mapping perfectly to the site build directory links
    { url: "file_00000000d34071f7a0f58cb4bb47bc7b.png", title: "Midnight Hillside Constellations", category: "Atmospheric Landscape", layout: "landscape" },
    { url: "file_00000000ff2472079842c4d554060777.png", title: "Sacred Forest Grids", category: "Cultural Composition", layout: "landscape" }
];

// --- 1. DYNAMIC MOUNT CORE & INTERACTIVE 3D PERSPECTIVE ENGAGEMENT ---
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
        
        // Accurate Mouse Coordinates Position Tracking Calculus
        frameCard.addEventListener('mousemove', (e) => {
            const cardBoundingRect = frameCard.getBoundingClientRect();
            const coordinateX = e.clientX - cardBoundingRect.left; 
            const coordinateY = e.clientY - cardBoundingRect.top;
            
            const centerDistanceX = coordinateX - cardBoundingRect.width / 2;
            const centerDistanceY = coordinateY - cardBoundingRect.height / 2;
            
            const degreesRotationX = (centerDistanceY / (cardBoundingRect.height / 2)) * -10; 
            const degreesRotationY = (centerDistanceX / (cardBoundingRect.width / 2)) * 10;
            
            frameCard.style.transform = `perspective(1000px) rotateX(${degreesRotationX.toFixed(2)}deg) rotateY(${degreesRotationY.toFixed(2)}deg) scale(1.02) translateZ(10px)`;
        });
        
        // Balanced Core Plane Reset Layer
        frameCard.addEventListener('mouseleave', () => {
            frameCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)`;
        });
        
        frameCard.addEventListener('click', () => openAppleLightbox(item));
        masonryGallery.appendChild(frameCard);
    });
}

// --- 2. HERO SECTION CROSSFADER SLIDESHOW ---
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

// --- 3. CINEMATIC LIGHTBOX DISPLAY CONTROLLERS ---
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

// --- 4. DOM RUNTIME ENGINE INIT ---
document.addEventListener('DOMContentLoaded', () => {
    generateExhibitionGrid();
    initHeroSlideshow();
});
