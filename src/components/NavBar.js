import button from './Button';
import inputRange from './InputRange';

const genNavbar = () => {
  const navBar = document.createElement('nav');
  navBar.classList = 'bg-blue-400 h-32 w-100 justify-around flex pt-8 ';
  const sortDiv = document.createElement('div');

  const allSorts = ['Bubble Sort', 'Merge Sort', 'Quick Sort', 'Insert Sort'];
  allSorts.forEach((sort) => {
    sortDiv.appendChild(button(sort, 'mr-8'));
  });
  navBar.appendChild(sortDiv);
  navBar.appendChild(inputRange('Array Size:', 'grid'));
  return navBar;
};

export default genNavbar;