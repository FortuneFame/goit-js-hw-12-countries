import './styles.css';
import updateCountries from './js/update-container';
import fetchCountries from './js/fetch-countries';

const refs = {
  countriesContainer: document.querySelector('.js-countries'),
  inputForm: document.querySelector('.js-form'),
  inputMain: document.querySelector('.input'),
};

var debounce = require('lodash.debounce');

const debounceCallback = debounce(event => {
  const name = event.target.value;

  fetchCountries(name).then(updateCountries);
  refs.countriesContainer.innerHTML = '';
  refs.inputForm.reset();
}, 1400);

refs.inputForm.addEventListener('input', debounceCallback);

