import navbar from '../components/binarySearch/navBar';
import elements from '../components/elements';
import arrayGen from '../helpers/binarySearch/arrayGenerator';

const pageBinarySearch = () => {
  const { root } = elements();
  root.appendChild(navbar());
  root.appendChild(arrayGen());
};

export default pageBinarySearch;