import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, minusItem, removeItem } from '../redux/slice/CartSlice';

export type CartItemType = {
  id: number;
  name: string;
  logo: string;
  price: number;
  count: number;
  shop: number;
};

const CartItem: React.FC<CartItemType> = ({ id, name, logo, price, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addToCart({
        id,
      }),
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm('Ты дейстительно хочешь удалить товар?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="cart-item" key={id}>
      <div className="cart-item__remove" onClick={onClickRemove}>
        <img src="https://cdn-icons-png.flaticon.com/512/262/262037.png" alt="" />
      </div>
      <div className="cart-item__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="cart-item__info">
        <div className="cart-item__descr">
          <div className="cart-item__title">{name}</div>
          <div className="cart-item__price">{price} $</div>
        </div>
        <div className="cart-item__count">
          <span className="button--circle" onClick={onClickMinus}>
            -
          </span>
          <span>{count}</span>
          <span className="button--circle" onClick={onClickPlus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
