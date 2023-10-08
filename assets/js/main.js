
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Initiate glightbox
   */  
  const lightbox = GLightbox();



});

window.addEventListener('load', () => {
  aos_init();
});
