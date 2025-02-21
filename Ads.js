import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ads = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      const res = await axios.get('/ads');
      setAds(res.data);
    };

    fetchAds();
  }, []);

  return (
    <div>
      <h1>Ads</h1>
      <ul>
        {ads.map(ad => (
          <li key={ad._id}>
            <h2>{ad.title}</h2>
            <p>{ad.description}</p>
            <p>{ad.price}</p>
            <p>Posted by: {ad.user.displayName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ads;