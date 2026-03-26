const sendButton = document.querySelector('[data-send-open]');
const sendModal = document.querySelector('[data-send-modal]');
const sendEnvelope = document.querySelector('[data-send-envelope]');
const sendStatus = document.querySelector('[data-send-status]');

if (sendButton && sendModal && sendEnvelope && sendStatus) {
  let closeTimer = null;

  const closeSendModal = () => {
    sendModal.hidden = true;
    sendEnvelope.classList.remove('is-flying');
    sendStatus.textContent = 'Sending...';
    document.body.classList.remove('menu-open');
  };

  sendButton.addEventListener('click', () => {
    sendModal.hidden = false;
    document.body.classList.add('menu-open');
    sendStatus.textContent = 'Sending...';

    sendEnvelope.classList.remove('is-flying');
    void sendEnvelope.offsetWidth;
    sendEnvelope.classList.add('is-flying');

    window.setTimeout(() => {
      sendStatus.textContent = 'Message sent!';
    }, 900);

    if (closeTimer) {
      window.clearTimeout(closeTimer);
    }

    closeTimer = window.setTimeout(() => {
      closeSendModal();
      closeTimer = null;
    }, 1700);
  });

  sendModal.addEventListener('click', event => {
    if (event.target === sendModal) {
      if (closeTimer) {
        window.clearTimeout(closeTimer);
        closeTimer = null;
      }
      closeSendModal();
    }
  });
}
