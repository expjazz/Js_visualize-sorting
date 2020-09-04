import helpers from './helpers';
import elements from '../components/elements';
import bubbleSort from '../algorithms/bubbleSort';
import insertionSort from '../algorithms/insertSort';
import quickSort from '../algorithms/quickSort';

const addEventListeners = () => {
  const {
    arrayInput, bubbleSortBtn, allArrays, insertionSortBtn, quickSortBtn,
  } = elements();
  const { cleanArray, shuffleArray } = helpers;
  arrayInput.addEventListener('change', cleanArray);
  bubbleSortBtn.addEventListener('click', () => bubbleSort(allArrays));
  insertionSortBtn.addEventListener('click', () => insertionSort(allArrays));
  quickSortBtn.addEventListener('click', () => quickSort(allArrays));
};

export default addEventListeners;