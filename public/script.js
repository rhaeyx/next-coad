// JS FOR DROPDOWN
// Get the dropdown link and nested list
const dropdownLink = document.getElementById('dropdown-link');
const dropdownList = document.getElementById('dropdown-list');

// Toggle the "hidden" class on the nested list when the link is hovered
dropdownLink.addEventListener('click', () => {
	dropdownList.classList.toggle('hidden');
});

// Hide the nested list when the user hovers outside of it
document.addEventListener('click', (event) => {
	if (
		!(
			dropdownLink.contains(event.target) || dropdownList.contains(event.target)
		)
	) {
		dropdownList.classList.add('hidden');
	}
});
