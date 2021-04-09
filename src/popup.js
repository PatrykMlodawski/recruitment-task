function createElement(tagName, htmlClass, content, type = null) {
  const element = document.createElement(tagName);
  element.classList.add(htmlClass);
  element.textContent = content;
  if (type) element.type = type;

  return element;
}

function createPopup(title, content) {
  const popup = document.createElement('div');
  popup.classList.add('gdpr-popup');
  const titleElement = createElement('h1', 'gdpr-popup-title', title);
  const buttons = document.createElement('div');
  buttons.classList.add('gdpr-popup-buttons');
  const acceptButton = createElement('button', 'accept-button', 'Accept', 'button');
  const rejectButton = createElement('button', 'reject-button', 'Reject', 'button');

  buttons.appendChild(acceptButton);
  buttons.appendChild(rejectButton);
  popup.appendChild(titleElement);
  popup.appendChild(content);
  popup.appendChild(buttons);

  return popup;
}

export default createPopup;
