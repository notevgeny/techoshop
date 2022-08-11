import { category } from "./elems.js";
import { getCategory } from "./serviceAPI.js";


const updateCategory = async () => {
  category.textContent = '';
  const categoryList = await getCategory();
  // console.log('categoryList: ', categoryList);

  const categoryOption = categoryList.map(cat => {
    const option = document.createElement('option');
    option.value = cat;
    return option;
    
  });
  category.append(...categoryOption);
};

export const formController = () => {
  updateCategory();
};