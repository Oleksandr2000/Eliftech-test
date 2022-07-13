import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slice/CartSlice';
import { disabledShops } from '../redux/slice/ShopSlice';

const ShopItem = ({ name, id, price, logo, shop }) => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      logo,
      shop,
      count: 0,
    };

    dispatch(addToCart(item));
    dispatch(disabledShops(shop));
  };

  return (
    <div className="shop-item" key={id}>
      <img src={logo} alt="products" />
      <h4>{name}</h4>
      <div className="shop-item--price">
        <div>{price} $</div>
        <span className="button" onClick={onClickAdd}>
          Add
        </span>
      </div>
    </div>
  );
};

export default ShopItem;
