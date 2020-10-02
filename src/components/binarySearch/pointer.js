export default function pointer(id) {
  const container = document.createElement('div');
  container.id = id;
  const top = document.createElement('div');
  top.classList = 'arrow';
  top.style.transform = 'rotate(225deg)';
  container.appendChild(top);
  const body = document.createElement('div');
  body.classList = 'bg-red-800 w-1 m-auto h-48';
  container.appendChild(body);
  container.style.transition = 'all 2s ease';
  return container;
}