import helpers from '../helpers/helpers';

const { swap } = helpers;
const bubbleSort = (arr) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        swap(i, i + 1, arr);
      }
    }
  }
  return arr;
};

export default bubbleSort;