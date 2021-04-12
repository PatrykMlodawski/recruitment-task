import createPopup, { createListItem } from './popup';
import getVendors from './apiHandler';

function setVendors() {
  const vendors = {
    ids: [],
    names: [],
    policyUrls: [],
  };

  (async () => {
    const data = Object.values(await getVendors());
    data.forEach((vendor) => {
      vendors.ids.push(vendor.id);
      vendors.names.push(vendor.name);
      vendors.policyUrls.push(vendor.policyUrl);
    });

    const vendorsList = document.createElement('ul');
    vendorsList.classList.add('gdpr-popup-list');

    for (let i = 0; i < vendors.names.length; i++) {
      vendorsList.appendChild(createListItem(vendors.ids[i], vendors.names[i], vendors.policyUrls[i]));
    }

    document.body.appendChild(createPopup('GDPR consent', vendorsList));
  })();
}

function init() {
  if (!document.cookie.match(/gdprConsents/)) setVendors();
}

init();
