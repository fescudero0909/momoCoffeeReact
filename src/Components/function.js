import data from '../data.json'

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        resolve(
            categoryId
            ? data.filter((product) => product.category === categoryId)
            : data
        );
    });
  };



export const getProductById = (productId) => {
    return new Promise((resolve) => {
        
        resolve(data.find((product) => product.id === productId));

    });
  };