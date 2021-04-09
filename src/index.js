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
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = name;
  const label = document.createElement('label');
  label.htmlFor = name;
  const paragraphUrl = document.createElement('p');
  paragraphUrl.classList.add('list-item-url');
  paragraphUrl.textContent = `${name}, Politics of privacy: `;
  const url = document.createElement('a');
  url.textContent = policyUrl;
  url.href = policyUrl;

  paragraphUrl.appendChild(url);
  label.appendChild(paragraphUrl);
  item.appendChild(input);
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

    console.log(data);
    console.log(vendors);
    document.body.appendChild(popup);
  })();
}

function init() {
  setVendors();
}

init();
