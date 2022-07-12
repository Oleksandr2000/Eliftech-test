import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice/CartSlice';

const ShopItem = ({ name, id, price, logo }) => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      logo,
      count: 0,
    };

    dispatch(addToCart(item));
  };

  return (
    <div className="shop-item" key={id}>
      <img src={logo} alt="products" />
      <h4>{name}</h4>
      <div className="shop-item--price">
        <div>{price}</div>
        <span className="button" onClick={onClickAdd}>
          Add
        </span>
      </div>
    </div>
  );
};

export default ShopItem;
