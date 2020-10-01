import elements from '../components/elements';
import button from '../components/Button';
import listeners from '../helpers/eventListeners/introPage';

const { root } = elements();
const introGen = () => {
  const buttonsCont = document.createElement('div');
  buttonsCont.classList = 'grid justify-center gap-5';
  const sortingBtn = button('Sorting Algorithms', 'bg-blue-700 px-8 w-9/12 ');
  const binarySearchBtn = button('Binary Search', 'bg-blue-700 px-8 w-9/12');
  buttonsCont.appendChild(sortingBtn);
  buttonsCont.appendChild(binarySearchBtn);
  root.appendChild(buttonsCont);
  listeners();
};

export default introGen;