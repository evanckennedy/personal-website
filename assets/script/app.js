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
  window.location.href = linkedinLink;
});

gitHubCard.addEventListener('click', () => {
  window.location.href = gitHubLink;
});

whatsAppCard.addEventListener('click', () => {
  window.location.href = whatsAppLink;
});

emailCard.addEventListener('click', () => {
  window.location.href = emailLink;
});