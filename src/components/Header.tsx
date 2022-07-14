import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
  const { totalPrice, cartItems } = useSelector((state: any) => state.cart);
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cartItems);
      localStorage.setItem('cart', json);
    }

    isMounted.current = true;
  }, [cartItems]);

  const totalCount = cartItems.reduce((sum: number, item: any) => sum + item.count, 0);

  return (
    <>
      <div className="header">
        <div className="header__nav">
          <Link to="/">Shop</Link>
          <p>|</p>
          <Link to="/cart">Cart</Link>
        </div>
        <Link to="/cart" className="header__total button">
          {totalPrice}$ | {totalCount}
        </Link>
      </div>
      <hr />
    </>
  );
};

export default Header;
