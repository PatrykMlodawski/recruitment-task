import getConsentsData from './controllers';
import { closePopup } from './popup';

function setCookie(cookie) {
  document.cookie = ['gdprConsents', '=', cookie, '; max-age=86400', '; path=/;'].join('');
  closePopup();
}

export function cookiesHandler(e) {
  if (e.target.className.split('-')[0] === 'reject') {
    const gdprConsents = {
      consent: false,
    };
    setCookie(JSON.stringify(gdprConsents));
  } else if (e.target.className.split('-')[0] === 'accept') {
    setCookie(getConsentsData());
  }
}
