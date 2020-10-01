import elements from '../components/elements';
import button from '../components/Button';

const { root } = elements();
const introGen = () => {
  const buttonsCont = document.createElement('div');
  buttonsCont.classList = 'grid';
  const sortingBtn = button('Sorting Algorithms', 'bg-blue-700 p-8 ');
  const binarySearch = button('Binary Search', 'bg-blue-700 p-8 ');
  buttonsCont.appendChild(sortingBtn);
  buttonsCont.appendChild(binarySearch);
  root.appendChild(buttonsCont);
};

export default introGen;