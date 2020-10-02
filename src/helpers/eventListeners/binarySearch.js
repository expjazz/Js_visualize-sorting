/* eslint-disable prefer-const */
import elements from '../../components/elements';
import pointer from '../../components/binarySearch/pointer';

export default function binarySearchListeners() {
  const { genericNav } = elements();
  const bsButton = genericNav.querySelector('button');
  const input = genericNav.querySelector('input');
  const arrays = document.querySelector('.arrayNumber');
  console.log(arrays);
  let start = 0;
  let end = arrays.children.length - 1;
  let mid = Math.floor((start + end) / 2);
  bsButton.addEventListener('click', (e) => {
    Array.from(arrays.children).forEach((num, index) => {
      if (index === start) {
        num.appendChild(pointer('start'));
      } else if (index === mid) {
        num.appendChild(pointer('mid'));
      } else if (index === end) {
        num.appendChild(pointer('end'));
      }
    });
    console.log(e.currentTarget.parentNode.querySelector('input').value);
    console.log(arrays.children.length);
  });
}