'use strict';

// This app requires a server to handle import statements
// and CORS issues
import * as utils from './utils.js';


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Element selection                                     */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
const linkedinCard = document.querySelector('.linkedin-card');
const gitHubCard = document.querySelector('.github-card');
const whatsAppCard = document.querySelector('.whatsapp-card');
const emailCard = document.querySelector('.email-card');

const linkedinLink = "https://www.linkedin.com/in/evanckennedy";
const gitHubLink = "https://github.com/evanckennedy";
const whatsAppLink = "https://wa.me/12044302548";
const emailLink = "mailto:evanckennedy@protonmail.com";

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Make cards clickable                                  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

linkedinCard.addEventListener('click', () => {
  window.open(linkedinLink, "_blank");
});

gitHubCard.addEventListener('click', () => {
  window.open(gitHubLink, "_blank");
});

whatsAppCard.addEventListener('click', () => {
  window.open(whatsAppLink, "_blank");
});

emailCard.addEventListener('click', () => {
  window.open(emailLink, "_blank");
});
