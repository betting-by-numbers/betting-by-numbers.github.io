// Global: Track current slide index
let currentSlide = 0;

function showSlide(n, direction = 1) {
  // Handle circular navigation
  if (n >= slides.length) n = 0;
  if (n < 0) n = slides.length - 1;

  // Update slides with animation
  slides.forEach((slide, index) => {
    // Remove all classes first
    slide.classList.remove('current', 'next', 'previous');
    
    if (index === n) {
      // This is the new current slide
      slide.classList.add('current');
    } else if (direction > 0 && index > n) {
      // Slides after current move to the right
      slide.classList.add('next');
    } else if (direction < 0 && index < n) {
      // Slides before current move to the left
      slide.classList.add('previous');
    } else if (direction > 0 && index < n) {
      // Slides before current move to the left
      slide.classList.add('previous');
    } else {
      // Slides after current move to the right
      slide.classList.add('next');
    }
  });

  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.remove('bg-blue-600');
    dot.classList.add('bg-gray-300');
    if (index === n) {
      dot.classList.remove('bg-gray-300');
      dot.classList.add('bg-blue-600');
    }
  });

  currentSlide = n;
}

function moveSlide(direction) {
  showSlide(currentSlide + direction, direction);
}