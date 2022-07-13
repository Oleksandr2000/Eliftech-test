import React from 'react';
import { useSelector } from 'react-redux';

const Shops = ({ shops, getItemsShop }) => {
  const { enabledShopsById } = useSelector((state) => state.shop);

  return (
    <div className="shops">
      <ul className="shops-content">
        {shops.map((shop) => {
          const isDisabled = enabledShopsById[shop.id];
          return (
            <li
              className={`button ${isDisabled && 'disabled'}`}
              key={shop.id}
              onClick={() => getItemsShop(shop.id)}>
              {shop.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Shops;
