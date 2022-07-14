import React from 'react';
import CartItem from '../components/CartItem';
import Form from '../components/Form';
import { useSelector } from 'react-redux';
import CartEmpty from '../components/CartEmpty';
import OrderSucces from '../components/OrderSucces';
import OrderError from '../components/OrderError';
import { CartItemType } from '../components/CartItem';

const Cart: React.FC = () => {
  const { cartItems, orderSucces, orderError } = useSelector((state: any) => state.cart);

  if (orderSucces && cartItems.length < 1) {
    return <OrderSucces />;
  }

  if (orderError && cartItems.length < 1) {
    return <OrderError />;
  }

  return (
    <div className="content">
      {cartItems.length < 1 ? (
        <CartEmpty />
      ) : (
        <div className="content__cart">
          <div className="order">
            <Form />
          </div>
          <div className="cart-list">
            {cartItems.map((item: CartItemType) => (
              <CartItem {...item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
