import helpers from './helpers';
import elements from '../components/elements';

const addEventListeners = () => {
  console.log('here');
  const { arrayInput } = elements();
  const { cleanArray, shuffleArray } = helpers;
  arrayInput.addEventListener('change', cleanArray);
};

export default addEventListeners;