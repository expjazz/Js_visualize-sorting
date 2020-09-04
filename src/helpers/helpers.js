import elements from '../components/elements';

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
};
export default { cleanArray };