const dynamicTextElement = document.getElementById('dynamic-text');
const dynamicTexts = ["I'm Georgios Vourvachakis", "From Greece"];
let currentTextIndex = 0;
let currentText = '';
let isDeleting = false;
let typingSpeed = 80; // Adjust the typing speed here (lower value means faster typing)

function type() {
  const currentIndex = currentTextIndex % dynamicTexts.length;
  const fullText = dynamicTexts[currentIndex];

  if (isDeleting) {
    currentText = fullText.substring(0, currentText.length - 1);
  } else {
    currentText = fullText.substring(0, currentText.length + 1);
  }

  dynamicTextElement.innerHTML = currentText;

  let typingDelay = typingSpeed;

  if (isDeleting) {
    typingDelay /= 2; // Make the deleting faster
  }

  if (!isDeleting && currentText === fullText) {
    typingDelay = 1000; // Wait for 1 second after typing
    isDeleting = true;
  } else if (isDeleting && currentText === '') {
    isDeleting = false;
    currentTextIndex++;
    typingDelay = 500; // Pause before typing the next text
  }

  setTimeout(type, typingDelay);
}

document.addEventListener('DOMContentLoaded', type);


// Get the modal and logo elements
const modal = document.getElementById('imageModal');
const logo = document.querySelector('.logo');

// When the logo is clicked, show the modal with the zoomed image
logo.addEventListener('click', function () {
  modal.style.display = 'block';
  const zoomedLogo = document.getElementById('zoomedLogo');
  zoomedLogo.src = logo.src;
});

// When the close button (x) is clicked, hide the modal
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});




  function openColorOptions() {
    const colorOptionsModal = document.getElementById('colorOptionsModal');
    colorOptionsModal.style.display = 'block';

  }
  
  function closeColorOptions() {
    const colorOptionsModal = document.getElementById('colorOptionsModal');
    colorOptionsModal.style.display = 'none';
  }
  
  function openColorOptionsModal() {
  const colorOptionsModal = document.getElementById('colorOptionsModal');
  colorOptionsModal.style.display = 'block';
  } 



  function toggleColorOptionsFrame() {
    const frame = document.getElementById('colorOptionsFrame');
    // frame.style.display = frame.style.display === 'block' ? 'none' : 'block';
    


    // Update gear-icon position based on scroll and rotation state
    const gearIcon = document.querySelector('.fa-solid.fa-gear');
    const header = document.getElementById('header');
    const headerHeight = header.clientHeight;
    const scrolled = window.pageYOffset;
    

    // Check if the gear-icon is clicked to show the color options
  if (gearIcon.classList.contains('rotating')) {
    frame.style.display = 'block';
  } else {
    frame.style.display = 'none';
  }

  
   // Update gear-icon position based on scroll
   window.addEventListener('scroll', function () {
    const gearIcon = document.querySelector('.fa-solid.fa-gear');
    const header = document.getElementById('header');
    const headerHeight = header.clientHeight;
    const scrolled = window.pageYOffset;
  
    if (scrolled > headerHeight) {
      gearIcon.style.top = `${10 + scrolled - headerHeight}px`; // Adjust the desired top position when the user scrolls
    } else {
      gearIcon.style.top = '50px'; // Adjust the original top position when the user is at the top
    }
  });
}

  
  

  function changeColor(color) {
    document.documentElement.style.setProperty('--default-color', color);
    const colorOptionsFrame = document.getElementById('colorOptionsFrame');
    colorOptionsFrame.style.display = 'none';
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach((option) => {
      const colorValue = option.getAttribute('data-color');
      option.style.setProperty('--hover-color', colorValue);
    });
  }
  

  function resetHoverColor(option) {
    option.style.removeProperty('--hover-color');
  }
  
  
  
  let isRotating = false;

function startRotation() {
  isRotating = true;
  const gearIcon = document.getElementById('gearIcon');
  if (!gearIcon.classList.contains('rotating')) {
    gearIcon.classList.add('rotating');
  }
}

