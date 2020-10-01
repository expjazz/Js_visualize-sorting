import elements from '../../components/elements';
import sortingPage from '../../initialPage/genFirstPage';

const introListeners = () => {
  const { binarySearchBtn, sortingBtn, root } = elements();
  sortingBtn.addEventListener('click', () => {
    root.innerHTML = '';
    sortingPage.exec();
  });
};

export default introListeners;