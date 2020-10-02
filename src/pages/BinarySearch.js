import navbar from '../components/binarySearch/navBar';
import elements from '../components/elements';
import arrayGen from '../helpers/binarySearch/arrayGenerator';
import listeners from '../helpers/eventListeners/binarySearch';

const pageBinarySearch = () => {
  const { root } = elements();
  root.appendChild(navbar());
  root.appendChild(arrayGen());
  listeners();
};

export default pageBinarySearch;