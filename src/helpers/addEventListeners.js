import helpers from './helpers';
import elements from '../components/elements';
import bubbleSort from '../algorithms/bubbleSort';
import insertionSort from '../algorithms/insertSort';

const addEventListeners = () => {
  console.log('here');
  const {
    arrayInput, bubbleSortBtn, allArrays, insertionSortBtn,
  } = elements();
  const { cleanArray, shuffleArray } = helpers;
  arrayInput.addEventListener('change', cleanArray);
  bubbleSortBtn.addEventListener('click', () => bubbleSort(allArrays));
  insertionSortBtn.addEventListener('click', () => insertionSort(allArrays));
};

export default addEventListeners;