import helpers from '../helpers/helpers';

const { swap } = helpers;
const bubbleSort = async (arr) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.childNodes.length - 1; i++) {
      if (parseInt(arr.childNodes[i].innerText) > parseInt(arr.childNodes[i + 1].innerText)) {
        sorted = false;
        await swap(i, i + 1, arr);
      }
    }
  }
  return arr;
};

export default bubbleSort;