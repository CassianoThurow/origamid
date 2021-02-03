import activeAccordion from '../modules/accordionlist.js'
import animeScroll from '../modules/animatescroll.js'
import smoothScroll from '../modules/scroll.js'
import initTab from '../modules/tabnav.js'
import showModal from '../modules/modal.js'
import tooltip from '../modules/tooltip.js'
import dropdownMenu from '../modules/dropdown-menu.js'
import menuMobile from '../modules/menumobile.js'
import businessHours from '../modules/businesshours.js'
import initFetchAnimais from '../modules/fetch-animais.js'

initFetchAnimais();
businessHours();
menuMobile();
initTab();
dropdownMenu();
animeScroll();
activeAccordion();
smoothScroll();
showModal();
tooltip();