import barter from '../images/barter.png';
import gravel from '../images/gravel.png';
import shopping from '../images/shopping.png';
import recipe from '../images/recipe.jpg';
import weather from '../images/weather.jpg';

const projectsObjects = [
  {
    title: 'Barter Bud',
    projectHref: 'https://secure-headland-57611.herokuapp.com/',
    code: 'https://github.com/caseycling/Project2',
    image: barter,
    description:
      'Barter Bud is a trading app. Users are able to sign up and log in with a unique account where they can upload items for trade and browse other user items. MongoDB saves pictures and descriptions posted to the site through a RESTfulAPI and the user can post, update or delete them.',
  },
  {
    title: 'Gravel',
    projectHref: 'https://gravel-app.herokuapp.com/',
    code: 'https://github.com/mrgmacandog/gravel',
    image: gravel,
    description:
      'Car-pooling app which connects drivers and passengers. After creating and logging into an account using local-auth, users are able to make posts requesting or offering rides and see rides from other users. Once a ride is selected, contact information is displayed for communication.',
  },
  {
    title: 'Shopping-list App',
    projectHref: 'https://caseyclingaman.herokuapp.com/',
    code: 'https://github.com/caseycling/MERN-stack',
    image: shopping,
    description:
      'A simple shopping list application using the MERN stack. Implemented react-strap for styling the app along with Redux for state managment. Using a RESTful API and MongoDB, list items can be added for display, updated with a line-through or deleted for removal.',
  },
  {
    title: 'Recipe Generator',
    projectHref: 'https://caseycling.github.io/recipeApp/',
    code: 'https://github.com/caseycling/recipeApp/',
    image: recipe,
    description:
      'App for finding recipes using RESTful API. Upon entering an ingredient in the search bar, the Edmam API is queried for recipes relative to ingredient. The resulting JSON response object is then passed in as props to the recipe component which then displays  the top ten resulting recipes.',
  },
  {
    title: 'Weather App',
    projectHref: 'https://caseycling.github.io/weather-app/',
    code: 'https://github.com/caseycling/weather-app/',
    image: weather,
    description:
      'Single-page application built with a React.js for searching the weather. After entering in a city, a request is sent to OpenWeatherMap using HTTP protocol and the resulting date and weather is displayed with background dynamically changing dependent on the weather.',
  },
];

export default projectsObjects;
