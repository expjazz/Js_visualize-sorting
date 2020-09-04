const button = (name) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.innerText = name;
  return button;
};

export default button;