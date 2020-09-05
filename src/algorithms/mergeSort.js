/* eslint-disable radix */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-use-before-define */
import helpers from '../helpers/helpers';

const mergeSort = async (arr) => {
  const aux = [];
  arr.forEach((x) => aux.push(x.cloneNode(true)));

  await helperSort(arr, 0, arr.length - 1, aux);

  return arr;
};

const helperSort = async (arr, start, end, aux) => {
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  helperSort(aux, start, mid, arr);
  helperSort(aux, mid + 1, end, arr);

  await doMerge(arr, start, mid, end, aux);
};

const doMerge = async (arr, start, mid, end, aux) => {
  const { swap } = helpers;
  const merge = true;
  let k = start;
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    if (parseInt(aux[i].innerText) <= parseInt(aux[j].innerText)) {
      await swap(k, parseInt(aux[i].innerText), arr, merge);
      // arr[k] = aux[i];
      i += 1;
    } else {
      await swap(k, parseInt(aux[j].innerText), arr, merge);
      // arr[k] = aux[j];
      j += 1;
    }
    k += 1;
  }
  while (i <= mid) {
    await swap(k, parseInt(aux[i].innerText), arr, merge);
    // arr[k] = aux[i];
    i += 1;
    k += 1;
  }
  while (j <= end) {
    await swap(k, parseInt(aux[j].innerText), arr, merge);
    // arr[k] = aux[j];
    j += 1;
    k += 1;
  }
};

export default mergeSort;