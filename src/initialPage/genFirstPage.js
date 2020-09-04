import elements from '../components/elements';
import genNavBar from '../components/NavBar';
import arrayGen from './arrayGenerator';

const { root } = elements();
const exec = () => {
  root.appendChild(genNavBar());
  root.appendChild(arrayGen());
};

export default { exec };