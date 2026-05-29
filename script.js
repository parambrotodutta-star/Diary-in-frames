// Raw Local Repository Asset Manifest - Configured with 8 Project Assets
const photographyData = [
    { url: "./IMG_20260510_122606.png", title: "Neon Monsoon Monologue", category: "Cinematic Street", layout: "portrait" },
    { url: "./InShot_20260522_125043105.jpg", title: "Himalayan Ridge Layering", category: "Mountain Landscape", layout: "landscape" },
    { url: "./InShot_20260525_113635932.jpg", title: "The Misty Transit Way", category: "Mood Landscape", layout: "landscape" },
    { url: "./file_00000000d930720891f74f9f44088538.png", title: "Candid Alleyways", category: "Street Portraiture", layout: "landscape" },
    { url: "./file_00000000e6e8720789ec4c9a025610e2.png", title: "Breeze of Prayers", category: "Cultural Elements", layout: "landscape" },
    { url: "./file_0000000090cc72069d598728e65628a7.png", title: "Silent Peace Pagoda", category: "Architectural Mystique", layout: "portrait" },
    // Custom Selected Visual Assets Included Here
    { url: "./file_00000000d34071f7a0f58cb4bb47bc7b.png", title: "Midnight Hillside Constellations", category: "Atmospheric Landscape", layout: "landscape" },
    { url: "./file_00000000ff2472079842c4d554060777.png", title: "Sacred Forest Grids", category: "Cultural Composition", layout: "landscape" }
];

// --- 1. APPLE INERTIAL KINETIC SCROLL ENGINE ---
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

// --- 2. CINEMATIC CROSSFADE HERO SLIDESHOW ---
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

// --- 3. DYNAMIC CURATED GRID RENDER SYSTEM ---
const masonryGallery = document.getElementById('masonry-gallery');
const exhibitionModal = document.getElementById('exhibition-modal');
const modalImgNode = document.getElementById('modal-img-node');
const closeModalView = document.getElementById('close-modal-view');

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
        
        frameCard.addEventListener('click', () => openAppleLightbox(item));
        masonryGallery.appendChild(frameCard);
    });
}

// --- 4. APPLE BLUR LIGHTBOX CONTROLLER SYSTEM ---
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

// --- 5. INTERACTIVE QUOTE CAROUSEL SLIDER ---
function initQuoteSlider() {
    const quoteSlides = document.querySelectorAll('.premium-quote-slide');
    const dotsContainer = document.getElementById('slider-dots');
    if(quoteSlides.length === 0 || !dotsContainer) return;
    let currentIdx = 0;

    dotsContainer.innerHTML = "";

    quoteSlides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot-node');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => updateActiveQuoteSlide(index));
        dotsContainer.appendChild(dot);
    });

    function updateActiveQuoteSlide(targetIndex) {
        quoteSlides[currentIdx].classList.remove('active');
        dotsContainer.children[currentIdx].classList.remove('active');
        
        currentIdx = targetIndex;
        
        quoteSlides[currentIdx].classList.add('active');
        dotsContainer.children[currentIdx].classList.add('active');
    }

    setInterval(() => {
        let nextIdx = (currentIdx + 1) % quoteSlides.length;
        updateActiveQuoteSlide(nextIdx);
    }, 6000);
}

// --- 6. LAUNCH ENGINE INITIALIZATION TREE ---
document.addEventListener('DOMContentLoaded', () => {
    generateExhibitionGrid();
    initHeroSlideshow();
    initQuoteSlider();
    
    setTimeout(() => {
        applySmoothScrollEngine();
    }, 500);
});
