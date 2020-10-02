import navbar from '../components/binarySearch/navBar';
import elements from '../components/elements';

const pageBinarySearch = () => {
  const { root } = elements();
  root.appendChild(navbar());
};

export default pageBinarySearch;