/* eslint-disable radix */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-use-before-define */
import helpers from '../helpers/helpers';
import elements from '../components/elements';

const mergeSort = async (arr) => {
  const { hiddenArrays } = elements();
  helperSort(arr, 0, arr.length - 1, hiddenArrays.childNodes);
  return arr;
};

const helperSort = async (arr, start, end, aux) => {
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  await helperSort(aux, start, mid, arr);
  await helperSort(aux, mid + 1, end, arr);

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
      await swap(k, aux[i].innerText || aux[i], arr, merge);
      // arr[k] = aux[i];

      i += 1;
    } else {
      await swap(k, aux[j].innerText || aux[j], arr, merge);
      // arr[k] = aux[j];
      j += 1;
    }
    k += 1;
  }
  while (i <= mid) {
    await swap(k, aux[i].innerText || aux[i], arr, merge);
    // arr[k] = aux[i];
    i += 1;
    k += 1;
  }
  while (j <= end) {
    await swap(k, aux[j].innerText || aux[j], arr, merge);
    // arr[k] = aux[j];
    j += 1;
    k += 1;
  }
};

export default mergeSort;