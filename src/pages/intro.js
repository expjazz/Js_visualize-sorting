import elements from '../components/elements';
import button from '../components/Button';

const { root } = elements();
const introGen = () => {
  const buttonsCont = document.createElement('div');
  buttonsCont.classList = 'grid justify-center gap-5';
  const sortingBtn = button('Sorting Algorithms', 'bg-blue-700 px-8 w-9/12 ');
  const binarySearch = button('Binary Search', 'bg-blue-700 px-8 w-9/12');
  buttonsCont.appendChild(sortingBtn);
  buttonsCont.appendChild(binarySearch);
  root.appendChild(buttonsCont);
};

export default introGen;