import { tableGoods } from "./elems.js";
import { updateCategory } from "./formController.js";
import { modalController } from "./modalController.js";
import { deleteGoods, getGoods } from "./serviceAPI.js";
import { tableRender } from "./tableView.js";

export const tableController = async () => {

  modalController({
    delegation: {
      parent: tableGoods,
      target: '.btn-edit',
      targetExclude: '.btn-delete'
    }
  });

  tableGoods.addEventListener('click', async ({target}) => {
    const delBtn = target.closest('.btn-delete');

    if (delBtn){
      const row = delBtn.closest('.table-goods-item');
      const isDel = await deleteGoods(delBtn.dataset.id);

      if (isDel){
        await row.remove();
        updateCategory();
      }
    }

  });

  const goods = await getGoods();
  tableRender(goods);
};