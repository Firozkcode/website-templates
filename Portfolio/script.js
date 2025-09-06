  
  const menuBtn = document.querySelector('.menu-btn');
  const headerSection = document.querySelector('#header-section');
  const header = document.querySelector('.main-header');
  const headerImg = document.querySelector('.header-img');
  const headerLink = document.querySelector('.header-link');


window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


    
    let menuOpen = false;

    function toggleMenu() {
      menuOpen = !menuOpen;

      if (menuOpen) {
        // Open the menu
        menuBtn.classList.add('active');
        setTimeout(() => {
          headerSection.classList.add('active');
          setTimeout(() => {
            headerImg.classList.add('active');
            headerLink.classList.add('active');
          }, 500);
          // document.body.style.overflow = 'hidden';
        }, 800);
      } else {
        // Close the menu
        menuBtn.classList.remove('active');
        setTimeout(() => {
          headerSection.classList.remove('active');
          setTimeout(() => {
            headerImg.classList.remove('active');
            headerLink.classList.remove('active');
          }, 500);
          // document.body.style.overflow = 'auto';
        }, 800);
      }
    }

    // Attach event listener
    menuBtn.addEventListener('click', toggleMenu);




    // const btn = document.getElementById("glitchBtn");
    // const originalText = btn.textContent;
    // const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";

    // btn.addEventListener("mouseenter", () => {
    //   let scrambleInterval = setInterval(() => {
    //     btn.textContent = originalText
    //       .split("")
    //       .map(() => chars[Math.floor(Math.random() * chars.length)])
    //       .join("");
    //   }, 50);

    //   setTimeout(() => {
    //     clearInterval(scrambleInterval);
    //     btn.textContent = originalText;
    //   }, 400); // back to normal after 0.4s
    // });




   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";

    // sabhi buttons select karo jinke paas class glitchBtn hai
    const buttons = document.querySelectorAll(".glitchBtn");
  
    buttons.forEach(btn => {
      const originalText = btn.textContent;
    
      btn.addEventListener("mouseenter", () => {
        let scrambleInterval = setInterval(() => {
          btn.textContent = originalText
            .split("")
            .map(char =>
              char === " " ? " " : chars[Math.floor(Math.random() * chars.length)]
            )
            .join("");
        }, 50);
    
        setTimeout(() => {
          clearInterval(scrambleInterval);
          btn.textContent = originalText;
        }, 400); // back to normal after 0.4s
      });
    });



    // New script for scroll-based theme change
        const specialSection = document.getElementById('special-section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    // Add dark-theme class if section is intersecting (visible), otherwise remove it
                    document.body.classList.toggle('dark-theme', entry.isIntersecting);
                });
            },
            {
                root: null, // observes intersections relative to the viewport
                threshold: 0.1, // trigger when 10% of the element is visible
            }
        );

        observer.observe(specialSection);







  
  
  
  const squareSize = 30;

function createGrid(gridContainer) {
  gridContainer.innerHTML = '';
  const screenWidth = gridContainer.offsetWidth;
  const screenHeight = gridContainer.offsetHeight;

  const cols = Math.ceil(screenWidth / squareSize);
  const rows = Math.ceil(screenHeight / squareSize);
  const totalSquares = cols * rows;

  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.dataset.index = i;
    square.dataset.cols = cols; // store cols count
    gridContainer.appendChild(square);
  }
}

function glowSurroundingSquares(targetIndex, cols, allSquares) {
  const total = allSquares.length;
  const relativeIndices = [0]; // only the hovered one (change if you want neighbors too)

  relativeIndices.forEach(offset => {
    const neighborIndex = targetIndex + offset;
    if (neighborIndex >= 0 && neighborIndex < total) {
      const neighborSquare = allSquares[neighborIndex];
      if (neighborSquare && !neighborSquare.classList.contains('glow')) {
        neighborSquare.classList.add('glow');
        setTimeout(() => {
          neighborSquare.classList.remove('glow');
        }, 300);
      }
    }
  });
}

// Initialize all containers
function initHeroGrids() {
  const containers = document.querySelectorAll('.hero-grid-container');

  containers.forEach(container => {
    createGrid(container);

    container.addEventListener('mouseover', (event) => {
      if (event.target.classList.contains('grid-square')) {
        const targetIndex = parseInt(event.target.dataset.index, 10);
        const cols = parseInt(event.target.dataset.cols, 10);
        const allSquares = container.children;
        if (!isNaN(targetIndex)) {
          glowSurroundingSquares(targetIndex, cols, allSquares);
        }
      }
    });

    window.addEventListener('resize', () => createGrid(container));
  });
}

initHeroGrids();
