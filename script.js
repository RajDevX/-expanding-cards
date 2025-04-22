const cards = document.querySelectorAll('.card');

// Remove the active from previous card and add to the targeted one
cards.forEach((card) => {
	card.addEventListener('click', () => {
		removeActiveClass();
		card.classList.add('active');
	});
});

// Remove the active class
function removeActiveClass() {
	cards.forEach((card) => {
		card.classList.remove('active');
	});
}