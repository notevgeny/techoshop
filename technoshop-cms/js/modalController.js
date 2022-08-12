'use strict';

import { form, modal, modalSubmitBtn, modalTitle } from "./elems.js";
import { fillingForm } from "./formController.js";
import { hidePreview } from "./previewController.js";


const openModal = (id) => {
  if (id){
    fillingForm(id);
  } 
    modal.classList.add('d-block');
};

export const closeModal = () => {
  modal.classList.remove('d-block');
  form.identificator.value = '';
  form.imagesave.value = '';
  hidePreview();
};


export const modalController = ({ modalBtn, delegation }) => {
  if (modalBtn){
    modalBtn.addEventListener('click', () => {
      modalTitle.textContent = 'Добавить новый товар';
      modalSubmitBtn.textContent = 'Добавить товар';  
      openModal();
    });
  }

  if (delegation){
    delegation.parent.addEventListener('click', ({target}) => {
      const targetBtn = target.closest(delegation.target);
      const targetExclude = target.closest(delegation.targetExclude);
      if (targetBtn && !targetExclude){
        modalTitle.textContent = `Изменить товар #${targetBtn.dataset.id}`;
        modalSubmitBtn.textContent = 'Изменить товар'; 
        openModal(targetBtn.dataset.id);
      }
    });
  }
  
  modal.addEventListener('click', ({target}) => {
    if (target === modal || target.classList.contains('btn-close')){
      closeModal();
    }
    
  });
};