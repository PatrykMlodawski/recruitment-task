import createPopup from './popup';
import getVendors from './apiHandler';

const vendorsList = document.createElement('ul');
vendorsList.classList.add('gdpr-popup-list');

const vendors = {
  names: [],
  policyUrls: [],
};

function createListItem(name, policyUrl) {
  const item = document.createElement('li');
  item.classList.add('gdpr-popup-list-item');
  const input = document.createElement('input');
  input.classList.add('switch');
  input.type = 'checkbox';
  input.id = name;
  input.checked = true;
  const label = document.createElement('label');
  label.classList.add('switch-label');
  label.htmlFor = name;
  label.appendChild(document.createElement('span'));
  const paragraph = document.createElement('p');
  paragraph.classList.add('list-item-paragraph');
  paragraph.textContent = `${name}, `;
  const policyLink = document.createElement('a');
  policyLink.classList.add('list-item-link');
  policyLink.textContent = 'Privacy policy';
  policyLink.href = policyUrl;
  policyLink.target = '_blank';

  paragraph.appendChild(policyLink);
  item.appendChild(input);
  item.appendChild(paragraph);
  item.appendChild(label);

  return item;
}

function setVendors() {
  (async () => {
    const data = Object.values(await getVendors());
    data.forEach((vendor) => {
      vendors.names.push(vendor.name);
      vendors.policyUrls.push(vendor.policyUrl);
    });

    for (let i = 0; i < vendors.names.length; i++) {
      vendorsList.appendChild(createListItem(vendors.names[i], vendors.policyUrls[i]));
    }

    const popup = createPopup('GDPR consent', vendorsList);

    document.body.appendChild(popup);
  })();
}

function init() {
  setVendors();
}

init();
