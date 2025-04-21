

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const navIconsContainer = document.querySelector('.slider-navigation');
const navIcons = document.querySelectorAll('.nav-icon');
let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 50}%)`;

    // Update active navigation icon
    navIcons.forEach((icon, index) => {
        if (index === currentIndex) {
            icon.classList.add('active');
        } else {
            icon.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

// Automatically advance the slider
setInterval(nextSlide, 3000);

// Optional: Add event listeners to the navigation icons to jump to a specific slide
navIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        const slideIndex = parseInt(this.dataset.slide);
        currentIndex = slideIndex;
        updateSlider();
    });
});

// --- Business Benefits Section Logic ---
let businessActiveIndex = -1; // State for the first section

function setActiveBusiness(index) {
  // Select wrappers specifically for the Business Benefits section
  const wrappers = document.querySelectorAll('.svg-container > .svg-circle-wrapper');

  // Toggle logic: If the clicked index is already active, deactivate it
  if (businessActiveIndex === index) {
    if (wrappers[index]) { // Check if the element exists at this index
        wrappers[index].classList.remove('active');
    }
    businessActiveIndex = -1; // Reset the active index
    return; // Exit the function
  }

  // Loop through all wrappers in this section
  wrappers.forEach((wrapper, i) => {
    if (i === index) {
      // Activate the clicked one
      wrapper.classList.add('active');
    } else {
      // Deactivate others
      wrapper.classList.remove('active');
    }
  });

  // Update the state for this section
  businessActiveIndex = index;
}

// --- Tasker Benefits Section Logic ---
let taskerActiveIndex = -1; // State for the second section

function setActiveTasker(index) {
  // Select wrappers specifically for the Tasker Benefits section
  const wrappers = document.querySelectorAll('.svg-container2 > .svg-circle-wrapper2');

  // Toggle logic: If the clicked index is already active, deactivate it
  if (taskerActiveIndex === index) {
     if (wrappers[index]) { // Check if the element exists at this index
        wrappers[index].classList.remove('active');
     }
    taskerActiveIndex = -1; // Reset the active index
    return; // Exit the function
  }

  // Loop through all wrappers in this section
  wrappers.forEach((wrapper, i) => {
    if (i === index) {
      // Activate the clicked one
      wrapper.classList.add('active');
    } else {
      // Deactivate others
      wrapper.classList.remove('active');
    }
  });

  // Update the state for this section
  taskerActiveIndex = index;
}

let mySlideIndex = 0;
  const mySlides = document.querySelectorAll(".my-slide");
  const myIndicators = document.querySelectorAll(".my-indicator");
  const myBackgroundImage = document.querySelector(".my-slider-background-image");
  const mySlideIcons = document.querySelectorAll(".my-slide-icon");


  // Set background image URL
  myBackgroundImage.style.setProperty('--bg-image', "url('images/bgsld.jpg')");

  // Set icon URLs.  Assumes you have 3 icons.
  mySlideIcons[0].style.setProperty('--icon-image', "url('images/icon-1.png')");
  mySlideIcons[1].style.setProperty('--icon-image', "url('images/icon-2.png')");
  mySlideIcons[2].style.setProperty('--icon-image', "url('images/icon-4.png')");


  function showMySlide(n) {
    mySlides.forEach((slide) => slide.classList.remove("my-slide-active"));
    myIndicators.forEach((indicator) =>
      indicator.classList.remove("bg-opacity-100")
    );
    mySlideIndex = (n + mySlides.length) % mySlides.length;
    mySlides[mySlideIndex].classList.add("my-slide-active");
    myIndicators[mySlideIndex].classList.add("bg-opacity-100");
  }

  function nextMySlide() {
    showMySlide(mySlideIndex + 1);
  }

  setInterval(nextMySlide, 5000);

  myIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      showMySlide(index);
    });
  });

  showMySlide(mySlideIndex);