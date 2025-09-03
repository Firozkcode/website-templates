document.addEventListener('mousemove', function(e) {
    // Select all the boxes
    const boxes = document.querySelectorAll('.glow-box');
    
    // Get the center of the window
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Get the mouse position
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate the movement amount based on mouse position from center
    // The divisor (e.g., 50) controls the intensity of the effect. Larger number = less movement.
    const moveX = (mouseX - centerX) / 50;
    const moveY = (mouseY - centerY) / 50;

    // Apply a transform to each box
    boxes.forEach((box, index) => {
        // We can add a multiplier to make some boxes move more than others
        const speed = (index % 2 === 0) ? 1.5 : 1; 
        box.style.transform = `translateX(${-moveX * speed}px) translateY(${-moveY * speed}px)`;
    });
});