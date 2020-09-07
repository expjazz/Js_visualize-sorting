import elements from '../components/elements';

const shuffleArray = () => {
  const { allArrays, arrayInput, hiddenArrays } = elements();
  const number = arrayInput.value;

  for (let i = number - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp2 = `${(allArrays.childNodes[i].innerText * 10)}px`;

    allArrays.childNodes[i].style.height = `${(allArrays.childNodes[j].innerText * 10)}px`;
    allArrays.childNodes[j].style.height = temp2;
    const temp = allArrays.childNodes[i].innerText;
    allArrays.childNodes[i].innerText = allArrays.childNodes[j].innerText;
    allArrays.childNodes[j].innerText = temp;
    hiddenArrays.childNodes[i].style.height = `${(hiddenArrays.childNodes[j].innerText * 10)}px`;
    hiddenArrays.childNodes[j].style.height = temp2;
    const temp3 = hiddenArrays.childNodes[i].innerText;
    hiddenArrays.childNodes[i].innerText = hiddenArrays.childNodes[j].innerText;
    hiddenArrays.childNodes[j].innerText = temp3;
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const swap = async (one, two, arr, merge = false, text = false) => {
  await sleep(1000);
  if (merge) {
    arr[one].style.height = `${parseInt(two) * 10}px`;
    arr[one].innerText = two;
  }
  if (merge) return '';
  const temp2 = `${(arr.childNodes[one].innerText * 10)}px`;

  arr.childNodes[one].style.height = `${(arr.childNodes[two].innerText * 10)}px`;
  arr.childNodes[two].style.height = temp2;
  const temp = arr.childNodes[one].innerText;
  arr.childNodes[one].innerText = arr.childNodes[two].innerText;
  arr.childNodes[two].innerText = temp;
};
const cleanArray = () => {
  const { allArrays, arrayInput, hiddenArrays } = elements();
  const number = arrayInput.value;
  allArrays.innerHTML = '';
  hiddenArrays.innerHTML = '';
  for (let i = 0; i < number; i++) {
    const array = document.createElement('div');
    array.classList = 'w-8 bg-red-400 h-48 border-yellow-800 border-2 ';
    array.innerHTML = `<h1 class="text-2xl"> ${i} </h1>`;
    allArrays.appendChild(array);
    const hid = document.createElement('hid');
    hid.classList = 'hidden';
    hid.innerHTML = `<h1 class="text-2xl"> ${i} </h1>`;
    hiddenArrays.appendChild(hid);
  }
  shuffleArray();
};
export default { cleanArray, shuffleArray, swap };