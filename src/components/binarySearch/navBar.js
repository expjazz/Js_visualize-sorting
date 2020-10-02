import elements from '../elements';
import genericNav from '../common/genericNavBar';
import input from '../common/Input';

function navBar() {
  const nav = genericNav();

  nav.appendChild(input('Number to find', 'Binary Search Target', 'w-full', 'w-8-12'));

  return nav;
}

export default navBar;