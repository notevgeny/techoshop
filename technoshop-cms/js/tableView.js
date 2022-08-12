import { tableGoods } from "./elems.js";
import { currencyFormatRUB } from "./utils.js";

const fillingRow = (tr, { id, title, category, price }) => {
  tr.innerHTML = `
  <td>${id}3184803604</td>
    <td>${title}</td>
    <td>${category}</td>
    <td class="text-end">${currencyFormatRUB(price)}</td>
    <td class="d-flex">
      <button class="btn-table btn-delete" data-id=${id}>
        <svg width="30" height="30">
          <use xlink:href="#delete" />
        </svg>
      </button>
      <button class="btn-table btn-edit" data-id=${id}>
        <svg width="30" height="30">
          <use xlink:href="#edit" />
        </svg>
      </button>
  </td>
  `;
  return tr;
};


export const renderRow = (( data ) => {
  const tr = document.createElement('tr');
  tr.className = 'table-row table-goods-item';
  tr.dataset.id = data.id;
  
  tableGoods.append(fillingRow(tr, data));
});

export const editRow = (data) => {
  const tr = document.querySelector(`[data-id="${data.id}"]`);
  fillingRow(tr, data);
};

export const tableRender = (goods) => {
  tableGoods.textContent = '';
  goods.map(renderRow);
};