  var typed = new Typed('#element', {
    strings: ['Grocery haul .', 'Fresh picks for a fresh week .','Shopping for a healthier you .','Kitchen essentials, checked .','Fuel your fitness journey . ','Grocery haul .', 'Fresh picks for a fresh week .','Shopping for a healthier you .','Kitchen essentials, checked','Fuel your fitness journey','Grocery haul.', 'Fresh picks for a fresh week.','Shopping for a healthier you','Kitchen essentials, checked','Fuel your fitness journey','Grocery haul.', 'Fresh picks for a fresh week.','Shopping for a healthier you','Kitchen essentials, checked','Fuel your fitness journey'],
    typeSpeed: 50,
  });

// Responsive design adjustments
function adjustLayout() {
    const screenWidth = window.innerWidth;
    const navbar = document.querySelector('.navbar');
    const contactLeft = document.querySelector('.contact-left');
    const contactRight = document.querySelector('.contact-right');
    const footer = document.querySelector('#footer');
    const footerInner = footer.querySelector('.footerr');
    const footerColumns = footerInner.children;
  
    if (screenWidth < 768) {
      navbar.classList.add('mobile-navbar');
      contactLeft.classList.add('mobile-contact-left');
      contactRight.classList.add('mobile-contact-right');
      footerInner.classList.add('mobile-footer');
      for (let i = 0; i < footerColumns.length; i++) {
        footerColumns[i].classList.add('mobile-footer-column');
      }
    } else {
      navbar.classList.remove('mobile-navbar');
      contactLeft.classList.remove('mobile-contact-left');
      contactRight.classList.remove('mobile-contact-right');
      footerInner.classList.remove('mobile-footer');
      for (let i = 0; i < footerColumns.length; i++) {
        footerColumns[i].classList.remove('mobile-footer-column');
      }
    }
  }
  
  // Add event listener for window resize
  window.addEventListener('resize', adjustLayout);
  
  // Initialize layout adjustments
  adjustLayout();
  
  // Carousel functionality
  const carousel = document.getElementById('carouselExample');
  const carouselInner = carousel.querySelector('.carousel-inner');
  const carouselItems = carouselInner.children;
  
  let currentSlide = 0;
  
  function showSlide() {
    for (let i = 0; i < carouselItems.length; i++) {
      carouselItems[i].classList.remove('active');
    }
    carouselItems[currentSlide].classList.add('active');
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselItems.length;
    showSlide();
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
    showSlide();
  }
  
  // Add event listeners for carousel navigation
  document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);
  document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);
  
  // Initialize carousel
  showSlide();
  
  // Contact form submission handling
  const contactForm = document.querySelector('#contact form');
  const contactFormInputs = contactForm.querySelectorAll('input, textarea');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const formData = new FormData(contactForm);
    const contactData = Object.fromEntries(formData.entries());
  
    // Send contact data to server or handle submission
    console.log(contactData);
  });
  
