import React from 'react';
import Shops from '../components/Shops';
import ShopItem from '../components/ShopItem';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setEnabledShop, disabledShops } from '../redux/slice/ShopSlice';

const Home = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const shopHandler = (shopsData) => {
    dispatch(setEnabledShop(shopsData));
    if (cartItems.length) {
      dispatch(disabledShops(cartItems[0].shop));
    }
    setShops(shopsData);
  };

  const [shops, setShops] = React.useState([]);
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://secret-thicket-78317.herokuapp.com/shops').then((res) => {
      shopHandler(res.data);
    });
  }, []);

  const getItemsShop = async (shopId) => {
    const storageCart = JSON.parse(localStorage.getItem('cart'));
    if (
      (Array.isArray(storageCart) && storageCart.length && storageCart[0].shop == shopId) ||
      !storageCart ||
      !storageCart.length
    ) {
      await axios
        .get(`https://secret-thicket-78317.herokuapp.com/items/${shopId}`)
        .then((res) => setItems(res.data));
    }
  };

  return (
    <div className="content">
      <div className="content__shop">
        <Shops shops={shops} getItemsShop={getItemsShop} />
        <div className="list-item">
          {items.map((item) => (
            <ShopItem {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
