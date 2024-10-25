import React from 'react';
import '../Home.css';

const Home: React.FC = () => {
  return (
    

    <div className="container mt-4"> 
        <div id="container">
      <h2 className="center-text">Proposed Solution</h2>
       </div>
    <div className="row">
      
      <div className="col-md-4"> 
        
        <h3>Real-Time tariff and Energy Monitoring :</h3>
        <p className="justify-text">
        A platform that tracks real-time elec tricity prices and energy consumption patterns. providing users with insights to optimize usage during off-peak hours and maximize solar energy utilization.
        </p>
      </div>
      <div className="col-md-4"> 
        <h3>Smart Scheduling and Automation:
        </h3>
        <p className="justify-text">
        Integration with loT-enabled devices to automatically schedule high-energy appliances (like washing machines and EV chargers) during low-tariff periods or when solar energy is available.</p>
      </div>
      <div className="col-md-4"> 
        <h3>Solar Energy Management and Forecasting:
        </h3>
        <p className="justify-text">
        Track solar production, optimize battery storage, and leverage machine learning to forecast energy demand, providing recommendations for using stored solar energy or selling it back to the grid..</p>
        
    </div>
  </div>
  </div>
  
  )
};

export default Home;

