import { cookiesHandler } from './cookies';

function handleBtnKeydown(e) {
  if (e.keyCode === 13) {
    const checkbox = document.getElementById(e.target.htmlFor);
    checkbox.checked = !checkbox.checked;
  }
}

function createElement(tagName, htmlClass, content, type = null) {
  const element = document.createElement(tagName);
  element.classList.add(htmlClass);
  element.textContent = content;
  if (type) element.type = type;

  return element;
}

export function createListItem(id, name, policyUrl) {
  const item = document.createElement('li');
  item.classList.add('gdpr-popup-list-item');
  const input = document.createElement('input');
  input.classList.add('switch');
  input.type = 'checkbox';
  input.id = id;
  input.name = name;
  input.checked = true;
  input.tabIndex = -1;
  const label = document.createElement('label');
  label.setAttribute('role', 'button');
  label.addEventListener('keydown', handleBtnKeydown);
  label.tabIndex = 0;
  label.classList.add('switch-label');
  label.htmlFor = id;
  label.appendChild(document.createElement('span')).appendChild(document.createElement('span')).classList.add('circle');
  const paragraph = document.createElement('p');
  paragraph.classList.add('list-item-paragraph');
  paragraph.textContent = `${name}, `;
  const policyLink = document.createElement('a');
  policyLink.classList.add('list-item-link');
  policyLink.textContent = 'Privacy policy';
  policyLink.href = policyUrl;
  policyLink.target = '_blank';

  paragraph.appendChild(policyLink);
  item.appendChild(paragraph);
  item.appendChild(input);
  item.appendChild(label);

  return item;
}

function createPopup(title, content) {
  const popup = document.createElement('div');
  popup.classList.add('gdpr-popup');
  const titleElement = createElement('h1', 'gdpr-popup-title', title);
  const buttons = document.createElement('div');
  buttons.classList.add('gdpr-popup-buttons');
  buttons.addEventListener('click', cookiesHandler);
  const acceptButton = createElement('button', 'accept-button', 'Accept', 'button');
  const rejectButton = createElement('button', 'reject-button', 'Reject', 'button');

  buttons.appendChild(acceptButton);
  buttons.appendChild(rejectButton);
  popup.appendChild(titleElement);
  popup.appendChild(content);
  popup.appendChild(buttons);

  document.body.classList.add('popup-open');
  return popup;
}

export function closePopup() {
  const popup = document.querySelector('.gdpr-popup');
  popup.parentNode.removeChild(popup);
  document.body.classList.remove('popup-open');
}

export default createPopup;
