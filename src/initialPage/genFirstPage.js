import elements from '../components/elements';
import genNavBar from '../components/NavBar';
import arrayGen from './arrayGenerator';

const { root } = elements();
const exec = () => {
  root.appendChild(genNavBar());
  const { arrays, hidden } = arrayGen();
  root.appendChild(arrays);
  root.appendChild(hidden);
};

export default { exec };