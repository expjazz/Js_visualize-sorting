import button from './Button';

const genNavbar = () => {
  const navBar = document.createElement('nav');
  navBar.classList = 'bg-blue-400 h-32 w-100 flex pt-8 ';
  const sortDiv = document.createElement('div');
  const allSorts = ['Bubble Sort', 'Merge Sort', 'Quick Sort', 'Insert Sort'];
  allSorts.forEach((sort) => {
    sortDiv.appendChild(button(sort, 'mr-8'));
  });
  navBar.appendChild(sortDiv);
  return navBar;
};

export default genNavbar;