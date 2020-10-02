import pointerGen from '../../components/binarySearch/pointer';

export default function arrayGenerator() {
  const container = document.createElement('div');
  container.classList = 'arrayNumber flex p-8 m-8';
  const array = [];
  for (let i = 0; i < 30; i++) {
    const num = Math.floor(Math.random() * 100);
    array.push(num);
  }
  array.sort((a, b) => a - b);
  container.innerHTML = array.map((num) => `<p class="flex-1">${num}</p>`);

  return container;
}