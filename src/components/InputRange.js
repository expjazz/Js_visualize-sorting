const inputRange = (label, classesLab, classesInp = '') => {
  const input = document.createElement('input');
  input.type = 'range';
  input.min = '0';
  input.max = '100';
  input.classList = classesInp;
  const labelEle = document.createElement('label');
  labelEle.innerText = label;
  labelEle.classList = classesLab;
  labelEle.appendChild(input);
  console.log(input.value);
  return labelEle;
};

export default inputRange;