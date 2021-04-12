function getConsentsData() {
  const gdprConsentsNodes = document.querySelectorAll('.gdpr-popup-list input');
  const gdprConsents = {
    consent: true,
    vendorConsents: [],
  };

  gdprConsentsNodes.forEach((item) => {
    gdprConsents.vendorConsents[parseInt(item.id)] = item.checked ? 1 : 0;
  });

  return JSON.stringify(gdprConsents);
}

export default getConsentsData;
