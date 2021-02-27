import oneCountries from '../templates/one-countries.hbs';
import countries from '../templates/countries.hbs';
import PNotify from '../js/notify';

const refs = {
  countriesContainer: document.querySelector('.js-countries'),
};

function updateCountries(data) {
  const markapOneCountries = oneCountries(data);
  const markapCountries = countries(data);

  if (data.length === 1) {
    refs.countriesContainer.insertAdjacentHTML('beforeend', markapOneCountries);
  } else if ((data.length > 2) & (data.length < 10)) {
    refs.countriesContainer.insertAdjacentHTML('beforeend', markapCountries);
  } else if (data.length > 10) {
    PNotify.alert(
      'Too many matches found. Please enter a more specific query!',
    );
  } 
}

export default updateCountries;
