import { CartItemType } from '../components/CartItem';

export const calcTotalPrice = (products: CartItemType[]) => {
  return products.reduce((sum: number, obj: CartItemType) => {
    return obj.price * obj.count + sum;
  }, 0);
};
