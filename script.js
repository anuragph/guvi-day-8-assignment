/* ========================================
DAY 8 ASSIGNMENT

Assignment link: https://docs.google.com/document/d/1iza9j-P6zsN0gZ9ZVuNH0lMxdUeuAYfaGMPvyWL_IcY/edit
===========================================
*/

/* ========================================
1. Solving problems using array functions on rest countries data.
===========================================
*/

let request = new XMLHttpRequest()
request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
request.send()

request.onload = () => {
  let data = JSON.parse(request.response)

  /* a. Get all the countries from Asia continent /region using Filter function
  */  
  let asianCountries = data
    .filter((country) => country.region === 'Asia')
    .map((country) => country.name)
  
  console.log(asianCountries)

  /* b. Get all the countries with a population of less than 2 lakhs using Filter function
  */
  let countriesWithSmallPopulation = data
    .filter((country) => country.population < 200000)
    .map((country) => country.name)
  
  console.log(countriesWithSmallPopulation)

  /* c. Print the following details name, capital, flag using forEach function
  */
  data.forEach((country) => {
    let details = `Name: ${country.name}, Capital: ${country.capital}, Flag: ${country.flag}`

    console.log(details)
  })

  /* d. Print the total population of countries using reduce function
  */
  let totalPopulation = data.reduce((total, current) => total + current.population, 1)
  
  console.log(totalPopulation)

  /* e. Print the country which uses US Dollars as currency.
  */
  let dollarUsers = data
    .filter((country) => country.currencies[0]['code'] === 'USD')
    .map((country) => country.name)

  console.log(dollarUsers)
}

// OUTPUT:

// a. Get all the countries from Asia continent /region using Filter function

// (50) ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei Darussalam', 'Cambodia', 'China', 'Georgia', 'Hong Kong', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', "Lao People's Democratic Republic", 'Lebanon', 'Macao', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', "Korea (Democratic People's Republic of)", 'Oman', 'Pakistan', 'Palestine, State of', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 'Korea (Republic of)', 'Sri Lanka', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Viet Nam', 'Yemen']


// b. Get all the countries with a population of less than 2 lakhs using Filter function

// (63) ['Åland Islands', 'American Samoa', 'Andorra', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Aruba', 'Bermuda', 'Bonaire, Sint Eustatius and Saba', 'Bouvet Island', 'British Indian Ocean Territory', 'United States Minor Outlying Islands', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Cayman Islands', 'Christmas Island', 'Cocos (Keeling) Islands', 'Cook Islands', 'Curaçao', 'Dominica', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'French Southern Territories', 'Gibraltar', 'Greenland', 'Grenada', 'Guam', 'Guernsey', 'Heard Island and McDonald Islands', 'Holy See', 'Isle of Man', 'Jersey', 'Kiribati', 'Liechtenstein', 'Marshall Islands', 'Micronesia (Federated States of)', 'Monaco', 'Montserrat', 'Nauru', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Palau', 'Pitcairn', 'Saint Barthélemy', 'Saint Helena, Ascension and Tristan da Cunha', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin (French part)', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Seychelles', 'Sint Maarten (Dutch part)', 'South Georgia and the South Sandwich Islands', 'Svalbard and Jan Mayen', 'Tokelau', 'Tonga', 'Turks and Caicos Islands', 'Tuvalu', 'Wallis and Futuna']


// c. Print the following details name, capital, flag using forEach function(Only some output pasted here. Total output 250 lines)

// Name: Afghanistan, Capital: Kabul, Flag: https://restcountries.eu/data/afg.svg
// Name: Åland Islands, Capital: Mariehamn, Flag: https://restcountries.eu/data/ala.svg
// Name: Albania, Capital: Tirana, Flag: https://restcountries.eu/data/alb.svg
// ...
// ...
// Name: Namibia, Capital: Windhoek, Flag: https://restcountries.eu/data/nam.svg
// Name: Nauru, Capital: Yaren, Flag: https://restcountries.eu/data/nru.svg
// Name: Nepal, Capital: Kathmandu, Flag: https://restcountries.eu/data/npl.svg
// ...
// ...
// Name: Yemen, Capital: Sana'a, Flag: https://restcountries.eu/data/yem.svg
// Name: Zambia, Capital: Lusaka, Flag: https://restcountries.eu/data/zmb.svg
// Name: Zimbabwe, Capital: Harare, Flag: https://restcountries.eu/data/zwe.svg


// d. Print the total population of countries using reduce function

// 7349137232


// e. Print the country which uses US Dollars as currency.

// (14) ['American Samoa', 'Bonaire, Sint Eustatius and Saba', 'British Indian Ocean Territory', 'United States Minor Outlying Islands', 'Virgin Islands (U.S.)', 'Ecuador', 'El Salvador', 'Guam', 'Marshall Islands', 'Northern Mariana Islands', 'Puerto Rico', 'Timor-Leste', 'Turks and Caicos Islands', 'United States of America']


/* === END === */