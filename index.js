const { hash } = window.location;

const input = document.querySelector('#message-input');
const copy = document.querySelector('#copy');
const linkInput = document.querySelector('#link-input');
const message = atob(hash.replace('#', ''));

if (message) {
	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#message-show').classList.remove('hide');

	document.querySelector('h2').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();

	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#link-form').classList.remove('hide');

	const encrypted = btoa(input.value);

	linkInput.value = `${window.location}#${encrypted}`;
	linkInput.select();
});

//Copy to clipboard function
copy.addEventListener('click', () => {
	document.execCommand('Copy');
});

// Materialize Floating Buttons

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.fixed-action-btn');
	var instances = M.FloatingActionButton.init(elems, {
		direction: 'top',
		hoverEnabled: false
	});
});

// Background Different Colors

const test = document.querySelectorAll('.test');

const bg = document.querySelector('body');
for (let i = 0; i < test.length; i++) {
	test[i].addEventListener('click', function() {
		bg.style.backgroundColor = this.getAttribute('data-color');
	});
}
