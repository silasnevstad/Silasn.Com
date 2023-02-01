// const projectCards = document.querySelectorAll('.project-card');
// let currentProjectIndex = 0;

// function showCurrentProject() {
//   projectCards.forEach((card, index) => {
//     if (index === currentProjectIndex) {
//       card.classList.add('current-project');
//       card.style.display = 'block';
//     } else {
//       card.classList.remove('current-project');
//       card.style.display = 'none';
//     }
//   });
// }

// showCurrentProject();

// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');

// prevButton.addEventListener('click', () => {
//   currentProjectIndex--;
//   if (currentProjectIndex < 0) {
//     currentProjectIndex = projectCards.length - 1;
//   }
//   showCurrentProject();
// });

// nextButton.addEventListener('click', () => {
//   currentProjectIndex++;
//   if (currentProjectIndex === projectCards.length) {
//     currentProjectIndex = 0;
//   }
//   showCurrentProject();
// });
// const projectDescriptions = document.querySelectorAll('.project-description');

// projectDescriptions.forEach(description => {
//     description.addEventListener('click', function() {
//         const projectDetails = this.nextElementSibling;
//         if (projectDetails.classList.contains('hidden')) {
//             projectDetails.classList.remove('hidden');
//             projectDetails.classList.add('expanded');
//             console.log(projectDetails.classList);
//         } else {
//             projectDetails.classList.add('hidden');
//             projectDetails.classList.remove('expanded');
//             console.log(projectDetails.classList);
//         }
//     });
// });
const projectDescriptions = $('.project-description');

const projectDetails = $('.project-details');

const projectCards = $('.project-card');

projectDescriptions.on('click', function() {
    // Hide all project-details elements
    $('.project-details').addClass('hidden');

    // hide this project-description element
    $(this).addClass('hidden');
    // show all the other project-description elements
    projectDescriptions.not(this).removeClass('hidden');

    // show the project-details element of this project-description
    // $(this).next('.project-details').removeClass('hidden');

    // show the project-details element of this project-description with a slide down animation
    $(this).next('.project-details').slideDown(500);

    // make this project-card z-index 3 and the other project-cards z-index 1
    $(this).closest('.project-card').css('z-index', 3);
    projectCards.not($(this).closest('.project-card')).css('z-index', 1);

    // slide up any other project-details elements that are currently expanded
    projectDetails.not($(this).next('.project-details')).slideUp(500);

    // if the project-description element is the third element in the row, add the 'project-details-left' class to the project-details element but we can't use index() because it doesn't work with jQuery objects
    if ($(this).closest('.project-card').index() % 3 === 2) {
      $(this).next('.project-details').addClass('project-details-left');
    } else {
      $(this).next('.project-details').removeClass('project-details-left');
    }

    // // Show the project-details element of the clicked project-description
    // $(this).next('.project-details').removeClass('hidden');

    // // Add the 'project-slider-full-width' class to the project-slider element
    // $('.project-slider').addClass('project-slider-full-width');

    // // Add an event listener to the close button
    // $('.project-details .close-button').on('click', function() {
    //     // Hide the current project-details element
    //     $(this).closest('.project-details').addClass('hidden');

    //     // Remove the 'project-slider-full-width' class from the project-slider element
    //     $('.project-slider').removeClass('project-slider-full-width');
    // });
});

projectDetails.on('click', function() {
  // hide all project-details elements
  $('.project-details').addClass('hidden');

  // the project-details element of the clicked project-description is slid down with a slide up animation slide it back up
  $(this).slideUp(250);

  // wait for the slide up animation to finish
  setTimeout(() => {
    $('.project-description').removeClass('hidden');
  }, 250);

  // show all project-description elements
  
});





const algoPicksH3 = document.getElementById("typed-text-algopicks");
const chessClockH3 = document.getElementById("typed-text-chessclock");
const categoridleH3 = document.getElementById("typed-text-categoridle");

function type(h3) {
  let i = 0;
  const text = h3.textContent;
  h3.textContent = "";
  function typing() {
    if (i < text.length) {
      h3.textContent += text.charAt(i);
      i++;
      setTimeout(typing, Math.floor(Math.random() * 150 + 50));
    } else {
      i = 0;
      setTimeout(() => {
        h3.textContent = "";
        typing();
      }, 2000);
    }
  }
  typing();
}

type(algoPicksH3);
type(chessClockH3);
type(categoridleH3);

// const carousel = document.querySelector('.carousel-container-algo');
// const carouselChess = document.querySelector('.carousel-container-chess');
// let currentImageAlgo = 0;
// let currentImageChess = 0;

// carousel.addEventListener('click', () => {
//     const images = carousel.querySelectorAll('.carousel-image-algo');
//     images.forEach((img, i) => {
//         if (i === currentImageAlgo) {
//             img.style.transform = 'translateX(0)';
//             img.style.opacity = 1;
//             img.style.zIndex = 3;
//         } else if (i === (currentImageAlgo + 1) % images.length) {
//             img.style.transform = 'translateX(10%)';
//             img.style.opacity = 0.4;
//             img.style.zIndex = 2;
//         } else if (i === (currentImageAlgo + 2) % images.length) {
//             img.style.transform = 'translateX(20%)';
//             img.style.opacity = 0.1;
//             img.style.zIndex = 1;
//         }
//     });
//     currentImageAlgo = (currentImageAlgo + 1) % images.length;
// });

// carouselChess.addEventListener('click', () => {
//     const images = carousel.querySelectorAll('.carousel-image-chess');
//     images.forEach((img, i) => {
//         if (i === currentImageChess) {
//             img.style.transform = 'translateX(0)';
//             img.style.opacity = 1;
//             img.style.zIndex = 3;
//         } else if (i === (currentImageChess + 1) % images.length) {
//             img.style.transform = 'translateX(10%)';
//             img.style.opacity = 0.4;
//             img.style.zIndex = 2;
//         } else if (i === (currentImageChess + 2) % images.length) {
//             img.style.transform = 'translateX(20%)';
//             img.style.opacity = 0.1;
//             img.style.zIndex = 1;
//         }
//     });
//     currentImageChess = (currentImageChess + 1) % images.length;
// });
  