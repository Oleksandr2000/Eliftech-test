import React from 'react';
import { useSelector } from 'react-redux';

type Shop = {
  id: number;
  name: string;
};

type ShopsProps = {
  shops: Shop[];
  getItemsShop: any;
};

const Shops: React.FC<ShopsProps> = ({ shops, getItemsShop }) => {
  const { enabledShopsById } = useSelector((state: any) => state.shop);

  return (
    <div className="shops">
      <ul className="shops-content">
        {shops.map((shop: Shop) => {
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