function stopRotation() {
  isRotating = false;
  const gearIcon = document.getElementById('gearIcon');
  if (gearIcon.classList.contains('rotating')) {
    gearIcon.classList.remove('rotating');
  }
}


const clickSound = document.getElementById('clickSound');
const gearIcon = document.querySelector('.fa-solid.fa-gear');
const frame = document.getElementById('colorOptionsFrame');

function playClickSound() {
    // Create a new audio object for each click to avoid interruption
    const clickSoundInstance = new Audio(clickSound.src);
    clickSoundInstance.play();
  }
  

function toggleColorOptionsFrame() {
  // Check if the frame is already open or closed
  if (frame.style.display === 'block') {
    frame.style.animation = 'fadeOut 0.5s';
    setTimeout(() => {
      frame.style.display = 'none';
      frame.style.animation = '';
    }, 500);
  } else {
    // Play the click sound when opening the frame
    playClickSound();

    // Add a 100ms delay before displaying the frame
    setTimeout(() => {
      frame.style.display = 'block';
    }, 100);
  }
}

// Event listener to close the frame when clicking outside of it
document.addEventListener('click', (event) => {
  if (!frame.contains(event.target) && event.target !== gearIcon) {
    frame.style.display = 'none';
  }
});  

// Event listener for the gear icon to toggle the frame
gearIcon.addEventListener('click', toggleColorOptionsFrame);

// Add event listeners to the color options for playing the click sound on hover
const colorOptions = document.querySelectorAll('.color-option');

colorOptions.forEach((option) => {
  const colorValue = option.getAttribute('data-color');
  option.style.setProperty('--hover-color', colorValue);
  option.addEventListener('mouseenter', () => {
    clickSound.play();
  });
  option.addEventListener('mouseenter', () => {
    // Play the click sound after a 10ms delay
    setTimeout(() => {
      clickSound.play();
    }, 10);
  });
});


window.addEventListener('load', function () {
  const loadingScreen = document.querySelector('section');
  loadingScreen.style.display = 'none';
});
  
//GO-TO-HOME ANIMATION
let isScrollButtonVisible = true; // Initial state is visible

