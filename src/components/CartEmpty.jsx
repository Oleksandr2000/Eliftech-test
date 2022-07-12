import React from 'react';

const CartEmpty = () => {
  return (
    <div className="flex flex-col items-center">
      <h2>Cart is Empty</h2>
      <img
        src="https://cdni.iconscout.com/illustration/free/thumb/empty-cart-4085814-3385483.png"
        alt="cart-empty"
      />
    </div>
  );
};

export default CartEmpty;
