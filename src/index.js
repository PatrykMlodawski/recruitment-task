import createPopup from './popup';
import getVendors from './apiHandler';

const test = document.createElement('div');
test.textContent = 'test';
const popup = createPopup('GDPR consent', test);

let data;
(async () => {
  data = await getVendors();
  console.log(data);
  document.body.appendChild(popup);
})();
