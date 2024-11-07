import React, { useState } from 'react';

const RedeemCoins = () => {
  const [coins, setCoins] = useState(900);
  const appliances = [
    { name: 'Smart Alexa-assisted Bulb', price: 200 },
    { name: 'Rice Cooker', price: 500 },
    { name: 'Smart TV', price: 800 },
    { name: 'Vision Pro', price: 1500 }
  ];

  const handleRedeem = (price) => {
    if (coins >= price) {
      setCoins(coins - price);
      alert('Redeemed Successfully!');
    } else {
      alert('Not enough coins to redeem this item.');
    }
  };

  return (
    <div>
      <h2>Redeem Coins</h2>
      <p>You have {coins} coins available.</p>
      <ul>
        {appliances.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} coins
            <button
              onClick={() => handleRedeem(item.price)}
              disabled={coins < item.price}
              style={{ marginLeft: '10px' }}
            >
              Redeem
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RedeemCoins;