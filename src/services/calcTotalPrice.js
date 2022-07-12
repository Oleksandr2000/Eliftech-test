export const calcTotalPrice = (products) => {
  return products.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};
