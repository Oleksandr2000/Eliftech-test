import React from 'react';
import Shops from '../components/Shops';
import ShopItem from '../components/ShopItem';
import axios from 'axios';

const Home = () => {
  const [shops, setShops] = React.useState([]);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://6290c0cf27f4ba1c65c0f6cc.mockapi.io/shops')
      .then((res) => setShops(res.data));
  }, []);

  const getItemsShop = async () => {
    await axios
      .get(`https://6290c0cf27f4ba1c65c0f6cc.mockapi.io/items`)
      .then((res) => setItems(res.data));
  };

  return (
    <div className="content">
      <div className="content__shop">
        <Shops shops={shops} getItemsShop={getItemsShop} />
        <div className="list-item">
          {items.map((item) => (
            <ShopItem {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
