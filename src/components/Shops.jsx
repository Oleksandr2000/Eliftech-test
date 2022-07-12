import React from 'react';

const Shops = ({ shops, getItemsShop }) => {
  return (
    <div className="shops">
      <ul className="shops-content">
        {shops.map((shop) => (
          <li key={shop.id} onClick={() => getItemsShop()}>
            {shop.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shops;
