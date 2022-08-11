'use strict';

import { hidePreview } from "./previewController.js";



const openModal = (modal, classOpen) => {
  modal.classList.add(classOpen);
};

const closeModal = (modal, classOpen, classClose) => {
  modal.classList.remove(classOpen);
};


export const modalContoller = ({ modal, modalBtn, classOpen, classClose }) => {
  modalBtn.addEventListener('click', () => {
    openModal(modal, classOpen);
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains(classClose)){
      closeModal(modal, classOpen);
      hidePreview();
    }
    
  });
};