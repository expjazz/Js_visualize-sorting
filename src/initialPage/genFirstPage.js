import allElements from '../components/elements';

const { elements: { root } } = allElements;

const exec = () => {
  const navBar = document.createElement('nav');
  navBar.classList = 'bg-blue-400 h-32 w-100';
  root.appendChild(navBar);
};

export default { exec };