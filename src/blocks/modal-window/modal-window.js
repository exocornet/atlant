let dataModals = document.querySelectorAll('[data-modal-window]');
let modalWindows = document.querySelectorAll('.modal-window');
let nodeBody = document.querySelector('body');
let modalClose = document.querySelectorAll('[data-modal-close]');

dataModals.forEach( item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      let idModal = item.getAttribute('data-modal-window');
      let modalWindow = document.getElementById(idModal);
      modalWindow.classList.add('modal-window_open');
      nodeBody.classList.add('overflow-stop');
    });
});



modalClose.forEach(item => {
    item.addEventListener('click', () => {
      modalWindows.forEach(item => {
        item.classList.remove('modal-window_open');
      });
      nodeBody.classList.remove('overflow-stop');
    });
});
