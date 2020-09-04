import button from './Button';

const genNavbar = () => {
  const navBar = document.createElement('nav');
  navBar.classList = 'bg-blue-400 h-32 w-100 flex ';
  const sortDiv = document.createElement('div');
  sortDiv.appendChild(button('bubble sort'));
  navBar.appendChild(sortDiv);
  return navBar;
};

export default genNavbar;