'use strict';

// This app requires a server to handle import statements
// and CORS issues
import * as utils from './utils.js';


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Element selection                                     */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
const linkedinCard = utils.select('.linkedin-card');
const gitHubCard = utils.select('.github-card');
const whatsAppCard = utils.select('.whatsapp-card');
const emailCard = utils.select('.email-card');

const linkedinLink = "https://www.linkedin.com/in/evanckennedy";
const gitHubLink = "https://github.com/evanckennedy";
const whatsAppLink = "https://wa.me/12044302548";
const emailLink = "mailto:evanckennedy@protonmail.com";

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Open card links in a new tab when clicked             */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
utils.listen('click', linkedinCard, () => {
  window.open(linkedinLink, "_blank");
})

utils.listen('click', gitHubCard, () => {
  window.open(gitHubLink, "_blank");
});

utils.listen('click', whatsAppCard, () => {
  window.open(whatsAppLink, "_blank");
});

utils.listen('click', emailCard, () => {
  window.open(emailLink, "_blank");
});