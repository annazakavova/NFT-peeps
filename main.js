/* ---------------------------------------------------------------------------------------------------------- */
/* MENU BURGER */
const headerMenu = document.querySelector('.header__menu-burger');
const headerRow = document.querySelector('.header__nav');
if (headerMenu) {
	headerMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		headerMenu.classList.toggle('_active');
		headerRow.classList.toggle('_active');
	});
}