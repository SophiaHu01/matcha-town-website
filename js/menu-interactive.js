/* ================================
   MATCHA TOWN - Menu Page Interactive
   5 Matcha Levels System
   ================================ */

// ===== MATCHA LEVELS DATA =====
const matchaLevels = {
  1: {
    name: 'NO.1 Jasmine Matcha',
    concentration: 'Matcha Concentration: 3.5%',
    description: 'Light and floral. Perfect for those new to matcha. The delicate jasmine notes complement the subtle matcha flavor, creating a refreshing and approachable introduction to our matcha journey.',
    tags: ['Beginners', 'Floral', 'Light Caffeine', 'Refreshing'],
    color: '#C8D5C7'
  },
  2: {
    name: 'NO.2 Matcha',
    concentration: 'Matcha Concentration: 6.5%',
    description: 'Balanced and smooth. A harmonious blend that showcases matcha\'s natural sweetness while maintaining gentle vegetal notes. Ideal for daily enjoyment.',
    tags: ['Balanced', 'Smooth', 'Medium Caffeine', 'Daily Favorite'],
    color: '#A8C4A5'
  },
  3: {
    name: 'NO.3 Matcha',
    concentration: 'Matcha Concentration: 10.5%',
    description: 'Rich and vibrant. The true character of matcha emerges—earthy, slightly bitter, with a lingering sweetness. A favorite among matcha enthusiasts.',
    tags: ['Rich', 'Authentic', 'Energizing', 'Traditional'],
    color: '#8BA888'
  },
  4: {
    name: 'NO.4 Matcha',
    concentration: 'Matcha Concentration: 13.5%',
    description: 'Bold and intense. Deep umami flavors with pronounced vegetal notes. For those who appreciate matcha\'s full complexity and natural bitterness.',
    tags: ['Bold', 'Intense', 'High Caffeine', 'Complex'],
    color: '#5C7A5F'
  },
  5: {
    name: 'NO.5 Matcha',
    concentration: 'Matcha Concentration: 16.5%',
    description: 'Profound and ceremonial. The highest concentration we offer. An immersive matcha experience with powerful umami, deep earthiness, and the meditative quality of traditional matcha ceremony.',
    tags: ['Ceremonial', 'Maximum Caffeine', 'For Connoisseurs', 'Pure'],
    color: '#3A4E3D'
  }
};

// ===== INITIALIZE MATCHA LEVELS =====
document.addEventListener('DOMContentLoaded', () => {
  const levelButtons = document.querySelectorAll('.level-btn');
  const levelDetails = document.querySelectorAll('.level-detail');

  if (levelButtons.length > 0) {
    // Set initial active state to Level 3 (middle point)
    const defaultLevel = 3;
    activateLevel(defaultLevel);

    // Add click handlers to all level buttons
    levelButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const level = parseInt(btn.dataset.level);
        activateLevel(level);
      });
    });
  }

  function activateLevel(level) {
    // Remove active class from all buttons and details
    levelButtons.forEach(btn => btn.classList.remove('active'));
    levelDetails.forEach(detail => detail.classList.remove('active'));

    // Add active class to selected button and detail
    const activeBtn = document.querySelector(`.level-btn[data-level="${level}"]`);
    const activeDetail = document.querySelector(`.level-detail[data-level="${level}"]`);

    if (activeBtn && activeDetail) {
      activeBtn.classList.add('active');
      activeDetail.classList.add('active');

      // Optional: Change background color subtly based on level
      const levelContent = document.querySelector('.level-content');
      if (levelContent) {
        levelContent.style.backgroundColor = `${matchaLevels[level].color}10`; // 10% opacity
      }
    }
  }
});

// ===== PRODUCT FILTERING =====
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter products
        const filter = btn.dataset.filter;
        productCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});

// ===== PRODUCT QUICK VIEW (Optional Enhancement) =====
document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    card.addEventListener('click', () => {
      // Could implement a modal/lightbox here
      console.log('Product clicked:', card.querySelector('.card-title').textContent);
    });
  });
});
