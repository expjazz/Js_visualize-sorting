/* eslint-disable radix */
/* eslint-disable no-await-in-loop */
import helpers from '../helpers/helpers';

const helperSort = async (arr, start, end) => {
  console.log('here');
  const { swap } = helpers;
  const list = arr.childNodes;
  console.log(list);
  if (start > end) return '';
  const pivot = start;
  let left = start + 1;
  let right = end;

  while (right >= left) {
    if (parseInt(list[left].innerText) > parseInt(list[pivot].innerText) && parseInt(list[right].innerText) < parseInt(list[pivot].innerText)) {
      await swap(right, left, arr);
    }
    if (parseInt(list[left].innerText) <= parseInt(list[pivot].innerText)) {
      left += 1;
    }
    if (parseInt(list[right].innerText) >= parseInt(list[pivot].innerText)) {
      right -= 1;
    }
  }
  await swap(pivot, right, arr);
  list[right].classList.add('bg-green-200');
  list[right].classList.remove('bg-red-800');
  const leftIsSmaller = right - 1 + start > end - (right + 1);
  if (leftIsSmaller) {
    helperSort(arr, start, right - 1);
    helperSort(arr, right + 1, end);
  } else {
    helperSort(arr, right + 1, end);
    helperSort(arr, start, right - 1);
  }
};

const quickSort = (array) => {
  helperSort(array, 0, array.childNodes.length - 1);
};

export default quickSort;