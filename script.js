const benefitContainer = document.querySelector('.business-benefits-container');
const imageContainer = document.querySelector('.benefit-image-container');
const rightContent = document.querySelector('.right-content');
const businessBenefitsHeading = rightContent.querySelector('.business-benefits');

function moveImage() {
  if (window.innerWidth < 700) {
    rightContent.insertBefore(imageContainer, businessBenefitsHeading.nextElementSibling);
  } else {
    benefitContainer.insertBefore(imageContainer, rightContent);
  }
}

// Call the function on initial load and when the window is resized
moveImage();
window.addEventListener('resize', moveImage);










const taskerBenefitContainer = document.querySelector('.business-benefits-container2');
const taskerImageContainer = document.querySelector('.right-image-container2');
const leftContent2 = document.querySelector('.left-content2');
const taskerBenefitsHeading = leftContent2.querySelector('.business-benefits2');

function moveTaskerImageSmallScreen() {
  if (window.innerWidth < 700) {
    leftContent2.insertBefore(taskerImageContainer, taskerBenefitsHeading.nextElementSibling);
  } else {
    taskerBenefitContainer.insertBefore(taskerImageContainer, leftContent2.nextElementSibling);
  }
}

// Call the function on initial load and when the window is resized
moveTaskerImageSmallScreen();
window.addEventListener('resize', moveTaskerImageSmallScreen);






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
let autoSlideInterval;
const slideIntervalTime = 5000; // Set the interval to 5000 milliseconds (5 seconds)

// Set initial background image URL for smaller screens (default)
myBackgroundImage.style.setProperty('--bg-image', "url('images/bgsld.jpg')");
console.log("Initial background set to: url('images/bgsld.jpg')");

// Set icon URLs.  Assumes you have 3 icons.
mySlideIcons[0].style.setProperty('--icon-image', "url('images/icon-1.png')");
mySlideIcons[1].style.setProperty('--icon-image', "url('images/icon-2.png')");
mySlideIcons[2].style.setProperty('--icon-image', "url('images/icon-4.png')");


