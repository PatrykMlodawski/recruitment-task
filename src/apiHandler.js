const URL = 'https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json';

async function getVendors() {
  let data;
  try {
    const response = await fetch(URL);
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  return data.vendors;
}

export default getVendors;