function toggleScrollButton() {
  const button = document.getElementById('goToHomeButton');
  isScrollButtonVisible = !isScrollButtonVisible; // Toggle the visibility state
  button.style.transform = isScrollButtonVisible ? 'scale(1)' : 'scale(0)'; // Hide/show the button using scale
}
function scrollToTop() {
  // Smoothly scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// END OF GO-TO-HOME ANIMATION



// about section

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
    
    function opentab(tabname){
      for(tablink of tablinks){
        tablink.classList.remove("active-link");
      }
      for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link")
      document.getElementById(tabname).classList.add("active-tab");

      // Add the following lines to toggle the "two-columns" class
      if (tabname === 'skills') {
        document.getElementById(tabname).classList.add('two-columns');
      } else {
        document.getElementById(tabname).classList.remove('two-columns');
      }
    }

// Projects Section (SLIDER ANIMATION)

let works = document.querySelectorAll(".slider .work");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let active = 1;

let isOnProjectsSection = false; // Track if the user is on the Projects Section


function loadShow() {
  let stt = 0;

  // Reset previous styles
  works[active].style.transform = 'none';
  works[active].style.zIndex = 1;
  works[active].style.filter = 'none';
  works[active].style.opacity = 1;

  // Move the cards behind the center card (active card)
  for (var i = active + 1; i < works.length; i++) {
    stt++;
    works[i].style.transform = `translateX(${10 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-0.5deg)`;
    works[i].style.zIndex = -stt;
    works[i].style.filter = 'blur(5px)';
    works[i].style.opacity = stt > 1 ? 0 : 0.6;
  }

  stt = 0;

  for (var i = active - 1; i >= 0; i--) {
    stt++;
    works[i].style.transform = `translateX(${-10 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(0.5deg)`;
    works[i].style.zIndex = -stt;
    works[i].style.filter = 'blur(5px)';
    works[i].style.opacity = stt > 1 ? 0 : 0.6;
  }
}

loadShow();

next.onclick = function() {
  active = active + 1 < works.length ? active + 1 : active;
  loadShow();
};

prev.onclick = function() {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
};

// Add keydown event listener to the document, based on the Projects Section visibility
function handleArrowKey(event) {
  // Check if the user is on the Projects Section and has interacted with the section
  if (isOnProjectsSection) {
    if (event.key === 'ArrowRight') { // Right arrow key
      active = active + 1 < works.length ? active + 1 : active;
      loadShow();
    } else if (event.key === 'ArrowLeft') { // Left arrow key
      active = active - 1 >= 0 ? active - 1 : active;
      loadShow();
    }
  }
}

// Set the flag to true when the user clicks on the Projects Section
document.getElementById('projects').addEventListener('click', function() {
  isOnProjectsSection = true;
  document.addEventListener('keydown', handleArrowKey);
});

// Remove the event listener when the user clicks outside the Projects Section
document.addEventListener('click', function(event) {
  if (!event.target.closest('#projects')) {
    isOnProjectsSection = false;
    document.removeEventListener('keydown', handleArrowKey);
  }
});






// Contact Section

//Clearing the contact form whenever the user refreshes the page

window.addEventListener("load", function() {
  const contactForm = document.forms["contact-form"];
  if (contactForm) {
    contactForm.reset();
  }
});

// Get references to the content and the copyright sections
const contactContents = document.getElementById("contact-contents");
const copyrightSection = document.getElementById("copyright-section");
const resetButton = document.getElementById("resetButton");
const enjoyButton = document.getElementById("enjoyButton");

// Get references to the blob-animation and blob-animation2 elements
const blobAnimation = document.querySelector(".blob-animation");
const blobAnimation2 = document.querySelector(".blob-animation2");

// Initialize the animation duration
let animationDuration = 5000; // in milliseconds

// Listen for the "enjoy" button click event
enjoyButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  
  // Toggle the visibility and opacity of the content sections
  contactContents.classList.add("fade-out"); // Add the fade-out class to content
  copyrightSection.classList.add("fade-out"); // Add the fade-out class to copyright
  resetButton.classList.remove("hidden-ascend"); // Show the reset button
  resetButton.classList.remove("fade-out"); // Remove the fade-out class
  // Toggle the reset button's visibility
  resetButton.classList.remove("hidden");
  resetButton.style.pointerEvents = "auto"; // Enable pointer interactions when revealed
  
  blobAnimation.style.setProperty("--animation-duration", `${animationDuration}ms`);
  blobAnimation.classList.remove("reset-size"); // Remove the reset class if present
  blobAnimation.classList.add("enjoy-zoom"); // Apply the zoom effect

  blobAnimation2.style.setProperty("--animation-duration", `${animationDuration}ms`); // Set the animation duration
  blobAnimation2.classList.remove("reset-size"); // Remove the reset class if present
  blobAnimation2.classList.add("enjoy-zoom"); // Apply the zoom effect
});

// Listen for the "reset" button click event
resetButton.addEventListener("click", function(event) {
  event.preventDefault();
  contactContents.classList.remove("fade-out");
  copyrightSection.classList.remove("fade-out");
  resetButton.classList.add("fade-out"); // Apply the fade-out class
  resetButton.style.pointerEvents = "none"; // Disable pointer interactions when hidden
  
  blobAnimation.style.setProperty("--animation-duration", `${animationDuration}ms`);
  blobAnimation.classList.remove("enjoy-zoom"); // Remove the zoom class if present
  blobAnimation.classList.add("reset-size"); // Apply the reset animation
  
  blobAnimation2.style.setProperty("--animation-duration", `${animationDuration}ms`); // Set the animation duration
  blobAnimation2.classList.remove("enjoy-zoom"); // Remove the zoom class if present
  blobAnimation2.classList.add("reset-size"); // Apply the reset animation
});

// Function to reset the fading effect
function resetFading() {
  contactContents.classList.remove("fade-out");
  copyrightSection.classList.remove("fade-out");
  resetButton.classList.add("hidden");
}





