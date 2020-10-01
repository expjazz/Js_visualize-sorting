import elements from '../components/elements';
import genNavBar from '../components/NavBar';
import arrayGen from './arrayGenerator';
import sortingListeners from '../helpers/sortingListeners';

const { root } = elements();
const exec = () => {
  console.log('here');
  root.appendChild(genNavBar());
  const { arrays, hidden } = arrayGen();
  root.appendChild(arrays);
  root.appendChild(hidden);
  sortingListeners();
};

export default { exec };