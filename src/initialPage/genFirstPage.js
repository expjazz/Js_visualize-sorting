import allElements from '../components/elements';
import genNavBar from '../components/NavBar';

const { elements: { root } } = allElements;
const exec = () => {
  root.appendChild(genNavBar());
};

export default { exec };