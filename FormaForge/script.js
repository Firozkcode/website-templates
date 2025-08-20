document.addEventListener('DOMContentLoaded', () => {
            const menuIcon = document.querySelector('.menu-icon');
            const mobileNav = document.querySelector('.mobile-nav');
            const productsLink = document.querySelector('.products-link-mobile');
            const mobileDropdownContent = document.querySelector('.dropdown-content-mobile');
            const arrowIcon = productsLink.querySelector('.arrow');
            
            // Toggle mobile menu visibility and hamburger icon animation
            menuIcon.addEventListener('click', () => {
                mobileNav.classList.toggle('active');
                menuIcon.classList.toggle('open');
            });
            
            // Hide menu when a link is clicked
            mobileNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileNav.classList.remove('active');
                    menuIcon.classList.remove('open');
                });
            });

            // Toggle mobile dropdown
            productsLink.addEventListener('click', (event) => {
                event.preventDefault(); // Prevents page from jumping to top
                mobileDropdownContent.classList.toggle('show');
                arrowIcon.classList.toggle('open');
            });

            // Handle desktop tooltip
            const tooltipButton = document.querySelector('.tooltip-button');
            const tooltipContent = document.querySelector('.tooltip-content');
            
            if (tooltipButton) {
                tooltipButton.addEventListener('click', (event) => {
                    event.stopPropagation();
                    tooltipContent.style.display = tooltipContent.style.display === 'block' ? 'none' : 'block';
                });
            }

            document.body.addEventListener('click', (event) => {
                if (tooltipContent && !tooltipContent.contains(event.target) && !tooltipButton.contains(event.target)) {
                    tooltipContent.style.display = 'none';
                }
            });
        });




        // hero slider

        document.addEventListener('DOMContentLoaded', () => {
            let slideIndex = 0;
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.dot');
            const prevArrow = document.querySelector('.prev-arrow');
            const nextArrow = document.querySelector('.next-arrow');

            function showSlides() {
                // Hide all slides
                slides.forEach(slide => {
                    slide.classList.remove('active');
                });
                dots.forEach(dot => {
                    dot.classList.remove('active');
                });
                // Show the current slide
                slides[slideIndex].classList.add('active');
                dots[slideIndex].classList.add('active');
            }

            function plusSlides(n) {
                slideIndex += n;
                if (slideIndex >= slides.length) {
                    slideIndex = 0;
                }
                if (slideIndex < 0) {
                    slideIndex = slides.length - 1;
                }
                showSlides();
            }

            // Event listeners for arrows
            prevArrow.addEventListener('click', () => {
                plusSlides(-1);
            });

            nextArrow.addEventListener('click', () => {
                plusSlides(1);
            });

            // Event listeners for dots
            dots.forEach(dot => {
                dot.addEventListener('click', (event) => {
                    const index = parseInt(event.target.getAttribute('data-slide-index'), 10);
                    showSlides(index);
                });
            });

            // Automatic slider
            setInterval(() => {
                plusSlides(1);
            }, 5000); // Change image every 5 seconds

            // Initial call to show first slide
            showSlides();
        });





        