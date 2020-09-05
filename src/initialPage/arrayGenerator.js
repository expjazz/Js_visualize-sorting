import elements from '../components/elements';

const arrayGen = () => {
  const { arrayInput, root } = elements();
  const arrays = document.createElement('div');
  arrays.id = 'allArrays';
  arrays.classList = 'flex';

  const number = arrayInput.value;
  for (let i = 0; i < number; i++) {
    const array = document.createElement('div');
    array.style.height = `${(i * 10)}px`;

    array.classList = 'w-8 bg-red-300 border-yellow-800 border-2 ';
    array.innerHTML = `<h1 class="text-2xl"> ${i} </h1>`;
    arrays.appendChild(array);
  }
  return arrays;
};

export default arrayGen;