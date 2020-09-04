import htmlGen from './initialPage/genFirstPage';
import './assets/sass/styles.scss';
import addEventListeners from './helpers/addEventListeners';
import bubbleSort from './algorithms/bubbleSort';

htmlGen.exec();
addEventListeners();
console.log(bubbleSort([3, 1, 5, 4, 7, 8, 12, 4]));