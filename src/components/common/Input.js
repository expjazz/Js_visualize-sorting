const Input = (label, id, classList, containerClassList) => {
  const target = document.createElement('input');
  target.id = id;
  target.classList = classList;
  const labelInp = document.createElement('label');
  labelInp.innerText = label;
  labelInp.appendChild(target);
  const inputContainer = document.createElement('div');
  inputContainer.appendChild(labelInp);
  inputContainer.classList = containerClassList;
  return inputContainer;
};

export default Input;