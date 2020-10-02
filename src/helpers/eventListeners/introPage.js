import elements from '../../components/elements';
import sortingPage from '../../initialPage/genFirstPage';
import binarySearchPage from '../../pages/BinarySearch';

const introListeners = () => {
  const { binarySearchBtn, sortingBtn, root } = elements();
  sortingBtn.addEventListener('click', () => {
    root.innerHTML = '';
    sortingPage.exec();
  });
  binarySearchBtn.addEventListener('click', () => {
    root.innerHTML = '';
    binarySearchPage();
  });
};

export default introListeners;