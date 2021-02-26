import { data } from 'autoprefixer';

function fetchCountries(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error));
}

export default fetchCountries;
