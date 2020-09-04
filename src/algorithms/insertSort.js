/* eslint-disable no-await-in-loop */
/* eslint-disable radix */
import helper from '../helpers/helpers';

const insertionSort = async (arr) => {
  const { swap } = helper;
  for (let i = 1; i < arr.childNodes.length; i++) {
    let j = i;
    while (j > 0 && parseInt(arr.childNodes[j].innerText) < parseInt(arr.childNodes[j - 1].innerText)) {
      await swap(j, j - 1, arr);
      j -= 1;
    }
  }
};

export default insertionSort;