function showMySlide(n) {
    mySlides.forEach((slide) => slide.classList.remove("my-slide-active"));
    myIndicators.forEach((indicator) =>
        indicator.classList.remove("bg-opacity-100")
    );

    if (window.innerWidth <= 500) {
        mySlideIndex = (n + mySlides.length) % mySlides.length;
        mySlides[mySlideIndex].classList.add("my-slide-active");
        myIndicators[mySlideIndex].classList.add("bg-opacity-100");
        console.log("Screen width <= 500px. Background should be: url('images/bgsld.jpg')");
    } else if (window.innerWidth > 500 && window.innerWidth <= 700) {
        const activeIndices = [(n % mySlides.length), ((n + 1) % mySlides.length)];
        activeIndices.forEach((index) => mySlides[index].classList.add("my-slide-active"));
        myIndicators.forEach((indicator, index) => {
            indicator.classList.remove("bg-opacity-100");
            if (activeIndices.includes(index)) {
                indicator.classList.add("bg-opacity-100");
            }
        });
        mySlideIndex = n % mySlides.length;
        console.log("Screen width > 500px and <= 700px. Background should be: url('images/bgsld.jpg')");
    } else if (window.innerWidth > 700) {
        mySlides.forEach((slide) => slide.classList.add("my-slide-active"));
        myBackgroundImage.style.setProperty('--bg-image', "url('images/bgsld2.jpg')");
        console.log("Screen width > 700px. Background set to: url('images/bgsld2.jpg')");
    }
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

function handleResize() {
    console.log("handleResize called. Width:", window.innerWidth);
    showMySlide(mySlideIndex);
}

window.addEventListener('resize', handleResize);



 





const imageSliderWrapper = document.querySelector('.image_slider_wrapper');
const imageSlides = document.querySelectorAll('.image_slide');
let imageSlideIndex = 0;
let isImageSliding = false;

function getImageSlideWidth() {
  // Recalculate based on the current number of visible slides
  const visibleSlides = window.innerWidth >= 1000 ? 5 : (window.innerWidth >= 500 ? 3 : 2);
  return imageSlides[0].offsetWidth;
}

function updateImageButtonState() {
  // You can add logic here to disable/enable buttons based on the current index
}

function slideImageTo(index) {
  if (isImageSliding) return;
  isImageSliding = true;
  imageSliderWrapper.style.transition = 'transform 0.5s ease-in-out';
  imageSliderWrapper.style.transform = `translateX(-${index * getImageSlideWidth()}px)`;
  imageSlideIndex = index;
  updateImageButtonState();
  setTimeout(() => {
    isImageSliding = false;
  }, 500);
}

function nextImageSlide() {
  const visibleSlides = window.innerWidth >= 1000 ? 5 : (window.innerWidth >= 500 ? 3 : 2);
  if (imageSlideIndex < imageSlides.length - visibleSlides) {
    slideImageTo(imageSlideIndex + 1);
  }
}

function prevImageSlide() {
  if (imageSlideIndex > 0) {
    slideImageTo(imageSlideIndex - 1);
  }
}

// Removed Event Listeners

// Initial setup
updateImageButtonState();
slideImageTo(imageSlideIndex); //show first slide

// Optional: Continuous loop (basic, for demonstration) - improved version
setInterval(() => {
  if (!isImageSliding) {
    const visibleSlides = window.innerWidth >= 1000 ? 5 : (window.innerWidth >= 500 ? 3 : 2);
    if (imageSlideIndex < imageSlides.length - visibleSlides) {
      slideImageTo(imageSlideIndex + 1);
    } else {
      // Reset to the beginning without abrupt transition
      imageSlideIndex = 0;
      imageSliderWrapper.style.transition = 'none'; // Disable transition for jump
      imageSliderWrapper.style.transform = `translateX(0px)`;
      // Force a re-layout
      imageSliderWrapper.offsetHeight;
      imageSliderWrapper.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
      setTimeout(() => {
        slideImageTo(imageSlideIndex + 1);
      }, 100);
    }
  }
}, 3000); // Auto slide every 3 seconds

// Recalculate slide width on window resize
window.addEventListener('resize', () => {
  // No need to explicitly slide, the transform will adjust with the new width
  imageSliderWrapper.style.transition = 'none'; // Disable transition during resize
  imageSliderWrapper.style.transform = `translateX(-${imageSlideIndex * getImageSlideWidth()}px)`;
  imageSliderWrapper.offsetHeight; // Trigger reflow
  imageSliderWrapper.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
});











const slideTrack = document.getElementById('slideTrack');
        const sliderItems = document.querySelectorAll('.slider-item');
        const slideControls = document.getElementById('slideControls');
        let controlButtons = []; // Initialize as an empty array
        let currentSlide = 0;
        const totalSlides = sliderItems.length;

        function navigateSlide(index) {
            if (index < 0) {
                currentSlide = totalSlides - 1;
            } else if (index >= totalSlides) {
                currentSlide = 0;
            } else {
                currentSlide = index;
            }

            const translateX = -currentSlide * 100 + '%';
            slideTrack.style.transform = `translateX(${translateX})`;

            // Update active class for slides
            sliderItems.forEach((item, i) => {
                item.classList.remove('is-active');
                if (i === currentSlide) {
                    item.classList.add('is-active');
                }
            });

            // Update active class for controls
            controlButtons.forEach((button, i) => {
                button.classList.remove('is-active');
                if (i === currentSlide) {
                    button.classList.add('is-active');
                }
            });
        }

        // Control button creation and event listeners
        function createControls() {
            slideControls.innerHTML = ''; // Clear existing buttons
            controlButtons = []; // Reset the array before creating new buttons
            for (let i = 0; i < totalSlides; i++) {
                const button = document.createElement('button');
                button.classList.add('control-button');
                button.setAttribute('data-slide', i);
                if (i === 0) {
                    button.classList.add('is-active');
                }
                button.addEventListener('click', () => {
                    navigateSlide(i);
                });
                slideControls.appendChild(button);
                controlButtons.push(button); // Add the newly created button to the array
            }
        }

        // Initialize controls
        createControls();

        // Initial setup
        navigateSlide(0);

        // Optional: Automatic sliding
        function nextSlide() {
            navigateSlide(currentSlide + 1);
        }

        // setInterval(nextSlide, 5000); // Adjust interval as needed


        const newsWrapper = document.querySelector('.news-slider-wrapper');
const indicatorCircles = document.querySelectorAll('.news-slider-indicator-circle');
let currentItem = 0;
let intervalId;

function updateActiveIndicator(index) {
  indicatorCircles.forEach((circle, i) => {
    circle.classList.toggle('active', i === index);
  });
}

function slideToNextItem() {
  currentItem = (currentItem + 1) % newsWrapper.children.length;
  const slideOffset = newsWrapper.clientWidth * currentItem;
  newsWrapper.scrollTo({
    left: slideOffset,
    behavior: 'smooth'
  });
  updateActiveIndicator(currentItem);
}

function startAutoSlide() {
  intervalId = setInterval(slideToNextItem, 3000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

newsWrapper.addEventListener('scroll', () => {
  const scrollLeft = newsWrapper.scrollLeft;
  const itemWidth = newsWrapper.clientWidth;
  const newCurrentItem = Math.round(scrollLeft / itemWidth);

  if (newCurrentItem !== currentItem) {
    currentItem = newCurrentItem;
    updateActiveIndicator(currentItem);
  }
  stopAutoSlide();
  startAutoSlide();
});

startAutoSlide();