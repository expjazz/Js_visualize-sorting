import elements from '../components/elements';

const shuffleArray = () => {
  const { allArrays, arrayInput } = elements();
  const number = arrayInput.value;

  for (let i = number - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = allArrays.childNodes[i].innerText;
    allArrays.childNodes[i].innerText = allArrays.childNodes[j].innerText;
    allArrays.childNodes[j].innerText = temp;
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const swap = async (one, two, arr) => {
  await sleep(3000);
  const temp = arr.childNodes[one].innerText;
  arr.childNodes[one].innerText = arr.childNodes[two].innerText;
  arr.childNodes[two].innerText = temp;
};
const cleanArray = () => {
  const { allArrays, arrayInput } = elements();
  const number = arrayInput.value;
  allArrays.innerHTML = '';
  for (let i = 0; i < number; i++) {
    const array = document.createElement('div');
    array.classList = 'w-8 bg-red-800 h-48 border-yellow-800 border-2 ';
    array.innerHTML = `<h1 class="text-2xl"> ${i} </h1>`;
    allArrays.appendChild(array);
  }
  shuffleArray();
};
export default { cleanArray, shuffleArray, swap };