function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');

  if (menu) {
    menu.classList.toggle('hidden');
  }
}


// 2. Email Clipboard Copy
function copyEmail() {

  const emailElement = document.getElementById('contact-email');

  if (!emailElement) return;

  const email = emailElement.innerText.trim();

  if (navigator.clipboard) {

    navigator.clipboard.writeText(email)
      .then(() => showNotice('Email copied to clipboard!'))
      .catch(() => fallbackCopy(email));

  } else {

    fallbackCopy(email);

  }
}


// Fallback Copy
function fallbackCopy(text) {

  const input = document.createElement('input');

  input.value = text;

  document.body.appendChild(input);

  input.select();

  document.execCommand('copy');

  document.body.removeChild(input);

  showNotice('Email copied to clipboard!');

}


// 3. Toast Alert Function
function showNotice(text) {

  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');

  if (!toast || !toastMsg) return;

  toastMsg.innerText = text;

  toast.classList.remove(
    'translate-y-24',
    'opacity-0'
  );

  toast.classList.add(
    'translate-y-0',
    'opacity-100'
  );

  setTimeout(() => {

    toast.classList.add(
      'translate-y-24',
      'opacity-0'
    );

    toast.classList.remove(
      'translate-y-0',
      'opacity-100'
    );

  }, 3000);
}
