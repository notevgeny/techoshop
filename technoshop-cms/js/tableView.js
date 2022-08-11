import { tableGoods } from "./elems.js";
import { currencyFormatRUB } from "./utils.js";


const createRow = (({ id, title, category, price}) => {
  const tr = document.createElement('tr');
  tr.className = 'table-row table-goods-item';
  tr.dataset.id = `${id}`;
  tr.innerHTML = `
  <td>${id}3184803604</td>
    <td>${title}</td>
    <td>${category}</td>
    <td class="text-end">${currencyFormatRUB(price)}</td>
    <td class="d-flex">
      <button class="btn-table btn-delete">
        <svg width="30" height="30">
          <use xlink:href="#delete" />
        </svg>
      </button>
  </td>
  `;
  tableGoods.append(tr);
});

export const tableRender = (goods) => {
  tableGoods.textContent = '';
  goods.map(createRow);
};