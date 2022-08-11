'use strict';

import { modalBtn, modal } from './elems.js';
import { modalContoller } from './modalController.js';
import { previewController } from './previewController.js';

modalContoller({ 
  modal, 
  modalBtn, 
  classOpen: 'd-block', 
  classClose: 'btn-close' 
});
previewController();