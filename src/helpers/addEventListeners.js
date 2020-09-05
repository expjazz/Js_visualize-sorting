import helpers from './helpers';
import elements from '../components/elements';
import bubbleSort from '../algorithms/bubbleSort';
import insertionSort from '../algorithms/insertSort';
import quickSort from '../algorithms/quickSort';
import mergeSort from '../algorithms/mergeSort';

const addEventListeners = () => {
  const {
    arrayInput, bubbleSortBtn, allArrays, insertionSortBtn, quickSortBtn, mergeSortBtn,
  } = elements();
  const { cleanArray, shuffleArray } = helpers;
  arrayInput.addEventListener('change', cleanArray);
  bubbleSortBtn.addEventListener('click', () => bubbleSort(allArrays));
  insertionSortBtn.addEventListener('click', () => insertionSort(allArrays));
  quickSortBtn.addEventListener('click', () => quickSort(allArrays));
  mergeSortBtn.addEventListener('click', () => mergeSort(allArrays.childNodes));
};

export default addEventListeners;