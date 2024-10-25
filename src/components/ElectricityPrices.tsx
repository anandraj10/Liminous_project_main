import React, { useEffect, useState } from 'react';
import PriceCircles from './PriceCircles';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ElectricityPrices: React.FC = () => {
  const [currentPrice, setCurrentPrice] = useState(Math.floor(Math.random() * (10 - 4 + 1)) + 4);  
  const [upcomingPrice, setUpcomingPrice] = useState(Math.floor(Math.random() * (10 - 4 + 1)) + 4);

  const sendNotification = () => {
      if (upcomingPrice < currentPrice) {
        window.alert("Upcoming electricity price is lower!");
      }
    };

   
  
    
    useEffect(() => {
      // Only send the notification when both prices are initialized
      if (upcomingPrice < currentPrice) {
          //sendNotification();
          window.alert("Upcoming electricity price is lower! Low-Tariff period is coming");
          
      }
      else{
        window.alert("High-Tariff period is coming! Use your Stored Solar Energy.");
          

      }
      
  }, [upcomingPrice, currentPrice]);

  return (
    <div className="container mt-4">
            <h2 className="text-center" style={{ marginTop: '80px' }}>Electricity Prices</h2>
            <div className="row justify-content-center">
                <div className="col-md-4 col-sm-6 text-center">
                    {currentPrice !== null && (
                        <PriceCircles price={currentPrice} label="Current Price (₹)" color="#3b82f6" />
                    )}
                </div>
                <div className="col-md-4 col-sm-6 text-center">
                    {upcomingPrice !== null && (
                        <PriceCircles price={upcomingPrice} label="Upcoming Price (₹)" color="#f97316" />
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
  );
};

export default ElectricityPrices;
