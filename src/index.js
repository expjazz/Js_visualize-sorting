import htmlGen from './initialPage/genFirstPage';
import './assets/sass/styles.scss';
import addEventListeners from './helpers/addEventListeners';
import bubbleSort from './algorithms/bubbleSort';
import elements from './components/elements';

htmlGen.exec();
addEventListeners();
