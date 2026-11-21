const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
      navigation.classList.remove('is-open');
    }
  });
}

document.querySelectorAll('[data-year]').forEach((year) => {
  year.textContent = new Date().getFullYear();
});

const enquiryForm = document.querySelector('#enquiry-form');
if (enquiryForm) {
  const serviceSelect = document.querySelector('#service-select');
  const requestedService = new URLSearchParams(window.location.search).get('service');
  const serviceOptions = {
    'sme-loan': 'SME loan facilitation',
    pof: 'Proof of Funds assistance',
    poe: 'Point of Entry support'
  };

  if (requestedService && serviceOptions[requestedService]) {
    serviceSelect.value = serviceOptions[requestedService];
  }

  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) return;

    const fields = new FormData(enquiryForm);
    const subject = `KSE enquiry: ${fields.get('service')}`;
    const body = [
      `Name: ${fields.get('name')}`,
      `Phone: ${fields.get('phone')}`,
      `Email: ${fields.get('email')}`,
      `Service: ${fields.get('service')}`,
      '',
      'Enquiry:',
      fields.get('message')
    ].join('\n');
    const mailto = `mailto:kemirani48@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.querySelector('#form-status').textContent = 'Your email app should open with your enquiry ready to send. If it doesn’t, email kemirani48@gmail.com.';
    window.location.href = mailto;
  });
}
