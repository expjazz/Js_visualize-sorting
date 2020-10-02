import navbar from '../components/common/genericNavBar';
import elements from '../components/elements';

const pageBinarySearch = () => {
  const { root } = elements();
  root.appendChild(navbar());
};

export default pageBinarySearch;