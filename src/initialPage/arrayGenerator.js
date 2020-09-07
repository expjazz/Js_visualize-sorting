import elements from '../components/elements';

const arrayGen = () => {
  const { arrayInput, hiddenArr } = elements();
  const arrays = document.createElement('div');
  arrays.id = 'allArrays';
  arrays.classList = 'flex';
  const hidden = document.createElement('div');
  hidden.id = 'hiddenArr';
  const number = arrayInput.value;
  for (let i = 0; i < number; i++) {
    const array = document.createElement('div');
    array.style.height = `${(i * 10)}px`;

    array.classList = 'w-8 bg-red-300 border-yellow-800 border-2 ';
    array.innerHTML = `<h1 class="text-2xl"> ${i} </h1>`;
    const clone = document.createElement('div');
    clone.style.height = `${(i * 10)}px`;
    clone.classList = 'hidden';
    hidden.appendChild(clone);
    arrays.appendChild(array);
  }
  return { arrays, hidden };
};

export default arrayGen;