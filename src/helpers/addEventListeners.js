import helpers from './helpers';
import elements from '../components/elements';
import bubbleSort from '../algorithms/bubbleSort';

const addEventListeners = () => {
  console.log('here');
  const { arrayInput, bubbleSortBtn, allArrays } = elements();
  const { cleanArray, shuffleArray } = helpers;
  arrayInput.addEventListener('change', cleanArray);
  bubbleSortBtn.addEventListener('click', () => bubbleSort(allArrays));
};

export default addEventListeners;