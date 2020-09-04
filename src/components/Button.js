const button = (name, classes) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.classList = classes;
  button.innerText = name;
  return button;
};

export default button;