let dataModals = document.querySelectorAll('[data-modal-window]');
let modalWindow = document.querySelector('.modal-window');
let nodeBody = document.querySelector('body');

dataModals.forEach( item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      modalWindow.classList.add('modal-window_open');
      nodeBody.classList.add('overflow-stop');
    });
  }
);

document.querySelector('.modal-window__close').addEventListener('click', function () {
  modalWindow.classList.remove('modal-window_open');
  nodeBody.classList.remove('overflow-stop');
});
